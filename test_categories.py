import json
import re

with open("produtos.js", "r", encoding="utf-8") as f:
    text = f.read().replace("const produtos = ", "").rstrip(";\n")
    prods = json.loads(text)

def get_category(p):
    desc = p["desc"].upper()
    ref = p["ref"].upper()
    full = f"{ref} {desc}"
    
    if any(k in full for k in ["BOMBA", "BOMBEADOR", "MOTOR", "MOTO FREIO", "MOTOBOMBA"]):
        if not any(k in full for k in ["ROTOR", "CARCAÇA", "CORPO", "ANEL", "SELO", "VENTOINHA", "TAMPA", "FLANGE"]):
            return "Bombas e Motores"
            
    if any(k in full for k in ["ROTOR", "DIFUSOR", "IMPULSOR", "CARRETEL", "CESTO", "EJETOR"]):
        return "Rotores e Peças Internas"
        
    if any(k in full for k in ["ROLAMENTO", "RETENTOR", "MANOPLA"]):
        return "Rolamentos e Retentores"
        
    if any(k in full for k in ["CORREIA", "POLIA"]):
        return "Correias e Polias"
        
    if any(k in full for k in ["CAPACITOR", "MICRO CAPACITOR"]):
        return "Capacitores"
        
    if any(k in full for k in ["CONTATOR", "RELE", "RELÉ", "DISJUNTOR", "BOTOEIRA", "MINI DISJUNTOR", "MINI CONTATOR", "SENSOR", "FUSIVEL", "TRANSFORMADOR", "BORNE", "BARRAMENTO", "CHAVE MAG", "CHAVE ROTATIVA", "CHAVE SELETORA", "CHAVE FIM DE CURSO", "CHAVE GANG", "CHAVE BOIA", "CHAVE ALAVANCA", "TOMADA", "PLUGUE", "SINALEIRO", "VOLTIMETRO", "AMPERIMETRO", "HORIMETRO"]):
        return "Elétrica e Automação"
        
    if any(k in full for k in ["SELO MECANICO", "SELO MEC", "ORING", "O-RING", "ANEL", "GAXETA", "VEDAÇÃO", "VEDACAO", "JUNTA", "VENTOSA"]):
        return "Selos e Vedações"
        
    if any(k in full for k in ["CABO", "FIO", "ESPAGUETE", "TERMOCONTRATIL", "TERMINAL"]):
        return "Cabos, Fios e Terminais"
        
    if any(k in full for k in ["VENTOINHA", "TAMPA", "CARCAÇA", "CARCAA", "DEFLETOR", "FLANGE", "BRACKET", "BUCHA", "CHAVETA"]):
        return "Carcaças, Tampas e Ventoinhas"
        
    if any(k in full for k in ["ALICATE", "CHAVE FENDA", "CHAVE PHILLIPS", "CHAVE COMBINADA", "CHAVE BIELA", "CHAVE BOCA", "CHAVE ESTRIA", "CHAVE CANHAO", "CHAVE ALLEN", "SERRA", "PARAFUSO", "SOLDA", "COLA", "SILICONE", "DESCARBONIZANTE", "DESENGRIPANTE", "LIXA", "DISCO", "TRENA"]):
        return "Ferramentas e Fixação"
        
    return "Diversos e Acessórios"

cats = {}
for p in prods:
    c = get_category(p)
    p["cat"] = c
    cats[c] = cats.get(c, 0) + 1

for c, count in sorted(cats.items(), key=lambda x: -x[1]):
    print(f"{c:30s}: {count:5d} produtos")

with open("produtos.js", "w", encoding="utf-8") as f:
    f.write("const produtos = " + json.dumps(prods, ensure_ascii=False, indent=2) + ";\n")

print("\nprodutos.js atualizado com sucesso com categorias!")
