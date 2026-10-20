import json
import re

with open("produtos.js", "r", encoding="utf-8") as f:
    text = f.read().replace("const produtos = ", "").rstrip(";\n")
    prods = json.loads(text)

def get_category(p):
    desc = p["desc"].upper()
    ref = p["ref"].upper()
    marca = p["marca"].upper()
    full = f"{ref} {desc} {marca}"
    
    # 1. Capacitores
    if "CAPACITOR" in full or "MICRO CAPACITOR" in full:
        return "Capacitores"
        
    # 2. Rolamentos e Retentores
    if any(k in full for k in ["ROLAMENTO", "RETENTOR"]):
        return "Rolamentos e Retentores"
        
    # 3. Correias, Polias e Acoplamentos
    if any(k in full for k in ["CORREIA", "POLIA", "ACOPLAMENTO"]):
        return "Correias e Polias"
        
    # 4. Selos Mecanicos e Vedações
    if any(k in full for k in ["SELO MECANICO", "SELO MEC", "ORING", "O-RING", "ANEL", "GAXETA", "VEDAÇÃO", "VEDACAO", "JUNTA", "VENTOSA"]):
        return "Selos e Vedações"
        
    # 5. Rotores, Difusores e Eixos
    if any(k in full for k in ["ROTOR", "DIFUSOR", "IMPULSOR", "CARRETEL", "CESTO", "EJETOR", "EIXO", "BUCHA", "CHAVETA"]):
        return "Rotores e Peças Internas"
        
    # 6. Ventoinhas, Tampas e Carcaças
    if any(k in full for k in ["VENTOINHA", "TAMPA", "CARCAÇA", "CARCAA", "DEFLETOR", "FLANGE", "BRACKET"]):
        return "Carcaças, Tampas e Ventoinhas"
        
    # 7. Bombas e Motores
    if any(k in full for k in ["BOMBA", "BOMBEADOR", "MOTOR", "MOTO FREIO", "MOTOBOMBA", "MB "]) or ref.startswith("MB "):
        return "Bombas e Motores"
        
    # 8. Cabos, Fios, Terminais e Espaguetes
    if any(k in full for k in ["CABO", "FIO", "ESPAGUETE", "TERMOCONTRATIL", "TERMINAL", "LUVA TUBULAR", "LUVA EMENDA"]):
        return "Cabos, Fios e Terminais"
        
    # 9. Platinados, Centrifugos e Escovas
    if any(k in full for k in ["PLATINADO", "CENTRIFUGO", "ESCOVA DE CARVAO", "ESCOVA DE CARVÃO", "CANECA", "AMORTECEDOR"]):
        return "Peças de Motores e Bombas"
        
    # 10. Elétrica, Painéis e Automação
    if any(k in full for k in ["CONTATOR", "RELE", "RELÉ", "DISJUNTOR", "BOTOEIRA", "MINI DISJUNTOR", "MINI CONTATOR", "SENSOR", "FUSIVEL", "FUSÍVEL", "TRANSFORMADOR", "BORNE", "BARRAMENTO", "CHAVE", "TOMADA", "PLUGUE", "SINALEIRO", "VOLTIMETRO", "VOLTÍMETRO", "AMPERIMETRO", "AMPERÍMETRO", "HORIMETRO", "HORÍMETRO", "BOBINA", "BLOCO", "CAIXA", "BOTAO", "BOTÃO"]):
        return "Elétrica e Automação"
        
    # 11. Ferramentas, Químicos e Fixação
    if any(k in full for k in ["ALICATE", "CHAVE FENDA", "CHAVE PHILLIPS", "CHAVE COMBINADA", "CHAVE BIELA", "CHAVE BOCA", "CHAVE ESTRIA", "CHAVE CANHAO", "CHAVE ALLEN", "SERRA", "PARAFUSO", "PORCA", "ARRUELA", "ABRAÇADEIRA", "ABRAADEIRA", "SOLDA", "COLA", "SILICONE", "DESCARBONIZANTE", "DESENGRIPANTE", "LIXA", "DISCO", "TINTA", "VERNIZ", "FITA", "PAPEL"]):
        return "Ferramentas, Químicos e Fixação"
        
    return "Diversos e Acessórios"

cats = {}
for p in prods:
    c = get_category(p)
    p["cat"] = c
    cats[c] = cats.get(c, 0) + 1

print("--- DISTRIBUIÇÃO DAS CATEGORIAS ---")
for c, count in sorted(cats.items(), key=lambda x: -x[1]):
    print(f"{c:35s}: {count:5d} produtos")

with open("produtos.js", "w", encoding="utf-8") as f:
    f.write("const produtos = " + json.dumps(prods, ensure_ascii=False, indent=2) + ";\n")

print("\nprodutos.js atualizado com sucesso!")
