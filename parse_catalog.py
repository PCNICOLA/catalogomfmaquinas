import pypdf
import re
import json

reader = pypdf.PdfReader(r"C:\Users\Nicolas\Downloads\produtos cads.pdf")
print("Total pages in PDF:", len(reader.pages))

def fix_text(s):
    if not s:
        return ""
    # Common replacements for missing accented characters in this PDF
    replacements = [
        ("\ufffd", ""),
        ("ABRAADEIRA", "ABRAÇADEIRA"),
        ("ABRA", "ABRAÇ"),
        ("OBSERVAOES", "OBSERVAÇÕES"),
        ("OBSERVAAO", "OBSERVAÇÃO"),
        ("VEDAAO", "VEDAÇÃO"),
        ("LIGAAO", "LIGAÇÃO"),
        ("LIGA", "LIGAÇ"),
        ("ELETRNICO", "ELETRÔNICO"),
        ("ELETRNIC", "ELETRÔNIC"),
        ("PROTEAO", "PROTEÇÃO"),
        ("REDUAO", "REDUÇÃO"),
        ("SUCAO", "SUCÇÃO"),
        ("SUC", "SUCÇ"),
        ("IRRIGAAO", "IRRIGAÇÃO"),
        ("FIXAAO", "FIXAÇÃO"),
        ("POSIOES", "POSIÇÕES"),
        ("POSI", "POSIÇ"),
        ("MANUTENAO", "MANUTENÇÃO"),
        ("AO", "AÇO"),
        ("ROADEI", "ROÇADEI"),
        ("LOUA", "LOUÇA"),
        ("CARCAA", "CARCAÇA"),
        ("SELEAO", "SELEÇÃO"),
        ("FREQUENCMETRO", "FREQUENCÍMETRO"),
        ("200", "200°"),
        ("180", "180°"),
        ("155", "155°"),
        ("130", "130°"),
        ("105", "105°"),
        ("70", "70°"),
        ("60", "60°"),
        ("190", "190°"),
        ("140", "140°"),
        ("160", "160°"),
        ("", " ")
    ]
    for old, new in replacements:
        s = s.replace(old, new)
    # Replace multiple spaces with a single space
    s = re.sub(r'\s+', ' ', s).strip()
    return s

products = []

known_units = ["UNI", "PC", "KG", "MT", "LTR", "L", "PCT", "RL", "PAR", "CNJ", "CX", "SCO", "BAR", "KIT", "PÇ", "CTL", "LA", "GL"]
units_set = set(known_units)

for page_idx, page in enumerate(reader.pages):
    text = page.extract_text()
    lines = text.split("\n")
    for line in lines:
        raw_line = line
        line_clean = line.strip()
        if not line_clean:
            continue
        if "TABELA DE PRE" in line_clean or "MF M" in line_clean or "Referencia DESCRICAO" in line_clean or "_____" in line_clean:
            continue
        if "Nº Produtos Relacionados" in line_clean or "N\u00ba Produtos Relacionados" in line_clean:
            continue
        
        # We look for unit column in line
        # The line structure usually is:
        # [Ref (optional)]  [Descricao]  [UNI]  [MARCA]  [ESTOQUE (optional)]
        parts = re.split(r'\s{2,}', line_clean)
        
        # Let's inspect line by finding the unit
        matched_unit = None
        matched_unit_idx = -1
        for i, p in enumerate(parts):
            if p in units_set:
                matched_unit = p
                matched_unit_idx = i
                break
        
        if matched_unit_idx != -1:
            desc_parts = parts[:matched_unit_idx]
            after_unit = parts[matched_unit_idx+1:]
            
            ref = ""
            desc = ""
            if len(desc_parts) >= 2:
                ref = desc_parts[0]
                desc = " ".join(desc_parts[1:])
            elif len(desc_parts) == 1:
                # Might have ref and desc joined or only desc
                p0 = desc_parts[0]
                # Check if first word looks like code
                p0_split = p0.split(' ', 1)
                if len(p0_split) == 2 and (re.match(r'^[A-Z0-9\-\.\,\"\/\#]{3,}', p0_split[0]) or len(p0_split[0]) <= 12):
                    ref = p0_split[0]
                    desc = p0_split[1]
                else:
                    desc = p0
            
            marca = after_unit[0] if len(after_unit) >= 1 else "GERAL"
            # Remove stock numbers if attached to marca
            marca_clean = re.sub(r'[\-0-9\.\,]+$', '', marca).strip()
            if not marca_clean:
                marca_clean = "GERAL"
            
            ref_fixed = fix_text(ref)
            desc_fixed = fix_text(desc)
            marca_fixed = fix_text(marca_clean)
            
            if desc_fixed and desc_fixed != "OBS.:":
                products.append({
                    "ref": ref_fixed if ref_fixed else "S/REF",
                    "desc": desc_fixed,
                    "marca": marca_fixed,
                    "uni": matched_unit
                })
        else:
            # Fallback if no 2+ space separator
            tokens = line_clean.split()
            unit_found = None
            u_idx = -1
            for idx, tok in enumerate(tokens):
                if tok in units_set:
                    unit_found = tok
                    u_idx = idx
                    break
            if u_idx > 0:
                desc_tokens = tokens[:u_idx]
                marca_tokens = tokens[u_idx+1:]
                marca_str = " ".join(marca_tokens[:2]) if marca_tokens else "GERAL"
                marca_str = re.sub(r'[\-0-9\.\,]+$', '', marca_str).strip()
                ref_str = desc_tokens[0] if len(desc_tokens) > 1 else "S/REF"
                desc_str = " ".join(desc_tokens[1:]) if len(desc_tokens) > 1 else desc_tokens[0]
                
                products.append({
                    "ref": fix_text(ref_str),
                    "desc": fix_text(desc_str),
                    "marca": fix_text(marca_str) or "GERAL",
                    "uni": unit_found
                })

print(f"Total produtos extraidos com sucesso: {len(products)}")
print("\nExemplo dos primeiros 10 produtos:")
for p in products[:10]:
    print(p)

print("\nExemplo dos ultimos 5 produtos:")
for p in products[-5:]:
    print(p)

# Save to json and js
with open("produtos.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

with open("produtos.js", "w", encoding="utf-8") as f:
    f.write("const produtos = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n")

print("Arquivos produtos.json e produtos.js gerados com sucesso!")
