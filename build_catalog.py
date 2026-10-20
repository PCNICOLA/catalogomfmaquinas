import pymupdf
import re
import json

doc = pymupdf.open(r"C:\Users\Nicolas\Downloads\produtos cads.pdf")
print("Total paginas no PDF:", len(doc))

def clean_str(s):
    if not s:
        return ""
    # Standard cleanup of multiple spaces
    s = re.sub(r'[ \t]+', ' ', s).strip()
    return s

units = {"UNI", "PC", "KG", "MT", "LTR", "L", "PCT", "RL", "PAR", "CNJ", "CX", "SCO", "BAR", "KIT", "PÇ", "CTL", "LA", "GL"}

products = []
ignored_descs = {"OBS.:", "A VALOR A VISTA R$", "CHEQUE S/ FUNDOS", "DEBITOS PROTESTADOS OU ATRASADOS S/ PAGA", "CREDITO COMISSAO VENDAS PRODUTOS E BOMBA", "DESCONTO REFERENTE A CREDITO"}

for page_idx in range(len(doc)):
    page = doc[page_idx]
    text = page.get_text()
    raw_lines = [clean_str(l) for l in text.split('\n') if clean_str(l)]
    
    i = 0
    while i < len(raw_lines):
        l = raw_lines[i]
        
        # Skip header/footer
        if "TABELA DE PRE" in l or "MF M" in l or "Referencia DESCRICAO" in l or "ESTOQUE" in l or "_____" in l or "Data .:" in l or "Pagina.:" in l or "Nº Produtos" in l or "N\u00ba Produtos" in l:
            i += 1
            continue
            
        if l in units:
            unit = l
            desc_raw = raw_lines[i-1] if i-1 >= 0 else ""
            ref_raw = raw_lines[i-2] if i-2 >= 0 and raw_lines[i-2] not in units and "____" not in raw_lines[i-2] and "TABELA" not in raw_lines[i-2] and "MF M" not in raw_lines[i-2] and "Referencia" not in raw_lines[i-2] else ""
            
            marca_line = raw_lines[i+1] if i+1 < len(raw_lines) else ""
            
            # Clean marca
            marca_clean = re.sub(r'[\-0-9\.\,]+$', '', marca_line).strip()
            marca_clean = re.sub(r'[\*\s]+$', '', marca_clean).strip()
            if not marca_clean or marca_clean in units or "____" in marca_clean:
                marca_clean = "GERAL"
                
            ref = clean_str(ref_raw)
            desc = clean_str(desc_raw)
            marca = clean_str(marca_clean)
            
            # Filter unwanted system notes
            if desc and desc not in ignored_descs and "OBSERVAÇÕES" not in marca and "OBSERVA" not in desc and not desc.startswith("_____"):
                if ref == desc or ref.startswith("_____") or "ESTOQUE" in ref:
                    ref = "S/REF"
                
                products.append({
                    "ref": ref if ref else "S/REF",
                    "desc": desc,
                    "marca": marca if marca else "GERAL",
                    "uni": unit
                })
            i += 2
        else:
            i += 1

print(f"Total de produtos importados com sucesso: {len(products)}")

print("\nExemplo dos primeiros 10 produtos:")
for p in products[:10]:
    print(p)

print("\nExemplo dos ultimos 5 produtos:")
for p in products[-5:]:
    print(p)

# Save to produtos.js
js_content = "const produtos = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n"
with open("produtos.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Arquivo produtos.js gerado com sucesso!")
