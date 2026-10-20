const produtos = [
  {
    "ref": "TERMSTTO 200° F",
    "desc": "TERMOSTATO 60 A 200° 30AMP S/BUCHA FOR",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "0262SVP4RS",
    "desc": "0ELO MECANICO INPACOM T-02 12MM VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BIMET CU AL 150",
    "desc": "0TERMINAL TUBULAR COMPRES BIMET. CU-AL",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7 AWG",
    "desc": "104 DE COBRE ESMALTADO 07 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ABRÇ 1 JH",
    "desc": "ABRAÇADEIRA BOMBA SUBMERSA 1\" JH",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "ABRÇ 3/4 JH",
    "desc": "ABRAÇADEIRA BOMBA SUBMERSA 3/4\"",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "2,5X160 BC JNG",
    "desc": "ABRAÇADEIRA NYLON INCOLOR JNG 2,5X160MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3,6X200 BC JNG",
    "desc": "ABRAÇADEIRA NYLON INCOLOR JNG 3,6X200MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,4X100 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 2,4X1",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,4X150 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 2,4X1",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,5X100 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 2,5X1",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3,5X200 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 3,5X2",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3,5X300 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 3,5X3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "4,6X300 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 4,6X3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "4,8X300 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 4,8X3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,0X500 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 7,0X5",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,2X500 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 7,2X5",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,2X300 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 7.2X3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,6X300 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 7.6X3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "9,0X400 BC SB",
    "desc": "ABRAÇADEIRA NYLON INCOLOR SIBRATEC 9,0X4",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,5X100 PT JNG",
    "desc": "ABRAÇADEIRA NYLON PRETA JNG 2,5X100MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,5X200 PT JNG",
    "desc": "ABRAÇADEIRA NYLON PRETA JNG 2,5X200MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,5X100 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 2,5X100",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "2,5X160 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 2,5X160",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3,5X200 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 3,5X200",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3,5X300 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 3,5X300",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "4,6X300 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 4,6X300",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "4,8X300 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 4,8X300",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "4,8X380 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 4,8X380",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,0X500 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 7,0X500",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,2X500 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 7,2X500",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7,2X300 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 7.2X300",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "9,0X400 PT SB",
    "desc": "ABRAÇADEIRA NYLON PRETA SIBRATEC 9,0X400",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ACO80",
    "desc": "ACOPLAMENTO ELASTICO ACO 80 C/ 3 CO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO100",
    "desc": "ACOPLAMENTO ELASTICO ACO 100 C/ 4 COR",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO130",
    "desc": "ACOPLAMENTO ELASTICO ACO 130 C/ 4 COR",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO150",
    "desc": "ACOPLAMENTO ELASTICO ACO 150 C/ 5 COR",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO175",
    "desc": "ACOPLAMENTO ELASTICO ACO 175 C/ 6 COR",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO200",
    "desc": "ACOPLAMENTO ELASTICO ACO 200 C/ 9 COR",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-213 JNG",
    "desc": "ACOPLAMENTO IND JNG MGI-213 2P+T 16A 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-214 JNG",
    "desc": "ACOPLAMENTO IND JNG MGI-214 3P+T 16A 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-223 JNG",
    "desc": "ACOPLAMENTO IND JNG MGI-223 2P+T 32A 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-224 JNG",
    "desc": "ACOPLAMENTO IND JNG MGI-224 3P+T 32A 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-224-9 JNG",
    "desc": "ACOPLAMENTO IND JNG MGI-224-9 3P+T 32A 9",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-234 63A 6H",
    "desc": "ACOPLAMENTO IND LKM MGI-234 3P+T 63A",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACOPSB 63A 3P+T",
    "desc": "ACOPLAMENTO IND SBTC MGI-234 3P+T 63",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-213 IP44 2P",
    "desc": "ACOPLAMENTO IND SBTC MGI-213 IP44 2P+",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI214 IP443P+T",
    "desc": "ACOPLAMENTO IND SBTC MGI-214 IP44 3P+",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI 214 3P+T 1",
    "desc": "ACOPLAMENTO IND SBTC MGI-214 3P+T 16A 6H",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-223 SBTC",
    "desc": "ACOPLAMENTO IND SBTC MGI-223 2P+T 32A -",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-224 3P+T 32",
    "desc": "ACOPLAMENTO IND SBTC MGI-224 3P+T 32A 6",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "MGI-224-9 SBTC",
    "desc": "ACOPLAMENTO IND SBTC MGI-224-9 3P+T 32A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO AJ2142 IP67",
    "desc": "ACOPLAMENTO IND SBTC TOMADA AJ-2142 IP6",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACO AJ2242 IP67",
    "desc": "ACOPLAMENTO IND SBTC TOMADA AJ-2242 IP6",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACOME13CV 87305",
    "desc": "ACOPLAMENTO SCHN. ME-1 BD 19X5/8\" 3/4",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "ACOME2 87305051",
    "desc": "ACOPLAMENTO SCHN. ME-2 BD 19X5/8\" 4 A",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2P+T",
    "desc": "ADAPATADOR UNIVERSAL DANEVA 2P+T 10A",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "40070001",
    "desc": "ADAPTADOR BOMBA NAUTILUS NBF/HM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MAKITA E-08850",
    "desc": "ADAPTADOR SOQUETE PARAFUSADEIRA P/ CACHI",
    "marca": "MAKITA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ADESIVO TM-20 0",
    "desc": "ADESIVO ORGANIZADOR P/ CABO TM-20 SBTC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM20 ADESIVO LK",
    "desc": "ADESIVO SUPORTE TM-20 FND AZUL LK",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TM-20 BC SBTC 1",
    "desc": "ADESIVO SUPORTE TM-20 BC SBTC FECHADO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "WCL-1005 SBTC 1",
    "desc": "ADESIVO SUPORTE WCL-1005 SBTC ABERTO ADE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ALGICIDA 1LT 10",
    "desc": "ALGICIDA MANUTENÇAO 1LT ATCLLOR ULTRACLO",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "B118946 T08520",
    "desc": "ALICATE AMPERIMETRO DIGITAL THOMPSON",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BARTOFIL",
    "desc": "ALICATE BICO 1/2\" CANA 6\" FOXLUX",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "TAMBASA",
    "desc": "ALICATE BICO MEIA CANA RETO 6\" 1000V",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "055002",
    "desc": "ALICATE CORTE DIAGONAL 6\" MAYLE",
    "marca": "MAYLE",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "005310",
    "desc": "ALICATE CORTE DIAGONAL BIJOUTE FOXLUX",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "HS-30J",
    "desc": "ALICATE CRIMPAGEM HS-30J JNG",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "HS-04WF",
    "desc": "ALICATE CRIMPAR HS-04WF 0,5-10MM2 JNG",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7898640444000",
    "desc": "ALICATE CRIMPAR 0,5-6MM2 HS-05WF SIBRATE",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ALICPRNSTERM IN",
    "desc": "ALICATE CRIMPAR CONECTOR TERMINAIS 8X1",
    "marca": "INLUSS",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ALCT0007 TMTUB",
    "desc": "ALICATE CRIMPAR CONECTOR TERMINAIS TUBUL",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7898105779050",
    "desc": "ALICATE DECAPADOR C/ REGULAGEM FOXLUX",
    "marca": "FOXLUX",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "HS-D2 10907",
    "desc": "ALICATE DESENCAPADOR HS-D2 0,2-6MM2",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7893946160173",
    "desc": "ALICATE DESENCAPADOR DE FIOS 6\" 152MM -",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "110517",
    "desc": "ALICATE DESENCAPADOR FIOS BESTFER",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "3662061500 6\"",
    "desc": "ALICATE ELETRICISTA 6\" 1000V VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VONDER / OSTEN 2,000",
    "desc": "ALICATE ELETRICISTA 6\" AC NIQUELADO 9",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7891504294506",
    "desc": "ALICATE ELETRICISTA 8\" GEDORE (PRENSA TE",
    "marca": "GEDORE",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ALEL8SATA 12238",
    "desc": "ALICATE ELETRICISTA 8\" SATA (PRENSA TER",
    "marca": "SATA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3662100008",
    "desc": "ALICATE ELETRICISTA 8\" VONDER CRV (PRENS",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VONDER / OSTEN 3,000",
    "desc": "ALICATE MULTI USO P/ ELETRICISTA 9\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3032137100 ALCP",
    "desc": "ALICATE PRESSAO 10\" 137/10 GEDORE",
    "marca": "GEDORE",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "REBITADOR",
    "desc": "ALICATE REBITADOR 4 BICOS FOXLUX FX-AR1",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "75760",
    "desc": "ALICATE TRAVA ANEL EXTERNO CURVO THOMPSO",
    "marca": "THOMPSON",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ALICATE ANEL 7",
    "desc": "ALICATE TRAVA ANEL EXTERNO RETO 7\" BEST",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "075763",
    "desc": "ALICATE TRAVA ANEL EXTERNO RETO THOMPSON",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "3662000604",
    "desc": "ALICATE TRAVA ANEL INTERCAMBIAVEL 6\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ALICTVANINTBEST",
    "desc": "ALICATE TRAVA ANEL INTERNO CURVO 7\" BEST",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "072562",
    "desc": "ALICATE TRAVA ANEL INTERNO CURVO THOMPSO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ALICATE ANEL RT",
    "desc": "ALICATE TRAVA ANEL INTERNO RETO 7\" BEST",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "075761",
    "desc": "ALICATE TRAVA ANEL INTERNO RETO THOMPSON",
    "marca": "THOMPSON",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "055281",
    "desc": "ALICATE UNIVERSAL PROF. ISOLADO 8\" GEDOR",
    "marca": "GEDORE",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ALIC UNIV SATA",
    "desc": "ALICATE UNIVERSAL PROF. ISOLADO 8\" SATA",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "11270400733",
    "desc": "ALONGAMENTO THEBE P-11/4 INOX 420 EIXO",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401030",
    "desc": "ALONGAMENTO THEBE P-11/6 INOX 420 EIXO",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270400705",
    "desc": "ALONGAMENTO THEBE RC-10 TH-11",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60721",
    "desc": "AMORTECEDOR ANAUGER 6\" ORIG 60721",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "60646",
    "desc": "AMORTECEDOR ANAUGER 650 5G 60646",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "60645",
    "desc": "AMORTECEDOR ANAUGER 700 / 800 / 900 5G",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6699004514",
    "desc": "AMORTECEDOR ANTI VIBRATORIO MICRO 1 R.",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6699045516",
    "desc": "AMORTECEDOR ANTI VIBRATORIO MICRO 1 R.",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "VONDER / OSTEN 12,000",
    "desc": "AMORTECEDOR ANTI VIBRATORIO MICRO 2 R.",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6699007038",
    "desc": "AMORTECEDOR ANTI VIBRATORIO MICRO 3 R.",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "AMORT JH 5G 5F",
    "desc": "AMORTECEDOR JOIHA 5G 5F ( 650 / 800",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "650/850/950",
    "desc": "AMORTECEDOR JOIHA 650/850/950",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "800/900",
    "desc": "AMORTECEDOR JOIHA 800/900 6F",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "AMORTECEDOR ECC",
    "desc": "AMORTECEDOR JOIHA ECCO / 600",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "AMP20A JPT-52 J",
    "desc": "AMPERIMETRO ANALÓGICO REDONDO JNG JPT-52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP30A JPT-52 J",
    "desc": "AMPERIMETRO ANALÓGICO REDONDO JNG JPT-52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP50A JPT-52 J",
    "desc": "AMPERIMETRO ANALÓGICO REDONDO JNG JPT-52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP60A DIRETO 4",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T48 48X48 DIRET",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP50/5 72X JNG",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 50/5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP100/5 72X JN",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 100/5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP150/5 72X72",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 150/5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP200/5 72X JN",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 200/5",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP250/5 72X JN",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 250/5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP100A DIRETO",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 DIRET",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP60A DIRETO J",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T72 72X72 DIRET",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP100/5 96X JN",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T96 96X96 100/5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP50/5 96X JNG",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T96 96X96 50/5A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP100A DIRETO",
    "desc": "AMPERÍMETRO ANALÓGICO CP-T96 96X96 DIRET",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP100A DIRETO",
    "desc": "AMPERÍMETRO ANALÓGICO DIRETO CP-T72 72X7",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP30A SF-52 SB",
    "desc": "AMPERÍMETRO ANALÓGICO REDONDO SIBRATEC S",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMP50A SF-52 SB",
    "desc": "AMPERÍMETRO ANALÓGICO REDONDO SIBRATEC S",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SF96-0/5A",
    "desc": "AMPERÍMETRO ANALÓGICO SF96-0/5A S/ ESCAL",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG194I-AX1",
    "desc": "AMPERÍMETRO DIGITAL JNG 72X72 1000V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "60718",
    "desc": "ANEL DE VEDAÇÃO CANECA 6'' 4G / SOLAR",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "63647551Z",
    "desc": "ANEL FIXAÇÃO ROL. 6316 - 10017053",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "63846716Z",
    "desc": "ANEL FIXAÇÃO ROL. 6319 - 10017054",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "13272307",
    "desc": "ANEL JACUZZI SECÇAO QUADRADA BUNA BOMBA",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "98796827",
    "desc": "ANEL MARK DESGASTE DVR 95X90X14 ( TOD",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "MARK GRUDFOS 1,000",
    "desc": "ANEL ORING DIVERSOS DO KIT ( UNIDADE )",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "98919001",
    "desc": "ANEL ORING MARK 1021 23,5X1,8MM AZUL B",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8076 0333",
    "desc": "ANEL ORING DANCOR 28,24 MM X 2,62 MM D",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "9079 0050",
    "desc": "ANEL ORING DANCOR 15,54 X 2,62 MM DUR S",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "70780165P",
    "desc": "ANEL ORING DANCOR 18,54 X 3,53MM 2-210",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60700673",
    "desc": "ANEL ORING DANCOR 113,89 X 4 ( VISOR /",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60700547",
    "desc": "ANEL ORING DANCOR 120,32 MM X 2,62 MM DU",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DANCOR",
    "desc": "ANEL ORING DANCOR 139.37MM X 2.62MM A70",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DANCOR 5,000",
    "desc": "ANEL ORING DANCOR 151,99 X 3,53 MM A70 2",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DANCOR",
    "desc": "ANEL ORING DANCOR 151.77MM X 5.33MM A70",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DANCOR 4,000",
    "desc": "ANEL ORING DANCOR 152.07MM X 2,62MM A70",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60701386P",
    "desc": "ANEL ORING DANCOR 156,70X163,76X3,53MM A",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "80760334",
    "desc": "ANEL ORING DANCOR 164,69 MM X 3,53 MM DU",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DANCOR 8,000",
    "desc": "ANEL ORING DANCOR 18.77MM X 1,78MM A70 2",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60700905P",
    "desc": "ANEL ORING DANCOR 190,09X3,35MM A70 2-26",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "100243",
    "desc": "ANEL ORING DARKA ADO - CARCAÇA SUCÇÃO",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10725",
    "desc": "ANEL ORING FAMAC SIM. FES 2MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORING IGUI PR 1",
    "desc": "ANEL ORING IGUI BOMBA PR ( N.7 )",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "47035902",
    "desc": "ANEL ORING JACUZZI 5,33X142,24 TP PLAST",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "047016308",
    "desc": "ANEL ORING JACUZZI MA MB MC 3/32X6\" ES",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "047002209",
    "desc": "ANEL ORING JACUZZI N 1/16X1\" (DL 1.1/4,",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "047001805",
    "desc": "ANEL ORING JACUZZI N 1/16X3/4 (EIXO MA M",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "39302310",
    "desc": "ANEL ORING JACUZZI ROSCA TRAVA B ( 3930",
    "marca": "JACUZZI",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL ORING 5F",
    "desc": "ANEL ORING JOIHA 5F",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL ORING 650",
    "desc": "ANEL ORING JOIHA 650",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL ORING 900",
    "desc": "ANEL ORING JOIHA 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL ORING ECCO",
    "desc": "ANEL ORING JOIHA ECCO/600",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "13040026",
    "desc": "ANEL ORING NAUTILUS CORPO BOMBA NBF/HM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "13040036",
    "desc": "ANEL ORING NAUTILUS TAMPA PRE-FILTRO BOM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORNG2177 240,97",
    "desc": "ANEL ORING O-2177 240,97X2,62MM",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "O-2246 113,89C",
    "desc": "ANEL ORING O-2246 113,89 X 3,53MM",
    "marca": "ALAMAR",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORNG 2277 291,6",
    "desc": "ANEL ORING O-2277 291,69X3,53MM",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORINGAQUEX 2-25",
    "desc": "ANEL ORING ROTOR PRE FILTRO AQUEX 2-258",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10760",
    "desc": "ANEL ORING SCHN SIM. BC-21R 879-5",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10765",
    "desc": "ANEL ORING SCHN SIM. BC-23 1484-9",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10690",
    "desc": "ANEL ORING SCHN SIM. BC-91",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10695",
    "desc": "ANEL ORING SCHN SIM. BC-92 BC-50 425",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10755",
    "desc": "ANEL ORING SCHN SIM. BCS-220 2882-4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10680",
    "desc": "ANEL ORING SCHN SIM. ME-1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10685",
    "desc": "ANEL ORING SCHN SIM. ME-2",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORING2-435PF280",
    "desc": "ANEL ORING SIBRAPE 2-435 PF BAP VALV SBP",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "28040024",
    "desc": "ANEL ORING SIBRAPE CORPO 2-361 EAGLE",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "28040110",
    "desc": "ANEL ORING SIBRAPE PERFIL QUADRADO CORPO",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORINGFITBAP 001",
    "desc": "ANEL ORING TAMPA PRE FILTRO FIT BAP 235",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "11270401390",
    "desc": "ANEL ORING THEBE 165,77 X 2,62 - 0115",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "112704011199",
    "desc": "ANEL ORING THEBE 195 X 2,2 P-15 PX-15",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "11270401223",
    "desc": "ANEL ORING THEBE AEX-1 120,32 X 2,62 =",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "11270401198",
    "desc": "ANEL ORING THEBE P-11 142 X 1,7MM",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "11270404795",
    "desc": "ANEL ORING THEBE R-20 RL-20 202,87 X 2,",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "AN10770",
    "desc": "ANEL ORING THEBE SIM. TH-16 TJA-16 TJ-1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ORING DIVERSOS",
    "desc": "ANEL ORING UNIDADE - KIT DIVERSAS MEDI",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "OUTROS 222,000",
    "desc": "ANEL SAIDA JOIHA 600 ECCO",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL SAÍDA JH 6",
    "desc": "ANEL SAIDA JOIHA 650",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL SAÍDA JH 9",
    "desc": "ANEL SAIDA JOIHA 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "28040026",
    "desc": "ANEL SIBRAPE DIFUSOR REF392048",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "S-7908",
    "desc": "ANEL SODRAMAR PARA VEDAÇÃO DO BRACKET M",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL VALVULA JH",
    "desc": "ANEL VALVULA JOIHA 650",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANEL VALVULA JH",
    "desc": "ANEL VALVULA JOIHA 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ANELRETNGVED BP",
    "desc": "ANEL VEDAÇAO BP DE=154 L=4,2 A=3,8MM RET",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60643",
    "desc": "ANEL VEDAÇAO CANECA 5G ANAUGER ORIG 606",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6201",
    "desc": "ANEL VRING WEG 6201 (10,5X16,5X5,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6202",
    "desc": "ANEL VRING WEG 6202 (12,5X18,5X5,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6203",
    "desc": "ANEL VRING WEG 6203 (14X20X5,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6204",
    "desc": "ANEL VRING WEG 6204 (18X26X7,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6205",
    "desc": "ANEL VRING WEG 6205 (22X30X7,5)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6206",
    "desc": "ANEL VRING WEG 6206/6306 (27X35X7,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6207",
    "desc": "ANEL VRING WEG 6207/6307 (31X39X7,5)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "13960080",
    "desc": "ANEL VRING WEG 6208/6308 (36X46X09)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6209",
    "desc": "ANEL VRING WEG 6209/6309 (40X50X09)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "10018985",
    "desc": "ANEL VRING WEG 6212/6312 (54X64X09)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6314",
    "desc": "ANEL VRING WEG 6314 (63X75X11)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6316",
    "desc": "ANEL VRING WEG 6316 (72X84X11)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VRING 6319",
    "desc": "ANEL VRING WEG 6319 (85X97X11)",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60002851Z",
    "desc": "ANEL WEG DE FIXACAO DO ROLAMENTO 160",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "ENSELLI",
    "desc": "ANILHA JNG EC-0 C/100 ( CADA NUMERO O",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "EC-0",
    "desc": "ANILHA JNG EC-0 N° 0 1 2 3 4 5 6 7 8 9",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG 8,000",
    "desc": "ANILHA JNG EC-1 N° 0 1 2 3 4 5 6 7 8 9",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG 5,000",
    "desc": "ANILHA JNG EC-1 C/ 10 LETRAS CADA ( A",
    "marca": "JNG",
    "uni": "KIT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG -3,000",
    "desc": "ANILHA JNG EC-1 C/100 ( CADA NUMERO OU",
    "marca": "JNG",
    "uni": "KIT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG -20,000",
    "desc": "ANILHA JNG EC-2 N° 0 1 2 3 4 5 6 7 8 9",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG",
    "desc": "ANILHA JNG EC-2 C/100 ( CADA NUMERO",
    "marca": "JNG",
    "uni": "KIT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG 9,000",
    "desc": "ANILHA JNG EC-3 C/100 ( CADA NUMERO",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG -17,000",
    "desc": "ANILHA JNG EC-3 N° 0 1 2 3 4 5 6 7 8 9",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ARALDITE PROF 2",
    "desc": "ARALDITE PROFISSIONAL 23GR 90MIN ADESIVO",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "075238 ARCO S",
    "desc": "ARCO SERRA FIXO 12\" THOMPSON",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "1239XXXX ARO MT",
    "desc": "ARGOLA DEFLETOR METAL WEG VENT. COPO 48",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "12393733 ARO MT",
    "desc": "ARGOLA DEFLETOR METAL WEG VENT. COPO 56",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ARGLA PLAST V C",
    "desc": "ARGOLA PLAST VENTOINHA COPO 42 ARO 13",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ARGLA PLAST V C",
    "desc": "ARGOLA PLAST VENTOINHA COPO 48 ARO 13",
    "marca": "20",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ARGLA PLAST V C",
    "desc": "ARGOLA PLAST VENTOINHA COPO 56 ARO 1",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA 67,000",
    "desc": "ARRUELA AMORTECEDOR MD 5/8",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "7134",
    "desc": "ARRUELA EIXO MOTOR/ROTOR",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "ARRLISA3/16",
    "desc": "ARRUELA LISA GALV 3/16 LARG",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6201",
    "desc": "ARRUELA ONDULADA 6201 (27X31)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "69074003",
    "desc": "ARRUELA ONDULADA 6202/6300 (27X33)",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "69074004",
    "desc": "ARRUELA ONDULADA 6203 (32X39)",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6204",
    "desc": "ARRUELA ONDULADA 6204/6303 (38X45)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6205",
    "desc": "ARRUELA ONDULADA 6205/6304 (41X50)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6206",
    "desc": "ARRUELA ONDULADA 6206/6305 (50X70)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "69074001",
    "desc": "ARRUELA ONDULADA 6207/6306 (57X70)",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "ARRUELA 6208",
    "desc": "ARRUELA ONDULADA 6208/6307 (72X79)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6209",
    "desc": "ARRUELA ONDULADA 6209 (74X84) WEG ORI",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6210",
    "desc": "ARRUELA ONDULADA 6210/6308 (78X88)",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 6211",
    "desc": "ARRUELA ONDULADA 6211/6309 (89X99) WE",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "ARRUELA 6212",
    "desc": "ARRUELA ONDULADA 6212/6310 (99X109) WE",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "WEG MOTORES 9,000",
    "desc": "ARRUELA PRESSAO MD 5/8 EIXO AMORT JOIHA",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "ARRUELA JH 0,4",
    "desc": "ARRUELA REGULAGEM 0,4MM JH ( MARTELO -",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ARRUELA 0,6",
    "desc": "ARRUELA REGULAGEM 0,6MM JH ( MARTELO -",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60504",
    "desc": "ARRUELA VENTOSA INF. TODAS ANAUGER ( - E",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ARRU VENTOSA JH",
    "desc": "ARRUELA VENTOSA JOIHA 650 3/8",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "ARR VENTOSA JH",
    "desc": "ARRUELA VENTOSA JOIHA 900",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "JOIHA E ANAU 245,000",
    "desc": "ASPERSOR ANTURIO C/BASE CURTA",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "120019",
    "desc": "ASPIRADOR PISCINA 8 ESFERAS BRUSTEC",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "AVR 2500A3500 B",
    "desc": "AVR BRANCO TOYAMA NAGANO 2500 A 3500W",
    "marca": "BRANCO MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BRANCO MOTORES 1,000",
    "desc": "BARBANTE CORDAO ENCER 250GR FITA N°5 PSQ",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BARBANTE FITA N",
    "desc": "BARBANTE CORDAO ENCER FITA N°5 NAT PES",
    "marca": "LINHA SITA",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "BARBANTE FITA N",
    "desc": "BARBANTE CORDAO ENCER FITA N°6 NAT PES",
    "marca": "LINHA SITA",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "BARBANTE REDOND",
    "desc": "BARBANTE CORDAO ENCER PE 6 POLIESTER RED",
    "marca": "LINHA SITA",
    "uni": "KG",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BARRA ROSQ 1/4\"",
    "desc": "BARRA ROSQUEADA 1/4\" NC ZB C/ 1MT",
    "marca": "BARRA ROSQUEADA 3/16\" NC ZB C/ 1MT",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BASBCP12AZ 1090",
    "desc": "BARRAMENTO AZ C/ PROT SBTC 12 FUROS AZ",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BARRAMENTO 1190",
    "desc": "BARRAMENTO AZ C/ PROT SBTC 6 FUROS AZU",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 14,000",
    "desc": "BARRAMENTO AZ S/ PROT SBTC 12 FUROS AZ",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 100,000",
    "desc": "BARRAMENTO AZ S/ PROT SBTC 16 FUROS AZ",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASBCP12VD 1190",
    "desc": "BARRAMENTO VD C/ PROT SBTC 12 FUROS VE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 4,000",
    "desc": "BARRAMENTO VD S/ PROT SBTC 12 FUROS VE",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "-1,000",
    "desc": "BARRAMENTO S/ PROT SBTC 16 FUROS AZUL",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BARRAMENTO 0119",
    "desc": "BARRAMENTO VD C/ PROT SBTC 6 FUROS VERD",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COBRE",
    "desc": "BARRAMENTO DE COBRE ( CHAPA RETANGULAR",
    "marca": "OUTROS",
    "uni": "KG",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PENTE 63A 3P 1M",
    "desc": "BARRAMENTO PENTE LKM 63A 3P 54 POLOS",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PENTE 80A 3P SB",
    "desc": "BARRAMENTO PENTE SBTC 80A 3P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "63A 2P",
    "desc": "BARRAMENTO PENTE SBTC 63A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "63A 3P",
    "desc": "BARRAMENTO PENTE SBTC 63A 3P",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80A 2P",
    "desc": "BARRAMENTO PENTE SBTC80A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASBDIN2P63 526",
    "desc": "BARRAMENTO PENTE 2 POLOS 63A. 1MT OU 27",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BADINSB2P80 104",
    "desc": "BARRAMENTO PENTE 2 POLOS 80A. 1MT OU 27",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "5262",
    "desc": "BARRAMENTO PENTE 3 POLOS 63A. 1MT OU DIS",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10484",
    "desc": "BARRAMENTO PENTE 3 POLOS 80A. 1MT OU DIS",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE 10X38 RT14",
    "desc": "BASE FUSIVEL CARTUCHO 10X38 - RT14-20",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE 22X58 RT14",
    "desc": "BASE FUSIVEL CARTUCHO 22X58 - RT14-63 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE DII DZ 2~2",
    "desc": "BASE FUSIVEL DZ DII 2~25A RO21",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE DIII DZ 3",
    "desc": "BASE FUSIVEL DZ DIII 32~63A RO22",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00 12448",
    "desc": "BASE FUSIVEL NH00 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE FUSVEL NH0",
    "desc": "BASE FUSIVEL NH01 JNG",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE MOTOR EBER",
    "desc": "BASE MOTOR EBERLE - CHAPA - PÉ",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BASE WEG 42 PE",
    "desc": "BASE MOTOR WEG NEMA 42 - CHAPA - PÉ",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BASEPARAMOTORWE",
    "desc": "BASE MOTOR WEG NEMA 48 - CHAPA - PÉ",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "NEMA 56",
    "desc": "BASE MOTOR WEG NEMA 56 - CHAPA - PÉ",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BASEMTWEG 3CV 3",
    "desc": "BASE MOTOR WEG NEMA 56 3CV - CHAPA C/ 3",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BASE RELE JC-RE",
    "desc": "BASE RELE MODULAR INTERFACE JNG JC-REMB",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BASEHF 12/24V 0",
    "desc": "BASE RELE ACOPLADOR FINO 3051 12/24V (84",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASEHF41220V 11",
    "desc": "BASE RELE ACOPLADOR FINO 3851 220V (1183",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BASE LC10",
    "desc": "BASE RELE FOTO ELETRICO LC10",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PF083A-E",
    "desc": "BASE RELE MULTI USO MK2PS-1 PF083A-E",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BICO INJETOR DN",
    "desc": "BICO DO EJETOR SIM DANCOR (INJETOR FND C",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "35474",
    "desc": "BICO PULVERIZADOR CURTO PL02 SCHWEERS J",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RCC0-3 D55",
    "desc": "BLOCO ANTI PARASITA ( SUPRESOR SURTO )",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-11 JNG",
    "desc": "BLOCO AUXILIAR JNG F4-11 (FRONTAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-13 JNG",
    "desc": "BLOCO AUXILIAR JNG F4-13 (FRONTAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-22 JNG",
    "desc": "BLOCO AUXILIAR JNG F4-22 (FRONTAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-40 JNG",
    "desc": "BLOCO AUXILIAR JNG F4-40 (FRONTAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F8-11 JNG",
    "desc": "BLOCO AUXILIAR JNG F8-11 (LATERAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F8-20 JNG",
    "desc": "BLOCO AUXILIAR JNG F8-20 (LATERAL)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F8-11 8549",
    "desc": "BLOCO AUXILIAR SBTC F8-11 (LATERAL)",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-02 SBTC",
    "desc": "BLOCO AUXILIAR SBTC IBC02 (FRONTAL) F4-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IBC11 SBTC F4-1",
    "desc": "BLOCO AUXILIAR SBTC IBC11 (FRONTAL) F4-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "F4-20 SBTC",
    "desc": "BLOCO AUXILIAR SBTC IBC20 (FRONTAL) F4-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IBC22 F4-22 SBT",
    "desc": "BLOCO AUXILIAR SBTC IBC22 (FRONTAL) F4-",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCXMF01",
    "desc": "BLOCO AUXILIAR WEG BCXMF01 NC CONTATO",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCXMF10",
    "desc": "BLOCO AUXILIAR WEG BCXMF10 NO CONTATO",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BE101 VD 4340 S",
    "desc": "BLOCO CONTATO SBTC ZB2- BE101 1 NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BE 102 VM 04341",
    "desc": "BLOCO CONTATO SBTC ZB2- BE102 1NF",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BC01F CSW",
    "desc": "BLOCO CONTATO WEG BC01F (CSW) 1NF",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BC10F",
    "desc": "BLOCO CONTATO WEG BC10F (CSW) 1NA",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCM01F-CSW 1NF",
    "desc": "BLOCO CONTATO WEG BCM01-F CSW 1NF ( MONI",
    "marca": "WEG ACIONAMENT",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT",
    "desc": "BLOCO CONTATO WEG CWB 1NA+1NF 9-80A",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ENSELLI -4,000",
    "desc": "BLOCO CONTATO WEG CWB 2NA+2NF BFB-22 9",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BLTEMPIBP30SEG",
    "desc": "BLOCO TEMPORIZADO AUX SBTC IBP 30SEG ON",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LA2-D22",
    "desc": "BLOCO TEMPORIZADO JNG LA2-D22 30 SEG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "EBI-8002B",
    "desc": "BOBINA IGNIÇÃO EBI - 8002B",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOB CJX1 9-22 1",
    "desc": "BOBINA JNG CJX1 3TF40-3TF43 (9-22A) - 11",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "9-22A",
    "desc": "BOBINA JNG CJX1 3TF40-3TF43 (9-22A) - 22",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 32-38 11",
    "desc": "BOBINA JNG CJX1 3TF44 (32-38A) - 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 32-38 22",
    "desc": "BOBINA JNG CJX1 3TF44 (32-38A) - 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 45-63 11",
    "desc": "BOBINA JNG CJX1 3TF45-3TF63 (45-63A) - 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 45-63 22",
    "desc": "BOBINA JNG CJX1 3TF45-3TF63 (45-63A) - 2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 75-85 22",
    "desc": "BOBINA JNG CJX1 3TF48-3TF49 (75-85A) - 2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B CJX1 110-140",
    "desc": "BOBINA JNG CJX1 3TF50-3TF51 (100-140A) -",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-FG 185/225",
    "desc": "BOBINA JNG CJX2 (185/225) LX1-FG 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOB CJX2400 LX1",
    "desc": "BOBINA JNG CJX2 (400) LX1 FJ 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 110V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 110V 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 220V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 24V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 254V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 254V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 380V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 380V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 440V",
    "desc": "BOBINA JNG CJX2 (25-32A) LX1-D4 440V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOBD6 127V JNG",
    "desc": "BOBINA JNG CJX2 (40-95) LX1-D6 127V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D6 220V",
    "desc": "BOBINA JNG CJX2 (40-95) LX1-D6 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D6 380V",
    "desc": "BOBINA JNG CJX2 (40-95) LX1-D6 380V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 110V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 110V 15",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 220V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 24V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 254V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 254V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 380V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 380V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 440V",
    "desc": "BOBINA JNG CJX2 (9-18A) LX1-D2 440V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-K06 110V",
    "desc": "BOBINA JNG K09 LX1-K06 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-K06 220V",
    "desc": "BOBINA JNG K09 LX1-K06 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-K06 24V",
    "desc": "BOBINA JNG K09 LX1-K06 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "128252",
    "desc": "BOBINA SACO PICOT PLASTICO 20X30 1KG",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BARTOFIL 6,000",
    "desc": "BOBINA SACO PICOT PLASTICO 25X35 2KG",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "128250",
    "desc": "BOBINA SACO PICOT PLASTICO 30X40 3KG C",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "128251",
    "desc": "BOBINA SACO PICOT PLASTICO 35X50 5KG C",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SACO PICOTADO 1",
    "desc": "BOBINA SACO PICOTADO PLAST 19X30 1KG C/",
    "marca": "VERTEX",
    "uni": "PCT",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SACO PICOTADO 2",
    "desc": "BOBINA SACO PICOTADO PLAST 24X35 2KG C/",
    "marca": "VERTEX",
    "uni": "PCT",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SACO PICOTADO 3",
    "desc": "BOBINA SACO PICOTADO PLAST 29X40 3KG C/",
    "marca": "VERTEX",
    "uni": "PCT",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOBSBK09127V 7",
    "desc": "BOBINA SBTC MINI K12 127V (K09)",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOBSBK12 220V D",
    "desc": "BOBINA SBTC MINI K12 220V (K09)",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOB K9 24V SBTC",
    "desc": "BOBINA SBTC MINI K12 24V (K09)",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 220V",
    "desc": "BOBINA SBTC P/CJX2 (09-18A) LX1-D2 220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "D2 380V SBTC",
    "desc": "BOBINA SBTC P/CJX2 (09-18A) LX1-D2 380V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D2 110V",
    "desc": "BOBINA SBTC P/CJX2 (09-18A) LX1-D2 110V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "07883",
    "desc": "BOBINA SBTC P/CJX2 (09-18A) LX1-D2 24V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 24V SBTC",
    "desc": "BOBINA SBTC P/CJX2 (25-32A) LX1-D4 24V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 220V",
    "desc": "BOBINA SBTC P/CJX2 (25-32A) LX1-D4 220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4-254V",
    "desc": "BOBINA SBTC P/CJX2 (25-32A) LX1-D4 254V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D4 380V IC",
    "desc": "BOBINA SBTC P/CJX2 (25-32A) LX1-D4 380V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "D6 24V SBTC",
    "desc": "BOBINA SBTC P/CJX2 (40-95) LX1-D6 24V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D6 110V",
    "desc": "BOBINA SBTC P/CJX2 (40-95) LX1-D6 110V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D6 220V",
    "desc": "BOBINA SBTC P/CJX2 (40-95) LX1-D6 220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LX1-D6 380V",
    "desc": "BOBINA SBTC P/CJX2 (40-95) LX1-D6 380V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "D6 440V SBTC 8",
    "desc": "BOBINA SBTC P/CJX2 (40-95) LX1-D6 440V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOBCWB40A80110",
    "desc": "BOBINA WEG CWB 40~80A 110V BRB-80D13",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOBWEGCWB9-32 1",
    "desc": "BOBINA WEG CWB 9~32A 110V BRB-38D13",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "9-38 220V",
    "desc": "BOBINA WEG CWB 9~32A 220V BRB-38D",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCA4-25V26 220V",
    "desc": "BOBINA WEG CWM 9-25A 220V BCA4-25V2",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCA4-25V19 110V",
    "desc": "BOBINA WEG CWM 9~25 110V BCA4-25V19",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "B. WEG 32-40 22",
    "desc": "BOBINA WEG CWM 32-40 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32-40 110V",
    "desc": "BOBINA WEG CWM 32~40 110V",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BCA-105V26 220V",
    "desc": "BOBINA WEG CWM 50~105A 220V BCA-105V26",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ABB",
    "desc": "BOLETO BB COBRADO POR PARCELA ABAIXO",
    "marca": "BOLETO SICOOB",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "S/REF",
    "desc": "BOLETO SICOOB",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BMB AN 6\" 127V",
    "desc": "BOMBA ANAUGER 6\" 4G 127V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AN 6\" 220V",
    "desc": "BOMBA ANAUGER 6\" 4G 220V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AN 800 5G 1",
    "desc": "BOMBA ANAUGER 800 5G 127V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AN 900 5G 1",
    "desc": "BOMBA ANAUGER 900 5G 127V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AN 900 5G 2",
    "desc": "BOMBA ANAUGER 900 5G 220V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AQUARIO 10W",
    "desc": "BOMBA AQUARIUM 10W 110V EB303 H=1,2M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB AQUARIO 25W",
    "desc": "BOMBA AQUARIUM 25W 110V EB305 H=2MTS",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1300 127V",
    "desc": "BOMBA JOIHA 1300 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1300 220V",
    "desc": "BOMBA JOIHA 1300 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1300 254V",
    "desc": "BOMBA JOIHA 1300 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1800 127V",
    "desc": "BOMBA JOIHA 1800 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1800 220B",
    "desc": "BOMBA JOIHA 1800 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1800 254V",
    "desc": "BOMBA JOIHA 1800 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "2000 127V",
    "desc": "BOMBA JOIHA 2000 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "2000 220V",
    "desc": "BOMBA JOIHA 2000 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "2000 254V",
    "desc": "BOMBA JOIHA 2000 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "600 127V",
    "desc": "BOMBA JOIHA 600 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "600 220V",
    "desc": "BOMBA JOIHA 600 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BMB MAN GRAXA",
    "desc": "BOMBA MANUAL GRAXA",
    "marca": "B4BPL",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL1-21",
    "desc": "BOMBEADOR EBARA 4BPL1-21 (1 PROT) 1,5 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL1-28",
    "desc": "BOMBEADOR EBARA 4BPL1-28 (1 PROT) 2,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL3-08",
    "desc": "BOMBEADOR EBARA 4BPL3-08 (1 PROT) 1,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPL3-10",
    "desc": "BOMBEADOR EBARA 4BPL3-10 (1 PROT) 1,5 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL3-13",
    "desc": "BOMBEADOR EBARA 4BPL3-13 (1 PROT) 2,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL3-16",
    "desc": "BOMBEADOR EBARA 4BPL3-16 (1 PROT) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "12-001-1409",
    "desc": "BOMBEADOR EBARA 4BPL3-18 (1 PROT) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL6-15",
    "desc": "BOMBEADOR EBARA 4BPL6-15 (1 PROT) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPL8-12 3HP",
    "desc": "BOMBEADOR EBARA 4BPL8-12 (1 PROT) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPLI1-15",
    "desc": "BOMBEADOR EBARA 4BPLI1-15 (1 PROT) 0,7",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPLI1-19",
    "desc": "BOMBEADOR EBARA 4BPLI1-19 (1 PROT) 1,0 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPLI1-22",
    "desc": "BOMBEADOR EBARA 4BPLI1-22 (1 PROT) 1,5 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPLI11-06 2,",
    "desc": "BOMBEADOR EBARA 4BPLI11-06 2,0 HP",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPLI11-08 3,0",
    "desc": "BOMBEADOR EBARA 4BPLI11-08 3,0 HP",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS9-22",
    "desc": "BOMBEADOR EBARA 4BPS09-22 5,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS10-12",
    "desc": "BOMBEADOR EBARA 4BPS10-12 ( F ) 4 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS10-15",
    "desc": "BOMBEADOR EBARA 4BPS10-15 5 HP P/ MT W",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS13-07 2HP",
    "desc": "BOMBEADOR EBARA 4BPS13-07 2,0 HP",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS13-16 5CV",
    "desc": "BOMBEADOR EBARA 4BPS13-16 5,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS18-09 5CV",
    "desc": "BOMBEADOR EBARA 4BPS18-09 5,5HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS1I-12",
    "desc": "BOMBEADOR EBARA 4BPS1I-12 ESTAGIOS 0,5",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS1I-15 0,",
    "desc": "BOMBEADOR EBARA 4BPS1I-15 ESTAGIOS 0,75",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS1I-20",
    "desc": "BOMBEADOR EBARA 4BPS1I-20 ESTAGIOS 1,0",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS1I-26",
    "desc": "BOMBEADOR EBARA 4BPS1I-26 ESTAGIOS 1,5",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS1I-33 2HP",
    "desc": "BOMBEADOR EBARA 4BPS1I-33 ESTAGIOS 2,0",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-08",
    "desc": "BOMBEADOR EBARA 4BPS3-08 (1 PROT) 0,75 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-11 1H",
    "desc": "BOMBEADOR EBARA 4BPS3-11 (1 PROT) 1,00 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-16",
    "desc": "BOMBEADOR EBARA 4BPS3-16 ( F ) 1,5 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-17 2",
    "desc": "BOMBEADOR EBARA 4BPS3-17 ( F ) 2,0HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-21 2",
    "desc": "BOMBEADOR EBARA 4BPS3-21 ( F ) 2,0HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-23",
    "desc": "BOMBEADOR EBARA 4BPS3-23 ( F ) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS3-27",
    "desc": "BOMBEADOR EBARA 4BPS3-27 ( F ) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS5-16 3HP",
    "desc": "BOMBEADOR EBARA 4BPS5-16 ( F ) 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "4BPS5-18 3",
    "desc": "BOMBEADOR EBARA 4BPS5-18 3,0 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS5-23",
    "desc": "BOMBEADOR EBARA 4BPS5-23 (1 PROT) 5,00 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS5-31",
    "desc": "BOMBEADOR EBARA 4BPS5-31 (1 PROT) 6,00 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "B4BPS9-34",
    "desc": "BOMBEADOR EBARA 4BPS9-34 (1 PROT) 7,50 H",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "JUT2 4 AZUL",
    "desc": "BORNE SAK JUT2 4MM JNG AZUL",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 4 BEGE 13",
    "desc": "BORNE SAK JUT2 4MM JNG BEGE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 4 VERDE AM",
    "desc": "BORNE SAK JUT2 4MM JNG JEK-4 VERDE / AM",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 6 AZUL",
    "desc": "BORNE SAK JUT2 6MM JNG AZUL",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 6 BEGE",
    "desc": "BORNE SAK JUT2 6MM JNG BEGE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 10 AZUL",
    "desc": "BORNE SAK JUT2 10MM JNG AZUL",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 10 BEGE",
    "desc": "BORNE SAK JUT2 10MM JNG BEGE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 16 BEGE",
    "desc": "BORNE SAK JUT2 16MM JNG BEGE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JUT2 35 BEGE",
    "desc": "BORNE SAK JUT2 35MM JNG BEGE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SEK-10 BEGE SB",
    "desc": "BORNE SEK-10MM SIBRATEC BEGE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BORNE TERRA 4MM",
    "desc": "BORNE TERRA 4MM LKM 28024",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PWS855-22",
    "desc": "BOTAO DUPLO JNG LAY80-PWS855-22 ARREDOND",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PWS855",
    "desc": "BOTAO DUPLO JNG LAY80-PWS855-30 QUADRADO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "APB22 ILUM SBTC",
    "desc": "BOTAO DUPLO SBTC ARREDONDADO APB22 (COM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "EB8325 7045",
    "desc": "BOTAO DUPLO SBTC ARREDONDADO XB2-EB8325",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "XB2 EBW865",
    "desc": "BOTAO DUPLO SBTC ARREDONDADO XB2-EBW8365",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "XB2-ES542 4403",
    "desc": "BOTAO EMERGENCIA SBTC XB2-ES542 1NF G",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "YLAY8E-F11G",
    "desc": "BOTAO MINI PULSO 16MM NA+NF QUADRADO VE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "YLAY8E-Y11G",
    "desc": "BOTAO MINI PULSO 16MM NA+NF REDONDO VER",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "YLAY8E-J11G",
    "desc": "BOTAO MINI PULSO 16MM NA+NF RET VERDE J",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LK2-BA42 BT MON",
    "desc": "BOTAO MONOBLOCO LK2-BA42 VM 1NF PULSO M",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "XB2-BA31 VD MON",
    "desc": "BOTAO MONOBLOCO XB2-BA31 VD 1NA PULSO M",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BT VD MONO LA39",
    "desc": "BOTAO MONOBLOCO JNG 22MM VERDE LA39J 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "22MM-VM",
    "desc": "BOTAO MONOBLOCO JNG 22MM VERMELHO LA39J",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COB1361 JNG",
    "desc": "BOTOEIRA PENDENTE JNG COB-1361 ( 2 BOTAO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COB1362 JNG",
    "desc": "BOTOEIRA PENDENTE JNG COB-1362 ( 4 BOTAO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "YQA1-61K JNG",
    "desc": "BOTOEIRA PENDENTE JNG YQA1-61K ( 2 BOT+E",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COB21SBCHGANG3P",
    "desc": "BOTOEIRA PENDENTE SB COB 21 C/CHAVE GANG",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COB61H SBTC",
    "desc": "BOTOEIRA PENDENTE SB COB 61 H (2 BOT+EME",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "COB 1362 4BOTOE",
    "desc": "BOTOEIRA PENDENTE SB COB 62 H (4 BOT+EME",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BS215B",
    "desc": "BOTOEIRA SOBREPOR 15A ON OFF- BS 215B 12",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BS230",
    "desc": "BOTOEIRA SOBREPOR 30A ON OFF- BS 230B",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "02353019",
    "desc": "BRACKET JACUZZI 12168 BOMBA B SELO (",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "02353217",
    "desc": "BRACKET JACUZZI 12248 BOMBA A SELO",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "02156404",
    "desc": "BRACKET JACUZZI 9141 8.1/2X6.1/2 10DM",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "008220",
    "desc": "BRACKET SODRAMAR C/ ANEL DE VEDAÇAO P/ B",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8220",
    "desc": "BRACKET SODRAMAR C/ ANEL DE VEDAÇÃO P/BO",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "BRAQUETE IGUI 2",
    "desc": "BRAQUETE IGUI E SPLASH ( VAI LOUÇA SELO",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98912704",
    "desc": "BUCHA BRONZE ESPAÇADORA MARK 31,75X25,",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BU10982",
    "desc": "BUCHA BRONZE SIM. SCHN ME-1 25 X 11,5M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BU10980",
    "desc": "BUCHA BRONZE SIM. SCHN ME-2 25 X 16,5M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BU10962",
    "desc": "BUCHA BRONZE SIM. THEBE P-11 F-16MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BU10986",
    "desc": "BUCHA BRONZE SIM. THEBE PX-15 F-16MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BU10964",
    "desc": "BUCHA BRONZE SIM. THEBE PX-15 F-19MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401038",
    "desc": "BUCHA BRONZE THEBE ( EIXO ) SUCÇÃO P-11",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401450",
    "desc": "BUCHA BRONZE THEBE ( EIXO ) SUCÇÃO P-15",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270400710",
    "desc": "BUCHA BRONZE THEBE ESTAGIO P-11 ORIGI",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401457",
    "desc": "BUCHA BRONZE THEBE ESTAGIO P-15 ORIG",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCHSELOPHVD0413",
    "desc": "BUCHA DARKA SELO MOD. PHVD",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCH FX PRD N.6",
    "desc": "BUCHA FIXAÇAO PAREDE UNIV. 06 MU BRANCA",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCH FIX PRD N,8",
    "desc": "BUCHA FIXAÇAO PAREDE UNIV. 08 MU BRANCA",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "08160004",
    "desc": "BUCHA LATAO JACUZZI 1/16 X 3/4 MA/MB/",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCHRED 1X3/4 GA",
    "desc": "BUCHA REDUÇAO MF 1 X 3/4 GALV",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCHRED 11/1X11/",
    "desc": "BUCHA REDUÇAO MF 1.1/2 X 1.1/4 GALVAN",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCHSCHN1.1/4 BC",
    "desc": "BUCHA SCHN BRONZE SELO 1.1/4 X 60MM INT.",
    "marca": "SCHNEIDER",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BCH SINT 872002",
    "desc": "BUCHA SINTERIZADA SCHN ME-1 ( CARCÇA S",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BUCHA VENTOSA",
    "desc": "BUCHA VENTOSA JOIHA ( PORCA ) 800 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "BUZZER VM 220V",
    "desc": "BUZZER SINALEIRO AD22 220V 72DB - SIBR",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BUZZER VM 220V",
    "desc": "BUZZER SINALEIRO JAD16 22 220V 72DB -",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BUZZER VM 24V J",
    "desc": "BUZZER SINALEIRO JAD16 22 24V 72DB - J",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CB AÇO 1/8 ENCP",
    "desc": "CABO AÇO ENCAPADO 1/8 ( 3,4 MM )",
    "marca": "CB CAP 1 TERM E",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CB CAP 1 TERM E",
    "desc": "CABO CAPACITOR C/ 1 TERMINAL ENCAIXE",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CB CAP 2 TERM E",
    "desc": "CABO CAPACITOR C/ 2 TERMINAL ENCAIXE",
    "marca": "CAPACITOR JL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACITOR JL -52,500",
    "desc": "CABO FLEX 0,50 MM 105° CORFIO PRETO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Capacitores"
  },
  {
    "ref": "TAMBASA 272,000",
    "desc": "CABO FLEX 0,50 MM 105° CORFIO VERMEL",
    "marca": "GERAL",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO FLEX 0,50M",
    "desc": "CABO FLEX 0,50 MM 105° CORFIO BRANCO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 200,000",
    "desc": "CABO FLEX 1,00 MM 105° CORFIO PRETO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 306,000",
    "desc": "CABO FLEX 1,00 MM 105° CORFIO VERMEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO FLEX 1,00M",
    "desc": "CABO FLEX 1,00 MM 105° CORFIO BRANCO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 200,000",
    "desc": "CABO FLEX 1,50 MM 105° CORFIO PRETO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 234,000",
    "desc": "CABO FLEX 1,50 MM 105° CORFIO VERMEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA",
    "desc": "CABO FLEX 10,00 MM 105°",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO FLEX 16MM",
    "desc": "CABO FLEX 16,00 MM 105°",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA",
    "desc": "CABO FLEX 2,50 MM 105° CORFIO PRETO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 64,800",
    "desc": "CABO FLEX 2,50 MM 105° CORFIO VERMEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBFLEX 4,0MM AZ",
    "desc": "CABO FLEX 4,00 MM 105° CORFIO AZUL",
    "marca": "CORFIO / SIL",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBFLEX 4MM PRET",
    "desc": "CABO FLEX 4,00 MM 105° CORFIO PRETO",
    "marca": "BARTOFIL",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBFLEX 4,0 VERD",
    "desc": "CABO FLEX 4,00 MM 105° CORFIO VERDE",
    "marca": "CORFIO / SIL",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBFLEX 4MM VM",
    "desc": "CABO FLEX 4,00 MM 105° CORFIO VERMEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 224,300",
    "desc": "CABO FLEX 6,00 MM 105° CORFIO VERMEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO FLEX 6,00",
    "desc": "CABO FLEX 6,00 MM 105° CORFIO PRETO",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO FLEX",
    "desc": "CABO FLEX 6,00 MM 105° CORFIO VERDE",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBFLEX95MM",
    "desc": "CABO FLEX 95,00 MM",
    "marca": "LIDS 02 AWG",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LIDS 02 AWG 130",
    "desc": "CABO LIDS 02 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "4 AWG",
    "desc": "CABO LIDS 04 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "6 AWG",
    "desc": "CABO LIDS 06 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 90,000",
    "desc": "CABO LIDS 06 AWG 200° AZUL",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "8 AWG",
    "desc": "CABO LIDS 08 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "10 AWG",
    "desc": "CABO LIDS 10 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "10 AWG",
    "desc": "CABO LIDS 10 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "12 AWG",
    "desc": "CABO LIDS 12 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "12 AWG",
    "desc": "CABO LIDS 12 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "14 AWG",
    "desc": "CABO LIDS 14 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "14 AWG",
    "desc": "CABO LIDS 14 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "16 AWG",
    "desc": "CABO LIDS 16 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "16 AWG",
    "desc": "CABO LIDS 16 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "18 AWG",
    "desc": "CABO LIDS 18 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "18 AWG",
    "desc": "CABO LIDS 18 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "20 AWG",
    "desc": "CABO LIDS 20 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "20 AWG",
    "desc": "CABO LIDS 20 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "22 AWG",
    "desc": "CABO LIDS 22 AWG 130° PRETO",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABOLIDS22AWGAZ",
    "desc": "CABO LIDS 22 AWG 200° AZUL",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA",
    "desc": "CABO LIDS BR 10MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 139,500",
    "desc": "CABO LIDS BR 120MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA",
    "desc": "CABO LIDS BR 16MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA -6,200",
    "desc": "CABO LIDS BR 25MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 38,600",
    "desc": "CABO LIDS BR 35MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2693",
    "desc": "CABO LIDS BR 50MM 200° SILICONE",
    "marca": "39",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "39 69,800",
    "desc": "CABO LIDS BR 70MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 50,000",
    "desc": "CABO LIDS BR 95MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 25,000",
    "desc": "CABO LIDS BR 1,0MM SILICONE 200°",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 260,000",
    "desc": "CABO LIDS BR 1,5MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA -155,000",
    "desc": "CABO LIDS BR 2,5MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA -90,200",
    "desc": "CABO LIDS BR 4,0MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 147,000",
    "desc": "CABO LIDS BR 6,0MM 200° SILICONE",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA -109,000",
    "desc": "CABO NU COBRE ATERRAMENTO",
    "marca": "ALAMAR",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "70MM",
    "desc": "CABO P/SOLDA PRETO 70MM",
    "marca": "JOSE AFONSO MA",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "081390",
    "desc": "CABO PONTA TESTEP/ MULTIMETRO STORM ( P",
    "marca": "STORM",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "057700",
    "desc": "CABO PP 2X1,00PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "074232",
    "desc": "CABO PP 2X1,50PT FLEXIVEL ENERGY",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "017136",
    "desc": "CABO PP 2X1,50PT FLEXIVEL MEGA",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E 074233 M 121",
    "desc": "CABO PP 2X2,50PT FLEXIVEL ENERGY MEGATR",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CABO PP 2X4,0MM",
    "desc": "CABO PP 2X4MM PT",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "074235",
    "desc": "CABO PP 2X6,00PT FLEXIVEL ENER",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "074236",
    "desc": "CABO PP 3X1,00PT FLEXIVEL ENERGY",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "3X1,5MM",
    "desc": "CABO PP 3X1,50PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 49,000",
    "desc": "CABO PP 3X2,50PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "3X4",
    "desc": "CABO PP 3X4,00PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "074240",
    "desc": "CABO PP 3X6,00PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "4X1,5MM",
    "desc": "CABO PP 4X1,50PT FLEXIVEL",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "074242",
    "desc": "CABO PP 4X2,50PT FLEXIVEL ENERGY",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA 23,000",
    "desc": "CABO PP 4X4,00PT FLEXIVEL ENERGY",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TAMBASA",
    "desc": "CABO PP 4X6,00PT FLEXIVEL ENERGY",
    "marca": "TAMBASA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBRG 10MM",
    "desc": "CABO RIGIDO 10 MM",
    "marca": "CABO RIGIDO 16 MM",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "S/REF",
    "desc": "CABO RIGIDO 16 MM",
    "marca": "GERAL",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBRG35MM",
    "desc": "CABO RIGIDO 35 MM",
    "marca": "CBRG50MM",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CBRG50MM",
    "desc": "CABO RIGIDO 50 MM",
    "marca": "CABO SOLDA SIL 70 MM 100V 70°",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "S/REF",
    "desc": "CABO SOLDA SIL 70 MM 100V 70°",
    "marca": "MF MAQUINAS",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7898527730134",
    "desc": "CABO TRANSFERENCIA 400A 2,5 MTS SKY AUTO",
    "marca": "SKY AUTO",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "14258",
    "desc": "CABOS PONTA P/ MULTIMETRO SBTC (PAR-VER",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC 1,000",
    "desc": "CADARÇO DE ALGODAO 20 X 19 MM BRANCO (3/",
    "marca": "PASQUA",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PASQUA -1,000",
    "desc": "CADARÇO DE ALGODAO 20 X 19 MM LARANJA (3",
    "marca": "ALAMAR",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CADARÇO",
    "desc": "CADARÇO DE FIBRA DE VIDRO 1\" POLEGADA",
    "marca": "OUTROS",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CADARÇO",
    "desc": "CADARÇO DE POLIÉSTER 20 X 19 MM ( 3/4\" )",
    "marca": "OUTROS",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "0685",
    "desc": "CADARÇO DE POLIÉSTER 20 X 19 MM LARANJA",
    "marca": "OUTROS",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CADARÇO",
    "desc": "CADARÇO DE POLIÉSTER 25 X 19 MM LARANJA",
    "marca": "OUTROS",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CADEADO 40MM PA",
    "desc": "CADEADO 40MM PAPAIZ",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CADEADO 45MM PA",
    "desc": "CADEADO 45MM PAPAIZ",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3252954150",
    "desc": "CADEADO P/ BICICLETA 150CM C/ CHAVE 95",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CXBOX3 C/25 54",
    "desc": "CAIXA BOX 3 P/ ORGANIZAR AZ. 10X17X07",
    "marca": "TAMBASA",
    "uni": "CX",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CXBOX5 50902 5",
    "desc": "CAIXA BOX 5 P/ ORGANIZAR AZ. 12X15X23",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CXBOX6 064883",
    "desc": "CAIXA BOX 6 P/ ORGANIZAR AZ. 14X18X30",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CXBOX7 64885",
    "desc": "CAIXA BOX 7 P/ ORGANIZAR AZ. 21X33X18",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "913055",
    "desc": "CAIXA DISTRIBUICAO DISJUNTOR CEMAR 2DIN/",
    "marca": "CEMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "913057",
    "desc": "CAIXA DISTRIBUICAO DISJUNTOR CEMAR 4DIN/",
    "marca": "CEMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "90-100",
    "desc": "CAIXA LIGACAO EBERLE 90-100",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10868252 CXLGE1",
    "desc": "CAIXA LIGAÇÃO WEG 112-132 W22 MONOFASICO",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "11318890",
    "desc": "CAIXA LIGAÇÃO WEG 112-132 W22 TRIFÁSICA",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "65244730Z",
    "desc": "CAIXA LIGAÇÃO WEG 63-100 W21 MONOFÁSICA",
    "marca": "01",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "11318889",
    "desc": "CAIXA LIGAÇÃO WEG 63-100 W22 TRIFÁSICA",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "11318816",
    "desc": "CAIXA LIGAÇÃO WEG 63-80 W21 TRIFÁSICA -",
    "marca": "01",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20X20X10",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 20X20X1",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20X20X14",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 20X20X1",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "30X30X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 30X30X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32X19X14",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 32X19X1",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40X30X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 40X30X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40X40X13",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 40X40X1",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40X40X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 40X40X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "CX",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40X40X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 40X40X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50X40X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 50X40X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50X40X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 50X40X2",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50X50X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 50X50X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50X50X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 50X50X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "60X50X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 60X50X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "60X50X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 60X50X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "60X60X20",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 60X60X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "60X60X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 60X60X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80X60X25",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 80X60X2",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80X60X30",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 80X60X3",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "100X60X35",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 100X60X3",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "120X80X35",
    "desc": "CAIXA METALICA P/ PAINEL LUKBOX 120X80X3",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "30X20X20 CXMTL",
    "desc": "CAIXA METALICA P/ PAINEL SBTC 30X20X20",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "30X30X20 CXMETL",
    "desc": "CAIXA METALICA P/ PAINEL SBTC 30X30X20",
    "marca": "SIBRATEC",
    "uni": "KG",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40X30X20 CXMTL",
    "desc": "CAIXA METALICA P/ PAINEL SBTC 40X30X20",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMX101",
    "desc": "CAIXA PLASTICA BOTOEIRA BMX 101 1F JNG C",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMX102",
    "desc": "CAIXA PLASTICA BOTOEIRA BMX 102 2F JNG C",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMX104",
    "desc": "CAIXA PLASTICA BOTOEIRA BMX 104 4F JNG C",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMY101",
    "desc": "CAIXA PLASTICA BOTOEIRA BMY 101 1F JNG A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMY102",
    "desc": "CAIXA PLASTICA BOTOEIRA BMY 102 2F JNG A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BMY104",
    "desc": "CAIXA PLASTICA BOTOEIRA BMY 104 4F JNG A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CXPLSBX1 3F SB",
    "desc": "CAIXA PLASTICA BOTOEIRA BX1 /3G 3 FUROS",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C30X20X17",
    "desc": "CAIXA PLASTICA P/ PAINEL CEMAR 30X20X17",
    "marca": "CEMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C30X30X20",
    "desc": "CAIXA PLASTICA P/ PAINEL CEMAR 30X30X20",
    "marca": "CEMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "85X85X50 8522",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 85X85",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "100X100X70 852",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 100X10",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "150X110X70 852",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 150X11",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "150X150X70 852",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 150X15",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "200X155X80",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 200X15",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "200X200X80 852",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 200X20",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20X14X14 7445",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 20X14X",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "28X18X14 7444",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 28X18X",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "35X26X17 7443",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 35X26X",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "48X38X17 CX PLA",
    "desc": "CAIXA PLASTICA P/ PAINEL SIBRATEC 48X38X",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "QDS-1P 12950",
    "desc": "CAIXA PLASTICA SOBREPOR QDS-1P DISTRIB.",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "QDS-2P 12951",
    "desc": "CAIXA PLASTICA SOBREPOR QDS-2P DISTRIB.",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "QDS-4P 12952",
    "desc": "CAIXA PLASTICA SOBREPOR QDS-4P DISTRIB.",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "010939",
    "desc": "CAIXA SOBREPOR SIBRATEC CSDT-10 C/TOMADA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "010940",
    "desc": "CAIXA SOBREPOR SIBRATEC CSDT-20 C/TOMADA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CAMISETA DE AL",
    "desc": "CAMISETA DE ALGODÃO 4MM 50MTS",
    "marca": "TRAMAR",
    "uni": "SCO",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CAMISETA",
    "desc": "CAMISETA DE ALGODÃO 5MM 50MTS",
    "marca": "TRAMAR",
    "uni": "SCO",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CAMISETA",
    "desc": "CAMISETA DE ALGODÃO 6MM 50MTS",
    "marca": "TRAMAR",
    "uni": "SCO",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANALETA 30X30",
    "desc": "CANALETA CINZA TOTAL ABERTA 30L X 30H L",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANALETA 30 X 3",
    "desc": "CANALETA CINZA TOTAL ABERTA 30L X 30H SB",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "04815",
    "desc": "CANALETA CINZA TOTAL ABERTA 30L X 50H SB",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANALETA 50X50",
    "desc": "CANALETA CINZA TOTAL ABERTA 50L X 50H SB",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANALETA 80 X 5",
    "desc": "CANALETA CINZA TOTAL ABERTA 80L X 50H SB",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANAELTA 80X80",
    "desc": "CANALETA CINZA TOTAL ABERTA 80L X 80H SB",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "18553",
    "desc": "CANECA ANAUGER ORIGINAL 5G 700/900 220V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "50609",
    "desc": "CANECA ANAUGER ORIGINAL 6\" 127V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "50608",
    "desc": "CANECA ANAUGER ORIGINAL 6\" 220V",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ANAUGER",
    "desc": "CANECA ANAUGER ORIGINAL 650 5G",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "1800 127V",
    "desc": "CANECA JOIHA 1800 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "1800 220V",
    "desc": "CANECA JOIHA 1800 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "1800 254V",
    "desc": "CANECA JOIHA 1800 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "2000 127V",
    "desc": "CANECA JOIHA 2000 127V 6P 900 / 80",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "2000 220V",
    "desc": "CANECA JOIHA 2000 220V 6P 900 / 80",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "2000 254V",
    "desc": "CANECA JOIHA 2000 254V 6P 900 /",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5F 127V",
    "desc": "CANECA JOIHA 5F 127V 5P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5F 220V",
    "desc": "CANECA JOIHA 5F 220V 5P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5F 254V",
    "desc": "CANECA JOIHA 5F 254V 5P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6\" 127V",
    "desc": "CANECA JOIHA 6\" 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6\" 220V",
    "desc": "CANECA JOIHA 6\" 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6\"-254V",
    "desc": "CANECA JOIHA 6\" 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "600-127V",
    "desc": "CANECA JOIHA 600 127V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "600 220V",
    "desc": "CANECA JOIHA 600 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "600 254V",
    "desc": "CANECA JOIHA 600 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "850 127V",
    "desc": "CANECA JOIHA 850 127V 6P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "850 220V",
    "desc": "CANECA JOIHA 850 220V 6P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "850 254V",
    "desc": "CANECA JOIHA 850 254V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "950 127V",
    "desc": "CANECA JOIHA 950 127V 6P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "950 220V",
    "desc": "CANECA JOIHA 950 220V 6P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "950 254V",
    "desc": "CANECA JOIHA 950 254V 6P",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CANETA BIC VERM",
    "desc": "CANETA BIC CRISTAL VERMELHA 6176",
    "marca": "PAPELARIA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60707",
    "desc": "CANOPLA ANAUGER ECCO E 6\" 4G / SOLAR",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60644",
    "desc": "CANOPLA ANAUGER 5G ORIG 60644",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "5G",
    "desc": "CANOPLA JOIHA 5 FUROS 5G",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "650/850/950",
    "desc": "CANOPLA JOIHA 650/850/950",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "900",
    "desc": "CANOPLA JOIHA 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANOPLA ECCO",
    "desc": "CANOPLA JOIHA ECCO/600",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CANTONEIRA THOM",
    "desc": "CANTONEIRA PRATELEIRA BRANCA THOMPSON",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CAPACAPGDEFE 21",
    "desc": "CAPA CAPACITOR FERRO GRANDE",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACAPMEDFE 21",
    "desc": "CAPA CAPACITOR FERRO MÉDIA",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACAPPEQFE 1",
    "desc": "CAPA CAPACITOR FERRO PEQUENA",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACAPGDEPLAST",
    "desc": "CAPA CAPACITOR PLASTICA GRANDE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACAPMEDPLAST",
    "desc": "CAPA CAPACITOR PLASTICA MEDIA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAPACAPPEQPLAST",
    "desc": "CAPA CAPACITOR PLASTICA PEQUENA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "FERPA 17,000",
    "desc": "CAPA PROTEÇAO BOTAO DUPLO ARREDONDADA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 23,000",
    "desc": "CAPA PROTEÇAO BOTAO SIMPLES MONOBLOCO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CAPART JNG",
    "desc": "CAPA PROTEÇAO CHAVE ALAVANCA RT JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CAPA PROT RT 9",
    "desc": "CAPA PROTEÇAO CHAVE ALAVANCA RT SBTC CCA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CAPA CHAVE GANG",
    "desc": "CAPA PROTEÇAO CHAVE GANG RETANG LK 2-4",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "03UF 250V CB IP",
    "desc": "CAPACITOR 03UF 250V IPC CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF 250V CB EP",
    "desc": "CAPACITOR 12UF 250V EPCOS CABO",
    "marca": "EPCOS",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF 250V CB IP",
    "desc": "CAPACITOR 45UF 250V IPC CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF - 250V",
    "desc": "CAPACITOR C/ CABO TECH 45UF- 250V",
    "marca": "TECH",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF - 250V",
    "desc": "CAPACITOR C/ TERMINAL 20UF - 250V",
    "marca": "WEG PEÇAS MOTO",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "50UF - 250V",
    "desc": "CAPACITOR C/ TERMINAL CBB60 50UF - 250V",
    "marca": "CBB60",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270-324 220V CD",
    "desc": "CAPACITOR CD60 270-324 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1,6KVAR 220V OP",
    "desc": "CAPACITOR CELULA MONOF 1,67 KVAR 220V 30",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2,5KVAR 220V OP",
    "desc": "CAPACITOR CELULA MONOF 2,50 KVAR 220V 13",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3,33KVAR 220V O",
    "desc": "CAPACITOR CELULA MONOF 3,33 KVAR 220V 18",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3,33KVAR 440V O",
    "desc": "CAPACITOR CELULA MONOF 3,33 KVAR 440V 45",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5,0KVAR 220V OP",
    "desc": "CAPACITOR CELULA MONOF 5,0 KVAR 220V 274",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5,0KVAR 440V EP",
    "desc": "CAPACITOR CELULA MONOF 5,0 KVAR 440V 68,",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5,0 KVAR 440V O",
    "desc": "CAPACITOR CELULA MONOF 5,0 KVAR 440V 68,",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5,0KVAR 220V EP",
    "desc": "CAPACITOR CELULA TRIF 5,0 KVAR 220V 3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "7,5KVAR 220V EP",
    "desc": "CAPACITOR CELULA TRIF 7,5 KVAR 220V 3",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "10KVAR 220V EP",
    "desc": "CAPACITOR CELULA TRIF 10,0 KVAR 220V 3X",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF250V EPCOS C",
    "desc": "CAPACITOR EPCOS 04UF 250V C/ CABO",
    "marca": "EPCOS",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF400V EPCOS C",
    "desc": "CAPACITOR EPCOS 07UF 400V C/CABO",
    "marca": "EPCOS",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1,5UF250V IPC C",
    "desc": "CAPACITOR IPC 1,5UF 250V C/CABO",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF250V IPC CAB",
    "desc": "CAPACITOR IPC 02UF 250V C/CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF250V IPC CAB",
    "desc": "CAPACITOR IPC 04UF 250V C/CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF440V IPC CAB",
    "desc": "CAPACITOR IPC 05UF 440V C/CABO",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF250V IPC CAB",
    "desc": "CAPACITOR IPC 07UF 250V C/CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF250V IPC CAB",
    "desc": "CAPACITOR IPC 08UF 250V C/CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF440V IPC CA",
    "desc": "CAPACITOR IPC 10UF 440V C/CABO",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF400V IPC TE",
    "desc": "CAPACITOR IPC 12UF 440V TERMINAL",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1,5+2,5UF250V I",
    "desc": "CAPACITOR IPC DUPLO 1,5+2,5UF 250V",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1,5+2,5UF440V I",
    "desc": "CAPACITOR IPC DUPLO 1,5+2,5UF 440V",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4+6UF250V IPC D",
    "desc": "CAPACITOR IPC DUPLO 4,0+6,0UF 250V",
    "marca": "IPC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF250V JL CAB",
    "desc": "CAPACITOR JL 02UF 250V CABO",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF400V JL TERM",
    "desc": "CAPACITOR JL 02UF 400V TERMINAL",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF250V JL CABO",
    "desc": "CAPACITOR JL 03UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF250V JL CABO",
    "desc": "CAPACITOR JL 05UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF400V JL CABO",
    "desc": "CAPACITOR JL 05UF 400V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF250V JL CABO",
    "desc": "CAPACITOR JL 06UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF250V JL CABO",
    "desc": "CAPACITOR JL 07UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF250V JL CABO",
    "desc": "CAPACITOR JL 08UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25UF250V JL CAB",
    "desc": "CAPACITOR JL 25UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF400V JL TER",
    "desc": "CAPACITOR JL 30UF 400V TERMINAL",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "64UF330V JL",
    "desc": "CAPACITOR JL 064/77UF - 330V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "88/108 110V JL",
    "desc": "CAPACITOR JL 088/108UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "88/108 220VJL",
    "desc": "CAPACITOR JL 088/108UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "88/108 330V JL",
    "desc": "CAPACITOR JL 088/108UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "108/130 110V JL",
    "desc": "CAPACITOR JL 108/130UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "108/130 220V JL",
    "desc": "CAPACITOR JL 108/130UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "108/130 330V JL",
    "desc": "CAPACITOR JL 108/130UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "124-149 330V JL",
    "desc": "CAPACITOR JL 124/149UF - 330V",
    "marca": "ALAMAR",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "130UF250VJLCB",
    "desc": "CAPACITOR JL 130UF 250V CABO",
    "marca": "145/175 110V JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "145/175 110V JL",
    "desc": "CAPACITOR JL 145/175UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "145/175 220V JL",
    "desc": "CAPACITOR JL 145/175UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "145/175 330V JL",
    "desc": "CAPACITOR JL 145/175UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "161/193 110V JL",
    "desc": "CAPACITOR JL 161/193UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "161/193 MINI 11",
    "desc": "CAPACITOR JL 161/193UF - 110V MINI",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "161/193 220V JL",
    "desc": "CAPACITOR JL 161/193UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "189/225 110V JL",
    "desc": "CAPACITOR JL 189/225UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "189/227 MINI 11",
    "desc": "CAPACITOR JL 189/227UF - 110V MINI",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "189/227 220V JL",
    "desc": "CAPACITOR JL 189/227UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "189/227 330V JL",
    "desc": "CAPACITOR JL 189/227UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "18UF250V JL CAB",
    "desc": "CAPACITOR JL 18UF 250V CABO",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216/259 330V JL",
    "desc": "CAPACITOR JL 216/259UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216/259 110V J",
    "desc": "CAPACITOR JL 216/259UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216/259 MINI 11",
    "desc": "CAPACITOR JL 216/259UF - 110V MINI",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216/259 220V JL",
    "desc": "CAPACITOR JL 216/259UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216/259 330V JL",
    "desc": "CAPACITOR JL 216/259UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/324 110V JL",
    "desc": "CAPACITOR JL 270/324UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/324 MINI 11",
    "desc": "CAPACITOR JL 270/324UF - 110V MINI",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/324 220V JL",
    "desc": "CAPACITOR JL 270/324UF - 220V BOLA P",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270 220V JL ORI",
    "desc": "CAPACITOR JL 270/324UF - 220V ORIGINA",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/234 330V JL",
    "desc": "CAPACITOR JL 270/324UF - 330V",
    "marca": "CAPACITOR JL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "340/408 110V JL",
    "desc": "CAPACITOR JL 340/408UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "340/408 MINI 11",
    "desc": "CAPACITOR JL 340/408UF - 110V MINI",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "340/408 220V JL",
    "desc": "CAPACITOR JL 340/408UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "378/454 110V JL",
    "desc": "CAPACITOR JL 378/454UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "378/454 220V JL",
    "desc": "CAPACITOR JL 378/454UF - 220V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "430/516 110V JL",
    "desc": "CAPACITOR JL 430/516UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "540/648 110V JL",
    "desc": "CAPACITOR JL 540/648UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "590/708 110V JL",
    "desc": "CAPACITOR JL 590/708UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "680/816 110V JL",
    "desc": "CAPACITOR JL 680/816UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "860/1032 110V J",
    "desc": "CAPACITOR JL 860/1032UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1080/1290 110V",
    "desc": "CAPACITOR JL 1080/1290UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF 400V",
    "desc": "CAPACITOR JL TERMINAL 3UF - 400V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF 440V",
    "desc": "CAPACITOR JL TERMINAL 5UF - 440V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF 400V",
    "desc": "CAPACITOR JL TERMINAL 6UF - 400V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF 400V",
    "desc": "CAPACITOR JL TERMINAL 10UF - 400V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF - 250V",
    "desc": "CAPACITOR JL TERMINAL 30UF - 250V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF - 250V",
    "desc": "CAPACITOR JL TERMINAL 40UF - 250V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60UF - 400V JL",
    "desc": "CAPACITOR JL TERMINAL 60UF - 400V FIN",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60UF 440V TERM",
    "desc": "CAPACITOR JL TERMINAL 60UF - 440V NOR",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "70250V CB JNG 1",
    "desc": "CAPACITOR JNG 70UF - 250V CABO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "100250V CB JNG",
    "desc": "CAPACITOR JNG 100UF - 250V CABO 161",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "120250V CB JNG",
    "desc": "CAPACITOR JNG 120UF - 250V CABO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "140250V CB JNG",
    "desc": "CAPACITOR JNG 140UF - 250V CABO 16142",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF 400V",
    "desc": "CAPACITOR LEYDEN TERMINAL 8UF - 400V",
    "marca": "WEG PEÇAS MOTO",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "CAP 0,85UF 2100",
    "desc": "CAPACITOR MICRO ONDAS 0,85UF 2100V ALT",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "1,5UF 250V QUAD",
    "desc": "CAPACITOR OP 1,5UF 250/400V QUADRADO C",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ALAMAR 6,000",
    "desc": "CAPACITOR OP 2,5UF 450V QUADRADO TERM",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2,5UF 450 QUA",
    "desc": "CAPACITOR OP 2,5UF 450V QUADRADO CABO",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 7,000",
    "desc": "CAPACITOR OP 3UF 450V QUADRADO TERMI",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA",
    "desc": "CAPACITOR OP 4,5UF 450V QUADRADO CABO",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4,5UF 450V TERM",
    "desc": "CAPACITOR OP 4,5UF 450V QUADRADO TERM",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 9,000",
    "desc": "CAPACITOR OP 4UF 450V QUADRADO TERMIN",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 5,000",
    "desc": "CAPACITOR OP 5UF 450V QUADRADO TERMIN",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 7,000",
    "desc": "CAPACITOR OP 6UF 450V QUADRADO TERMIN",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 8,000",
    "desc": "CAPACITOR OP 7UF 450V QUADRADO TERMIN",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF 450V QUADRA",
    "desc": "CAPACITOR OP 8,0 UF 450V QUADRADO TER",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 14,000",
    "desc": "CAPACITOR OP 8UF 450V QUADRADO CABO",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA",
    "desc": "CAPACITOR OP 10UF 450V QUADRADO TERMIN",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "145/175 330V 0P",
    "desc": "CAPACITOR OP 145/175UF - 330V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "189/225 330V OP",
    "desc": "CAPACITOR OP 189/225UF - 330V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270 250V OP",
    "desc": "CAPACITOR OP 270/324UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/324 330V OP",
    "desc": "CAPACITOR OP 270/324UF - 330V",
    "marca": "ONDA POSITIVA",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "270UF-330V",
    "desc": "CAPACITOR OP 270UF - 330V EPX",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA",
    "desc": "CAPACITOR OP CABO 1,5UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF 400V",
    "desc": "CAPACITOR OP CABO 2UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF 450V",
    "desc": "CAPACITOR OP CABO 2UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF 250V",
    "desc": "CAPACITOR OP CABO 3UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF 400V",
    "desc": "CAPACITOR OP CABO 3UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF 450V",
    "desc": "CAPACITOR OP CABO 3UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF 250V",
    "desc": "CAPACITOR OP CABO 4UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF 400V",
    "desc": "CAPACITOR OP CABO 4UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF 450V",
    "desc": "CAPACITOR OP CABO 4UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF 250V",
    "desc": "CAPACITOR OP CABO 5UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF 400V",
    "desc": "CAPACITOR OP CABO 5UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF 450V",
    "desc": "CAPACITOR OP CABO 5UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF 250V",
    "desc": "CAPACITOR OP CABO 6UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF 400V",
    "desc": "CAPACITOR OP CABO 6UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF 450V",
    "desc": "CAPACITOR OP CABO 6UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF 250V",
    "desc": "CAPACITOR OP CABO 7UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF 400V",
    "desc": "CAPACITOR OP CABO 7UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF 450V",
    "desc": "CAPACITOR OP CABO 7UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF 250V",
    "desc": "CAPACITOR OP CABO 8UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF-400V",
    "desc": "CAPACITOR OP CABO 8UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8UF 450V",
    "desc": "CAPACITOR OP CABO 8UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF 250V",
    "desc": "CAPACITOR OP CABO 10UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF 400V",
    "desc": "CAPACITOR OP CABO 10UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF 450V",
    "desc": "CAPACITOR OP CABO 10UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF 250V",
    "desc": "CAPACITOR OP CABO 12UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF 400V",
    "desc": "CAPACITOR OP CABO 12UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF 250V",
    "desc": "CAPACITOR OP CABO 15UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF 400V",
    "desc": "CAPACITOR OP CABO 15UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF 450V",
    "desc": "CAPACITOR OP CABO 15UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "18UF 250V",
    "desc": "CAPACITOR OP CABO 18UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF 250V",
    "desc": "CAPACITOR OP CABO 20UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 2,000",
    "desc": "CAPACITOR OP CABO 25UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 1,000",
    "desc": "CAPACITOR OP CABO 30UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 17,000",
    "desc": "CAPACITOR OP CABO 35UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 450V OP TE",
    "desc": "CAPACITOR OP CABO 40UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 1,000",
    "desc": "CAPACITOR OP CABO DUPLO 1,5 + 2,5 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 3,000",
    "desc": "CAPACITOR OP CABO DUPLO 3,0 + 5,0 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA 9,000",
    "desc": "CAPACITOR OP CABO DUPLO 4,0 + 6,0 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2,5UF 440V TM O",
    "desc": "CAPACITOR OP TERMINAL 2,5 - 440V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF400V OP TER",
    "desc": "CAPACITOR OP TERMINAL 10UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF400V TM OP",
    "desc": "CAPACITOR OP TERMINAL 15UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF400V TM OP",
    "desc": "CAPACITOR OP TERMINAL 20UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25UF250V TM OP",
    "desc": "CAPACITOR OP TERMINAL 25UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25UF400V TM OP",
    "desc": "CAPACITOR OP TERMINAL 25UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF 400V",
    "desc": "CAPACITOR OP TERMINAL 30UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "ONDA POSITIVA",
    "desc": "CAPACITOR OP TERMINAL 35UF - 250V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "35 UF 400V",
    "desc": "CAPACITOR OP TERMINAL 35UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "35UF 450V",
    "desc": "CAPACITOR OP TERMINAL 35UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 400V",
    "desc": "CAPACITOR OP TERMINAL 40UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 450V",
    "desc": "CAPACITOR OP TERMINAL 40UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF 400V",
    "desc": "CAPACITOR OP TERMINAL 45UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF 450V",
    "desc": "CAPACITOR OP TERMINAL 45UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "50 UF 400V TERM",
    "desc": "CAPACITOR OP TERMINAL 50UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "50UF 450V",
    "desc": "CAPACITOR OP TERMINAL 50UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60UF 400V",
    "desc": "CAPACITOR OP TERMINAL 60UF - 400V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60UF450V TM OP",
    "desc": "CAPACITOR OP TERMINAL 60UF - 450V",
    "marca": "ONDA POSITIVA",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "55UF - 250V",
    "desc": "CAPACITOR SB 55UF - 250V C/ CABO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "108/130UF 220V",
    "desc": "CAPACITOR SB 108/130 UF 220V GROSSO 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "243/292UF 220V",
    "desc": "CAPACITOR SB 243/292 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270/324UF 220V",
    "desc": "CAPACITOR SB 270/324 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "338/414UF 220V",
    "desc": "CAPACITOR SB 338/414 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "378/454UF 220V",
    "desc": "CAPACITOR SB 378/454 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "460/552UF 110V",
    "desc": "CAPACITOR SB 460/552 UF 110V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "460/552UF 220V",
    "desc": "CAPACITOR SB 460/552 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "540/648UF 110V",
    "desc": "CAPACITOR SB 540/648 UF 110V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "540/648UF 220V",
    "desc": "CAPACITOR SB 540/648 UF 220V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "590/708UF 110V",
    "desc": "CAPACITOR SB 590/708 UF 110V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "680/816UF 110V",
    "desc": "CAPACITOR SB 680/816 UF 110V GROSSO 4",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "SIBRATEC 5,000",
    "desc": "CAPACITOR WEG CABO 1,0UF - 250V",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "WEG MOTORES -1,000",
    "desc": "CAPACITOR WEG CABO 1,5UF - 250V",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "02 250V WEG CAB",
    "desc": "CAPACITOR WEG CABO 2UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "02 400V WEG CAB",
    "desc": "CAPACITOR WEG CABO 2UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "03 250V WEG CAB",
    "desc": "CAPACITOR WEG CABO 3UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "03 400V WEG CAB",
    "desc": "CAPACITOR WEG CABO 3UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "04 250V WEG CAB",
    "desc": "CAPACITOR WEG CABO 4UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "04 400V WEG CAB",
    "desc": "CAPACITOR WEG CABO 4UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "05 250V WEG CAB",
    "desc": "CAPACITOR WEG CABO 5UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "05 400V WEG CAB",
    "desc": "CAPACITOR WEG CABO 5UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "06 250V WEG CAB",
    "desc": "CAPACITOR WEG CABO 6UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "06 400V WEG CAB",
    "desc": "CAPACITOR WEG CABO 6UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF 250V CB",
    "desc": "CAPACITOR WEG CABO 7UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF 400V WEG",
    "desc": "CAPACITOR WEG CABO 7UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "08250V WEG CABO",
    "desc": "CAPACITOR WEG CABO 8UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "08400V CB 12845",
    "desc": "CAPACITOR WEG CABO 8UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "14678273",
    "desc": "CAPACITOR WEG CABO 10UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10400V CB 13414",
    "desc": "CAPACITOR WEG CABO 10UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12798212 1771",
    "desc": "CAPACITOR WEG CABO 12UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF 400V CABO",
    "desc": "CAPACITOR WEG CABO 12UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF250V WEG CA",
    "desc": "CAPACITOR WEG CABO 15UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15UF 400V CB WE",
    "desc": "CAPACITOR WEG CABO 15UF - 400V",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "18UFWEG250VCABO",
    "desc": "CAPACITOR WEG CABO 18UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF 250V CB WE",
    "desc": "CAPACITOR WEG CABO 20UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF/400V WEG",
    "desc": "CAPACITOR WEG CABO 20UF - 400V",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "13674278 / 1523",
    "desc": "CAPACITOR WEG CABO 25UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF 250V CB WE",
    "desc": "CAPACITOR WEG CABO 30UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF 250V CB WE",
    "desc": "CAPACITOR WEG CABO 35UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 250V CB WE",
    "desc": "CAPACITOR WEG CABO 40UF - 250V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF - 250V",
    "desc": "CAPACITOR WEG CABO 45UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "14240053",
    "desc": "CAPACITOR WEG CABO 50UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "13463803",
    "desc": "CAPACITOR WEG CABO 60UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "13089611",
    "desc": "CAPACITOR WEG CABO 70UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2UF 400V",
    "desc": "CAPACITOR WEG TERMINAL 2UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "3UF 400V",
    "desc": "CAPACITOR WEG TERMINAL 3UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "4UF 400V",
    "desc": "CAPACITOR WEG TERMINAL 4UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "5UF 400V 111",
    "desc": "CAPACITOR WEG TERMINAL 5UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "6UF 400V TM 110",
    "desc": "CAPACITOR WEG TERMINAL 6UF - 400V",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "7UF WEG TERMINA",
    "desc": "CAPACITOR WEG TERMINAL 7UF - 400V",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "11095305",
    "desc": "CAPACITOR WEG TERMINAL 8UF - 400V 110",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "10UF 400V",
    "desc": "CAPACITOR WEG TERMINAL 10UF - 400V 110",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "12UF 400V",
    "desc": "CAPACITOR WEG TERMINAL 12UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "15 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 15UF - 400V P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "16UF 400V TERM",
    "desc": "CAPACITOR WEG TERMINAL 16UF - 400V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "1992",
    "desc": "CAPACITOR WEG TERMINAL 18UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20UF-250V",
    "desc": "CAPACITOR WEG TERMINAL 20UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "20 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 20UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 25UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 25UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "25 440V WEG TE",
    "desc": "CAPACITOR WEG TERMINAL 25UF - 440V C",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 30UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 30UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UF 440V WEG",
    "desc": "CAPACITOR WEG TERMINAL 30UF - 440V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "30UFWEG250VTERM",
    "desc": "CAPACITOR WEG TERMINAL 35UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "35 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 35UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "35 440V WEG",
    "desc": "CAPACITOR WEG TERMINAL 35UF - 440V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "14233992",
    "desc": "CAPACITOR WEG TERMINAL 40UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 400V TERM",
    "desc": "CAPACITOR WEG TERMINAL 40UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "40UF 440V WEG",
    "desc": "CAPACITOR WEG TERMINAL 40UF - 440V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 45UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45400V TM 1294",
    "desc": "CAPACITOR WEG TERMINAL 45UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "45UF - 440V",
    "desc": "CAPACITOR WEG TERMINAL 45UF - 440V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "14039929",
    "desc": "CAPACITOR WEG TERMINAL 50UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "50 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 50UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "50 440V WEG",
    "desc": "CAPACITOR WEG TERMINAL 50UF - 440V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 60UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "60 400V WEG TER",
    "desc": "CAPACITOR WEG TERMINAL 60UF - 400V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "70UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 70UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "70UF 400V GROSS",
    "desc": "CAPACITOR WEG TERMINAL 70UF - 400V 6",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "80UF 250V TERM",
    "desc": "CAPACITOR WEG TERMINAL 80UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "13782852",
    "desc": "CAPACITOR WEG TERMINAL 90UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "2311",
    "desc": "CAPACITOR WEG TERMINAL 100UF - 250V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "11313782",
    "desc": "CAPACITOR WEG TRIFASICO 10KVAR 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "11313783",
    "desc": "CAPACITOR WEG TRIFASICO 7,5KVAR 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "8700104501A",
    "desc": "CARACOL SCHNEIDER BC-92S 1\" ( SUCÇAO 1",
    "marca": "SCHNEIDER",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CRCÇA ANGR 5G",
    "desc": "CARCAÇA ANAUGER 5G 5 PARAFUSO 60",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60350030P",
    "desc": "CARCAÇA DANCOR CAM-W6 1,5 A 2,0CV ALUMÍN",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60350050P",
    "desc": "CARCAÇA DANCOR CAM-W6 3/4 A 1CV ALUMÍNIO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60383815",
    "desc": "CARCAÇA DANCOR CHS 17 1.5 A 2 CV HIDRO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60383803",
    "desc": "CARCAÇA DANCOR CHS 17 1/4 A 1 CV HIDRO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "DANCOR 5,000",
    "desc": "CARCAÇA DANCOR CHS 22 2 A 3 CV HIDRO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60350100P",
    "desc": "CARCAÇA DANCOR CP- 6 R TAMPA",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60384044P",
    "desc": "CARCAÇA DANCOR CP-4",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60386112",
    "desc": "CARCAÇA DANCOR HAD-7 C/ ELEV CENTRAL P",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60387112",
    "desc": "CARCAÇA DANCOR HAD-7 C/ ELEV CENTRAL FC1",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60380122P",
    "desc": "CARCAÇA DANCOR PF/CHS-22 2 A 3 CV HID",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60384815P",
    "desc": "CARCAÇA DANCOR PRE-FILTRO PF-17 1,5CV A",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60384803P",
    "desc": "CARCAÇA DANCOR PRE-FILTRO PF-17 1/4CV A",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60380222P",
    "desc": "CARCAÇA DANCOR PRE-FILTRO PF-22 1,5CV A",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "DANCOR 3,000",
    "desc": "CARCAÇA JOIHA 5 FUROS",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "650/850/950",
    "desc": "CARCAÇA JOIHA 650/850/950",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "CARCAÇA 900",
    "desc": "CARCAÇA JOIHA 900/1300/1800/2000",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11270401364",
    "desc": "CARCAÇA THEBE TH-16 SUCÇA SAIDA F.FUND",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "6847160127",
    "desc": "CARREGADOR BATERIA CBV 1600 127V VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "53297002",
    "desc": "CARRETEL KOHLBACH ANTIGO GRANDE",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CARRETEL KO 005",
    "desc": "CARRETEL KOHLBACH ANTIGO PEQUENO 005/6",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CARRETEL KO N48",
    "desc": "CARRETEL KOHLBACH NOVO 48",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CARRETEL KO N56",
    "desc": "CARRETEL KOHLBACH NOVO 56 2329-7010",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "2297",
    "desc": "CARRETEL TRAPP MASTER 700 ANT. 800 / 10",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3E1795C1K",
    "desc": "CENTRIFUGO EBERLE 132 - 2 POLOS ORIGINA",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "3E1795C2K CEB1",
    "desc": "CENTRIFUGO EBERLE 132 - 4 POLOS ORIGINA",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "3E3540C2K",
    "desc": "CENTRIFUGO EBERLE ORIGINAL 48 / 56 - 2 P",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "3E3540C4K",
    "desc": "CENTRIFUGO EBERLE ORIGINAL 48 / 56 - 4 P",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "252",
    "desc": "CENTRIFUGO EBERLE SIMILAR 56 - 2 POLOS",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "254",
    "desc": "CENTRIFUGO EBERLE SIMILAR 56 - 4 POLOS",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CENTRF HE 48 2P",
    "desc": "CENTRIFUGO HERCULES 48 2P 105029 H",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CENTRIF HE 48 4",
    "desc": "CENTRIFUGO HERCULES 48 4P 1050290",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "HERC 56 2P",
    "desc": "CENTRIFUGO HERCULES 56 2P 105029025",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CENTRF HERC 56",
    "desc": "CENTRIFUGO HERCULES 56 4P 105029031",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CNTKONV482P 2",
    "desc": "CENTRIFUGO KOHLBACH 48 - 2P NV C/CARRETE",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKONV484P",
    "desc": "CENTRIFUGO KOHLBACH 48 - 4P NV C/CARRETE",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKONV562P",
    "desc": "CENTRIFUGO KOHLBACH 56 - 2P NV C/CARRETE",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKONV564P 2",
    "desc": "CENTRIFUGO KOHLBACH 56 - 4P NV C/CARRETE",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKOANTGGDE2P",
    "desc": "CENTRIFUGO KOHLBACH ANTIGO GRANDE - 2 PO",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKOANTGGDE4P",
    "desc": "CENTRIFUGO KOHLBACH ANTIGO GRANDE - 4 PO",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKOANTGPEQ2P",
    "desc": "CENTRIFUGO KOHLBACH ANTIGO PEQUENO - 2 P",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKOANTGPEQ4P",
    "desc": "CENTRIFUGO KOHLBACH ANTIGO PEQUENO - 4 P",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKONVSS562P",
    "desc": "CENTRIFUGO KOHLBACH NOVISSIMO 48/56/56H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "CNTKONVSS564P",
    "desc": "CENTRIFUGO KOHLBACH NOVISSIMO 48/56/56H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10016988",
    "desc": "CENTRIFUGO WEG ORIGINAL 132 2P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10016989",
    "desc": "CENTRIFUGO WEG ORIGINAL 132 4P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ENSELLI 12,000",
    "desc": "CENTRIFUGO WEG ORIGINAL 42 2P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ENSELLI",
    "desc": "CENTRIFUGO WEG ORIGINAL 42 4P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10016971",
    "desc": "CENTRIFUGO WEG ORIGINAL 48 2P 63-71-80",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10016972",
    "desc": "CENTRIFUGO WEG ORIGINAL 48 4P 63-71-80",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10361407",
    "desc": "CENTRIFUGO WEG ORIGINAL 56H 2P 90 F18M",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10016973",
    "desc": "CENTRIFUGO WEG ORIGINAL 56H 4P 90 F18M",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ENSELLI -46,000",
    "desc": "CENTRIFUGO WEG ORIGINAL 63 2P",
    "marca": "ENSELLI",
    "uni": "KG",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "132-2P",
    "desc": "CENTRIFUGO WEG SIMILAR 132 2P",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "132-4P",
    "desc": "CENTRIFUGO WEG SIMILAR 132 4P",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "42 2P",
    "desc": "CENTRIFUGO WEG SIMILAR 42 2P",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "42 4P",
    "desc": "CENTRIFUGO WEG SIMILAR 42 4P",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "169",
    "desc": "CENTRIFUGO WEG SIMILAR 48H 2P F16MM",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "48 4P",
    "desc": "CENTRIFUGO WEG SIMILAR 48H 4P F16MM",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "168",
    "desc": "CENTRIFUGO WEG SIMILAR 56H 2P F18MM",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "D' SANTES 58,000",
    "desc": "CENTRIFUGO WEG SIMILAR 56H 4P F18MM",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "16181307",
    "desc": "CESTO COLETOR PRE FILTRO BOMBA A ( LA",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60550347",
    "desc": "CESTO PRE FILTRO BOMBA DANCOR PF-22",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070034",
    "desc": "CESTO PRE FILTRO BOMBA NAUTILUS NBF",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-135",
    "desc": "CESTO PRE FILTRO BOMBA VINEW-MEKA 1.1/2",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CESTO PFAQUEX 2",
    "desc": "CESTO PRE FILTRO C/ ALÇA AQUEX 85207 28",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "005211",
    "desc": "CESTO PRE FILTRO S/ ALÇA SODRAMAR",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "5211",
    "desc": "CESTO PRE FILTRO SEM ALÇA SODRAMAR",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60550306P",
    "desc": "CESTO PRE-FILTRO PF-17 DANCOR",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CESTO 56 LTS 10",
    "desc": "CESTO REDONDO C/ TAMPA 56 LTS CAM ANTA",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CESTO 60 LTS 80",
    "desc": "CESTO REDONDO C/ TAMPA 60 LTS JAGUAR",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "COBRE CHAPA RET",
    "desc": "CHAPA BARRA COBRE RETANGULAR",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RT1021",
    "desc": "CHAVE ALAVANCA JNG RT1021 UNIPOLAR L/D",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RT1221",
    "desc": "CHAVE ALAVANCA JNG RT1221 BIPOLAR L/D",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RT1322",
    "desc": "CHAVE ALAVANCA JNG RT1322 3 POSIÇÕES L/D",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHALMG20A2P 123",
    "desc": "CHAVE ALAVANCA MG LIGA / DESL BIP. 20AM",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "CHAVE ALAVANCA MG LIGA / DESL TRIP. 20A",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "1021B 9389",
    "desc": "CHAVE ALAVANCA SBTC 1021B 2 POSIÇÕES L",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "1122B",
    "desc": "CHAVE ALAVANCA SBTC 1122B 3 POSIÇÕES L",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "1403B",
    "desc": "CHAVE ALAVANCA SBTC 1403B 3 POS 3POLO 9",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "122400",
    "desc": "CHAVE ALLEN HEXA JG 09 PÇS 1,5 A 10 MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "075722",
    "desc": "CHAVE ALLEN HEXA JG 25 PÇS THOMPSON 1",
    "marca": "TAMBASA",
    "uni": "CNJ",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 2,000",
    "desc": "CHAVE ALLEN HEXA JG LONGA BELZER 1,5-10M",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "075620",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 1/4\" CURT",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 2,000",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 3/16\" CUR",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 3,000",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 5/16\" CUR",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH ALLEN 5/32 S",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 5/32\" CURT",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 4MM CURTA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 5MM CURTA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005234",
    "desc": "CHAVE ALLEN HEXAGONAL BELZER 6MM CURTA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHALL8MMSATA CU",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 8MM CURTA",
    "marca": "SATA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHALL10MMSATA C",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 10MM CURTA",
    "marca": "SATA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHALLEN12MMLGSA",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 12MM LONGA",
    "marca": "SATA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PEDIR",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 14MM LONGA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 3MM LONGA",
    "marca": "BELZER SATA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "122393",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 4MM LONGA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "5MM L",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 5MM LONGA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA -3,000",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 6MM LONGA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 2,000",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 7MM LONGA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHALL8MMSATA LO",
    "desc": "CHAVE ALLEN HEXAGONAL SATA 8MM LONGA",
    "marca": "SATA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3573025001",
    "desc": "CHAVE ALLEN HEXAGONAL VONDER 2,5MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH ALLEN 2,5MM",
    "desc": "CHAVE ALLEN HEXAGONAL VONDER 2,5MM LONG",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110525",
    "desc": "CHAVE BIELA BESTFER 10MM IGUAL L VAZADO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110526",
    "desc": "CHAVE BIELA BESTFER 11MM IGUAL L VAZADO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "CHAVE BIELA BESTFER 13MM IGUAL L VAZADO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA -1,000",
    "desc": "CHAVE BIELA MAYLE 08MM IGUAL L",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S/REF",
    "desc": "CHAVE BIELA MAYLE 09MM IGUAL L",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645121679",
    "desc": "CHAVE BIELA MAYLE 10MM IGUAL L",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645121686",
    "desc": "CHAVE BIELA MAYLE 11MM IGUAL L",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645121693",
    "desc": "CHAVE BIELA MAYLE 12MM IGUAL L",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645121709",
    "desc": "CHAVE BIELA MAYLE 13MM IGUAL L",
    "marca": "MAYLE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645121716",
    "desc": "CHAVE BIELA MAYLE 14MM IGUAL L",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "055709",
    "desc": "CHAVE BIELA MAYLE 16MM IGUAL L",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "CHAVE BIELA MAYLE 17MM IGUAL L",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3698106000",
    "desc": "CHAVE BIELA VONDER 06MM IGUAL L VAZADO",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3698107000",
    "desc": "CHAVE BIELA VONDER 07MM IGUAL L VAZADO",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3027060701",
    "desc": "CHAVE BOCA MAYLE 06X07 MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "CHAVE BOCA MAYLE 08X09MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005986",
    "desc": "CHAVE BOCA MAYLE 1/2X9/16",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005822",
    "desc": "CHAVE BOCA MAYLE 10X11MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005823",
    "desc": "CHAVE BOCA MAYLE 12X13MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005824",
    "desc": "CHAVE BOCA MAYLE 14X15MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005825",
    "desc": "CHAVE BOCA MAYLE 16X17MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005826",
    "desc": "CHAVE BOCA MAYLE 18X19MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3027202201",
    "desc": "CHAVE BOCA MAYLE 20X22MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHBOCA21X23 MAY",
    "desc": "CHAVE BOCA MAYLE 21X23MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHBOCA24X26 MAY",
    "desc": "CHAVE BOCA MAYLE 24X26MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BOIA JOIHA 25A",
    "desc": "CHAVE BOIA JNG 25A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 4,000",
    "desc": "CHAVE BOIA JOIHA 25 AMP",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHBOIAKFS1INOX",
    "desc": "CHAVE BOIA KF-S1 CHAVE NIVEL INOX 150MM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "081927",
    "desc": "CHAVE BOIA MARGIRIUS 15 AMP",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "081928",
    "desc": "CHAVE BOIA MARGIRIUS 25 AMP",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MINI BOIA",
    "desc": "CHAVE BOIA ZPC5 SBTC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "8X125MM",
    "desc": "CHAVE CANHAO BELZER 08X125MM",
    "marca": "BELZER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "55735",
    "desc": "CHAVE CANHAO BELZER 10X125MM",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110510",
    "desc": "CHAVE CANHAO BESTFER 06X125MM",
    "marca": "BESTFER",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110511",
    "desc": "CHAVE CANHAO BESTFER 07 X 125MM 11",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH08X125CNHBE 1",
    "desc": "CHAVE CANHAO BESTFER 08X125MM",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10X125MM",
    "desc": "CHAVE CANHAO BESTFER 10X125MM",
    "marca": "BESTFER",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "55591",
    "desc": "CHAVE CANHAO FAMASTIL 09 X 125MM",
    "marca": "FAMASTIL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHCANHAO 7MM FA",
    "desc": "CHAVE CANHAO FAMASTIL 7MM CACHIMBO LONG",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHCNH11X125THM",
    "desc": "CHAVE CANHAO THOMPSON 11X125MM CRV",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHCNH12X125TH 1",
    "desc": "CHAVE CANHAO THOMPSON 12X125MM CRV",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHCNH13X125TH 1",
    "desc": "CHAVE CANHAO THOMPSON 13X125MM CRV",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 1,000",
    "desc": "CHAVE CANHÃO VONDER 08X125MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN -2,000",
    "desc": "CHAVE CANO GRIFO 10\" MAYLE",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 6MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3007070001",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 7 MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHCOMB MAYLE 11",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 11 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CHCOMB MAYLE 12",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 12 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CHCOMB MAYLE 13",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 13 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CHCOMB MAYLE 14",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 14 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CHCOMB MAYLE 15",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 15 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CHCOMB MAYLE 17",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) 17 MM",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "6 A 22MM",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) JG 6",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH COMB THOMP 6",
    "desc": "CHAVE COMBINADA ( BOCA / ESTRIA ) JG 6",
    "marca": "THOMPSON",
    "uni": "CNJ",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "086656",
    "desc": "CHAVE ESTRIA FOXLUX FAMASTIL ( ESTRELA",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005265",
    "desc": "CHAVE ESTRIA MAYLE 1/2X9/16",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3017060701",
    "desc": "CHAVE ESTRIA MAYLE 06X07MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "5742",
    "desc": "CHAVE ESTRIA MAYLE 08X09MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005827",
    "desc": "CHAVE ESTRIA MAYLE 10X11MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005828",
    "desc": "CHAVE ESTRIA MAYLE 12X13MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005829",
    "desc": "CHAVE ESTRIA MAYLE 14X15MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005830",
    "desc": "CHAVE ESTRIA MAYLE 16X17MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005831",
    "desc": "CHAVE ESTRIA MAYLE 18X19MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHESTRIA20X22 M",
    "desc": "CHAVE ESTRIA MAYLE 20X22MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHESTRIA21X23 M",
    "desc": "CHAVE ESTRIA MAYLE 21X23MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHESTRIA24X26MA",
    "desc": "CHAVE ESTRIA MAYLE 24X26MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645097820",
    "desc": "CHAVE FENDA MAYLE 1/4X5",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHFNDMAYLE1/8X4",
    "desc": "CHAVE FENDA MAYLE 1/8X4",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "055123",
    "desc": "CHAVE FENDA MAYLE 1/8X5",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7891645097677",
    "desc": "CHAVE FENDA MAYLE 3/16X6",
    "marca": "MAYLE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "30.70.903.810",
    "desc": "CHAVE FENDA NOVE54 3/8X10\"",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "30.70.905.165",
    "desc": "CHAVE FENDA NOVE54 5/16X5\"",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "005596",
    "desc": "CHAVE FENDA TRAMONTINA 1/8X5",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110308",
    "desc": "CHAVE FENDA TRAMONTINA INTERCAMBIAVEIS 6",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3070218200",
    "desc": "CHAVE FENDA VONDER 1/8X2\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "CHAVE FENDA VONDER 1/8X5\" PLUS",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LXK P106 JNG 1",
    "desc": "CHAVE FIM DE CURSO JNG LXK P106",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LXK-M106 JNG",
    "desc": "CHAVE FIM DE CURSO JNG LXK-M106",
    "marca": "JNG",
    "uni": "CX",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LXK-P121 JNG",
    "desc": "CHAVE FIM DE CURSO JNG LXK-P121",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RA7310 JNG 54",
    "desc": "CHAVE FIM DE CURSO JNG RA7310 10A 250V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RME8108 JNG 1",
    "desc": "CHAVE FIM DE CURSO JNG RME8108",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RME8111 JNG",
    "desc": "CHAVE FIM DE CURSO JNG RME8111",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RME8112 JNG",
    "desc": "CHAVE FIM DE CURSO JNG RME8112",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RME8122 JNG",
    "desc": "CHAVE FIM DE CURSO JNG RME8122",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ME8169 SBTC 57",
    "desc": "CHAVE FIM DE CURSO SBTC ME8169 METALICO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANGLD1P2POSD",
    "desc": "CHAVE GANG. BOTAO REDONDO 1P. 2POS. L/D",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANGBTRD LDL",
    "desc": "CHAVE GANG. BOTAO REDONDO L/D/L PRETO 3",
    "marca": "SHOPPE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANG LK1 5 10",
    "desc": "CHAVE GANG. BOTAO REDONDO LK1-5-101 ON O",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C17856 1996",
    "desc": "CHAVE GANG. BOTAO RETANG C17856 3TPT 6A",
    "marca": "CARBONPEÇAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANG LK1 2 10",
    "desc": "CHAVE GANG. BOTAO RETANG LK1 2- 103 ON",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHV GANG LK1-10",
    "desc": "CHAVE GANG. BOTAO RETANG LK1-101 ON OF",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANGLK1 102 O",
    "desc": "CHAVE GANG. BOTAO RETANG LK1-102 ON O",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANG LK2 LD 4",
    "desc": "CHAVE GANG. BOTAO RETANG LK2-201 ON OF",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANGRET1P2POS",
    "desc": "CHAVE GANG. BOTAO RETANG 1P. 2POS. L/D",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ALIEXPRESS 9,000",
    "desc": "CHAVE GANG. BOTAO RETANG 1P. 2POS. L/D C",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH GANG XKJ 19",
    "desc": "CHAVE GANG. BOTAO RETANG 2P 2POS L/D XKJ",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHGANG2P2POS 36",
    "desc": "CHAVE GANG. BOTAO RETANG AM 2P. 2POS. L/",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C17863 2473",
    "desc": "CHAVE GANG. BOTAO RETANG L/D 6A 125V ON",
    "marca": "CARBONPEÇAS",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C17902 2265",
    "desc": "CHAVE GANG. BOTAO RETANG L/D ON/OF 2T C",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C17915 259",
    "desc": "CHAVE GANG. BOTAO RETANG L/D ON/OF 3T P",
    "marca": "CARBONPEÇAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CARBONPEÇAS -5,000",
    "desc": "CHAVE GANG. BOTAO RETANG PULSO PT 2P. 2P",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHHEXALJGT-10/4",
    "desc": "CHAVE HEXALOBULAR JOGO T-10 A T-40 ( L",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3573200040",
    "desc": "CHAVE HEXALOBULAR T-40 ( L PRETA ) C/",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN 10,000",
    "desc": "CHAVE HEXALOBULAR T-45 ( L PRETA ) C/",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN 3,000",
    "desc": "CHAVE HEXALOBULAR T-50 ( L PRETA ) C/",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "075669",
    "desc": "CHAVE INGLESA AJUSTAVEL THOMPSON 08",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "075668",
    "desc": "CHAVE INGLESA AJUSTAVEL THOMPSON 10",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 0,5",
    "desc": "CHAVE MAGNETICA JNG QCX2-09 0,5CV 1,6-2,",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 1,5",
    "desc": "CHAVE MAGNETICA JNG QCX2-09 1,5CV 4-6A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 1 CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-09 1CV 2,5-4A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 2 CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-09 2CV 5,5-8A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 3 CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-09 3CV 7-10A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 4 CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-12 4CV 9-13A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 5 CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-18 5CV 12-18A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 7,5",
    "desc": "CHAVE MAGNETICA JNG QCX2-25 7,5CV 17-25",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 10CV",
    "desc": "CHAVE MAGNETICA JNG QCX2-32 10CV 23-32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RQCX2-12 4CV",
    "desc": "CHAVE MAGNETICA JNG RQCX2-12 4CV 9-13A C",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RQCX3-09 3CV",
    "desc": "CHAVE MAGNETICA JNG RQCX3-09 3CV 7-10A C",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RQCX3-18 5CV",
    "desc": "CHAVE MAGNETICA JNG RQCX3-18 5CV 12-18A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "011783",
    "desc": "CHAVE MAGNETICA SBTC QCX2-093 1,5CV 4-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "011786",
    "desc": "CHAVE MAGNETICA SBTC QCX2-124 2CV 5,5-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "011789",
    "desc": "CHAVE MAGNETICA SBTC QCX2-185 3CV 7-10",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "011792",
    "desc": "CHAVE MAGNETICA SBTC QCX2-187 4CV 9-13",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH MG 2510 SB 1",
    "desc": "CHAVE MAGNETICA SBTC QCX2-2510 5CV 12-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH MAG 3215 SB",
    "desc": "CHAVE MAGNETICA SBTC QCX2-3215 7,5CV 1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CH MAG 3220 SB",
    "desc": "CHAVE MAGNETICA SBTC QCX2-3220 10,0CV",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 4 CV",
    "desc": "CHAVE MAGNETICA WEG 10-15A PDW04-4V25 4",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 6CV",
    "desc": "CHAVE MAGNETICA WEG 15-23A PDW04-6V25",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE MAG. 2 CV",
    "desc": "CHAVE MAGNETICA WEG 5,6-7A PDW02-2V25 2",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "66700030000",
    "desc": "CHAVE MANDRIL VONDER VDC-3",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "6670005000",
    "desc": "CHAVE MANDRIL VONDER VDC-5",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JLAY5-PA22",
    "desc": "CHAVE MANIPULADORA JNG JLAY5-PA22 (JOYST",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JLAY-PA24",
    "desc": "CHAVE MANIPULADORA JNG JLAY5-PA24 (JOYST",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "123972",
    "desc": "CHAVE MARGIRIUS CS-301A 20A BIPOLAR",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CS-301A 3P",
    "desc": "CHAVE MARGIRIUS CS-301A 20A TRIPOLAR",
    "marca": "MARGIRIUS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C4 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC C4 2CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C5 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC C5 3CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V2 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V2 1/2CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V3 ACG",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V3 1CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V3,15 AGC 1CV",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V3,15 1,0CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V35,15 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V35,15 1,5C",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V4 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V4 2CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V4,15 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V4,15 2CV",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V5",
    "desc": "CHAVE PARTIDA ELETRONICA AGC V5 3CV",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VR3 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC VR3 1/2",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VR4 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC VR4 1,5",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VR5 AGC",
    "desc": "CHAVE PARTIDA ELETRONICA AGC VR5 1,5 A",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ELECTRYON 5,000",
    "desc": "CHAVE PARTIDA ELETRONICA D\" 1/2 CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C4 STARTRON",
    "desc": "CHAVE PARTIDA ELETRONICA STARTRON C4",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "V4 STARTRON",
    "desc": "CHAVE PARTIDA ELETRONICA STARTRON V4",
    "marca": "STARTRON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "110171",
    "desc": "CHAVE PHILLIPS MAYLE 1/4X5",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "055066",
    "desc": "CHAVE PHILLIPS MAYLE 1/8X3.1/4",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3/16X4",
    "desc": "CHAVE PHILLIPS MAYLE 3/16X4\"",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "5/16X8",
    "desc": "CHAVE PHILLIPS NOVE54 5/16X8\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7898011975096",
    "desc": "CHAVE PHILLIPS THOMPSON 1/8 X 3\" PROF.",
    "marca": "THOMPSON",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "75692",
    "desc": "CHAVE PHILLIPS THOMPSON 3/16 X 4\" PROF.",
    "marca": "THOMPSON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7898105776233",
    "desc": "CHAVE PHILLIPS TOCO FAMASTIL 3/16 X 1.1",
    "marca": "FAMASTIL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "86707",
    "desc": "CHAVE PHILLIPS TOCO THOMP. 1/4 X 1.1/2",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C17888",
    "desc": "CHAVE PUSH BUTT ON PBS-102105 C17888",
    "marca": "CARBONPEÇAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SR-30",
    "desc": "CHAVE REVERSORA SCHAK SR 30A MONOFASICA",
    "marca": "SCHAK",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "KO-015 JNG",
    "desc": "CHAVE REVERSORA TRIF KO3-15 15A JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "KO3-30A 1",
    "desc": "CHAVE REVERSORA TRIF KO3-30 30A JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LAY5-BG2",
    "desc": "CHAVE ROTATIVA JNG LAY5-BG2 - 2 POS. C/",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BJ21",
    "desc": "CHAVE ROTATIVA JNG LAY5-BJ21 2POS ( 0-1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 1,000",
    "desc": "CHAVE ROTATIVA JNG LAY5-BJ33 3POS (1-0-",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LAY5-BJ53",
    "desc": "CHAVE ROTATIVA JNG LAY5-BJ53 3 POSIÇOES",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LAY5-EJ45",
    "desc": "CHAVE ROTATIVA JNG LAY5-EJ45 2 POSIÇÕES",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "0-1-2-3-4",
    "desc": "CHAVE ROTATIVA JNG LW26- 20 0-1-2-3-4 2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-20 6Q/2",
    "desc": "CHAVE ROTATIVA JNG LW26- 20 6Q/2 20A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-20 LH3/3",
    "desc": "CHAVE ROTATIVA JNG LW26- 20 LH3/3 AMMETE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-20 YH3/3 V",
    "desc": "CHAVE ROTATIVA JNG LW26- 20 YH3/3 VOLTME",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-25 6.S/4",
    "desc": "CHAVE ROTATIVA JNG LW26- 25 6.S/4 25A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-32 6Q/2",
    "desc": "CHAVE ROTATIVA JNG LW26- 32 6.Q/2 32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-32 6S/4 32",
    "desc": "CHAVE ROTATIVA JNG LW26- 32 6.S/4 32 2",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "D0081",
    "desc": "CHAVE ROTATIVA JNG LW26- 32 D0081/1 32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-32 D0723",
    "desc": "CHAVE ROTATIVA JNG LW26- 32 D0723/3 32A",
    "marca": "JNG",
    "uni": "PÇ",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-32 1050/4",
    "desc": "CHAVE ROTATIVA JNG LW26- 32 D1050/4 32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-63 6Q2",
    "desc": "CHAVE ROTATIVA JNG LW26- 63 6.Q/2 63A 1",
    "marca": "JNG",
    "uni": "PÇ",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-63 723",
    "desc": "CHAVE ROTATIVA JNG LW26- 63 D0723/3 63A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW6-63 1050",
    "desc": "CHAVE ROTATIVA JNG LW26- 63 D1050/4 63A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-125 6Q2",
    "desc": "CHAVE ROTATIVA JNG LW26-125 6.Q/2 125A",
    "marca": "JNG",
    "uni": "PÇ",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-125 723",
    "desc": "CHAVE ROTATIVA JNG LW26-125 D0723/3 125A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-125 1050",
    "desc": "CHAVE ROTATIVA JNG LW26-125 D1050/4 125A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-160 6Q/2",
    "desc": "CHAVE ROTATIVA JNG LW26-160 6.Q/2 160A",
    "marca": "LW26-160 6Q/",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-160 723",
    "desc": "CHAVE ROTATIVA JNG LW26-160 D0723/3 160A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LW26-160 1050",
    "desc": "CHAVE ROTATIVA JNG LW26-160 D1050/4 160A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CA10BRD369KN2 1",
    "desc": "CHAVE ROTATIVA KAUS N. 20A TQ LEITE CA10",
    "marca": "KRAUS NAIMER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ED21 2POS PLAST",
    "desc": "CHAVE ROTATIVA LKM LK2-ED21 2 POS 1NA -",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BJ21SBTC",
    "desc": "CHAVE ROTATIVA SBTC XB2-BJ21 2POS ( 0-1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BJ33 SBTC 3103",
    "desc": "CHAVE ROTATIVA SBTC XB2-BJ33 3POS (1-0-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "BJ53 C/RET SBTC",
    "desc": "CHAVE ROTATIVA SBTC XB2-BJ53 3POS (1-0-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ED21 SBTC 4396",
    "desc": "CHAVE ROTATIVA SBTC XB2-ED21 2 POS 1NA -",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "EJ33 SBTC",
    "desc": "CHAVE ROTATIVA SBTC XB2-EJ33 3 POSIÇÕES",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TET30 SCHAK",
    "desc": "CHAVE SCHAK ESTRELA TRIANGULO 10HP 30A",
    "marca": "SCHAK",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TET45 SCHAK",
    "desc": "CHAVE SCHAK ESTRELA TRIANGULO 15HP 45A",
    "marca": "SCHAK",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TET20 SCHAK",
    "desc": "CHAVE SCHAK ESTRELA TRIANGULO 7,5HP 20A",
    "marca": "SCHAK",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LD-315 SCHAK",
    "desc": "CHAVE SCHAK LIGA/DESLIGA TRIFASICA LD-31",
    "marca": "SCHAK",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHSECC160ANH00",
    "desc": "CHAVE SECCIONADORA SBTC 160A TL00 NH00 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHSECC250ANH1 S",
    "desc": "CHAVE SECCIONADORA SBTC 250A TL1 NH1 3PO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SEL CSM GNCHO C",
    "desc": "CHAVE SELETORA GUINCHO CSM 24A TENSAO 1",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CHAVE SELETORA",
    "desc": "CHAVE SELETORA MONOFÁSICA CSM 110/220V",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SEL MENEGOTTI G",
    "desc": "CHAVE SELETORA TENSAO 110/220V S003397 G",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SEL TRAPP FUSVE",
    "desc": "CHAVE SELETORA VOLTAGEM 1 CV 25A C/ FUSÍ",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40070138",
    "desc": "CHAVE TAMPA PRE-FILTRO BOMBA NAUTILUS NB",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "CHTESTE",
    "desc": "CHAVE TESTE TENSAO SFGC 8868",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7898105776769",
    "desc": "CHAVE TORX FAMASTIL KIT C/ 9 PEÇAS FOX",
    "marca": "FOXLUX",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "T15X4 CHAVE TOR",
    "desc": "CHAVE TORX T15 X 4\" BESTFER CABO LAR",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "T20X4 CHAVE TOR",
    "desc": "CHAVE TORX T20 X 4\" BESTFER CABO LA",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "T25X4 CHAVE TOR",
    "desc": "CHAVE TORX T25 X 4\" BESTFER CABO LAR",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JCGLZ-160A 3P J",
    "desc": "CHAVE TRANSFERENCIA JNG MANUAL 160A 3P",
    "marca": "JCGLZ-250A 3P J",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JCGLZ-250A 3P J",
    "desc": "CHAVE TRANSFERENCIA JNG MANUAL 250A 3P",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 1,000",
    "desc": "CHAVE VENTILADOR VENTISOL DIMMER REGULAD",
    "marca": "VENTISOL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FSW250 SECÇ250A",
    "desc": "CHAVE WEG SECCIONADORA SACA FUSIVEL FSW-",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "07729-1",
    "desc": "CHAVETA DARKA PHVD",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "014109409",
    "desc": "CHAVETA JACUZZI MA MB MC 5X5X178MM",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270408922",
    "desc": "CHAVETA THEBE 3/16 X 3/16 X 161,5MM",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270408928",
    "desc": "CHAVETA THEBE 3/16 X 3/16 X 253MM",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CHAVETA 112 8X7",
    "desc": "CHAVETA WEG 100 / 112 8 X 7 X 45 EI",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "CHAVETA 132 10",
    "desc": "CHAVETA WEG 132 10 X 8 X 63",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "101030 8216",
    "desc": "CLARIFICANTE ATCLLOR FOLC HIDROFLOC HIDR",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CLIMATIZADOR 65",
    "desc": "CLIMATIZADOR AR 65 LTS 127V ELGIN",
    "marca": "ELGIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "8826",
    "desc": "CLORADOR FLUTUADOR BRUSTEC",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CLORO BALDE 10K",
    "desc": "CLORO PISCINA HIPOCLOR HIDROALL 10 KG",
    "marca": "PISCINA PRODUT",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "29684",
    "desc": "CLORO PISCINA TABLETE 200GR GENCO MULTI",
    "marca": "GENCO",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CLOROPASTATCLLO",
    "desc": "CLORO PISCINA TABLETE 200GR PROTAB ATCLL",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "19746",
    "desc": "COLA INSTANT. 20 GR ALMASUPER 401 ( BON",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "019609",
    "desc": "COLA SILICONE ORBVED ALTA TEMPERATURA 50",
    "marca": "ORBI QUIMICA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "089329",
    "desc": "COLA SILICONE POLYSTIC 50G TRANSPARENTE",
    "marca": "POLYSTIC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "019469",
    "desc": "COLA SILICONE TEKBOND ALTA TEMPERATURA",
    "marca": "TEK BOND",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "47989",
    "desc": "COLA SILICONE TEKBOND ALTA TEMPERATURA",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "019487",
    "desc": "COLA SILICONE TEKBOND 50G TRANSPARENTE",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VEDA JUNTA",
    "desc": "COLA VEDA JUNTA MOTOR DIESEL 3M 75GR",
    "marca": "3M",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "3M 17,000",
    "desc": "CONECTOR BIMETALICO 70 MM",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "123666",
    "desc": "CONECTOR DERIV PERF CDP 120-120 INTE",
    "marca": "INTELLI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CDP120-120 PMML",
    "desc": "CONECTOR DERIV PERF CDP 120-120M PIMME",
    "marca": "GM DIV - GIOVA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CDP120-35 PMML",
    "desc": "CONECTOR DERIV PERF CDP 120-35M PIMME",
    "marca": "GM DIV - GIOVA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CNCT CDP-150/35",
    "desc": "CONECTOR DERIV PERF CDP 150-35 INTELL",
    "marca": "INTELLI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CDP70 PMML",
    "desc": "CONECTOR DERIV PERF CDP 70 PIMMEL",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CDP70INTELLI",
    "desc": "CONECTOR DERIV PERF CDP 70 INTELLI",
    "marca": "INTELLI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "13160",
    "desc": "CONECTOR DERIV PERF JJC1-CU 6~95MM2 /",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "13162",
    "desc": "CONECTOR DERIV PERF JJC2-CU 16~95MM2 /",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "13164",
    "desc": "CONECTOR DERIV PERF JJC3-CU 50~150MM2",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KV226 2VIAS 41A",
    "desc": "CONECTOR EMENDA AUTOM KV226 - 2VIAS 41A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KV226 3VIAS 41A",
    "desc": "CONECTOR EMENDA AUTOM KV226 - 3VIAS 41A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KV226 4VIAS 41A",
    "desc": "CONECTOR EMENDA AUTOM KV226 - 4VIAS 41A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "U01",
    "desc": "CONECTOR EMENDA BORNE U01 2P JNG CINZA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "U02",
    "desc": "CONECTOR EMENDA BORNE U02 3P JNG CINZA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "UBC592",
    "desc": "CONECTOR EMENDA BORNE UBC-592 JNG 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "UBC593 3P JNG",
    "desc": "CONECTOR EMENDA BORNE UBC-593 JNG 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "UBC595",
    "desc": "CONECTOR EMENDA BORNE UBC-595 JNG 5P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3MB AZUL 0,8-2,",
    "desc": "CONECTOR EMENDA DERIV 3MB AZUL 1,5 -",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3MR VERM 0,5-1,",
    "desc": "CONECTOR EMENDA DERIV 3MR VERM 0,5 -",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3MY AMRL 2,5-10",
    "desc": "CONECTOR EMENDA DERIV 3MY AMARELO 4,0",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CGHT25SBTC 119",
    "desc": "CONECTOR GENER SBTC FRONTAL TDIN HT 25MM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CGHT225 LNG SB",
    "desc": "CONECTOR GENER SBTC FRONTAL TDIN HT2 25M",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CG25MMCRT JNG",
    "desc": "CONECTOR GENERICO JNG 25MM 63A FRONTA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "50MM",
    "desc": "CONECTOR GENERICO JNG 50MM 130A FRON",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "081286",
    "desc": "CONECTOR ISOLANTE ELETRONICO TORÇAO P4H",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "081292",
    "desc": "CONECTOR ISOLANTE ELETRONICO TORÇAO P6H",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CONECTOR MC4 JN",
    "desc": "CONECTOR MC4 ( PAR ) P/ SIST FOTOVOTAICO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB4L",
    "desc": "CONECTOR SINDAL JNG 4 MM JMB-4 L MULT",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB6",
    "desc": "CONECTOR SINDAL JNG 6 MM JMB-6 MULTIP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB10L",
    "desc": "CONECTOR SINDAL JNG 10 MM JMB-10L MULTI",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB16",
    "desc": "CONECTOR SINDAL JNG 16 MM JMB-16 MULTIP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB25",
    "desc": "CONECTOR SINDAL JNG 25 MM JMB-25 MULTIP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JMB35",
    "desc": "CONECTOR SINDAL JNG 35 MM JMB-35 MULTIP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SINDAL 10MM",
    "desc": "CONECTOR SUPREM 250V - 10MM C/12 (SINDA",
    "marca": "CEMAR",
    "uni": "BAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SINDAL 16MM",
    "desc": "CONECTOR SUPREM 250V - 16MM C/12 (SINDAL",
    "marca": "CEMAR",
    "uni": "BAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SINDAL 2,5MM",
    "desc": "CONECTOR SUPREM 250V - 2,5MM C/12 (SINDA",
    "marca": "CEMAR",
    "uni": "BAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BORNE 25 CEMAR",
    "desc": "CONECTOR SUPREM 250V - 25MM UNIDADE PRE",
    "marca": "CEMAR",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SINDAL 25MM",
    "desc": "CONECTOR SUPREM 250V - 25MM C/12 (SINDAL",
    "marca": "CEMAR",
    "uni": "BAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SINDAL 6MM",
    "desc": "CONECTOR SUPREM 250V - 6,0MM C/12 (SINDA",
    "marca": "CEMAR",
    "uni": "BAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBS-10A",
    "desc": "CONECTOR TIPO SINDAL SB TBS-10A 6MM FLEX",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBS-30A",
    "desc": "CONECTOR TIPO SINDAL SB TBS-30A 10MM FLE",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBS60A SBTC 16M",
    "desc": "CONECTOR TIPO SINDAL SB TBS-60A 16MM FLE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBS-6A 11926",
    "desc": "CONECTOR TIPO SINDAL SB TBS-6A 4MM FLEX",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SP-2 AZUL 0,8-4",
    "desc": "CONECTOR TORÇAO SP-2 AZUL 0,8 A 4,5MM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SP-3 LRNJ 1,5-6",
    "desc": "CONECTOR TORÇAO SP-3 LARANJA 1,5 A 6,",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SP-4 AMRLO 1,5-",
    "desc": "CONECTOR TORÇAO SP-4 AMARELO 2,5 A 10MM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "081288",
    "desc": "CONECTOR TORÇAO SP-1 DERIVAÇÃO CON-FIO S",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GANCHO + ABRAÇ",
    "desc": "CONJUNTO GANCHO + ABRAÇ MANG 1\"",
    "marca": "JOIHA E ANAU",
    "uni": "CNJ",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "GANCHO + ABRAÇ",
    "desc": "CONJUNTO GANCHO + ABRAÇ MANG 3/4\"",
    "marca": "JOIHA E ANAU",
    "uni": "CNJ",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "80560645",
    "desc": "CONJUNTO IMPULSOR DANCOR 2.1 B-14 / BHD-",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DANCOR 1,000",
    "desc": "CONJUNTO IMPULSOR DANCOR 3.2 B22",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "80560776",
    "desc": "CONJUNTO IMPULSOR DANCOR 3.2 B-15 / BHD-",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "80560777",
    "desc": "CONJUNTO IMPULSOR DANCOR 3.2 B-20 / BHD-",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "80561035",
    "desc": "CONJUNTO IMPULSOR DANCOR 8.3 B 20",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "PREFILTAQUEX280",
    "desc": "CONJUNTO PRE FILTRO AQUEX (8) CORPO RECA",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CSK6-YKW",
    "desc": "CONTADOR PULSO VOLTAS JNG CSK6-YKW 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VCM-5",
    "desc": "CONTADOR VOLTAS VONDER 5 DIGITOS VCM-5",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CJX1-110 3TF50",
    "desc": "CONTATOR JNG CJX1-110A 220V 3TF50",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX1-12 3TF41 J",
    "desc": "CONTATOR JNG CJX1-12A 220V 3TF41",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX1-140 220V",
    "desc": "CONTATOR JNG CJX1-140A 220V 3TF51",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3TF42 16A JNG",
    "desc": "CONTATOR JNG CJX1-16A 220V 3TF42",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3TF43",
    "desc": "CONTATOR JNG CJX1-22A 220V 3TF43",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX1-38 220V",
    "desc": "CONTATOR JNG CJX1-38A 220V 3TF45",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3TF46",
    "desc": "CONTATOR JNG CJX1-45A 110V 3TF46",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX1-63A 220V J",
    "desc": "CONTATOR JNG CJX1-63A 220V 3TF51",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3TF49",
    "desc": "CONTATOR JNG CJX1-85A 220V 3TF49",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX2 185 220V",
    "desc": "CONTATOR JNG CJX2- 185A 220V 1NA",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX2 225 220V",
    "desc": "CONTATOR JNG CJX2- 225A 220V 1NA",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX20910 127V",
    "desc": "CONTATOR JNG CJX2-09A 127V 1NA 15",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX20910 220V",
    "desc": "CONTATOR JNG CJX2-09A 220V 1NA 118",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX21201 220V",
    "desc": "CONTATOR JNG CJX2-12 01 220V 1NF",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX21210 127V",
    "desc": "CONTATOR JNG CJX2-12A 127V 1NA 15228",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX21210 220V",
    "desc": "CONTATOR JNG CJX2-12A 220V 1NA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX21810 127V",
    "desc": "CONTATOR JNG CJX2-18A 127V 1NA 152",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX21810 220V",
    "desc": "CONTATOR JNG CJX2-18A 220V 1NA 1186",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX22501 127V",
    "desc": "CONTATOR JNG CJX2-25 01 127V 1NF",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX22510 127V",
    "desc": "CONTATOR JNG CJX2-25A 127V 1NA 1523",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX22510 220V",
    "desc": "CONTATOR JNG CJX2-25A 220V 1NA 11",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX23210 127V",
    "desc": "CONTATOR JNG CJX2-32A 127V 1NA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX23210 220V",
    "desc": "CONTATOR JNG CJX2-32A 220V 1NA 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX24011 220V",
    "desc": "CONTATOR JNG CJX2-40A 220V 1NA+1NF",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX2 5011 220V",
    "desc": "CONTATOR JNG CJX2-50A 220V 1NA+1NF",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX26511 220V",
    "desc": "CONTATOR JNG CJX2-65A 220V 1NA 11868",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX28011 220V",
    "desc": "CONTATOR JNG CJX2-80A 220V 1NA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CJX29511 220V",
    "desc": "CONTATOR JNG CJX2-95A 220V 1NA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 4,000",
    "desc": "CONTATOR JNG MODULAR 25A 220V JCM-2520 2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC0910 220V SBT",
    "desc": "CONTATOR SBTC IC-09A 220V (CJX2) 1NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC1210 220V SBT",
    "desc": "CONTATOR SBTC IC-12A 220V (CJX2) 1NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC1810 220V SBT",
    "desc": "CONTATOR SBTC IC-18A 220V (CJX2) 0",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC2501 110V SBT",
    "desc": "CONTATOR SBTC IC-25A 110V (CJX2) 1NC 2",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC2510 220V SBT",
    "desc": "CONTATOR SBTC IC-25A 220V (CJX2) 1NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IC3210 220V SBT",
    "desc": "CONTATOR SBTC IC-32A 220V (CJX2) 1NA 0",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWB0911 220V WE",
    "desc": "CONTATOR WEG CWB 09 11 220V CWB9-11-",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWB1811 220V WE",
    "desc": "CONTATOR WEG CWB 18 11 220V CWB18-11",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWB2511 220V WE",
    "desc": "CONTATOR WEG CWB 25 11 220V CWB18-11",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWB3211 220V WE",
    "desc": "CONTATOR WEG CWB 32 11 220V CWB32-11",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM150 220V",
    "desc": "CONTATOR WEG CWM 150 22-30V26 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM180 10409925",
    "desc": "CONTATOR WEG CWM 180 22-30V26 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM250",
    "desc": "CONTATOR WEG CWM 250 22-30V26 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM0910 110V 30",
    "desc": "CONTATOR WEG CWM 09 110V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM0910 220V",
    "desc": "CONTATOR WEG CWM 09 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM1210 220V",
    "desc": "CONTATOR WEG CWM 12 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM1810 220V",
    "desc": "CONTATOR WEG CWM 18 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM2510 220V",
    "desc": "CONTATOR WEG CWM 25 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM3210 220V",
    "desc": "CONTATOR WEG CWM 32 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM4011 220V",
    "desc": "CONTATOR WEG CWM 40 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM5011 220V",
    "desc": "CONTATOR WEG CWM 50 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM6511 220V",
    "desc": "CONTATOR WEG CWM 65 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM8011 220V",
    "desc": "CONTATOR WEG CWM 80 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWM9511 220V",
    "desc": "CONTATOR WEG CWM 95 220V",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CAIXA SUPERMECA",
    "desc": "CONTETOR PLASTICO ( CAIXA PLASTICA ) 55",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "160000101",
    "desc": "CONTRA PINO COLORMAQ ACO ZINC 5X40X50MM",
    "marca": "COLORMAQ",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "COLORMAQ 20,000",
    "desc": "CONTRA PORCA LATÃO ORIG. SCHN 7/16X20UN",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "P16000",
    "desc": "CONTRA PORCA LATÃO SIM. SCHN ME-1 M17",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "P16001",
    "desc": "CONTRA PORCA LATÃO SIM. SCHN ME-2 7/16",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "INJET 6,000",
    "desc": "CONTROL BOX DONGYIN 0,75 HP",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "CONTROL BOX DONGYIN 1 HP",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "CONTROL BOX DONGYIN 1,5 HP",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DONGYIN 2,000",
    "desc": "CONTROL BOX EBARA 3 HP",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CONTRPRESSFERRC",
    "desc": "CONTROLADOR ELETR PRESSAO FERRARI CABF-1",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "STC-1000 BIVOLT",
    "desc": "CONTROLADOR TEMP TERMOSTATO STC-1000 BI",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "40070052",
    "desc": "COPO PRE-FILTRO BOMBA NAUTILUS NBF-ABS C",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "09976-7",
    "desc": "COROA DARKA PHVD 001 ABS",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3124902",
    "desc": "COROA GUIA MST 25 STARMAC ABS",
    "marca": "STARMAC ABS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "03160504",
    "desc": "CORPO JACUZZI 9836-5 P/ BOMBA A HI",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "40070046",
    "desc": "CORPO BOMBA NAUTILUS NBF/HM ( ENCAIXA",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "08504-9",
    "desc": "CORPO DARKA PHVD 067 1.1/2\" ABS",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "28070205",
    "desc": "CORPO ESPIRAL SIBRAPE BP MOD 4783",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "03160801",
    "desc": "CORPO JACUZZI PRE FILTRO BOMBA A",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "03156007",
    "desc": "CORPO JACUZZI 3294 DM2 FERRO ( TAMPA CAR",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "98796784",
    "desc": "CORPO MARK DS (TODAS)",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98796858",
    "desc": "CORPO MARK NDF-NDM FERRO FUNDIDO (TO",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98796844",
    "desc": "CORPO MARK NXDP ( PLASTICO SUCÇ/ SAIDA",
    "marca": "MARK",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "4781",
    "desc": "CORPO PLASTICO PARA BOMBA BM/BMC/BVV",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "004781",
    "desc": "CORPO PLASTICO SODRAMAR P/ BOMBA BM / B",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CRPRECAQUEXHIDR",
    "desc": "CORPO RECALQUE AQUEX TAMPA BOMBA HIDRO (",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "98797555",
    "desc": "CORPO RECALQUE HM 114,3 M5544 ( SAIDA",
    "marca": "20",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CRP SAIDA ME1",
    "desc": "CORPO SAIDA SCHNEIDER ME-1 1210/1315/1",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CORREIA ACO 175",
    "desc": "CORREIA ACOPLAMENTO GDE ( 175 / 06 ) (",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA ACO 130",
    "desc": "CORREIA ACOPLAMENTO MED ( 130 / 04 ) (",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA ACO 80",
    "desc": "CORREIA ACOPLAMENTO PEQ ( 80 / 03 ) (",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PHP500 BBP515 B",
    "desc": "CORREIA BATEDEIRA PLANETARIA HTD426 3M",
    "marca": "PHILCO",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V1000",
    "desc": "CORREIA EXTRA BELT 3V1000",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V1060",
    "desc": "CORREIA EXTRA BELT 3V1060",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V1120",
    "desc": "CORREIA EXTRA BELT 3V1120",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V1250",
    "desc": "CORREIA EXTRA BELT 3V1250",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V1320",
    "desc": "CORREIA EXTRA BELT 3V1320",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V250",
    "desc": "CORREIA EXTRA BELT 3V250",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V280",
    "desc": "CORREIA EXTRA BELT 3V280",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V300",
    "desc": "CORREIA EXTRA BELT 3V300",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V315",
    "desc": "CORREIA EXTRA BELT 3V315",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V335",
    "desc": "CORREIA EXTRA BELT 3V335",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V355",
    "desc": "CORREIA EXTRA BELT 3V355",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V375",
    "desc": "CORREIA EXTRA BELT 3V375",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V400",
    "desc": "CORREIA EXTRA BELT 3V400",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V405",
    "desc": "CORREIA EXTRA BELT 3V405",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V425",
    "desc": "CORREIA EXTRA BELT 3V425",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V450",
    "desc": "CORREIA EXTRA BELT 3V450",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V475",
    "desc": "CORREIA EXTRA BELT 3V475",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V500",
    "desc": "CORREIA EXTRA BELT 3V500",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V530",
    "desc": "CORREIA EXTRA BELT 3V530",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V600",
    "desc": "CORREIA EXTRA BELT 3V600",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V630",
    "desc": "CORREIA EXTRA BELT 3V630",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V670",
    "desc": "CORREIA EXTRA BELT 3V670",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V710",
    "desc": "CORREIA EXTRA BELT 3V710",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V750",
    "desc": "CORREIA EXTRA BELT 3V750",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V800",
    "desc": "CORREIA EXTRA BELT 3V800",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V850",
    "desc": "CORREIA EXTRA BELT 3V850",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3V950",
    "desc": "CORREIA EXTRA BELT 3V950",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A100",
    "desc": "CORREIA EXTRA BELT A100",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A104",
    "desc": "CORREIA EXTRA BELT A104",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A105",
    "desc": "CORREIA EXTRA BELT A105",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A110",
    "desc": "CORREIA EXTRA BELT A110",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A112",
    "desc": "CORREIA EXTRA BELT A112",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A116",
    "desc": "CORREIA EXTRA BELT A116",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A118",
    "desc": "CORREIA EXTRA BELT A118",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "BORPAC 9,000",
    "desc": "CORREIA EXTRA BELT A119",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A124",
    "desc": "CORREIA EXTRA BELT A124",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A17",
    "desc": "CORREIA EXTRA BELT A17",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A18",
    "desc": "CORREIA EXTRA BELT A18",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A19",
    "desc": "CORREIA EXTRA BELT A19",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A20",
    "desc": "CORREIA EXTRA BELT A20",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A21",
    "desc": "CORREIA EXTRA BELT A21",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A22",
    "desc": "CORREIA EXTRA BELT A22",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A24",
    "desc": "CORREIA EXTRA BELT A24",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A25",
    "desc": "CORREIA EXTRA BELT A25",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A26",
    "desc": "CORREIA EXTRA BELT A26",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A27",
    "desc": "CORREIA EXTRA BELT A27",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A28",
    "desc": "CORREIA EXTRA BELT A28",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A29",
    "desc": "CORREIA EXTRA BELT A29",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A30",
    "desc": "CORREIA EXTRA BELT A30",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A31",
    "desc": "CORREIA EXTRA BELT A31",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A32",
    "desc": "CORREIA EXTRA BELT A32",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A33",
    "desc": "CORREIA EXTRA BELT A33",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A34",
    "desc": "CORREIA EXTRA BELT A34",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A35",
    "desc": "CORREIA EXTRA BELT A35",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A36",
    "desc": "CORREIA EXTRA BELT A36",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A37",
    "desc": "CORREIA EXTRA BELT A37",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A38",
    "desc": "CORREIA EXTRA BELT A38",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A39",
    "desc": "CORREIA EXTRA BELT A39",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A40",
    "desc": "CORREIA EXTRA BELT A40",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A41",
    "desc": "CORREIA EXTRA BELT A41",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A42",
    "desc": "CORREIA EXTRA BELT A42",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A43",
    "desc": "CORREIA EXTRA BELT A43",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A44",
    "desc": "CORREIA EXTRA BELT A44",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A45",
    "desc": "CORREIA EXTRA BELT A45",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A46",
    "desc": "CORREIA EXTRA BELT A46",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A47",
    "desc": "CORREIA EXTRA BELT A47",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A48",
    "desc": "CORREIA EXTRA BELT A48",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A49",
    "desc": "CORREIA EXTRA BELT A49",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A50",
    "desc": "CORREIA EXTRA BELT A50",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A51",
    "desc": "CORREIA EXTRA BELT A51",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A52",
    "desc": "CORREIA EXTRA BELT A52",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A53",
    "desc": "CORREIA EXTRA BELT A53",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A54",
    "desc": "CORREIA EXTRA BELT A54",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A55",
    "desc": "CORREIA EXTRA BELT A55",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A56",
    "desc": "CORREIA EXTRA BELT A56",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A57",
    "desc": "CORREIA EXTRA BELT A57",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A58",
    "desc": "CORREIA EXTRA BELT A58",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A59",
    "desc": "CORREIA EXTRA BELT A59",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A60",
    "desc": "CORREIA EXTRA BELT A60",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A61",
    "desc": "CORREIA EXTRA BELT A61",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A62",
    "desc": "CORREIA EXTRA BELT A62",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A63",
    "desc": "CORREIA EXTRA BELT A63",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A64",
    "desc": "CORREIA EXTRA BELT A64",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A65",
    "desc": "CORREIA EXTRA BELT A65",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A66",
    "desc": "CORREIA EXTRA BELT A66",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A67",
    "desc": "CORREIA EXTRA BELT A67",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A68",
    "desc": "CORREIA EXTRA BELT A68",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A69",
    "desc": "CORREIA EXTRA BELT A69",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A70",
    "desc": "CORREIA EXTRA BELT A70",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A71",
    "desc": "CORREIA EXTRA BELT A71",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A72",
    "desc": "CORREIA EXTRA BELT A72",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A73",
    "desc": "CORREIA EXTRA BELT A73",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A74",
    "desc": "CORREIA EXTRA BELT A74",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A75",
    "desc": "CORREIA EXTRA BELT A75",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A76",
    "desc": "CORREIA EXTRA BELT A76",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A77",
    "desc": "CORREIA EXTRA BELT A77",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A78",
    "desc": "CORREIA EXTRA BELT A78",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A79",
    "desc": "CORREIA EXTRA BELT A79",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A80",
    "desc": "CORREIA EXTRA BELT A80",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A81",
    "desc": "CORREIA EXTRA BELT A81",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A82",
    "desc": "CORREIA EXTRA BELT A82",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A83",
    "desc": "CORREIA EXTRA BELT A83",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A84",
    "desc": "CORREIA EXTRA BELT A84",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A85",
    "desc": "CORREIA EXTRA BELT A85",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A86",
    "desc": "CORREIA EXTRA BELT A86",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A87",
    "desc": "CORREIA EXTRA BELT A87",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A88",
    "desc": "CORREIA EXTRA BELT A88",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A89",
    "desc": "CORREIA EXTRA BELT A89",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A90",
    "desc": "CORREIA EXTRA BELT A90",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A92",
    "desc": "CORREIA EXTRA BELT A92",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A93",
    "desc": "CORREIA EXTRA BELT A93",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A94",
    "desc": "CORREIA EXTRA BELT A94",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A95",
    "desc": "CORREIA EXTRA BELT A95",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A96",
    "desc": "CORREIA EXTRA BELT A96",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A97",
    "desc": "CORREIA EXTRA BELT A97",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "A98",
    "desc": "CORREIA EXTRA BELT A98",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX24",
    "desc": "CORREIA EXTRA BELT AX24",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX34",
    "desc": "CORREIA EXTRA BELT AX34",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX39",
    "desc": "CORREIA EXTRA BELT AX39",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX40",
    "desc": "CORREIA EXTRA BELT AX40",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX44",
    "desc": "CORREIA EXTRA BELT AX44",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX45",
    "desc": "CORREIA EXTRA BELT AX45",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX46",
    "desc": "CORREIA EXTRA BELT AX46",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX51",
    "desc": "CORREIA EXTRA BELT AX51",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX54",
    "desc": "CORREIA EXTRA BELT AX54",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX55",
    "desc": "CORREIA EXTRA BELT AX55",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "AX71",
    "desc": "CORREIA EXTRA BELT AX71",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B100",
    "desc": "CORREIA EXTRA BELT B100",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B102",
    "desc": "CORREIA EXTRA BELT B102",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B104",
    "desc": "CORREIA EXTRA BELT B104",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B105",
    "desc": "CORREIA EXTRA BELT B105",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B107",
    "desc": "CORREIA EXTRA BELT B107",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B108",
    "desc": "CORREIA EXTRA BELT B108",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B112",
    "desc": "CORREIA EXTRA BELT B112",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B120",
    "desc": "CORREIA EXTRA BELT B120",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B125",
    "desc": "CORREIA EXTRA BELT B125",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B131",
    "desc": "CORREIA EXTRA BELT B131",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B132",
    "desc": "CORREIA EXTRA BELT B132",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B135",
    "desc": "CORREIA EXTRA BELT B135 OUTRAS MAR",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B136",
    "desc": "CORREIA EXTRA BELT B136",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B138",
    "desc": "CORREIA EXTRA BELT B138",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B140",
    "desc": "CORREIA EXTRA BELT B140",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B142",
    "desc": "CORREIA EXTRA BELT B142",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B144",
    "desc": "CORREIA EXTRA BELT B144",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B150",
    "desc": "CORREIA EXTRA BELT B150",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B152",
    "desc": "CORREIA EXTRA BELT B152",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B170",
    "desc": "CORREIA EXTRA BELT B170",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B224",
    "desc": "CORREIA EXTRA BELT B224",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B225",
    "desc": "CORREIA EXTRA BELT B225",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B24",
    "desc": "CORREIA EXTRA BELT B24",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B25",
    "desc": "CORREIA EXTRA BELT B25",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B26",
    "desc": "CORREIA EXTRA BELT B26",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "20 5,000",
    "desc": "CORREIA EXTRA BELT B27",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B28",
    "desc": "CORREIA EXTRA BELT B28",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B30",
    "desc": "CORREIA EXTRA BELT B30",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B31",
    "desc": "CORREIA EXTRA BELT B31",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B32",
    "desc": "CORREIA EXTRA BELT B32",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B33",
    "desc": "CORREIA EXTRA BELT B33",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B34",
    "desc": "CORREIA EXTRA BELT B34",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B36",
    "desc": "CORREIA EXTRA BELT B36",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B37",
    "desc": "CORREIA EXTRA BELT B37",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B38",
    "desc": "CORREIA EXTRA BELT B38",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B39",
    "desc": "CORREIA EXTRA BELT B39",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B40",
    "desc": "CORREIA EXTRA BELT B40",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B42",
    "desc": "CORREIA EXTRA BELT B42",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B43",
    "desc": "CORREIA EXTRA BELT B43",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B44",
    "desc": "CORREIA EXTRA BELT B44",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B45",
    "desc": "CORREIA EXTRA BELT B45",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B46",
    "desc": "CORREIA EXTRA BELT B46",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B48",
    "desc": "CORREIA EXTRA BELT B48",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B49",
    "desc": "CORREIA EXTRA BELT B49",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B50",
    "desc": "CORREIA EXTRA BELT B50",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B51",
    "desc": "CORREIA EXTRA BELT B51",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B52",
    "desc": "CORREIA EXTRA BELT B52",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B53",
    "desc": "CORREIA EXTRA BELT B53",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B54",
    "desc": "CORREIA EXTRA BELT B54",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B55",
    "desc": "CORREIA EXTRA BELT B55",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B56",
    "desc": "CORREIA EXTRA BELT B56",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B57",
    "desc": "CORREIA EXTRA BELT B57",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B58",
    "desc": "CORREIA EXTRA BELT B58",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B59",
    "desc": "CORREIA EXTRA BELT B59",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B60",
    "desc": "CORREIA EXTRA BELT B60",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B61",
    "desc": "CORREIA EXTRA BELT B61",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B62",
    "desc": "CORREIA EXTRA BELT B62",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B63",
    "desc": "CORREIA EXTRA BELT B63",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B64",
    "desc": "CORREIA EXTRA BELT B64",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B65",
    "desc": "CORREIA EXTRA BELT B65",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B66",
    "desc": "CORREIA EXTRA BELT B66",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B67",
    "desc": "CORREIA EXTRA BELT B67",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B68",
    "desc": "CORREIA EXTRA BELT B68",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B69",
    "desc": "CORREIA EXTRA BELT B69",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B70",
    "desc": "CORREIA EXTRA BELT B70",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B71",
    "desc": "CORREIA EXTRA BELT B71",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B72",
    "desc": "CORREIA EXTRA BELT B72",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B73",
    "desc": "CORREIA EXTRA BELT B73",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B74",
    "desc": "CORREIA EXTRA BELT B74",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B75",
    "desc": "CORREIA EXTRA BELT B75",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B76",
    "desc": "CORREIA EXTRA BELT B76",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B78",
    "desc": "CORREIA EXTRA BELT B78",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B79",
    "desc": "CORREIA EXTRA BELT B79",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B80",
    "desc": "CORREIA EXTRA BELT B80",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B82",
    "desc": "CORREIA EXTRA BELT B82",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B83",
    "desc": "CORREIA EXTRA BELT B83",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B84",
    "desc": "CORREIA EXTRA BELT B84",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B85",
    "desc": "CORREIA EXTRA BELT B85",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B86",
    "desc": "CORREIA EXTRA BELT B86",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B87",
    "desc": "CORREIA EXTRA BELT B87",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B88",
    "desc": "CORREIA EXTRA BELT B88",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B90",
    "desc": "CORREIA EXTRA BELT B90",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B92",
    "desc": "CORREIA EXTRA BELT B92",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B93",
    "desc": "CORREIA EXTRA BELT B93",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B94",
    "desc": "CORREIA EXTRA BELT B94",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B95",
    "desc": "CORREIA EXTRA BELT B95",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B97",
    "desc": "CORREIA EXTRA BELT B97",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B99",
    "desc": "CORREIA EXTRA BELT B99",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "20 4,000",
    "desc": "CORREIA EXTRA BELT BX42",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "BX43",
    "desc": "CORREIA EXTRA BELT BX43 JUNINHO MAQ P",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C98",
    "desc": "CORREIA EXTRA BELT C 98",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C100",
    "desc": "CORREIA EXTRA BELT C100",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C102",
    "desc": "CORREIA EXTRA BELT C102",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C105",
    "desc": "CORREIA EXTRA BELT C105",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C128",
    "desc": "CORREIA EXTRA BELT C128",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C130",
    "desc": "CORREIA EXTRA BELT C130",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C136",
    "desc": "CORREIA EXTRA BELT C136",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C144",
    "desc": "CORREIA EXTRA BELT C144",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C156",
    "desc": "CORREIA EXTRA BELT C156",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C158",
    "desc": "CORREIA EXTRA BELT C158",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C173",
    "desc": "CORREIA EXTRA BELT C173",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C270",
    "desc": "CORREIA EXTRA BELT C270",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C47",
    "desc": "CORREIA EXTRA BELT C47",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C48",
    "desc": "CORREIA EXTRA BELT C48",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C51",
    "desc": "CORREIA EXTRA BELT C51",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C53",
    "desc": "CORREIA EXTRA BELT C53",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C59",
    "desc": "CORREIA EXTRA BELT C59",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C61",
    "desc": "CORREIA EXTRA BELT C61",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C62",
    "desc": "CORREIA EXTRA BELT C62",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C63",
    "desc": "CORREIA EXTRA BELT C63",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C68",
    "desc": "CORREIA EXTRA BELT C68",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C73",
    "desc": "CORREIA EXTRA BELT C73",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C78",
    "desc": "CORREIA EXTRA BELT C78",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C81",
    "desc": "CORREIA EXTRA BELT C81",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C83",
    "desc": "CORREIA EXTRA BELT C83",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C95",
    "desc": "CORREIA EXTRA BELT C95",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "C96",
    "desc": "CORREIA EXTRA BELT C96",
    "marca": "20",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA 1628948",
    "desc": "CORREIA MAQ TNQ 1628948592",
    "marca": "CORREIA TNQ ML",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA TQN 180",
    "desc": "CORREIA MAQ TNQ 180 J 326019280 CWI05",
    "marca": "BORPAC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3PJE900 SUGGAR",
    "desc": "CORREIA MAQ TNQ 3 JMA PJE 900 SUGGAR",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA TQN 3M",
    "desc": "CORREIA MAQ TNQ 3 M 426-6",
    "marca": "BORPAC",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "326064078 CW106",
    "desc": "CORREIA MAQ TNQ 326064078 435 3M CWI06",
    "marca": "CORREIA TANQ M",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE528",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 528 LTC 07",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE559",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 559 J 27CM",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE593",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 593 LAV EL",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE594",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 594",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE613",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 613 J DREAM",
    "marca": "CORREIA TANQ M",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE714",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 714 LAV EL",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE815",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 815 MUELLE",
    "marca": "CORREIA TNQ ML",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE880",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 880 ELASTIC",
    "marca": "CORREIA TANQ M",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE891",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 891 5000141",
    "marca": "CORREIA TANQ M",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE903",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 903 SUGAR L",
    "marca": "CORREIA TNQ ML",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "4PJE904",
    "desc": "CORREIA MAQ TNQ 4 JMA PJE 904 SUGAR L",
    "marca": "CORREIA TANQ M",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA TQN 48",
    "desc": "CORREIA MAQ TNQ 4899228",
    "marca": "BORPAC",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "5JMA180",
    "desc": "CORREIA MAQ TNQ 5 JMA PJE 180 J CONSUL",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "5PJE556 W10470",
    "desc": "CORREIA MAQ TNQ 5 JMA PJE 556 5RJMA55",
    "marca": "CORREIA TANQNH",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "5JMA714",
    "desc": "CORREIA MAQ TNQ 5 JMA PJE 714 LAV EL",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "6PJE616",
    "desc": "CORREIA MAQ TNQ 6 JMA PJE 616 J 10 K",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA TNQ 6",
    "desc": "CORREIA MAQ TNQ 6 JMA PJE 680",
    "marca": "BORPAC",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "6PJE696",
    "desc": "CORREIA MAQ TNQ 6 JMA PJE 696 J 6FRIS",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA 7894861",
    "desc": "CORREIA MAQ TNQ 7894861997080",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "8PJE813",
    "desc": "CORREIA MAQ TNQ 8 JMA PJE 813 J 8FRIS",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "9PJE580",
    "desc": "CORREIA MAQ TNQ 9 JMA PJE 580 J 9FISO",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "CORREIA PLAINA",
    "desc": "CORREIA NYLON P/ PLAINA AMARELADA",
    "marca": "FERRAMENTAS EL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L160",
    "desc": "CORREIA REXON PREM 3L160",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L170",
    "desc": "CORREIA REXON PREM 3L170",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L180",
    "desc": "CORREIA REXON PREM 3L180",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L200",
    "desc": "CORREIA REXON PREM 3L200",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L210",
    "desc": "CORREIA REXON PREM 3L210",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L220",
    "desc": "CORREIA REXON PREM 3L220",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L230",
    "desc": "CORREIA REXON PREM 3L230",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L250",
    "desc": "CORREIA REXON PREM 3L250",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L260",
    "desc": "CORREIA REXON PREM 3L260",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L290",
    "desc": "CORREIA REXON PREM 3L290",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L300",
    "desc": "CORREIA REXON PREM 3L300",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L310",
    "desc": "CORREIA REXON PREM 3L310",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L320",
    "desc": "CORREIA REXON PREM 3L320",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L330",
    "desc": "CORREIA REXON PREM 3L330",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L340",
    "desc": "CORREIA REXON PREM 3L340",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L350",
    "desc": "CORREIA REXON PREM 3L350",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L360",
    "desc": "CORREIA REXON PREM 3L360",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L370",
    "desc": "CORREIA REXON PREM 3L370",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L380",
    "desc": "CORREIA REXON PREM 3L380",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L390",
    "desc": "CORREIA REXON PREM 3L390",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L400",
    "desc": "CORREIA REXON PREM 3L400",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L410",
    "desc": "CORREIA REXON PREM 3L410",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L415",
    "desc": "CORREIA REXON PREM 3L415",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L420",
    "desc": "CORREIA REXON PREM 3L420",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L430",
    "desc": "CORREIA REXON PREM 3L430",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L435",
    "desc": "CORREIA REXON PREM 3L435",
    "marca": "MINAS BRASIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3L440",
    "desc": "CORREIA REXON PREM 3L440",
    "marca": "40",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "B1391",
    "desc": "CUBO RODA DIANTEIRO VTO B1391",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60550008",
    "desc": "DEFLETOR DANCOR 7/16",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "DESCARBONIZANTE",
    "desc": "DESCARBONIZANTE P. CLEAN 300ML SF7979",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "063759",
    "desc": "DESCARBONIZANTE SPRAY 300ML CAR80",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DESENGRIPANTE 1",
    "desc": "DESENGRIPANTE ANTICOR AEROSOL 300ML BART",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DESENG CARLUB",
    "desc": "DESENGRIPANTE SPRAY 300ML CAR LUB",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "AP2",
    "desc": "DIFUSOR AP2 PARALELA FRENTE ROTOR AUT",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "AP3",
    "desc": "DIFUSOR AP3 PARALELA FRENTE ROTOR AUT",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "6055 1022",
    "desc": "DIFUSOR DANCOR AP-2 (ULTRA, ULTRA DA)",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "6055 1044",
    "desc": "DIFUSOR DANCOR AP-3",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DIFMARKHUP M576",
    "desc": "DIFUSOR MARK GRUNDFOS SIM HUP - M5769",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98797584",
    "desc": "DIFUSOR MARK HM-P M5526 NORYL INTERNO ES",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070204",
    "desc": "DIFUSOR SIBRAPE EAGLE 39204700",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070206",
    "desc": "DIFUSOR SIBRAPE BPF MOD 4787 ATÉ 3/4CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "5581",
    "desc": "DIFUSOR SIM. DANCOR AP-2",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "5582",
    "desc": "DIFUSOR SIM. DANCOR AP-3",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DILUENTE WEG GL",
    "desc": "DILUENTE WEG ALQUIDICO 1021 5 LTS",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DIODO MICRO OND",
    "desc": "DIODO MICRO ONDAS DUPLO C/ TERMINAIS",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ZP50 POS ROSC",
    "desc": "DIODO ROSCA JNG 50A SKN ZP50 ( POSITIV",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ZP50 POS CABO S",
    "desc": "DIODO ROSCA JNG 50A SKR ZP50 ( POSITIVO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "02619310",
    "desc": "DIODO ROSCA SEMIKRON SKN 130/08 C/ESPAGU",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SKN 240/08",
    "desc": "DIODO ROSCA SEMIKRON SKN 240/08 C/ESPAGU",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "02149090",
    "desc": "DIODO ROSCA SEMIKRON SKN 26/08 \"NEGATIVO",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "02237010",
    "desc": "DIODO ROSCA SEMIKRON SKN 71/08 \"NEGATIVO",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "02619340",
    "desc": "DIODO ROSCA SEMIKRON SKR 130/08 C/ESPAGU",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SKR 240/08",
    "desc": "DIODO ROSCA SEMIKRON SKR 240/08 C/ESPAGU",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "02149150",
    "desc": "DIODO ROSCA SEMIKRON SKR 26/08 \"POSITIVO",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "02237120",
    "desc": "DIODO ROSCA SEMIKRON SKR 71/08 \"POSITOVO",
    "marca": "25",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "1200412780 / 06",
    "desc": "DISCO CORTE 4 1/2X1,0 INOX STARRET 115X",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DISCO CRTE VND",
    "desc": "DISCO CORTE DIAMANTADO VONDER 110MM V3",
    "marca": "THOMPSON",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DSCFREIO WEG90",
    "desc": "DISCO FREIO C/PASTILHAS 90 (MOTO FREIO 1",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DISCO VLC 4,5 G",
    "desc": "DISCO LIXA VELCRO 4,5 G080 BESTFER",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DISCO LIXA 4,5",
    "desc": "DISCO LIXA VELCRO 4,5 G120 BESTFER",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DISCO LIXXA 4,5",
    "desc": "DISCO LIXA VELCRO 4,5 G150 BESTFER",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3X200A ABB",
    "desc": "DISJUNTOR CX MOLD 3 X 200-250A 65KA (CEM",
    "marca": "ABB",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NAO PD CEMIG",
    "desc": "DISJUNTOR CX MOLD 3 X 225A 400V 20KA DWP",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3X250ASOPRANO",
    "desc": "DISJUNTOR CX MOLD 3 X 250A 240V 22KA DS",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1150A2P60KA1",
    "desc": "DISJUNTOR CX MOLDADA JNG 2P 150A 60KA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1200A2P60KA1",
    "desc": "DISJUNTOR CX MOLDADA JNG 2P 200A 60KA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DAM1100A3P60KA",
    "desc": "DISJUNTOR CX MOLDADA JNG 3P 100A DAM1-",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1125A3P60KA",
    "desc": "DISJUNTOR CX MOLDADA JNG 3P 125A 60KA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1150A3P60KA1",
    "desc": "DISJUNTOR CX MOLDADA JNG 3P 150A 60KA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1200A3P60KA1",
    "desc": "DISJUNTOR CX MOLDADA JNG 3P 200A DJM1-2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJM1225A3P60KA1",
    "desc": "DISJUNTOR CX MOLDADA JNG 3P 225A DJM1-2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "4-6,3A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 4-6,3A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "6,3-10A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 6,3-10A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "8-12,5A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 8-12,5A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "10-16A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 10-16A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "14-20A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 14-20A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "16-25A",
    "desc": "DISJUNTOR MOTOR JNG DZ108 16-25A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DZ10822-32",
    "desc": "DISJUNTOR MOTOR JNG DZ108 22-32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "25-40A",
    "desc": "DISJUNTOR MOTOR JNG DZX8-63 25-40A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DISJ SPN 1P 15A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 15 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 20A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 20 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 25A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 25 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJSPN 1P 30A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 30 AMP PRE",
    "marca": "SOPRANO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIJ SPN 1P 35A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 35 AMP PRE",
    "marca": "SOPRANO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 40A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 40 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 50A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 50 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 60A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 60 AMP PRE",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DISJ SPN 1P 70A",
    "desc": "DISJUNTOR SOPRANO UNIPOLAR 70 AMP PRE",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPS BYS20-40KA",
    "desc": "DISPOSITIVO P/SURTO DPS BYS 2P 20-40KA 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DISTVALV6VIA 02",
    "desc": "DISTRIBUIDOR VALVULA 6VIAS C/JNT MOD. NV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS JNG 15KA 1P",
    "desc": "DPS JNG 15KA 275V 1P JBY1-C/1 PARA RAIO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS JNG 20KA 1P",
    "desc": "DPS JNG 20KA 275V 1P JY1-C/1 PARA RAIO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS JNG 40KA1P",
    "desc": "DPS JNG 40KA 275V 1P BY1-C/1 PARA RAIO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS JNG 40KA3P",
    "desc": "DPS JNG 40KA 275V 3P BY1-C/3 PARA RAIO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS JNG 45KA 1P",
    "desc": "DPS JNG 45KA 275V 1P BY1-C/1 PARA RAIO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS PLG CL 45KA",
    "desc": "DPS PLUGUE CLAMPER 45KA 275V",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPS SB 20KA 1P",
    "desc": "DPS SBTC 10/20KA 275V 1P SPD-20-275 CLA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS-UN 2,5KA SB",
    "desc": "DPS SBTC 2,5KA 275V PROT INDIV SPS-UN 2",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DPS SB 40KA 012",
    "desc": "DPS SBTC SPD-40-275 1POLO 20/40KA 275V C",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DR25A2P30MA SBT",
    "desc": "DR INTERRUPTOR DIFERENCIAL DR 25A 2P 30",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DR40A2P30MA SBT",
    "desc": "DR INTERRUPTOR DIFERENCIAL DR 40A 2P 30",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DR63A2P30MA SBT",
    "desc": "DR INTERRUPTOR DIFERENCIAL DR 63A 2P 30",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DZL176-2-25A",
    "desc": "DR JNG 25A 30MA - BIPOLAR - DZL176-2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DZL176-2-63A",
    "desc": "DR JNG 63A 30MA - BIPOLAR DZL176-2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DZL176-2-40A",
    "desc": "DR JNG/ ELETROMEC 40A 30MA - BIPOLAR D",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DRSB63A30MATETR",
    "desc": "DR SBTC 63A 30MA TETRAPOLAR 3FASES + 1N",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "E171022",
    "desc": "EIXO SCHN ME-1 AÇO 19 X 313MM (163",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E171030",
    "desc": "EIXO SCHN ME-1 AÇO 19 X 375MM (1840",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E171028",
    "desc": "EIXO SCHN ME-1 AÇO 19 X 406MM (1950",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151005",
    "desc": "EIXO SCHN ME-1 INOX 19 X 375MM (18",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151002",
    "desc": "EIXO SCHN ME-1 INOX 19 X 163,5MM (1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151003",
    "desc": "EIXO SCHN ME-1 INOX 19 X 251MM (14",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151006",
    "desc": "EIXO SCHN ME-1 INOX 19 X 283MM (153",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151000",
    "desc": "EIXO SCHN ME-1 INOX 19 X 313MM (16",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151004",
    "desc": "EIXO SCHN ME-1 INOX 19 X 406MM (195",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151011",
    "desc": "EIXO SCHN ME-2 INOX 19 X 146MM (2",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151012",
    "desc": "EIXO SCHN ME-2 INOX 19 X 283MM (24",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151015",
    "desc": "EIXO SCHN ME-2 INOX 19 X 323MM (25",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151013",
    "desc": "EIXO SCHN ME-2 INOX 19 X 363MM (261",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "E151014",
    "desc": "EIXO SCHN ME-2 INOX 19 X 403MM (271",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "INJET 1,000",
    "desc": "ELETRODO NIVEL DIGIMEC PENDULO SNP INOX",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ELETRODO SBTC 9",
    "desc": "ELETRODO NIVEL SBTC PENDULO SEM CABO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2,5",
    "desc": "ELETRODO VONDER 2,5MM OU 3,25 POR VARET",
    "marca": "VONDER / OSTEN",
    "uni": "KG",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "78506000",
    "desc": "ENGATE RAPIDO MANG TRAMONTINA",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "010508",
    "desc": "ENGATE RAPIDO 1/2 MANEGUEIRA HERC",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ENG 4100H",
    "desc": "ENGRENAGEM - CORA/PINHÃO 4100H",
    "marca": "MF MAQUINAS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ENG 4100 NH",
    "desc": "ENGRENAGEM - COROA/PINHÃO 4100 NH",
    "marca": "MF MAQUINAS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ESCAMP72X400ASB",
    "desc": "ESCALA AMPERIMETRO 72X72 400A SBTC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ESCAMP72X500A S",
    "desc": "ESCALA AMPERIMETRO 72X72 500A SBTC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC",
    "desc": "ESCOVA AÇO CIRCULAR 6X1/2X5/8 VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "745",
    "desc": "ESCOVA DE CARVAO 0100 BAMBOZZI 13X17X35",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "0746",
    "desc": "ESCOVA DE CARVAO 0101 BAMBOZZI 07X19X30",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR",
    "desc": "ESCOVA DE CARVAO 0103 BAMBOZZI 10X20X30",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "30X14X10 0104",
    "desc": "ESCOVA DE CARVAO 0104 NEGRINE 30X14X10 0",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 3,000",
    "desc": "ESCOVA DE CARVAO 0105 KOHLBACH 10X12X30",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10X10X30 0106 K",
    "desc": "ESCOVA DE CARVAO 0106 KOHLBACH 10X10X30",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5X10X17 150",
    "desc": "ESCOVA DE CARVAO 0150 BOSCH ESM 5X10X17",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X12X17 151",
    "desc": "ESCOVA DE CARVAO 0151 BOSCH LIX 6X12X21",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X10X20 153",
    "desc": "ESCOVA DE CARVAO 0153 D'WALT ESM 6X10X20",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5X11X17 0156",
    "desc": "ESCOVA DE CARVAO 0156 MAKITA SM 5X11X17",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X12X21 160",
    "desc": "ESCOVA DE CARVAO 0160 D'WALT SERRA 6X12X",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X9X12 0163",
    "desc": "ESCOVA DE CARVAO 0163 MAKITA ESM 6X9X12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 0175 TRAMONTINA MAQ 6X9",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5X8X15 022B 0",
    "desc": "ESCOVA DE CARVAO 022B BOSCH SUPER HOBBY",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X11X20 031 THA",
    "desc": "ESCOVA DE CARVAO 031 THABOR LIX 6X11X20",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 14,000",
    "desc": "ESCOVA DE CARVAO 031B THABOR LIX 5X16X21",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 032 BLACK & DECKER LIX",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 30,000",
    "desc": "ESCOVA DE CARVAO 032B BLACK & DECKER ESM",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 036 MAKITA SM 6X13X17",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 11,000",
    "desc": "ESCOVA DE CARVAO 037 MAKITA SM 6X10X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 2,000",
    "desc": "ESCOVA DE CARVAO 038 MAKITA SM 6X10X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 046 BOSCH LIX 5X6X15",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 28,000",
    "desc": "ESCOVA DE CARVAO 046B BOSCH LIX 6X14X21",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 39,000",
    "desc": "ESCOVA DE CARVAO 050 BOSCH LIX 6X16X23",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 22,000",
    "desc": "ESCOVA DE CARVAO 050B BOSCH LIX 6X16X22",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "0988",
    "desc": "ESCOVA DE CARVAO 055 MAKITA FUR 5X8X12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 26,000",
    "desc": "ESCOVA DE CARVAO 057 BLACK & DECKER FUR",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 30,000",
    "desc": "ESCOVA DE CARVAO 061 BLACK & DECKER FUR",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 062 SINGER 5X5X13",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 14,000",
    "desc": "ESCOVA DE CARVAO 063 SKIL ARNO FUR 5X6X1",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5X8X17 064 ESML",
    "desc": "ESCOVA DE CARVAO 064 BOSCH ESM 5X8X17",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 21,000",
    "desc": "ESCOVA DE CARVAO 065 MAKITA FUR 5X8X12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 33,000",
    "desc": "ESCOVA DE CARVAO 066B MAKITA LIX 7X18X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 4,000",
    "desc": "ESCOVA DE CARVAO 072 SKIL FUR 5X7X20",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 30,000",
    "desc": "ESCOVA DE CARVAO 073 MAKITA FUR 6X9X12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "5X8X17 074 ESMR",
    "desc": "ESCOVA DE CARVAO 074 BOSCH ESM 5X8X17",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 10,000",
    "desc": "ESCOVA DE CARVAO 078 ELECTROLUX ASP 6X9X",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 16,000",
    "desc": "ESCOVA DE CARVAO 080 BOSCH SM 6X10X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 19,000",
    "desc": "ESCOVA DE CARVAO 081 D'WALT LIX 5X7X14",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 14,000",
    "desc": "ESCOVA DE CARVAO 082 D'WALT LIX 5X7X14",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 40,000",
    "desc": "ESCOVA DE CARVAO 084 MAKITA FUR 5X8X13",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "085",
    "desc": "ESCOVA DE CARVAO 085 D'WALT SM 7X11X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "2747",
    "desc": "ESCOVA DE CARVAO 087 D'WALT SC 7X10X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 20,000",
    "desc": "ESCOVA DE CARVAO 088 D'WALT LIX 7X10X16",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ALAMAR 22,000",
    "desc": "ESCOVA DE CARVAO 095B TANYSEC 4X5X11",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X12X15 BH204 3",
    "desc": "ESCOVA DE CARVAO BH204 BOSCH SERRA M 6X1",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6X9X",
    "desc": "ESCOVA DE CARVAO XSE-218 459 MAKITA ES",
    "marca": "SCHUNK ESCOVA",
    "uni": "PAR",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "6,5X11XYY MRTLT",
    "desc": "ESCOVA DE CARVAO XSE-YYY VVV MAKITA MA",
    "marca": "SCHUNK ESCOVA",
    "uni": "PAR",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PT-08MM",
    "desc": "ESPAGUETE 130° PRETO - 0,8MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-1,5MM",
    "desc": "ESPAGUETE 130° PRETO - 1,5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-1MM",
    "desc": "ESPAGUETE 130° PRETO - 1MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-2MM",
    "desc": "ESPAGUETE 130° PRETO - 2MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-3MM",
    "desc": "ESPAGUETE 130° PRETO - 3MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-4MM",
    "desc": "ESPAGUETE 130° PRETO - 4MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-5MM",
    "desc": "ESPAGUETE 130° PRETO - 5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-6MM",
    "desc": "ESPAGUETE 130° PRETO - 6MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-7MM",
    "desc": "ESPAGUETE 130° PRETO - 7MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-8MM",
    "desc": "ESPAGUETE 130° PRETO - 8MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-10MM",
    "desc": "ESPAGUETE 130° PRETO -10MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-12MM",
    "desc": "ESPAGUETE 130° PRETO -12MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-14MM",
    "desc": "ESPAGUETE 130° PRETO -14MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PT-16MM",
    "desc": "ESPAGUETE 130° PRETO -16MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-0,8MM",
    "desc": "ESPAGUETE 155° BRANCO - 0,8MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-1,5MM",
    "desc": "ESPAGUETE 155° BRANCO - 1,5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-1MM",
    "desc": "ESPAGUETE 155° BRANCO - 1MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-2MM",
    "desc": "ESPAGUETE 155° BRANCO - 2MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-3MM",
    "desc": "ESPAGUETE 155° BRANCO - 3MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-4MM",
    "desc": "ESPAGUETE 155° BRANCO - 4MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-5MM",
    "desc": "ESPAGUETE 155° BRANCO - 5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-6MM",
    "desc": "ESPAGUETE 155° BRANCO - 6MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-7MM",
    "desc": "ESPAGUETE 155° BRANCO - 7MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-8MM",
    "desc": "ESPAGUETE 155° BRANCO - 8MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-10MM",
    "desc": "ESPAGUETE 155° BRANCO -10MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-12MM",
    "desc": "ESPAGUETE 155° BRANCO -12MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-14MM",
    "desc": "ESPAGUETE 155° BRANCO -14MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BC-16MM",
    "desc": "ESPAGUETE 155° BRANCO -16MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-08MM",
    "desc": "ESPAGUETE 155° VERDE - 0,8MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-1,5MM",
    "desc": "ESPAGUETE 155° VERDE - 1,5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-1MM",
    "desc": "ESPAGUETE 155° VERDE - 1MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-2MM",
    "desc": "ESPAGUETE 155° VERDE - 2MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-3MM",
    "desc": "ESPAGUETE 155° VERDE - 3MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-4MM",
    "desc": "ESPAGUETE 155° VERDE - 4MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-5MM",
    "desc": "ESPAGUETE 155° VERDE - 5MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-6MM",
    "desc": "ESPAGUETE 155° VERDE - 6MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-8MM",
    "desc": "ESPAGUETE 155° VERDE - 8MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-10MM",
    "desc": "ESPAGUETE 155° VERDE -10MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD-12MM",
    "desc": "ESPAGUETE 155° VERDE -12MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "VD14MM",
    "desc": "ESPAGUETE 155° VERDE -14MM",
    "marca": "TRAMAR",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-0,8MM",
    "desc": "ESPAGUETE 180° MARROM - 0,8MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-1,5MM",
    "desc": "ESPAGUETE 180° MARROM - 1,5MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-1MM",
    "desc": "ESPAGUETE 180° MARROM - 1MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-2MM",
    "desc": "ESPAGUETE 180° MARROM - 2MM",
    "marca": "PASQUA *****,",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-3MM",
    "desc": "ESPAGUETE 180° MARROM - 3MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-4MM",
    "desc": "ESPAGUETE 180° MARROM - 4MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-5MM",
    "desc": "ESPAGUETE 180° MARROM - 5MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-6MM",
    "desc": "ESPAGUETE 180° MARROM - 6MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-7MM",
    "desc": "ESPAGUETE 180° MARROM - 7MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-8MM",
    "desc": "ESPAGUETE 180° MARROM - 8MM",
    "marca": "PASQUA",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-10MM",
    "desc": "ESPAGUETE 180° MARROM -10MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-12MM",
    "desc": "ESPAGUETE 180° MARROM -12MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-14MM",
    "desc": "ESPAGUETE 180° MARROM -14MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-16MM",
    "desc": "ESPAGUETE 180° MARROM -16MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-18MM",
    "desc": "ESPAGUETE 180° MARROM -18MM",
    "marca": "TRAMAR",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-20",
    "desc": "ESPAGUETE 180° MARROM -20MM",
    "marca": "PASQUA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-25MM",
    "desc": "ESPAGUETE 180° MARROM -25MM",
    "marca": "PASQUA",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MR-32",
    "desc": "ESPAGUETE 180° MARROM -32MM",
    "marca": "PASQUA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PASQUA 298,000",
    "desc": "ESPAGUETE 180° MARROM -50MM",
    "marca": "PASQUA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE001B",
    "desc": "ESPAGUETE CLASSE B 130° - 1MM - BRANCO/V",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE002B",
    "desc": "ESPAGUETE CLASSE B 130° - 2MM - BRANCO/L",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE001F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 1MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE002F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 2MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE003F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 3MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE004F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 4MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE005F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 5MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE006F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 6MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE007F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 7MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE008F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 8MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE010F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 10MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE012F",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 12MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE014",
    "desc": "ESPAGUETE CLASSE F 155° PRETO - 14MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE001H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 1MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE002H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 2MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE003H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 3MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE004H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 4MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE005H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 5MM",
    "marca": "GEARTECH",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE006H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 6MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE007H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 7MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE008H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 8MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE010H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 10MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE012H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 12MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE014H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 14MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE016H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 16MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE018H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 18MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SLE020H",
    "desc": "ESPAGUETE CLASSE H 180° MARROM - 20MM",
    "marca": "38",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "ESPUMA EXP",
    "desc": "ESPUMA POLIETILENIO EXPANSIVA 500ML / 36",
    "marca": "TEK BOND",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98797640",
    "desc": "ESTAGIO MARK HA/HB/HR/HU M619",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98797582",
    "desc": "ESTAGIO MARK HM-P M5525 S/ DIFUSOR",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DIVISAO ME-1 ES",
    "desc": "ESTAGIO SCHN DIVISAO ME-1",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "00708",
    "desc": "ESTAGIO THEBE P-11",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "01510",
    "desc": "ESTAGIO THEBE P-15",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "THEBE",
    "desc": "ESTILETE 18 MM E5618 VONDER 00",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "ESTILETE 18 MM EMBORRACHADO 954 00",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "ESTOPA 150G",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "98797556",
    "desc": "ESTÁGIO MARK HM M921",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NUM. 1 A 6 GRAD",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 1 A 6 G",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NUM ALUM 1A6 ME",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 1 A 6 M",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "4655",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 1 A 6 P",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NUM. 7 A 12 GRA",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 7 A 12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NUM. 7 A 12 MED",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 7 A 12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NUM. 7 A 12 PEQ",
    "desc": "ETIQUETA PLACA NUMERICA (NUMERO) 7 A 12",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FECHO FENDA CX",
    "desc": "FECHO CAIXA METALICA FENDA",
    "marca": "LUKBOX CAIXAS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LUKBOX CAIXAS -1,000",
    "desc": "FELTRO ADESIVO PRETO QUADRADO 22MM C/2",
    "marca": "VONDER / OSTEN",
    "uni": "CTL",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "FELTRO ADESIVO PRETO QUADRADO 30MM C/1",
    "marca": "VONDER / OSTEN",
    "uni": "CTL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "FELTRO ADESIVO PRETO QUADRADO 50MM C/4",
    "marca": "VONDER / OSTEN",
    "uni": "CTL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "FELTRO ADESIVO PRETO REDONDO 46MM C/4",
    "marca": "VONDER / OSTEN",
    "uni": "CTL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "077836",
    "desc": "FERRO SOLDA 110V 60W BRASF",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "550W 110V",
    "desc": "FERRO SOLDA JH ROBUST 550W 110V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "550W 220V",
    "desc": "FERRO SOLDA JH ROBUST 550W 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "750W 110V",
    "desc": "FERRO SOLDA JH ROBUST 750W 110V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "750W 220V",
    "desc": "FERRO SOLDA JH ROBUST 750W 220V",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FIEIRA FIOS COB",
    "desc": "FIEIRA MEDIR FIOS COBRE AWG STARRET 1 A",
    "marca": "STARRET",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "1132050003",
    "desc": "FILME STRETCH 500MM ROLO 3,5KG VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN 1,000",
    "desc": "FILTRO ASPIRADOR PO ELETROLUX AQP20 E OU",
    "marca": "ELETROLUX ELET",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FB9803 80/120 1",
    "desc": "FILTRO VENTILADOR JNG (VENEZIANA) 80X8",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FK772230 1354",
    "desc": "FILTRO VENTILADOR JNG (VENEZIANA) 120X12",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FB9804 120/150",
    "desc": "FILTRO VENTILADOR JNG (VENEZIANA) 120X12",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FB9805 180/200",
    "desc": "FILTRO VENTILADOR JNG (VENEZIANA) 180X18",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "120X120",
    "desc": "FILTRO VENTILADOR SIBRATEC (VENEZIANA) 1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "150CM",
    "desc": "FILTRO VENTILADOR SIBRATEC (VENEZIANA) 1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FT180X180 SB",
    "desc": "FILTRO VENTILADOR SIBRATEC (VENEZIANA) 1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FIO AL 07 AWG",
    "desc": "FIO DE ALUMINIO 07 AWG",
    "marca": "FIO AL 09 AWG",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 09 AWG",
    "desc": "FIO DE ALUMINIO 09 AWG",
    "marca": "SODRAMAR",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 10 AWG",
    "desc": "FIO DE ALUMINIO 10 AWG",
    "marca": "ENSELLI",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 11 AWG",
    "desc": "FIO DE ALUMINIO 11 AWG",
    "marca": "AGUATEC",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 17 AWG",
    "desc": "FIO DE ALUMINIO 17 AWG",
    "marca": "FIMACOM",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 18 AWG",
    "desc": "FIO DE ALUMINIO 18 AWG",
    "marca": "FIMACOM",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 19 AWG",
    "desc": "FIO DE ALUMINIO 19 AWG",
    "marca": "FIMACOM",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 20AWG",
    "desc": "FIO DE ALUMINIO 20 AWG",
    "marca": "FIO ALUMINIO E",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 21AWG",
    "desc": "FIO DE ALUMINIO 21 AWG",
    "marca": "FIO ALUMINIO E",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 22AWG",
    "desc": "FIO DE ALUMINIO 22 AWG",
    "marca": "FIO ALUMINIO E",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO AL 23 AWG",
    "desc": "FIO DE ALUMINIO 23 AWG",
    "marca": "CONDUMINAS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIOS FAT ESTQUE",
    "desc": "FIO DE COBRE ESMALTADO 00 AWG FATURADOS",
    "marca": "PASQUA",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FIO 05 AWG",
    "desc": "FIO DE COBRE ESMALTADO 05 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7 AWG",
    "desc": "FIO DE COBRE ESMALTADO 07 AWG",
    "marca": "PASQUA",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "8 AWG",
    "desc": "FIO DE COBRE ESMALTADO 08 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "9 AWG",
    "desc": "FIO DE COBRE ESMALTADO 09 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "10 AWG",
    "desc": "FIO DE COBRE ESMALTADO 10 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "11 AWG",
    "desc": "FIO DE COBRE ESMALTADO 11 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "12 AWG",
    "desc": "FIO DE COBRE ESMALTADO 12 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "13 AWG",
    "desc": "FIO DE COBRE ESMALTADO 13 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "14 AWG",
    "desc": "FIO DE COBRE ESMALTADO 14 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "15 AWG",
    "desc": "FIO DE COBRE ESMALTADO 15 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "16 AWG",
    "desc": "FIO DE COBRE ESMALTADO 16 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "17 AWG",
    "desc": "FIO DE COBRE ESMALTADO 17 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "18 AWG",
    "desc": "FIO DE COBRE ESMALTADO 18 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "19 AWG",
    "desc": "FIO DE COBRE ESMALTADO 19 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "20 AWG",
    "desc": "FIO DE COBRE ESMALTADO 20 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "21 AWG",
    "desc": "FIO DE COBRE ESMALTADO 21 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "22 AWG",
    "desc": "FIO DE COBRE ESMALTADO 22 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "23 AWG",
    "desc": "FIO DE COBRE ESMALTADO 23 AWG",
    "marca": "JF CONDUTORES *****,",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "24 AWG",
    "desc": "FIO DE COBRE ESMALTADO 24 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "25 AWG",
    "desc": "FIO DE COBRE ESMALTADO 25 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "26 AWG",
    "desc": "FIO DE COBRE ESMALTADO 26 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "27 AWG",
    "desc": "FIO DE COBRE ESMALTADO 27 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "28 AWG",
    "desc": "FIO DE COBRE ESMALTADO 28 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "29 AWG",
    "desc": "FIO DE COBRE ESMALTADO 29 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "30 AWG",
    "desc": "FIO DE COBRE ESMALTADO 30 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "31 AWG",
    "desc": "FIO DE COBRE ESMALTADO 31 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "32 AWG",
    "desc": "FIO DE COBRE ESMALTADO 32 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "33 AWG",
    "desc": "FIO DE COBRE ESMALTADO 33 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "34 AWG",
    "desc": "FIO DE COBRE ESMALTADO 34 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "35 AWG",
    "desc": "FIO DE COBRE ESMALTADO 35 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "36 AWG",
    "desc": "FIO DE COBRE ESMALTADO 36 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "37 AWG",
    "desc": "FIO DE COBRE ESMALTADO 37 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "38 AWG",
    "desc": "FIO DE COBRE ESMALTADO 38 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "39 AWG",
    "desc": "FIO DE COBRE ESMALTADO 39 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "40 AWG",
    "desc": "FIO DE COBRE ESMALTADO 40 AWG",
    "marca": "JF CONDUTORES",
    "uni": "KG",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JF CONDUTORES",
    "desc": "FIO PO/BOMBA SUBMERSA PLASTICO 0,90MM",
    "marca": "CONDUMINAS",
    "uni": "KG",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CONDUMINAS -6,000",
    "desc": "FIO PO/BOMBA SUBMERSA PLASTICO 1,70MM",
    "marca": "CONDUMINAS",
    "uni": "KG",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "1012484000",
    "desc": "FITA AUTO ADESIVA EMPACOTAMENTO 48 X 45",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VONDER / OSTEN 6,000",
    "desc": "FITA ANTI DERRAPANTE TRANSP. 50MM X 15M",
    "marca": "VONDER / OSTEN",
    "uni": "CTL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VONDER / OSTEN",
    "desc": "FITA AUTO ADESIVA 48 MM X 50 MT TRANSP.",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "18X10",
    "desc": "FITA CREPE 18X10",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "18X50",
    "desc": "FITA CREPE 18X50",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "033214",
    "desc": "FITA CREPE ADELBRAS 18MMX50M",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITA CREPE 48X4",
    "desc": "FITA CREPE ADELBRAS 48MMX45M BARTOFIL",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITA CREPE 48X5",
    "desc": "FITA CREPE ADELBRAS 48MMX50M ADERE",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FTDPFACE 12X2MT",
    "desc": "FITA DUPLA FACE FIXA FORTE 12 X 2MTS",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FTDPFACE 19X2MT",
    "desc": "FITA DUPLA FACE FIXA FORTE 19 X 2MTS",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "009039",
    "desc": "FITA EMPACOTAMENTO TRANSP 45X45 HOTMEL 3",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DRYKOFITA 20CM",
    "desc": "FITA IMPERM. ALUMIN. 20CM X 10M DRYKOFI",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "1099190500",
    "desc": "FITA ISOLANTE AUTO FUSAO 3M 23BR 19MM X",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "057221",
    "desc": "FITA ISOLANTE AUTO FUSÃO FOXLUX 05MX19MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "057222",
    "desc": "FITA ISOLANTE AUTO FUSÃO FOXLUX 10MX19MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "TAMBASA 3,000",
    "desc": "FITA ISOLANTE AUTO FUSÃO SCOTCH 3M 05MX",
    "marca": "VONDER/OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "17329",
    "desc": "FITA ISOLANTE IMPERIAL 3M 20MT X 18 MM",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "5150030230",
    "desc": "FITA ISOLANTE LIQUIDA QUIMATIC 200 ML",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "5150030250",
    "desc": "FITA ISOLANTE LIQUIDA QUIMATIC 50 GR BI",
    "marca": "QUIMATIC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FT ISOL LK BRAN",
    "desc": "FITA ISOLANTE LKM 19 X 20 MTS BRANCA",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "LUKMA",
    "desc": "FITA ISOLANTE SCOTCH 33+ 19MMX20MTS",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCAM20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS AMAR",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCAZ20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS AZUL",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCBC20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS BRAN",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCPT20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS PRET",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCVD20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS VERD",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FITASBTCVM20MT",
    "desc": "FITA ISOLANTE SIBRATEC 19 X 20 MTS VERM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "B120009 T0679",
    "desc": "FITA ISOLANTE THOMPSON 19 X 10 MTS",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "067917",
    "desc": "FITA ISOLANTE THOMPSON 19 X 20 MTS",
    "marca": "THOMPSON",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "F. L. 12MM",
    "desc": "FITA LINEAR TRAMAR 130°C CLASSE B NT (50",
    "marca": "PASQUA",
    "uni": "RL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "F. L. 6MM",
    "desc": "FITA LINEAR TRAMAR 130°C CLASSE B NT (50",
    "marca": "PASQUA",
    "uni": "RL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PASQUA 2,000",
    "desc": "FITA VEDA ROSCA AMANCO 10MTS",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "7227",
    "desc": "FITA VEDA ROSCA AMANCO 25MTS 10435 18",
    "marca": "AMANCO",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "FP500",
    "desc": "FIXADOR DE PORTA FP500 AL VONDER (BATENT",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FLNAQUEXSBRP280",
    "desc": "FLANGE ACOPLAMENTO BMB AQUEX (MOTOR) 943",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "11086311",
    "desc": "FLANGE JACUZZI 9385 ADAPT ''A / LQ \"",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "8219",
    "desc": "FLANGE PLASTICA ADAPTADORA PARA BOMBA",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "008219",
    "desc": "FLANGE PLASTICA SODRAMAR ADAPT. P/ BOMB",
    "marca": "SODRAMAR",
    "uni": "KG",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FLNGTRAPPFIXFAC",
    "desc": "FLANGE TRAPP FIXAÇAO FACA EIXO 19,05MM 3",
    "marca": "TRAPP",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "TRAPP",
    "desc": "FLANGE WEG AF3F 3 POSIÇÃO CSW F",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "9041",
    "desc": "FLUIDO PARA RADIADOR RADNAQ LONG LIFE T-",
    "marca": "OUTROS",
    "uni": "LTR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "GOTA MAGICA",
    "desc": "FLUXO PARA SOLDAR ALUMINIO COM COBRE 10",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "130094",
    "desc": "FONTE CHAVEADA 120W 12VCC 10AMP 110 / 22",
    "marca": "ALED TRIANGULO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FNTCH240W12VCC",
    "desc": "FONTE CHAVEADA 240W 12VCC 20AMP 110 / 22",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA",
    "desc": "FONTE CHAVEADA 60W 12VCC 5AMP 110 / 220V",
    "marca": "ALED TRIANGULO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ALED TRIANGULO 1,000",
    "desc": "FONTE CHAVEADA SIBRATEC MS-25-12VCC 2,1A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FNTMONITOR 19V",
    "desc": "FONTE TV MONITOR LG ADS25FSF19 19V 3,4",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "16001801",
    "desc": "FORMA ALUMINIO P/BOBINADEIRA N°4",
    "marca": "GUAXAUPE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "16002301",
    "desc": "FORMA ALUMINIO P/BOBINADEIRA N°9",
    "marca": "GUAXAUPE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AD22-22HZ-G",
    "desc": "FREQUENCÍMETRO AD22-22HZ-G 0~99HZ - 22 M",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "CPR-72 72X72",
    "desc": "FREQUENCÍMETRO DE MOLA CPR-72 72X72 55-6",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG",
    "desc": "FRETE",
    "marca": "FRETE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FRETE -1,000",
    "desc": "FRETE TÁXI",
    "marca": "FRETE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FUSCRMCA20A6X30",
    "desc": "FUSIVEL CERAMICA 6 X 30 20A 250V MIC",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 16A",
    "desc": "FUSIVEL JNG NH00 500V 16A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 32A",
    "desc": "FUSIVEL JNG NH00 500V 32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 40A",
    "desc": "FUSIVEL JNG NH00 500V 40A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 50A",
    "desc": "FUSIVEL JNG NH00 500V 50A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 63A",
    "desc": "FUSIVEL JNG NH00 500V 63A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 80A",
    "desc": "FUSIVEL JNG NH00 500V 80A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00C 100A",
    "desc": "FUSIVEL JNG NH00 500V 100A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00 125A",
    "desc": "FUSIVEL JNG NH00 500V 125A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH00 160A",
    "desc": "FUSIVEL JNG NH00 500V 160A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1 200A",
    "desc": "FUSIVEL JNG NH00 500V 200A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1 160A",
    "desc": "FUSIVEL JNG NH1 500V 160A",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1 200A",
    "desc": "FUSIVEL JNG NH1 500V 200A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1 250A",
    "desc": "FUSIVEL JNG NH1 500V 250A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH2 400V",
    "desc": "FUSIVEL JNG NH2 500V 400A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH3 500A",
    "desc": "FUSIVEL JNG NH3 500V 500A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50A DZ JNG",
    "desc": "FUSIVEL JNG TIPO \"D\" DIAZED RO21 DII 50",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10A DZ JNG",
    "desc": "FUSIVEL JNG TIPO \"D\" DIAZED RO21 DIII 10",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "16A DZ JNG",
    "desc": "FUSIVEL JNG TIPO \"D\" DIAZED RO21 DIII 16",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25A DZ JNG",
    "desc": "FUSIVEL JNG TIPO \"D\" DIAZED RO21 DIII 25",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "2A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 2A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "6A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 6A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "16A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 16A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 20A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 25A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32A 10X38",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 32A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FSV10X38 16A 10",
    "desc": "FUSIVEL JNG TIPO CARTUCHO 10X38 16A 1000",
    "marca": "RO21SBTC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RO21SBTC",
    "desc": "FUSIVEL SB DIAZED RETARDADO RO21 DE 10A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "9540",
    "desc": "FUSIVEL SB DIAZED RETARDADO RO21 DE 16A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUZDZ 20A RO21",
    "desc": "FUSIVEL SB DIAZED RETARDADO RO21 DE 20A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1 160A AR ULR",
    "desc": "FUSIVEL SB NH1 160A AR ULTRA RAPIDO",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH3 500A GL SB",
    "desc": "FUSIVEL SB NH3 500A",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "012440",
    "desc": "FUSIVEL SB NH3 500A AR ULTRA RAPIDO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVEL VD 3A 5",
    "desc": "FUSIVEL VIDRO 5X20 3A 250V",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUS VD 6A 5X20",
    "desc": "FUSIVEL VIDRO 5X20 5KV 800MA ALTA T",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVE VD 6A 5X",
    "desc": "FUSIVEL VIDRO 5X20 6A 250V",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVEL VD 20A",
    "desc": "FUSIVEL VIDRO 5X20 20A 250V JC-FV52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVEL VC 2A 6",
    "desc": "FUSIVEL VIDRO 6X30 2A 250V",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVEL VD 6A 6",
    "desc": "FUSIVEL VIDRO 6X30 6A 250V",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "FUSIVEL VD 10A",
    "desc": "FUSIVEL VIDRO 6X30 10A 250V",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH1WEG 400A UR",
    "desc": "FUSIVEL WEG NH1 400A AR UR FNH1-400K-A",
    "marca": "WEG ACIONAMENT",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "NH3WEG 710A UR",
    "desc": "FUSIVEL WEG NH3 710A AR UR FNH3-710K-",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "562",
    "desc": "FUSIVEL WEG RET NH00 10A",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CURVA",
    "desc": "GANCHO CURVA P/ BOMBA SUBMERSA 1\"",
    "marca": "JOIHA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CURVA",
    "desc": "GANCHO CURVA P/ BOMBA SUBMERSA 3/4\"",
    "marca": "JOIHA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "JOIHA 20,000",
    "desc": "GARRA JACARE MEDIO WD-026 35 MM PRETO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC -8,000",
    "desc": "GARRA JACARE MEDIO WD-026 35 MM VERMELHO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "WD-027",
    "desc": "GARRA JACARE MEDIO WD-027 PRETO 45MM - S",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "GARRA CWM 10186",
    "desc": "GARRA RELE TERM WEG GA67-2D RW67D CWM 50",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "IT-1551",
    "desc": "GATILHO SERRA MARMORE BOSCH KR82 IT-1551",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "IT-4100",
    "desc": "GATILHO SERRA MARMORE MAKITA 4100 IT-410",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "8050000140",
    "desc": "GAXETA ALGODAO QUADRADA ENSEBADA 1/4\"",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8050000316",
    "desc": "GAXETA ALGODAO QUADRADA ENSEBADA 3/16\"",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8050000516",
    "desc": "GAXETA ALGODAO QUADRADA ENSEBADA 5/16\"",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8049000120",
    "desc": "GAXETA ALGODAO QUADRADA GRAFITADA 1/2\"",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8049000380",
    "desc": "GAXETA ALGODAO QUADRADA GRAFITADA 3/8\"",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "GLIFOSATO MT MA",
    "desc": "GLIFOSATO TERMINAT MATA MATO 1LT DEXTER",
    "marca": "TAMBASA",
    "uni": "LTR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "FK7722.300",
    "desc": "GRADE METALICA FK7722.300 120X120 JNG NA",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "GRADE 120X120",
    "desc": "GRADE VENEZIANA COM FILTRO 12X12 CM SIBR",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC -1,000",
    "desc": "GRAFITE SPRAY MUNDIAL PRIME MP1",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TAMBASA 16,000",
    "desc": "GRAMPO INTERMEDIARIO SMART ( FIXA PLACA",
    "marca": "SOLAR ZNSHINE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "S/REF",
    "desc": "GRAMPO TERMINAL SMART ( FIXA PLACA NO FI",
    "marca": "SOLAR ZNSHINE",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GRAXA NSK LUB 1",
    "desc": "GRAXA NSK LUB 1KG PONTO GOTA 190°",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NSK LUB 500 GR",
    "desc": "GRAXA NSK LUB 500 GR",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NSK LUB HP 500",
    "desc": "GRAXA NSK LUB HP ALTA PERFORMACE 500 G",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NSK LUB HP 1 KG",
    "desc": "GRAXA NSK LUB HP ALTA PERFORMACE 1KG 27",
    "marca": "LUCIOS ROL NSK",
    "uni": "KG",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "UNILIT AZUL 500",
    "desc": "GRAXA UNILIT BLUE AZUL 500 GR 190 G",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRAT EMPIL 29X4",
    "desc": "GUARDA TUDO EMPILHAVEL MED AZUL 29X41X58",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "HERBMTTIRIRICA1",
    "desc": "HERBICIDA MATA TIRIRICA 10ML KELLDRIN",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "HORIM DIG 22MM",
    "desc": "HORIMETRO 22MM DE ENGATE RAPIDO VERMELHO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HM-1 PORTA 127V",
    "desc": "HORIMETRO ANALÓGICO SB BZ142-1 HM1 110-1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HM-1 PORTA 220V",
    "desc": "HORIMETRO ANALÓGICO SB BZ142-1 HM1 220-2",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HM-1 PORTA 220V",
    "desc": "HORIMETRO JNG HM-1 220V-240V P/ PORTA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HM-2 TRILHO 220",
    "desc": "HORIMETRO JNG HM-2 220V-240V P/ TRILHO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JHC3L PORTA SEC",
    "desc": "HORIMETRO JNG JHC3L - CONTATO SECO (NÃO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 7,000",
    "desc": "IMPERMEABILIZANTE AGUA 3,6L VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "GL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "80560290",
    "desc": "IMPULSOR SPP- 2,1 (ROTOR)",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "18476",
    "desc": "INDUZIDO 4100NSZ 110V",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "-1,000",
    "desc": "INDUZIDO BOSCH GWS 6-115 0601375016 12",
    "marca": "FERRAMENTAS EL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "INDZD MKT 4100N",
    "desc": "INDUZIDO MAKITA 4100 NSZ 110V",
    "marca": "FERRAMENTAS EL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "INDZD MKT NH3 1",
    "desc": "INDUZIDO MAKITA MT 410 / MCC400 / NH3 1",
    "marca": "FERRAMENTAS EL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "11270406923",
    "desc": "INJETOR PJ-30 (1-2-3) (NORYL) FF 1.1/2 X",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "THEBE",
    "desc": "INJETOR THEBE TJ-20 FF 1.1/4\" X 1\"",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "11270406911",
    "desc": "INJETOR TJ-30 (3/4) J40 (1-1,5-2) (NY) F",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "40070094",
    "desc": "INTERMEDIARIA BOMBA NAUTILUS NBF/HM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "60431020",
    "desc": "INTERMEDIARIA CP - 4 SELO 3/4 HIDRO HAD",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60432088P",
    "desc": "INTERMEDIARIA DANCOR AP-2 INTERNA SELO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60433088P",
    "desc": "INTERMEDIARIA DANCOR AP-3 INTERNA SELO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430807P",
    "desc": "INTERMEDIARIA DANCOR EXTERNA 807 MOTO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430222P",
    "desc": "INTERMEDIARIA DANCOR EXTERNA PF-CHS-22",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430803P",
    "desc": "INTERMEDIARIA DANCOR INTERNA 803 SELO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430815",
    "desc": "INTERMEDIARIA DANCOR INTERNA 815 6MM 1,",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430820",
    "desc": "INTERMEDIARIA DANCOR INTERNA 815 ( 820 )",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60430122P",
    "desc": "INTERMEDIARIA DANCOR INTERNA PF-CHS-22",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "14401 12 TERM M",
    "desc": "INTERRUPTOR ALAVANCA QUADRIPOLAR 14401 A",
    "marca": "MARGIRIUS",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DR40",
    "desc": "INTERRUPTOR DIFERENCIAL ELETROMEC DR40",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "39227 A S MARM",
    "desc": "INTERRUPTOR GATILHO S/TRAVA 39227 (A) 15",
    "marca": "MARGIRIUS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "39227 B CGRAMA",
    "desc": "INTERRUPTOR S/GATILHO S/TRAVA 39227 (B)",
    "marca": "MARGIRIUS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SN160SBTC",
    "desc": "INVERSOR DE FREQUENCIA SBTC SN160MN MONO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "13059321",
    "desc": "INVERSOR FREQUENCIA CFW300 220V CFW300A0",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3198012120",
    "desc": "IRRIGADOR SETORIA ESPIGA VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ISOLADOR 25X40X",
    "desc": "ISOLADOR EPOXI 25X40XM6 SBTC 5924",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ISOLADOR25X30XM",
    "desc": "ISOLADOR EPOXI 25X30XM6 VERM SBTC",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DANCOR",
    "desc": "JOGO CONTATOR WEG CWM 105",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VTO5000",
    "desc": "JUNTA HOMOCINÉTICA VTO 5000",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VTO5006",
    "desc": "JUNTA HOMOCINÉTICA VTO 5006",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "9912",
    "desc": "JUNTA PARA PROTEÇÃO DO EIXO MOTOR DA BOM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "009912",
    "desc": "JUNTA SODRAMAR PROTEÇAO EIXO MOTOR DA BO",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60655",
    "desc": "JUNTA VEDAÇÃO SAÍDA 5G",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "98268671",
    "desc": "KIT VEDAÇÃO MARK COMPLETO P/DS DLG ACIMA",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "98268670",
    "desc": "KIT VEDAÇÃO MARK COMPLETO P/DS DLG ATÉ 5",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "98268672",
    "desc": "KIT VEDAÇÃO MARK COMPLETO P/DVR MODELO A",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "KNOBTPBSBTC 955",
    "desc": "KNOB PARA POTENCIOMETRO SBTC TIPO B 5 O",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KNOB WXD POTENC",
    "desc": "KNOB WXD P/ POTENCIOMETRO MULTIVOLTAS WX",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "7893946001643",
    "desc": "LAMINA P/ ESTILETE 18MM - VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LAMNA SERRA TIC",
    "desc": "LAMINA SERRA TICO - TICO 1,2 X 91MM C/",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "74877",
    "desc": "LAMPADA LED 9W 6500K ELGIN",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "22661",
    "desc": "LAMPADA LED 15W 6500K ELGIN",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LAMPADALED15WEM",
    "desc": "LAMPADA LED 15 W 6500K 1350 LM EMPALU",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LAMPADALED20WEM",
    "desc": "LAMPADA LED 20 W 6500K 1680 LM EMPALU",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LAMPADALED50WEM",
    "desc": "LAMPADA LED 50 W 6500K 4000 LM EMPALU",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LAMPADA BOTOEIR",
    "desc": "LAMPADA LED BOTOEIRA C/ ILUMINAÇAO 220V",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VISORPFAQUEX 23",
    "desc": "LENTE ACRILICA PRE FILTRO AQUEX ( VISOR",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "43.10.601.000",
    "desc": "LIMA REDONDA BASTARDA 10\" - VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "063975",
    "desc": "LIMPA CONTATO 300ML/200GR CAR CONTATO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6133064000",
    "desc": "LONA REFORÇADA LARANJA 6 X 4 MTS VND",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "30 LED",
    "desc": "LUMINARIA EMERGENCIA 30 LED BIV. ELGIN",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUMEMERGSBKG913",
    "desc": "LUMINARIA EMERGENCIA SB KG-913 LED 2W BI",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUMLEDEMERGKG91",
    "desc": "LUMINARIA LED EMERG P/ TOMADA KG-913 C",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC",
    "desc": "LUMINARIA TOMADA HL SNL 02 LED C/SENSOR",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 9,000",
    "desc": "LUPA 65 MM 954",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVA ISOLADA 6M",
    "desc": "LUVA EMENDA ISOLADA AMARELA 6MM SB",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LU2692",
    "desc": "LUVA EMENDA ISOLADA AZUL 1,30-2,60MM LU2",
    "marca": "CRIMPER",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA EMENDA ISO",
    "desc": "LUVA EMENDA ISOLADA VERMELHO 0,25-1,6MM",
    "marca": "CRIMPER",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 1\" FF",
    "desc": "LUVA FF 1\"",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVA 1.1/2\"",
    "desc": "LUVA FF 1.1/2\"",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVA 1.1/4 FF",
    "desc": "LUVA FF 1.1/4\"",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVA 2\" FF",
    "desc": "LUVA FF 2\"",
    "marca": "LUKMA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LVRED 11/2X11/4",
    "desc": "LUVA REDUÇAO FF 1.1/2 X 1.1/4 GALVANI",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVRED 11/4X1 G",
    "desc": "LUVA REDUÇAO FF 1.1/4 X 1 GALVANIZADA",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVRED 2X11/2 G",
    "desc": "LUVA REDUÇAO FF 2 X 1.1/2 GALVANIZADA",
    "marca": "LUKMA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVRED 2X11/4 G",
    "desc": "LUVA REDUÇAO FF 2 X 1.1/4 GALVANIZADA",
    "marca": "LUKMA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LUVA 10MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 10MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY10",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 10MM SBTC G",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 120MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 120MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY150",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 150MM SBTC",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 16MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 16MM",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY185",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 185MM SBTC",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY240",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 240MM SBTC",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 25MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 25MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 35MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 35MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 50MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 50MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 70MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 70MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY70",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 70MM SBTC G",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "LUVA 95MM",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 95MM",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTY95",
    "desc": "LUVA TUBULAR DE COMPRESSÃO 95MM SBTC G",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7065000807",
    "desc": "LUVA VAQUETA TOTAL C/REFORÇO PALMA SAFEX",
    "marca": "VONDER / OSTEN",
    "uni": "PAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MALHA CU 10",
    "desc": "MALHA COBRE 10 NU",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MERCADO LIVRE",
    "desc": "MANDRIL APERTO RAPIDO 1/2 ( 13MM ) ROS",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6670116180",
    "desc": "MANDRIL PROFISSIONAL VONDER 16MM 5/8\" CO",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6670116580",
    "desc": "MANDRIL PROFISSIONAL VONDER 16MM 5/8\" RO",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6670116160",
    "desc": "MANDRIL PROFISSIONAL VONDER 3-16MM CONE",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6670116120",
    "desc": "MANDRIL PROFISSIONAL VONDER 3-16MM ROSCA",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MANGUEIRA",
    "desc": "MANGUEIRA JARDIM SUPER FLEXIVEL 1/2\"",
    "marca": "VONDER / OSTEN",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "XM3-E2",
    "desc": "MANIPULADORA SIBRATEC XM3-E2 2 POSI (JOY",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "70570149P",
    "desc": "MANIPULO DANCOR DFR ALAVANCA FILTRO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MAN 0-10 0-140",
    "desc": "MANOMETRO 0~10 BAR 0~140 PSI 1/4 NPT",
    "marca": "DONGYIN/LEPONO",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MAN 0-10 0-150",
    "desc": "MANOMETRO 0~10 KGF 0~150 PSI 1/4 NPT",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MAN 0-21 0-300",
    "desc": "MANOMETRO 0~21 KGF 0~300 PSI 1/4 NPT",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MAN 0-28 0-400",
    "desc": "MANOMETRO 0~28 KGF 0~400 PSI 1/4 NPT",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6070 0733",
    "desc": "MANOPLA FIXACAO (PARAFUSO) (VISOR PF-22)",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DANCOR",
    "desc": "MAO OBRA",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "OUTROS",
    "desc": "MAO OBRA BOMBA JOIHA ANAUGER",
    "marca": "MAO OBRA SERVI",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "6506",
    "desc": "MARCADOR P/ RETRO PROJETOR 2MM PT",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6618",
    "desc": "MARCADOR PINCEL PERMANENTE PT 661",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60206",
    "desc": "MARTELETE ANAUGER 5G M 650 / 700 / 800 /",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MARTELO 650",
    "desc": "MARTELETE JOIHA 650",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MARTELO 900",
    "desc": "MARTELETE JOIHA 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MARTELO ECCO",
    "desc": "MARTELETE JOIHA ECCO/600",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PF17-1/2CV-1044",
    "desc": "MB DANCOR PISCINA PF-17 1/2 CV C/ PRE FI",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "PF17-1/3CV-1044",
    "desc": "MB DANCOR PISCINA PF-17 1/3 CV C/ PRE FI",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "CP-4-1/2CV-1071",
    "desc": "MB DANCOR PRATICA CP-4 1/2 CV 127 / 22",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DANCOR",
    "desc": "MB DONGYIN 2,5SDIM2/11 0,33 HP 127V MONO",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 2,000",
    "desc": "MB DONGYIN 2,5SDIM2/11 0,33 HP 220V MONO",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 2,000",
    "desc": "MB DONGYIN 2,5SDIM2/16 0,50 HP 127V MONO",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB DONGYIN 2,5SDIM2/16 0,50 HP 220V MONO",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB DONGYIN 3SDM2/17 1,00 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB DONGYIN 4SDIM3/5 0,50 HP 220V MONOF 2",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN",
    "desc": "MB DONGYIN 4SDIM3/7 0,75 HP 220V MONOF 2",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "S/REF",
    "desc": "MB DONGYIN 4SDIM3/9 1,00 HP 220V MONOF 2",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN",
    "desc": "MB DONGYIN 4SDM3/13 1,50 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB DONGYIN 4SDM3/17 2,00 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN",
    "desc": "MB DONGYIN 4SDM3/24 3,00 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB DONGYIN 4SDM3/7 0,75 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 2,000",
    "desc": "MB DONGYIN 4SDM3/9 1,00 HP 220V MONOF 3",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MB EBARA 2,5BPS2/11 0,33 HP 220V MONOF 2",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MB EBARA 2,5BPS2/16 0,50 HP 127V MONOF 2",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MB EBARA 2,5BPS2/16 0,50 HP 220V MONOF 2",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA 1,000",
    "desc": "MB EBARA 2,5BPS2/22 0,75 HP 220V MONOF 2",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3BPS2-07 127V E",
    "desc": "MB EBARA 3BPS2/07 0,33 HP 127V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA 2,000",
    "desc": "MB EBARA 3BPS2/07 0,33 HP 220V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA 1,000",
    "desc": "MB EBARA 3BPS2/14 0,75 HP 127V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MB 3BPS2-14 220",
    "desc": "MB EBARA 3BPS2/14 0,75 HP 220V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3BPS2-18 127V",
    "desc": "MB EBARA 3BPS2/18 1,00 HP 127V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3BPS2-18 220V E",
    "desc": "MB EBARA 3BPS2/18 1,00 HP 220V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3BPS2-18 220V E",
    "desc": "MB EBARA 3BPS2/18 1,00 HP 220V MONOF 3 F",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MB EBARA 3BPS2/22 1,50 HP 127V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "BM3BPN2221522F",
    "desc": "MB EBARA 3BPS2/22 1,50 HP 220V MONOF 2 F",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "3BPS2/22 3FIOS",
    "desc": "MB EBARA 3BPS2/22 1,50 HP 220V MONOF 3FI",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MBEB 412-13 10H",
    "desc": "MB EBARA 412-13 M6P 10HP 220V MONOF 3 FI",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MB 4BPL1-28 2HP",
    "desc": "MB EBARA 4BPL1/28 2,00 HP 230V MONOF 2 F",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MB4BPL3-10 1,5H",
    "desc": "MB EBARA 4BPL3/10 1,50 HP 230V TRIFASICO",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MB4BPL3-13 2HP",
    "desc": "MB EBARA 4BPL3/13 2,00 HP 230V MONOF 2 F",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MB4BPL1-21 220V",
    "desc": "MB EBARA 4BPLI1/21 1,50 HP 230V MONOF 2",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MBEBSOLAR3BPS2-",
    "desc": "MB EBARA SOLAR 3BPS2-10 CE 600W 48V (PR",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MBFERRARI1/2CV2",
    "desc": "MB FERRARI PERIFERICA ACQUAFLOW 1/2CV 22",
    "marca": "FERRARI",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "21410044",
    "desc": "MB NAUTILUS PISCINA NBFC1 1/2 CV C/ PRE",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "21410226",
    "desc": "MB NAUTILUS PISCINA NBFC1 1/3 CV C/ PRE",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "TSBT10CVTRIF220",
    "desc": "MB SUBMERSA TSBT 10CV TRIF 220V 3\" ( ES",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "TSBT5,5CVTRIF22",
    "desc": "MB SUBMERSA TSBT 5,5CV TRIF 220V 3\" ( E",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "JD10-L02",
    "desc": "MEDIDOR DE ENERGIA JNG JD10-L02",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "LD20-L02",
    "desc": "MEDIDOR DE ENERGIA JNG JD20-L02",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "12382",
    "desc": "MEDIDOR DE TEMPERATURA 22MM AD22-22TMR V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "13451",
    "desc": "MEDIDOR KWH MONOFASICO DDS238-1 50A- SIB",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "145UF - 110V",
    "desc": "MICRO CAPACITOR JL 145UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "MICRO161",
    "desc": "MICRO CAPACITOR JL 161 UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "189UF - 110V",
    "desc": "MICRO CAPACITOR JL 189UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "216UF - 110V",
    "desc": "MICRO CAPACITOR JL 216UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "270UF - 110V",
    "desc": "MICRO CAPACITOR JL 270UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "340UF - 110V",
    "desc": "MICRO CAPACITOR JL 340UF - 110V",
    "marca": "CAPACITOR JL",
    "uni": "PC",
    "cat": "Capacitores"
  },
  {
    "ref": "RS5G 12548",
    "desc": "MICRO RUPTOR JNG RS 5G PINO S/ HASTE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RS5GL 12549",
    "desc": "MICRO RUPTOR JNG RS 5GL HASTE CURTA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RS5GL13 12",
    "desc": "MICRO RUPTOR JNG RS 5GL13 HASTE C/ CU",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RS5GL2 12",
    "desc": "MICRO RUPTOR JNG RS 5GL2 HASTE C/ROLD",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG 49,000",
    "desc": "MICRO RUPTOR JNG RA7141 C/ ROLDANA ALAV",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JNG -2,000",
    "desc": "MICRO RUPTOR JNG RA7310 PINO GROSSO SUP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RV-16-1C25 12",
    "desc": "MICRO RUPTOR JNG RV-16-1C25 S/ HASTE S/",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RV-161-1C25",
    "desc": "MICRO RUPTOR JNG RV-161-1C25 HASTE CURT",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RV-163-1C25",
    "desc": "MICRO RUPTOR JNG RV-163-1C25 H/LONGA S/",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RV-165-1C25",
    "desc": "MICRO RUPTOR JNG RV-165-1C25 HASTE CURTA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RV-166-1C25",
    "desc": "MICRO RUPTOR JNG RV-166-1C25 HASTE LONGA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RZ15GW22SCURTO",
    "desc": "MICRO RUPTOR JNG RZ-15GW22S-B3 CURTO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RZ15GW2SLONGO",
    "desc": "MICRO RUPTOR JNG RZ-15GW2S-B3 LONGO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MICRO VALLEY CR",
    "desc": "MICRO RUPTOR VALLEY C/ REG PARAF RZ-15G",
    "marca": "ALIBABA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "40X40X15 12V JN",
    "desc": "MICRO VENTILADOR 40X40X15 - 12V JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "50X50X12",
    "desc": "MICRO VENTILADOR 50X50X12 - 12V",
    "marca": "BOTTO",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60X60X15 VENT 1",
    "desc": "MICRO VENTILADOR 60X60X15 - 12V",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60X60X15 24V",
    "desc": "MICRO VENTILADOR 60X60X15 - 24V",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "70X70X15 12V",
    "desc": "MICRO VENTILADOR 70X70X15 - 12V",
    "marca": "BOTTO",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "70X70X15 24V",
    "desc": "MICRO VENTILADOR 70X70X15 - 24V",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "80X80X25 12V JN",
    "desc": "MICRO VENTILADOR 80 X 80 X 25 - 12V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "80X80X38",
    "desc": "MICRO VENTILADOR 80 X 80 X 38 110/22",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "92X92X25",
    "desc": "MICRO VENTILADOR 92X92X25 - 24V BERFLO",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "120X120 24V",
    "desc": "MICRO VENTILADOR 120X120X25 - 24V BOTTO",
    "marca": "BOTTO",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "120X120X38",
    "desc": "MICRO VENTILADOR 120X120X38 110/220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "150X150X51",
    "desc": "MICRO VENTILADOR 150 X 150 X 51 220V F",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "200X200X60",
    "desc": "MICRO VENTILADOR 200 X 200 X 60 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "30.65.000.100",
    "desc": "MINI ARCO DE SERRA VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "K9-24V 1551",
    "desc": "MINI CONTATOR JNG CJX2-K0910 - 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K-09 110V",
    "desc": "MINI CONTATOR JNG CJX2-K0910 - 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K-09 220V",
    "desc": "MINI CONTATOR JNG CJX2-K0910 - 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K-12 220V JNG",
    "desc": "MINI CONTATOR JNG CJX2-K1210 - 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8 31 24VCA",
    "desc": "MINI CONTATOR JNG JZC8 31 24VCA 15699",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8-22 24V",
    "desc": "MINI CONTATOR JNG JZC8-22 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8-22 110V",
    "desc": "MINI CONTATOR JNG JZC8-22 - 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8-22 220V",
    "desc": "MINI CONTATOR JNG JZC8-22 - 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZX8-31Z 24V",
    "desc": "MINI CONTATOR JNG JZC8-31 24V 15587",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8-31 110V",
    "desc": "MINI CONTATOR JNG JZC8-31 - 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JZC8-31 220V",
    "desc": "MINI CONTATOR JNG JZC8-31 - 220V 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "22 220 SBTC",
    "desc": "MINI CONTATOR SIBRATEC IC-22 - 220V 2NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "04627",
    "desc": "MINI CONTATOR SIBRATEC IC-22 - 24V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "31 110 SBTC",
    "desc": "MINI CONTATOR SIBRATEC IC-31 - 110V 3NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "31 220 SBTC",
    "desc": "MINI CONTATOR SIBRATEC IC-31 - 220V 3NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "06056",
    "desc": "MINI CONTATOR SIBRATEC IC-31 - 24V",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40 110 SBTC",
    "desc": "MINI CONTATOR SIBRATEC IC-40 - 110V 4NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40 220 SBTC",
    "desc": "MINI CONTATOR SIBRATEC IC-40 - 220V 4NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K9 110V SBTC",
    "desc": "MINI CONTATOR SIBRATEC K0910 - 110V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MINI K9 220V SB",
    "desc": "MINI CONTATOR SIBRATEC K0910 - 220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K1201220V NC",
    "desc": "MINI CONTATOR SIBRATEC K1201 - 220V N",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "K1210-220V SBTC",
    "desc": "MINI CONTATOR SIBRATEC K1210 - 220V",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 2,000",
    "desc": "MINI CONTATOR WEG CAW 04 22 220VCA CAW",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT",
    "desc": "MINI CONTATOR WEG CW07 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT",
    "desc": "MINI CONTATOR WEG CWCA 04 040 E 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CWCA0-31-00 V15",
    "desc": "MINI CONTATOR WEG CWCA0-31-00V15 110V 3",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT 1,000",
    "desc": "MINI CONTATOR WEG CWCAO-31-00V26 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "12486658",
    "desc": "MINI CONTATOR WEG CWCO 9 10-30V26 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "12486676",
    "desc": "MINI CONTATOR WEG CWCO25 00-30V26 220V",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "2A 1P",
    "desc": "MINI DISJUNTOR JNG 2A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 6A 1P",
    "desc": "MINI DISJUNTOR JNG 6A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "6A 2P",
    "desc": "MINI DISJUNTOR JNG 6A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10A-1P",
    "desc": "MINI DISJUNTOR JNG 10A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10A-2P",
    "desc": "MINI DISJUNTOR JNG 10A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 9,000",
    "desc": "MINI DISJUNTOR JNG 10A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "16 1P",
    "desc": "MINI DISJUNTOR JNG 16A 1P 12075",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "16A 2P",
    "desc": "MINI DISJUNTOR JNG 16A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 6,000",
    "desc": "MINI DISJUNTOR JNG 16A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A 1P",
    "desc": "MINI DISJUNTOR JNG 20A 1P 12076",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A 2P",
    "desc": "MINI DISJUNTOR JNG 20A 2P 12089",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A 3P",
    "desc": "MINI DISJUNTOR JNG 20A 3P 1210",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25A 1P",
    "desc": "MINI DISJUNTOR JNG 25A 1P 12077",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25 2P",
    "desc": "MINI DISJUNTOR JNG 25A 2P 12090",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25A 3P",
    "desc": "MINI DISJUNTOR JNG 25A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 8,000",
    "desc": "MINI DISJUNTOR JNG 32A 1P 1207",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32 2P",
    "desc": "MINI DISJUNTOR JNG 32A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MDISJ 32A 3P",
    "desc": "MINI DISJUNTOR JNG 32A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40A 1P",
    "desc": "MINI DISJUNTOR JNG 40A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40A 2P",
    "desc": "MINI DISJUNTOR JNG 40A 2P 12092",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 14,000",
    "desc": "MINI DISJUNTOR JNG 40A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50A 1P",
    "desc": "MINI DISJUNTOR JNG 50A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50A 2P",
    "desc": "MINI DISJUNTOR JNG 50A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50A 3P",
    "desc": "MINI DISJUNTOR JNG 50A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "63A 2P",
    "desc": "MINI DISJUNTOR JNG 63A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "63 2P 6KA",
    "desc": "MINI DISJUNTOR JNG 63A 2P 6KA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "63A 2P CC TX7-6",
    "desc": "MINI DISJUNTOR JNG 63A 2P TX7 - 63Z CO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG",
    "desc": "MINI DISJUNTOR JNG 63A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "70A 1P",
    "desc": "MINI DISJUNTOR JNG 70A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 6,000",
    "desc": "MINI DISJUNTOR JNG 70A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 4,000",
    "desc": "MINI DISJUNTOR JNG 70A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S/REF",
    "desc": "MINI DISJUNTOR JNG 80A 1P",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80A 2P",
    "desc": "MINI DISJUNTOR JNG 80A 2P HYJB2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80A 3P",
    "desc": "MINI DISJUNTOR JNG 80A 3P HYJB2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "100A 2P",
    "desc": "MINI DISJUNTOR JNG 100A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "100A 3P",
    "desc": "MINI DISJUNTOR JNG 100A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "125A 1P",
    "desc": "MINI DISJUNTOR JNG 125A 1P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "125A 2P",
    "desc": "MINI DISJUNTOR JNG 125A 2P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 6,000",
    "desc": "MINI DISJUNTOR JNG 125A 3P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 3,000",
    "desc": "MINI DISJUNTOR SB 16A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A2PSB",
    "desc": "MINI DISJUNTOR SB 20A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A3PSB",
    "desc": "MINI DISJUNTOR SB 20A 3P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32A1PSB",
    "desc": "MINI DISJUNTOR SB 32A 1P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32A2PSB",
    "desc": "MINI DISJUNTOR SB 32A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40A2PSB",
    "desc": "MINI DISJUNTOR SB 40A 2P",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "25A 2P CC FOTOV",
    "desc": "MINI DISJUNTOR SB CC 25A 2P 10KA 800V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "32A 2P CC FOTOV",
    "desc": "MINI DISJUNTOR SB CC 32A 2P 10KA 800V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40A 2P CC FOTOV",
    "desc": "MINI DISJUNTOR SB CC 40A 2P 10KA 800V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C40,21SPN40A2P",
    "desc": "MINI DISJUNTOR SOPRANO 40A 2P CURVA C",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C63,21SPN63A2PC",
    "desc": "MINI DISJUNTOR SOPRANO 63A 2P CURVA C",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "C80,21SPN80A2PC",
    "desc": "MINI DISJUNTOR SOPRANO 80A 2P CURVA C",
    "marca": "SOPRANO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SOPRANO 1,000",
    "desc": "MOLA BOBINA TERMINAL 33A 4100 NH ( SUPO",
    "marca": "FERRAMENTAS EL",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MONITOR LED 23,",
    "desc": "MONITOR LED 23,8 HQ",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "MOTO FREIO EBERLE 112M CONJ FLANGE COM",
    "marca": "EBERLE",
    "uni": "CNJ",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "EBERLE",
    "desc": "MOTOR ALTRI 4\" 3,0 HP 220V MON 2 FIOS",
    "marca": "ALTRI",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EMP104",
    "desc": "MOTOR DE PASSO E - KLASS EMP104",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EMP150",
    "desc": "MOTOR DE PASSO E - KLASS EMP150",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EMP184",
    "desc": "MOTOR DE PASSO E - KLASS EMP184",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EMP187",
    "desc": "MOTOR DE PASSO E - KLASS EMP187",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EMP200",
    "desc": "MOTOR DE PASSO E - KLASS EMP200",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB1HPMONOF220",
    "desc": "MOTOR DONGYIN / EBARA 4\" 1,0 HP 220V M",
    "marca": "DONGYIN/LEPONO",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN/LEPONO",
    "desc": "MOTOR DONGYIN 4\" 0,75 HP 220V MON 3 FIO",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "DONGYIN 1,000",
    "desc": "MOTOR EBARA M4P7 4 HP MONOF 220V 3 FI",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MOTOR EBARA M4P7 4,5 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0006",
    "desc": "MOTOR EBARA OM4A 0,75 HP 220V MON 2 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0010",
    "desc": "MOTOR EBARA OM4A 1,0 HP 220V MON 2 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0012",
    "desc": "MOTOR EBARA OM4A 1,0 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0014",
    "desc": "MOTOR EBARA OM4A 1,5 HP 220V MON 2 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB1,5HPMONOF",
    "desc": "MOTOR EBARA OM4A 1,5 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0016",
    "desc": "MOTOR EBARA OM4A 1,5 HP 220V TRIFASICO",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MOTOR EBARA OM4A 2,0 220V TRIFASICO 4'",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB2HP220V2FMO",
    "desc": "MOTOR EBARA OM4A 2,0 HP 220V MON 2 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0018",
    "desc": "MOTOR EBARA OM4A 2,0 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB3HP220V2FIO",
    "desc": "MOTOR EBARA OM4A 3,0 HP 220V MON 2 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0021",
    "desc": "MOTOR EBARA OM4A 3,0 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13-001-0022",
    "desc": "MOTOR EBARA OM4A 3,0 HP 220V TRIFASICO",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB OM4A 4HP T",
    "desc": "MOTOR EBARA OM4A 4,0 HP 220V TRIFASICO",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEBWM43,5HP220",
    "desc": "MOTOR EBARA WM4 3,5 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTWM45,5 13001",
    "desc": "MOTOR EBARA WM4 5,5HP 220V MON 3FIOS R.",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTWM46",
    "desc": "MOTOR EBARA WM4 6,0 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTEB6,5HPWM4220",
    "desc": "MOTOR EBARA WM4 6,5 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "EBARA",
    "desc": "MOTOR EBARA WM4 7,5 HP 220V MON 3 FIOS",
    "marca": "EBARA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MTWEG5CV4PMON22",
    "desc": "MOTOR ELETRICO WEG 5CV 1760RPM MONOF 2",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "W10399715 VENT",
    "desc": "MOTOR VENTILADOR GELADEIRA BRASTEMP CONS",
    "marca": "GELADEIRA FREZ",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "MICRO MOTOR VEN",
    "desc": "MOTOR VENTILADOR MICRO 1/40 (GDE) FREEZ",
    "marca": "AQUATURBO",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "14257",
    "desc": "MULTIMETRO CAPACIMETRO DIGITAL DT9205 A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3870007500",
    "desc": "MULTIMETRO DIGITAL MDV 7500 VND",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "14255",
    "desc": "MULTIMETRO DIGITAL PORTATIL DT830 B COM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NIPLE 1\" GALV",
    "desc": "NIPLE DUPLO 1\" GALVANIZADO",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NIPLE 1.1/2 GAL",
    "desc": "NIPLE DUPLO 1.1/2\" GALVANIZADO",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NIPLE 1.1/4 GA",
    "desc": "NIPLE DUPLO 1.1/4\" GALVANIZADO",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NIPLE 2\" GALV",
    "desc": "NIPLE DUPLO 2\" GALVANIZADO",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "NOBREAK UPS 140",
    "desc": "NOBREAK UPS CONPACT PRO UNIVERSAL 1400VA",
    "marca": "NOBREAK TSSHAR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "OLEO COMPRESSOR",
    "desc": "OLEO COMPRESSOR VONDER 1LT",
    "marca": "VONDER / OSTEN",
    "uni": "LTR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "OLEO MINERAL",
    "desc": "OLEO MINERAL P/ BOMBA SUBMERSA, O LITRO",
    "marca": "STARGREEN",
    "uni": "LTR",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "S/REF",
    "desc": "OLEO P/ TRANSFORMADOR PET 2 LITROS",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ENSELLI -7,000",
    "desc": "OUTROS",
    "marca": "PAC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "S/REF",
    "desc": "PAC",
    "marca": "FRETE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PAINEL SOLAR 55",
    "desc": "PAINEL SOLAR 555W TOPCON + GRAF. 132 CE",
    "marca": "SOLAR ZNSHINE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVC2472",
    "desc": "PALHETA PVC 2472 24\" CAMINHAO VW MERCE",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF13E",
    "desc": "PALHETA PVF 13E 13\" TRAS FIAT. UNO PALI",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF14",
    "desc": "PALHETA PVF 14\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF15",
    "desc": "PALHETA PVF 15\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF15F",
    "desc": "PALHETA PVF 15F 15\" TRAS FISETA 96>01,",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF16",
    "desc": "PALHETA PVF 16\" UNIVERSAL , CORSA 94>,",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF18",
    "desc": "PALHETA PVF 18\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF19",
    "desc": "PALHETA PVF 19\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF20",
    "desc": "PALHETA PVF 20\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF21",
    "desc": "PALHETA PVF 21\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF22",
    "desc": "PALHETA PVF 22\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PF23",
    "desc": "PALHETA PVF 23\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF24",
    "desc": "PALHETA PVF 24\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVF26",
    "desc": "PALHETA PVF 26\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT16",
    "desc": "PALHETA PVT 16\" DIANT FIT, FOX, HILUX ,",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT18",
    "desc": "PALHETA PVT 18\" RANGER 93>12, HR95>, FR",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT19",
    "desc": "PALHETA PVT 19\" SPIN 12>, JA 97>01, PA",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT20",
    "desc": "PALHETA PVT 20\" BLAZER 96>, TEMPRA 92>9",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT21",
    "desc": "PALHETA PVT 21\" A3 96>06, MONDEO 93>07",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT22",
    "desc": "PALHETA PVT 22\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PVT23",
    "desc": "PALHETA PVT 23\" UNIVERSAL",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "4926 6103",
    "desc": "PAPEL A4 210 X 297 MM C/ 500FL CHA",
    "marca": "BARTOFIL",
    "uni": "PCT",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ISO020X1000MI",
    "desc": "PAPEL ISOLEX PAPER 0,20X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "ISO025X1000MI",
    "desc": "PAPEL ISOLEX PAPER 0,25X100",
    "marca": "GEARTECH",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "KRAFT EMB MERCA",
    "desc": "PAPEL KRAFT C/ BRILHO 60 X 80 GR EMBAL",
    "marca": "TAMBASA",
    "uni": "KG",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "TAMBASA 10,000",
    "desc": "PAPEL KRAFT PAPER 0,20X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "KRP025X1000",
    "desc": "PAPEL KRAFT PAPER 0,25X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DMD180X1000MI",
    "desc": "PAPEL LAMINADO DMD CLASSE F DP 0,18X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DMD230X1000MI",
    "desc": "PAPEL LAMINADO DMD CLASSE F DP 0,23X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "DMD280X1000MI",
    "desc": "PAPEL LAMINADO DMD CLASSE F DP 0,28X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MRV -22,950",
    "desc": "PAPEL LAMINADO DMD CLASSE F DP 0,35X100",
    "marca": "GEARTECH",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "GEARTECH -5,150",
    "desc": "PAPEL LAMINADO DMD CLASSE F DP 0,40X100",
    "marca": "38",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "NMN190X0910MI",
    "desc": "PAPEL LAMINADO NMN COMPOSITE CLASSE H 0,",
    "marca": "PASQUA",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "NMN230X0910MI",
    "desc": "PAPEL LAMINADO NMN COMPOSITE CLASSE H 0,",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "NMN280X0910MI",
    "desc": "PAPEL LAMINADO NMN COMPOSITE CLASSE H 0,",
    "marca": "PASQUA",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "NMN350X0910MI",
    "desc": "PAPEL LAMINADO NMN COMPOSITE CLASSE H 0,",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "POP180X100MI",
    "desc": "PAPEL POLY PAPER BR CLASS B 0,18 (TERCOT",
    "marca": "PASQUA",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "POP200X1000MI",
    "desc": "PAPEL POLY PAPER BR CLASS B 0,20 (TERCOT",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "POP250X1000MI",
    "desc": "PAPEL POLY PAPER BR CLASS B 0,25 (TERCOT",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MWP125X1000MI",
    "desc": "PAPEL POLYESTER SHEET 0,125X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MWP190X1000MI",
    "desc": "PAPEL POLYESTER SHEET 0,19X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MWP250X1000MI",
    "desc": "PAPEL POLYESTER SHEET 0,25X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MWP300X1000MI",
    "desc": "PAPEL POLYESTER SHEET 0,30X100",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MWPX350X0950MI",
    "desc": "PAPEL POLYESTER SHEET 0,35X095",
    "marca": "MRV",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MRV 27,750",
    "desc": "PAPEL POLYESTER SHEET FRACIONADO NO METR",
    "marca": "MRV",
    "uni": "MT",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "8039040025",
    "desc": "PAPELAO PARA JUNTAS VELUMOIDE 0,40 ME",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "8039080025",
    "desc": "PAPELAO PARA JUNTAS VELUMOIDE 0,80",
    "marca": "VONDER/OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VONDER/OSTEN 25,700",
    "desc": "PAPELAO PARA JUNTAS VELUMOIDE FRACIONADO",
    "marca": "VONDER / OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VONDER / OSTEN 17,900",
    "desc": "PAPELAO PARA JUNTAS VELUMOIDE FRACIONADO",
    "marca": "VONDER / OSTEN",
    "uni": "MT",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "085816",
    "desc": "PAQUIMETRO ACO 150X0,02 RINO",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRL-1",
    "desc": "PARA RAIO DIGIMEC PRL-1",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRL-3",
    "desc": "PARA RAIO DIGIMEC PRL-3",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRAIO15KV BALES",
    "desc": "PARA RAIO POLIMERICO PBP 15KV 10KA BAL",
    "marca": "PARAFUSO ALLEN 5/16 X 3/8 S/C UNC RECAR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "S/REF",
    "desc": "PARAFUSO ALLEN 5/16 X 3/8 S/C UNC RECAR",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "11270400335",
    "desc": "PARAFUSO ALLEN 5/16 X 5/16 S/C UNC RECAR",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PRFALL5/16X7/8C",
    "desc": "PARAFUSO ALLEN 5/16 X 7/8 C/CABEÇA UNC",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PARF PORC ABRAÇ",
    "desc": "PARAFUSO C/ PORCA P/ ABRAÇADEIRA JOIHA",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PRF 5/16X1.1/2",
    "desc": "PARAFUSO CANECA C/ PORCA 5/16 X 1.1/2",
    "marca": "JOIHA",
    "uni": "UNI",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PARAFUSO M6",
    "desc": "PARAFUSO CANECA M6 X 25 ECCO 600",
    "marca": "JOIHA E ANAU",
    "uni": "UNI",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PRF M8X30 CANEC",
    "desc": "PARAFUSO CANECA M8 X 30 CANECA 90",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "8305",
    "desc": "PARAFUSO EIXO MOTOR / ROTOR",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "PRFMD4,5X40 PHI",
    "desc": "PARAFUSO MADEIRA CHIP 4,5X40 PHILIPS J",
    "marca": "JOMARCA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PRFMD5X60 PHILI",
    "desc": "PARAFUSO MADEIRA CHIP 5,0X60 PHILIPS J",
    "marca": "JOMARCA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "S/REF",
    "desc": "PARAFUSO SAIDA 600 ECCO M6 X 20",
    "marca": "GERAL",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PRF M8X16 SAIDA",
    "desc": "PARAFUSO SAIDA M8 X 16 ANAUGER JOIHA",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PRF 5/16X5/8 SA",
    "desc": "PARAFUSO SAÍDA JOIHA 5/16 X 5/8",
    "marca": "JOIHA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "JOIHA 197,000",
    "desc": "PARAFUSO TAMPA DEFLETORA WEG",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "SCÇAO IGUI 0195",
    "desc": "PARTE DIANTEIRA DA BOMBA G3 IGUI C/ANEL",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "FLGMT IGUI 1802",
    "desc": "PARTE TRASEIRA INTERMEDIARIA IGUI ESPLAS",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PASTA SOLDA COB",
    "desc": "PASTA SOLDA BRANCA COBIX 110 GR",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PASTA SOLDA EMA",
    "desc": "PASTA SOLDA BRANCA EMAVI 110 GR",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "MD-134 C/P",
    "desc": "PEDALEIRA JNG MD-13H C/PROTEÇÃO 15A 25",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PERFIL SUP SMAR",
    "desc": "PERFIL SUPORTE SMART 4,8MT PF802A480X00",
    "marca": "SOLAR ZNSHINE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BAT 9V LNTRNA E",
    "desc": "PILHA BATERIA ELGIN 9V + LANTERNA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "066415",
    "desc": "PILHA BATERIA ELGIN 9V ALCALINA",
    "marca": "ELGIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "43756 109102",
    "desc": "PILHA BATERIA ELGIN A23 12V ALCALINA",
    "marca": "ELGIN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "66976",
    "desc": "PILHA BATERIA ELGIN CR 2032 3V BOTAO",
    "marca": "ELGIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "ELGIN -31,000",
    "desc": "PILHA BATERIA FOXLUX A23 12V ALCALINA",
    "marca": "FOXLUX",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "036137",
    "desc": "PILHA DURACELL ALCALINA PEQUENA AA C/2",
    "marca": "DURACELL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "036509",
    "desc": "PILHA DURACELL ALCALINA PEQUENA AAA C/2",
    "marca": "DURACELL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "106029",
    "desc": "PILHA ELGIN ALCALINA AA C/ 2 UNID P",
    "marca": "ELGIN",
    "uni": "PAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "106026 106",
    "desc": "PILHA ELGIN ALCALINA AAA C/ 2 UNID PA",
    "marca": "ELGIN",
    "uni": "PAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "066732",
    "desc": "PILHA ELGIN RECARREGAVEL 2500A AA C/",
    "marca": "ELGIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "066733",
    "desc": "PILHA ELGIN RECARREGAVEL 900A AAA C/",
    "marca": "ELGIN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3885",
    "desc": "PINCEL ATOMICO PRETO PILOT(E)",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "067562",
    "desc": "PINO ADAPTADOR 2P 10A BC UNIV DANEVA",
    "marca": "DANEVA LEGRAN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PIVO EIXO POLIA",
    "desc": "PINO EIXO POLIA TANQUINHO GALVANIZADO",
    "marca": "CORREIA TNQ ML",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PINO ELASTICO 6",
    "desc": "PINO ELASTICO 63 ( 2,5 X 20 )",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO ELASTICO 7",
    "desc": "PINO ELASTICO 71/80/90 ( 4 X 28 )",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO ELASTICO 1",
    "desc": "PINO ELASTICO 100 ( 4 X 40 )",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO ELASTICO 1",
    "desc": "PINO ELASTICO 112 / 132 (6X50)",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO ELASTICO 1",
    "desc": "PINO ELASTICO 160/180/200 (6X60)",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO FEMEA 2P+T",
    "desc": "PINO FEMEA 2P+T 20A PT/BC TRAMON.",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PINO TE 10A PT",
    "desc": "PINO TE 3 SAIDAS 10A PRETO 177",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "10A",
    "desc": "PINO TOMADA TRAMONTINA FEMEA 2P 10A",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUGUE FEMEA 2P",
    "desc": "PINO TOMADA TRAMONTINA FEMEA 2P +T 10A",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "20A",
    "desc": "PINO TOMADA TRAMONTINA FEMEA 2P+T 20A",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "081335",
    "desc": "PINO TOMADA TRAMONTINA MACHO 2P 10A",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TAMBASA 103,000",
    "desc": "PINO TOMADA TRAMONTINA MACHO 2P+T 20A P",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "10156584",
    "desc": "PLACA BORNE K1 M6 WEG",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "8700165451A",
    "desc": "PLACA FUNDO SCHNEIDER BCA 43",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "8701229501A",
    "desc": "PLACA FUNDO SCHNEIDER BCS 205 / 220 2P N",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "8701230501A",
    "desc": "PLACA FUNDO SCHNEIDER BCS 305 / 320 / 35",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SCHNEIDER",
    "desc": "PLACA SOLAR MONO 550WP HALF-CELL (ESPM55",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PLAFON PLAST F",
    "desc": "PLAFON PLASTICO BOCAL PORCEL BR FOXLUX",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PLAT BUFALO PEQ",
    "desc": "PLATINADO BUFALO PEQUENO",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "3D2320C4K PLATE",
    "desc": "PLATINADO EBERLE 56 2H ORIG RURAL 90 / 1",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PLATEBSIMGATIH",
    "desc": "PLATINADO EBERLE SIM. GATILHO 1H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PLATBRASIL",
    "desc": "PLATINADO KIT BRASIL",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PKF1H",
    "desc": "PLATINADO KOHLBACH FENOLITE 1H",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "KO-004 PLAT FEN",
    "desc": "PLATINADO KOHLBACH FENOLITE 2H",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "KO-002 PLAT GF",
    "desc": "PLATINADO KOHLBACH GARFO ( GDE ) ANTIGO",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "KO-001 PLAT GF",
    "desc": "PLATINADO KOHLBACH GARFO ( MEDIO ) ANTIG",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "KO-011 PLAT GF",
    "desc": "PLATINADO KOHLBACH GARFO ( PEQ ) NOVO N4",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "KOHLBACH 22,000",
    "desc": "PLATINADO KOHLBACH PLASTICO 1H 48/56/5",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PLATKOPLAST2H",
    "desc": "PLATINADO KOHLBACH PLASTICO 2H 48/56",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PLTMRTHON4856",
    "desc": "PLATINADO MARATHON BAQLTE BRC MEIA LUA 4",
    "marca": "MARATHON",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "MARATHON",
    "desc": "PLATINADO TGM PARA MOTOR BRASIL 2H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "10017200",
    "desc": "PLATINADO WEG 132 112 100",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "10361410 PLAT42",
    "desc": "PLATINADO WEG 42 2H SPHIT FACE C/ TERMIN",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "13433564",
    "desc": "PLATINADO WEG 48 1H S/CABO ROL 6202",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "10361409",
    "desc": "PLATINADO WEG 48/56 2H SPLIT PHASE S/CB",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "ENSELLI 21,000",
    "desc": "PLATINADO WEG 56 1 HASTE C/ CABOS+TERM",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "ENSELLI 11,000",
    "desc": "PLATINADO WEG 56 2 HASTE C/ CABOS+TERM",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "13433566",
    "desc": "PLATINADO WEG 56 1H S/ CABO 56/56H/G",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "13421767",
    "desc": "PLATINADO WEG 56 2H S/ CABO G56H",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "10017197",
    "desc": "PLATINADO WEG 63/71",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "S/REF",
    "desc": "PLATINADO WEG MC 1HASTE ORIG",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "WEG 13,000",
    "desc": "PLATINADO WEG SIM. 42 2H S/ TERMINAL M",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "470",
    "desc": "PLATINADO WEG SIM. 48 MC 1H ( ROÇAD",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "471",
    "desc": "PLATINADO WEG SIM. 48 MC 2H ( ROÇAD",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "D' SANTES 17,000",
    "desc": "PLATINADO WEG SIM. 48 1H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "D' SANTES 14,000",
    "desc": "PLATINADO WEG SIM. 48 2H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PLATINADO 56 MC",
    "desc": "PLATINADO WEG SIM. 56 MC 2H ( ROÇA",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "472",
    "desc": "PLATINADO WEG SIM. 56 1H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "473",
    "desc": "PLATINADO WEG SIM. 56 2H",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "132",
    "desc": "PLATINADO WEG SIM. 132",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "MGI-013 JNG",
    "desc": "PLUGUE IND JNG MGI-013 2P+T 16A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-014",
    "desc": "PLUGUE IND JNG MGI-014 3P+T 16A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-023 JNG",
    "desc": "PLUGUE IND JNG MGI-023 2P+T 32A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-024 JNG",
    "desc": "PLUGUE IND JNG MGI-024 3P+T 32A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-024 9",
    "desc": "PLUGUE IND JNG MGI-024 9 3P+T 32A -",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUGUE 63A 3P+T",
    "desc": "PLUGUE IND LKM MGI-035 63A 3P + T +",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 013 IP44 S",
    "desc": "PLUGUE IND SBTC 013 IP44 2P+T 6H 16",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 014 IP44 S",
    "desc": "PLUGUE IND SBTC 014 IP44 3P+T 6H 1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 0142 IP67",
    "desc": "PLUGUE IND SBTC 0142 IP67 3P+T 6H 16",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 023 IP44 S",
    "desc": "PLUGUE IND SBTC 023 IP44 2P+T 6H 32",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 024 IP44 S",
    "desc": "PLUGUE IND SBTC 024 IP44 3P+T 6H 32",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG024-9 IP44",
    "desc": "PLUGUE IND SBTC 024-9 IP44 3P+T 6H",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUG 0242 IP67",
    "desc": "PLUGUE IND SBTC 0242 IP67 3P+T 6H 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUGUESB 63A 3P",
    "desc": "PLUGUE IND SBTC 034 3P+T 63A - 6H V",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUGUE LOUÇA 2X",
    "desc": "PLUGUE LOUÇA 2 X 25A PINO MACHO",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PLUGUE LOUÇA 2X",
    "desc": "PLUGUE LOUÇA 2 X 30A PINO MACHO",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "50 1A",
    "desc": "POLIA ALUMINIO 50 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "50 1B AL",
    "desc": "POLIA ALUMINIO 50 1B",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "50 2A",
    "desc": "POLIA ALUMINIO 50 2A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "50 2B",
    "desc": "POLIA ALUMINIO 50 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2875",
    "desc": "POLIA ALUMINIO 60 1A VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "60 1B",
    "desc": "POLIA ALUMINIO 60 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "60 2A",
    "desc": "POLIA ALUMINIO 60 2A VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "60 2B",
    "desc": "POLIA ALUMINIO 60 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2887",
    "desc": "POLIA ALUMINIO 70 1A VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70 1B",
    "desc": "POLIA ALUMINIO 70 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2888",
    "desc": "POLIA ALUMINIO 70 2A VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70 2B",
    "desc": "POLIA ALUMINIO 70 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "80 1A",
    "desc": "POLIA ALUMINIO 80 1A VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "80 1B",
    "desc": "POLIA ALUMINIO 80 1B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "80 2A",
    "desc": "POLIA ALUMINIO 80 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "80 2B",
    "desc": "POLIA ALUMINIO 80 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "90 1A",
    "desc": "POLIA ALUMINIO 90 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2915",
    "desc": "POLIA ALUMINIO 90 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "90 2A",
    "desc": "POLIA ALUMINIO 90 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "90 2B",
    "desc": "POLIA ALUMINIO 90 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "90 3B",
    "desc": "POLIA ALUMINIO 90 3B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "100 1A",
    "desc": "POLIA ALUMINIO 100 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "100 1B",
    "desc": "POLIA ALUMINIO 100 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "100 2A",
    "desc": "POLIA ALUMINIO 100 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "100 2B",
    "desc": "POLIA ALUMINIO 100 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "100 3B",
    "desc": "POLIA ALUMINIO 100 3B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "110 1A",
    "desc": "POLIA ALUMINIO 110 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "110 2A",
    "desc": "POLIA ALUMINIO 110 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "110 2B",
    "desc": "POLIA ALUMINIO 110 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "115 1A",
    "desc": "POLIA ALUMINIO 115 1A",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "115 2A",
    "desc": "POLIA ALUMINIO 115 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2945",
    "desc": "POLIA ALUMINIO 120 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2949",
    "desc": "POLIA ALUMINIO 120 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "120 2A",
    "desc": "POLIA ALUMINIO 120 2A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "120 2B",
    "desc": "POLIA ALUMINIO 120 2B",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "125 1A",
    "desc": "POLIA ALUMINIO 125 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "125 2A",
    "desc": "POLIA ALUMINIO 125 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "130 1A",
    "desc": "POLIA ALUMINIO 130 1A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "130 2A",
    "desc": "POLIA ALUMINIO 130 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "130 2B",
    "desc": "POLIA ALUMINIO 130 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "130 3B",
    "desc": "POLIA ALUMINIO 130 3B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "140 1A",
    "desc": "POLIA ALUMINIO 140 1A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "140 2A",
    "desc": "POLIA ALUMINIO 140 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "140 2B",
    "desc": "POLIA ALUMINIO 140 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "150 1A",
    "desc": "POLIA ALUMINIO 150 1A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "150 2A",
    "desc": "POLIA ALUMINIO 150 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "150 2B",
    "desc": "POLIA ALUMINIO 150 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "150 3B",
    "desc": "POLIA ALUMINIO 150 3B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "180 1B",
    "desc": "POLIA ALUMINIO 160 1B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "160 2A",
    "desc": "POLIA ALUMINIO 160 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "160 2B",
    "desc": "POLIA ALUMINIO 160 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "160 3A",
    "desc": "POLIA ALUMINIO 160 3A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "170 2A",
    "desc": "POLIA ALUMINIO 170 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "170 2B",
    "desc": "POLIA ALUMINIO 170 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "180 2A",
    "desc": "POLIA ALUMINIO 180 2A",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "180 2B",
    "desc": "POLIA ALUMINIO 180 2B",
    "marca": "39",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "200 2A",
    "desc": "POLIA ALUMINIO 200 2A",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "200 2B",
    "desc": "POLIA ALUMINIO 200 2B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "200 3B",
    "desc": "POLIA ALUMINIO 200 3B",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "350 1B AL",
    "desc": "POLIA ALUMINIO 350 2B",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "501AFF15,88",
    "desc": "POLIA FERRO FUND. 50 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "501AFF19,05",
    "desc": "POLIA FERRO FUND. 50 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "501A SF FF",
    "desc": "POLIA FERRO FUND. 50 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "501BSF FF",
    "desc": "POLIA FERRO FUND. 50 1B S/FURO A",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "502AFF15,88",
    "desc": "POLIA FERRO FUND. 50 2A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "502AFF19,05",
    "desc": "POLIA FERRO FUND. 50 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "502AFFSF",
    "desc": "POLIA FERRO FUND. 50 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "POLIA 50 2B F/1",
    "desc": "POLIA FERRO FUND. 50 2B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "502BFFSF",
    "desc": "POLIA FERRO FUND. 50 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "601AFF15,88",
    "desc": "POLIA FERRO FUND. 60 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "601AFF19,05",
    "desc": "POLIA FERRO FUND. 60 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "601AFFSF",
    "desc": "POLIA FERRO FUND. 60 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "601BSF FF",
    "desc": "POLIA FERRO FUND. 60 1B S/FURO AT",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "602AFF15,88",
    "desc": "POLIA FERRO FUND. 60 2A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "60MM2AF19,05",
    "desc": "POLIA FERRO FUND. 60 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "60MM2ASF",
    "desc": "POLIA FERRO FUND. 60 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "602BCF15,88FF",
    "desc": "POLIA FERRO FUND. 60 2B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "602BCF19,05",
    "desc": "POLIA FERRO FUND. 60 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "602BFF",
    "desc": "POLIA FERRO FUND. 60 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "652A SF FF",
    "desc": "POLIA FERRO FUND. 65 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF701AF15,8",
    "desc": "POLIA FERRO FUND. 70 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70MM1AF19,05",
    "desc": "POLIA FERRO FUND. 70 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70MM1ASF",
    "desc": "POLIA FERRO FUND. 70 1A S/ FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "701BCF19,05FF",
    "desc": "POLIA FERRO FUND. 70 1B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "701BCF24FF",
    "desc": "POLIA FERRO FUND. 70 1B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "701BSF FF",
    "desc": "POLIA FERRO FUND. 70 1B S/FURO AT",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "702ACF15,88",
    "desc": "POLIA FERRO FUND. 70 2A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70MM2AF19,05",
    "desc": "POLIA FERRO FUND. 70 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "70MM2ASF",
    "desc": "POLIA FERRO FUND. 70 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "702B CF15,88 FF",
    "desc": "POLIA FERRO FUND. 70 2B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "702BCF 19,05",
    "desc": "POLIA FERRO FUND. 70 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "702BCF24FF",
    "desc": "POLIA FERRO FUND. 70 2B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "702BSF",
    "desc": "POLIA FERRO FUND. 70 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "801ACF15,88",
    "desc": "POLIA FERRO FUND. 80 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "801ACF19,05",
    "desc": "POLIA FERRO FUND. 80 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "801ASF",
    "desc": "POLIA FERRO FUND. 80 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "801BSF FF",
    "desc": "POLIA FERRO FUND. 80 1B S/FURO AT",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "802ACF19,05FF",
    "desc": "POLIA FERRO FUND. 80 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "802ASF",
    "desc": "POLIA FERRO FUND. 80 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "802B CF15,88 8",
    "desc": "POLIA FERRO FUND. 80 2B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "802BCF 19,05",
    "desc": "POLIA FERRO FUND. 80 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "802BSF",
    "desc": "POLIA FERRO FUND. 80 2B S/FURO AT",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "803ASF FF",
    "desc": "POLIA FERRO FUND. 80 3A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "851ACF 15,88",
    "desc": "POLIA FERRO FUND. 85 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "851ACF 19,05 FF",
    "desc": "POLIA FERRO FUND. 85 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "851ASF",
    "desc": "POLIA FERRO FUND. 85 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "852ACF19,05FF",
    "desc": "POLIA FERRO FUND. 85 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "852ASF",
    "desc": "POLIA FERRO FUND. 85 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "852BSF",
    "desc": "POLIA FERRO FUND. 85 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "901ACF 15,88",
    "desc": "POLIA FERRO FUND. 90 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "901ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 90 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "901ASF",
    "desc": "POLIA FERRO FUND. 90 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "901BCF 19,05",
    "desc": "POLIA FERRO FUND. 90 1B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "901BSF",
    "desc": "POLIA FERRO FUND. 90 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "902ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 90 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "902ASF",
    "desc": "POLIA FERRO FUND. 90 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "902BCF 19,05MM",
    "desc": "POLIA FERRO FUND. 90 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "902BSF",
    "desc": "POLIA FERRO FUND. 90 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "903ASF",
    "desc": "POLIA FERRO FUND. 90 3A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "903BCF 15,88 FF",
    "desc": "POLIA FERRO FUND. 90 3B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "903BCF 19,05 FF",
    "desc": "POLIA FERRO FUND. 90 3B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "903B SF FF 37",
    "desc": "POLIA FERRO FUND. 90 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1001ASF",
    "desc": "POLIA FERRO FUND. 100 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1001AFF15,88",
    "desc": "POLIA FERRO FUND. 100 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1001ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 100 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1001BCF 19,05MM",
    "desc": "POLIA FERRO FUND. 100 1B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 20",
    "desc": "POLIA FERRO FUND. 100 1B C/FURO 20MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1001BSF",
    "desc": "POLIA FERRO FUND. 100 1B S/FURO",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF1588",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 15,88MM",
    "marca": "1002ACF",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF19,05",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF 22,00MM",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 22,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF 24,00MM",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF 28,00MM",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ACF 38,00MM",
    "desc": "POLIA FERRO FUND. 100 2A C/FURO 38,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002ASF",
    "desc": "POLIA FERRO FUND. 100 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 19,05MM",
    "desc": "POLIA FERRO FUND. 100 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 20 FF",
    "desc": "POLIA FERRO FUND. 100 2B C/FURO 20,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 24,00MM",
    "desc": "POLIA FERRO FUND. 100 2B C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 28,00MM",
    "desc": "POLIA FERRO FUND. 100 2B C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BCF 38,00MM",
    "desc": "POLIA FERRO FUND. 100 2B C/FURO 38,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1002BSF",
    "desc": "POLIA FERRO FUND. 100 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003ASF",
    "desc": "POLIA FERRO FUND. 100 3A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003B CF24 FF",
    "desc": "POLIA FERRO FUND. 100 3B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003B CF28 FF",
    "desc": "POLIA FERRO FUND. 100 3B C/FURO 28MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003BCF 38,00MM",
    "desc": "POLIA FERRO FUND. 100 3B C/FURO 38,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003BDF",
    "desc": "POLIA FERRO FUND. 100 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1003CSF FF",
    "desc": "POLIA FERRO FUND. 100 3C S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1004B SF FF",
    "desc": "POLIA FERRO FUND. 100 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1101ACF 15,88 F",
    "desc": "POLIA FERRO FUND. 110 1A C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1101ACF 19,05",
    "desc": "POLIA FERRO FUND. 110 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1101ASF",
    "desc": "POLIA FERRO FUND. 110 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1001BSF",
    "desc": "POLIA FERRO FUND. 110 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "567",
    "desc": "POLIA FERRO FUND. 110 2A C/FURO 15,88 MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 110 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102ACF 24,00MM",
    "desc": "POLIA FERRO FUND. 110 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102ACF 28,00MM",
    "desc": "POLIA FERRO FUND. 110 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102ACF 38MM",
    "desc": "POLIA FERRO FUND. 110 2A C/FURO 38,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102ASF",
    "desc": "POLIA FERRO FUND. 110 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102BCF 19,05MM",
    "desc": "POLIA FERRO FUND. 110 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102B CF24 FF",
    "desc": "POLIA FERRO FUND. 110 2B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1102BSF",
    "desc": "POLIA FERRO FUND. 110 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1103ASF",
    "desc": "POLIA FERRO FUND. 110 3A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1103B CF24 FF",
    "desc": "POLIA FERRO FUND. 110 3B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1103B CF28 FF",
    "desc": "POLIA FERRO FUND. 110 3B C/FURO 28MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1103B SF FF",
    "desc": "POLIA FERRO FUND. 110 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1151ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 115 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1151ASF",
    "desc": "POLIA FERRO FUND. 115 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1151BSF",
    "desc": "POLIA FERRO FUND. 115 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "POLIA F. FDN 11",
    "desc": "POLIA FERRO FUND. 115 2A C/FURO 15,8MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "115 2ACF 19,0MM",
    "desc": "POLIA FERRO FUND. 115 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1152ACF 24,00MM",
    "desc": "POLIA FERRO FUND. 115 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1152ACF 28,00MM",
    "desc": "POLIA FERRO FUND. 115 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1152ASF",
    "desc": "POLIA FERRO FUND. 115 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1152BSF",
    "desc": "POLIA FERRO FUND. 115 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1201ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 120 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1201ASF",
    "desc": "POLIA FERRO FUND. 120 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1201BSF",
    "desc": "POLIA FERRO FUND. 120 1B S/FURO",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202ACF 19,05MM",
    "desc": "POLIA FERRO FUND. 120 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1202ACF22",
    "desc": "POLIA FERRO FUND. 120 2A C/FURO 22,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1202ACF24,00",
    "desc": "POLIA FERRO FUND. 120 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1202ACF28,00",
    "desc": "POLIA FERRO FUND. 120 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1202ACF38,00",
    "desc": "POLIA FERRO FUND. 120 2A C/FURO 38,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFFSF1202ASF",
    "desc": "POLIA FERRO FUND. 120 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202B CF19,05 F",
    "desc": "POLIA FERRO FUND. 120 2B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202B CF24 FF 8",
    "desc": "POLIA FERRO FUND. 120 2B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202B CF28 FF 8",
    "desc": "POLIA FERRO FUND. 120 2B C/FURO 28MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202B CF38 FF",
    "desc": "POLIA FERRO FUND. 120 2B C/FURO 38MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1202BSF",
    "desc": "POLIA FERRO FUND. 120 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1203B CF15,88",
    "desc": "POLIA FERRO FUND. 120 3B C/FURO 15,88MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1203BCF",
    "desc": "POLIA FERRO FUND. 120 3B C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1203B SF",
    "desc": "POLIA FERRO FUND. 120 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1203CSF FF",
    "desc": "POLIA FERRO FUND. 120 3C S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1204B SF FF",
    "desc": "POLIA FERRO FUND. 120 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1252A CF22MM",
    "desc": "POLIA FERRO FUND. 125 2A C/FURO 22,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1252ACF24,00",
    "desc": "POLIA FERRO FUND. 125 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1252ACF28,00",
    "desc": "POLIA FERRO FUND. 125 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1252ASF",
    "desc": "POLIA FERRO FUND. 125 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1252BSF",
    "desc": "POLIA FERRO FUND. 125 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1253B SF FF",
    "desc": "POLIA FERRO FUND. 125 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1301ASF",
    "desc": "POLIA FERRO FUND. 130 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1301ACF19,05",
    "desc": "POLIA FERRO FUND. 130 1A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1301BSF FF",
    "desc": "POLIA FERRO FUND. 130 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1302ACF",
    "desc": "POLIA FERRO FUND. 130 2A C/FURO 19,05MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1302ACF24,00",
    "desc": "POLIA FERRO FUND. 130 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1302ACF28,00",
    "desc": "POLIA FERRO FUND. 130 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1302ASF",
    "desc": "POLIA FERRO FUND. 130 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1302BSF",
    "desc": "POLIA FERRO FUND. 130 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1303BSF",
    "desc": "POLIA FERRO FUND. 130 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1401ASF",
    "desc": "POLIA FERRO FUND. 140 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1401BSF",
    "desc": "POLIA FERRO FUND. 140 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1402BSF",
    "desc": "POLIA FERRO FUND. 140 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1403BSF",
    "desc": "POLIA FERRO FUND. 140 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1404B SF FF",
    "desc": "POLIA FERRO FUND. 140 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1501ASF",
    "desc": "POLIA FERRO FUND. 150 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1501BSF FF",
    "desc": "POLIA FERRO FUND. 150 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1502ACF24,00",
    "desc": "POLIA FERRO FUND. 150 2A C/FURO 24,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1502ACF28,00",
    "desc": "POLIA FERRO FUND. 150 2A C/FURO 28,00MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1502ASF",
    "desc": "POLIA FERRO FUND. 150 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1502BSF",
    "desc": "POLIA FERRO FUND. 150 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1503BSF",
    "desc": "POLIA FERRO FUND. 150 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1504B SF FF 446",
    "desc": "POLIA FERRO FUND. 150 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1601ASF",
    "desc": "POLIA FERRO FUND. 160 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1601BSF",
    "desc": "POLIA FERRO FUND. 160 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1602ASF",
    "desc": "POLIA FERRO FUND. 160 2A S/FURO AT",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1602BSF",
    "desc": "POLIA FERRO FUND. 160 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1603BSF",
    "desc": "POLIA FERRO FUND. 160 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1604B SF FF 44",
    "desc": "POLIA FERRO FUND. 160 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1701ASF",
    "desc": "POLIA FERRO FUND. 170 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1701BSF",
    "desc": "POLIA FERRO FUND. 170 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1702ASF",
    "desc": "POLIA FERRO FUND. 170 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1702BSF",
    "desc": "POLIA FERRO FUND. 170 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1703BSF",
    "desc": "POLIA FERRO FUND. 170 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1704B SF FF 38",
    "desc": "POLIA FERRO FUND. 170 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1801ASF",
    "desc": "POLIA FERRO FUND. 180 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1801BSF",
    "desc": "POLIA FERRO FUND. 180 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF1802ASF",
    "desc": "POLIA FERRO FUND. 180 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1802BFFSF",
    "desc": "POLIA FERRO FUND. 180 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1803B SF FF 38",
    "desc": "POLIA FERRO FUND. 180 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1804B SF FF 44",
    "desc": "POLIA FERRO FUND. 180 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1805BSF",
    "desc": "POLIA FERRO FUND. 180 5B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1901AFFSF",
    "desc": "POLIA FERRO FUND. 190 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1901BFFSF",
    "desc": "POLIA FERRO FUND. 190 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1902AFFSF",
    "desc": "POLIA FERRO FUND. 190 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1902BFFSF",
    "desc": "POLIA FERRO FUND. 190 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1903B SF FF 38",
    "desc": "POLIA FERRO FUND. 190 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1904B SF FF 45",
    "desc": "POLIA FERRO FUND. 190 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2001AFFSF",
    "desc": "POLIA FERRO FUND. 200 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2002AFFSF",
    "desc": "POLIA FERRO FUND. 200 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2002BFF28",
    "desc": "POLIA FERRO FUND. 200 2B C/FURO 28MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2002BFF38",
    "desc": "POLIA FERRO FUND. 200 2B C/FURO 38MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2002BFFSF",
    "desc": "POLIA FERRO FUND. 200 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF2503BSF",
    "desc": "POLIA FERRO FUND. 200 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "POLIA F. FND 20",
    "desc": "POLIA FERRO FUND. 200 3B C/FURO 24MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2003BFF28",
    "desc": "POLIA FERRO FUND. 200 3B C/FURO 28MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2003BFF38",
    "desc": "POLIA FERRO FUND. 200 3B C/FURO 38MM",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2003BFFSF",
    "desc": "POLIA FERRO FUND. 200 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2004B SF FF 4",
    "desc": "POLIA FERRO FUND. 200 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2101AFFSF",
    "desc": "POLIA FERRO FUND. 210 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2103BFFSF",
    "desc": "POLIA FERRO FUND. 210 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2201AFFSF",
    "desc": "POLIA FERRO FUND. 220 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2203B SF FF 391",
    "desc": "POLIA FERRO FUND. 220 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2204B SF FF 45",
    "desc": "POLIA FERRO FUND. 220 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2302ASFFF",
    "desc": "POLIA FERRO FUND. 230 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2302B SF FF 33",
    "desc": "POLIA FERRO FUND. 230 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2303B SF FF",
    "desc": "POLIA FERRO FUND. 230 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2304B SF FF",
    "desc": "POLIA FERRO FUND. 230 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2401AFFSF",
    "desc": "POLIA FERRO FUND. 240 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2402B SF FF 33",
    "desc": "POLIA FERRO FUND. 240 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2403B SF FF",
    "desc": "POLIA FERRO FUND. 240 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF2501ASF",
    "desc": "POLIA FERRO FUND. 250 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF2502ASF",
    "desc": "POLIA FERRO FUND. 250 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF2502BSF",
    "desc": "POLIA FERRO FUND. 250 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF2503BSF",
    "desc": "POLIA FERRO FUND. 250 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2504B SF FF",
    "desc": "POLIA FERRO FUND. 250 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2701AFFSF",
    "desc": "POLIA FERRO FUND. 270 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2702ASFFF",
    "desc": "POLIA FERRO FUND. 270 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2702B SF FF",
    "desc": "POLIA FERRO FUND. 270 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2703B SF",
    "desc": "POLIA FERRO FUND. 270 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "2704BSF FF",
    "desc": "POLIA FERRO FUND. 270 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3001ASF",
    "desc": "POLIA FERRO FUND. 300 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3001BSF",
    "desc": "POLIA FERRO FUND. 300 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3002BSF",
    "desc": "POLIA FERRO FUND. 300 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3003BSF",
    "desc": "POLIA FERRO FUND. 300 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "3004B SF FF",
    "desc": "POLIA FERRO FUND. 300 4B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "280",
    "desc": "POLIA FERRO FUND. 320 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3501ASF",
    "desc": "POLIA FERRO FUND. 350 1A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3501BSF",
    "desc": "POLIA FERRO FUND. 350 1B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "FETOPIL 1,000",
    "desc": "POLIA FERRO FUND. 350 2A S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3502BSF",
    "desc": "POLIA FERRO FUND. 350 2B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PFF3503BSF",
    "desc": "POLIA FERRO FUND. 350 3B S/FURO",
    "marca": "FETOPIL",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "1502BFFND MADEM",
    "desc": "POLIA FERRO MADEMIL 150 2B + FRETE",
    "marca": "ENSELLI",
    "uni": "UNI",
    "cat": "Correias e Polias"
  },
  {
    "ref": "PONTE 220",
    "desc": "PONTE RETIFICADORA 220V MOTO FREIO PONT",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "PONTE 440",
    "desc": "PONTE RETIFICADORA 440V MOTO FREIO PONT",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "KBPC 50/10",
    "desc": "PONTE RETIFICADORA KBPC 50/10 - 4 PINOS",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PONTE C G.CSM",
    "desc": "PONTE RETIFICADORA MONOF 110/220V GUICHO",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "07642020",
    "desc": "PONTE RETIFICADORA SEMIKRON KBPC 35/10 -",
    "marca": "SEMIKRON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "07642130",
    "desc": "PONTE RETIFICADORA SEMIKRON KBPC 50/10 -",
    "marca": "SEMIKRON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SKB 35/10 SEMIK",
    "desc": "PONTE RETIFICADORA SEMIKRON SKB 35/10 -",
    "marca": "SEMIKRON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SKD 25/08",
    "desc": "PONTE RETIFICADORA SEMIKRON SKD 25/08 -",
    "marca": "SEMIKRON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "07275710",
    "desc": "PONTE RETIFICADORA SEMIKRON SKD 25/12 -",
    "marca": "SEMIKRON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PONTE C3 G. C",
    "desc": "PONTE RETIFICADORA TRIF. 220/380V GUINCH",
    "marca": "ELECTRYON",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "1001 7187",
    "desc": "PONTE RETIFICADORA WEG 110-240V MOTO FR",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "1001 7188",
    "desc": "PONTE RETIFICADORA WEG 380-480V 2A MOTO",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PORCA 3/8\"",
    "desc": "PORCA JOIHA 3/8\" VENTOSA ( PONTA MART",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "S/REF",
    "desc": "PORCA JOIHA 5/16' ( PARAFUSO CANECA )",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Peças de Motores e Bombas"
  },
  {
    "ref": "PORCA 5/16 AMO",
    "desc": "PORCA JOIHA 5/8\" ( EIXO AMORTECEDOR 6",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "PRC M16 AMORT",
    "desc": "PORCA JOIHA M16 ( EIXO AMORTECEDOR 900",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "JOIHA 61,000",
    "desc": "PORCA MARTELETE 5/8 EIXO AMORTECEDOR H",
    "marca": "PORCA MARTELETE M16 EIXO AMORTECEDOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "S/REF",
    "desc": "PORCA MARTELETE M16 EIXO AMORTECEDOR",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60550308P",
    "desc": "PORCA PRE-FILTRO PF-17 DANCOR",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "PORCAPFAQUEX 2",
    "desc": "PORCA TAMPA PRE FILTRO AQUEX 94317 2",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11270400179",
    "desc": "PORCA THEBE LATAO THS-18 1/2\" UNF",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "GKS190",
    "desc": "PORTA ESCOVA BOSCH GKS190 ORIGINAL",
    "marca": "MERCADO LIVRE",
    "uni": "PAR",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRTESCVABAMBOZZ",
    "desc": "PORTA ESCOVA GERADOR BAMBOZZI SUPORTE (",
    "marca": "BAMBOZZI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PORTAESCKOHL2ES",
    "desc": "PORTA ESCOVA GERADOR KOHLBACH 2 GUIAS B",
    "marca": "KOHLBACH",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PT FUS 5X20",
    "desc": "PORTA FUSIVEL 5X20 PT ( P/ FUSIVEL DE VI",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 18,000",
    "desc": "PORTA FUSIVEL 6X30 PT 250V JCPF630",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "EW35",
    "desc": "POSTE FIXAÇAO P/ BORNE EW35 SAK JNG 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "POTWXD3590-10MU",
    "desc": "POTENCIOMETRO LINEAR 10MM MULTIVOLTAS W",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "POTSB22MM10K 14",
    "desc": "POTENCIOMETRO SB LINEAR 22MM KNOB LA42DW",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "POTSB22MM05K 14",
    "desc": "POTENCIOMETRO SB LINEAR 22MM KNOB LA42DW",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "POTSB05K PEQ 9",
    "desc": "POTENCIOMETRO SBTC 05K TIPO B 1 VOLTA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "POTSB10K PEQ",
    "desc": "POTENCIOMETRO SBTC 10K TIPO B 1 VOLTA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC 7,000",
    "desc": "PRENSA CABO 1\" CINZA SB 112/1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "1\"",
    "desc": "PRENSA CABO 1\" CINZA JNG 11",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG -26,000",
    "desc": "PRENSA CABO 1.1/2\" CINZA SB",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC 18,000",
    "desc": "PRENSA CABO 1.1/4\" CINZA JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "G1/2",
    "desc": "PRENSA CABO 1/2\" CINZA JNG 14220 71/",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG 39,000",
    "desc": "PRENSA CABO 1/2\" CINZA SBTC 71/80",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC 42,000",
    "desc": "PRENSA CABO 2\" CINZA JNG 20",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "G3/4",
    "desc": "PRENSA CABO 3/4\" CINZA 90/100",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC 2,000",
    "desc": "PRENSA CABO 3/8\" CINZA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BSP 2\"",
    "desc": "PRENSA CABO BSP 2\" SBTC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG7",
    "desc": "PRENSA CABO PG 7 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG9",
    "desc": "PRENSA CABO PG 9 JNG CZ",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG -25,000",
    "desc": "PRENSA CABO PG 11 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG13,5",
    "desc": "PRENSA CABO PG 13,5 JNG 13547",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "13,5L",
    "desc": "PRENSA CABO PG 13,5L SB",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC -10,000",
    "desc": "PRENSA CABO PG 16 5/8 LKM",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG16",
    "desc": "PRENSA CABO PG 16 CINZA JNG 13548",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG19",
    "desc": "PRENSA CABO PG 19 CINZA JNG 13549",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG -14,000",
    "desc": "PRENSA CABO PG 21 CINZA JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG 14,000",
    "desc": "PRENSA CABO PG 25 CINZA JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG -7,000",
    "desc": "PRENSA CABO PG 29 CINZA JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "JNG 1,000",
    "desc": "PRENSA CABO PG 36 CINZA JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PG9 LNG SB",
    "desc": "PRENSA CABO PG-9 LONGO SB",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "100 A140 LBS LE",
    "desc": "PRESSOSTATO 100 A 140 PSI C/ VALV ALIVIO",
    "marca": "LEFFOO",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRESCHIA100/140",
    "desc": "PRESSOSTATO 100 A 140 PSI C/ VALV ALIVIO",
    "marca": "CHIAPERINI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "135 A175 LBS LE",
    "desc": "PRESSOSTATO 135 A 175 PSI C/ VALV ALIVIO",
    "marca": "LEFFOO",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "80 A 120 LBS LE",
    "desc": "PRESSOSTATO 80 A 120 PSI C/ VALV ALIVIO",
    "marca": "LEFFOO",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRESS 8A32BAR D",
    "desc": "PRESSOSTATO DANFOSS ALTA 8 A 32 BAR KP",
    "marca": "DANFOSS",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "7840351060 5172",
    "desc": "PRESSOSTATO MG SDBQ 80 A 120 PSI 35106",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "35113 PRESS 125",
    "desc": "PRESSOSTATO MG SDBQ 125 A 175 PSI 35113",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRESSSB 1-10BAR",
    "desc": "PRESSOSTATO PC 10 AJUSTE 1,0~10BAR 16A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PRESSSB 4-20BAR",
    "desc": "PRESSOSTATO PC 20D AJUSTE 4,0~20BAR 16A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC 1,000",
    "desc": "PROGRAMADOR HORÁRIO DIGIMEC DTWM-1 90-24",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DIGIMEC 1,000",
    "desc": "PROGRAMADOR HORÁRIO DIGIMEC YTW/34 110V",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "DIGIMEC 10,000",
    "desc": "PROGRAMADOR HORÁRIO DIGIMEC YTW/34 220V",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JHDC",
    "desc": "PROGRAMADOR HORÁRIO JNG JHDC 110-220VCA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JTHA",
    "desc": "PROGRAMADOR HORÁRIO JNG JTHA 220VCA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JTHD",
    "desc": "PROGRAMADOR HORÁRIO JNG JTHD 220VCA",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "10189",
    "desc": "PROGRAMADOR HORÁRIO SBTC GMT-03 ANALOGIC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KG316T SBTC",
    "desc": "PROGRAMADOR HORÁRIO SBTC KG316T 110-240V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC -2,000",
    "desc": "PROGRAMADOR HORÁRIO SBTC THC-15F 110-240",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3194",
    "desc": "PROLONGAMENTO EIXO 3/4 RS CHAV. 89 MM PA",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3418",
    "desc": "PROLONGAMENTO EIXO HM 3 77MM COMP ROTOR",
    "marca": "MARK",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3419",
    "desc": "PROLONGAMENTO EIXO HM4 107MM COMP ROTOR",
    "marca": "MARK",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3193",
    "desc": "PROLONGAMENTO EIXO PONTA 3/4 CHAVETA 5/8",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "OUTROS 2,000",
    "desc": "PROTETOR CABO ESPIRAL 10MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "PCT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2898210012",
    "desc": "PROTETOR CABO ESPIRAL 12MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "PCT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2898210016",
    "desc": "PROTETOR CABO ESPIRAL 16 MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "PCT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2898210018",
    "desc": "PROTETOR CABO ESPIRAL 18MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2898210020",
    "desc": "PROTETOR CABO ESPIRAL 20MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "2898210025",
    "desc": "PROTETOR CABO ESPIRAL 25MM VONDER C/2MT",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SWB-08-PR",
    "desc": "PROTETOR ESPIRAL SB SWB-08-PR 6~8MM",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SWB-12-PR",
    "desc": "PROTETOR ESPIRAL SB SWB-12-PR 10~12MM",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SWB-19-PR",
    "desc": "PROTETOR ESPIRAL SB SWB-19-PR 15~19MM",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PT6A",
    "desc": "PROTETOR TERMICO 6 AMPERES RELE DONGYIN",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PT10A",
    "desc": "PROTETOR TERMICO 10 AMPERES RELE DONGYIN",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "80047",
    "desc": "PROTETOR TERMICO 15 AMPERES",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "PT16A",
    "desc": "PROTETOR TERMICO 16 AMPERES RELE DONGYI",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PT20A",
    "desc": "PROTETOR TERMICO 20 AMPERES RELE DONGYI",
    "marca": "DONGYIN",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "47591",
    "desc": "PULVERIZADOR 1,5 LT MANUAL PRESSÃO PREVI",
    "marca": "UPFER",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "001432",
    "desc": "PULVERIZADOR 2,0 LT MANUAL PRESSÃO PREVI",
    "marca": "RINO",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "001263",
    "desc": "PULVERIZADOR 2,0 LT MANUAL PRESSÃO PREVI",
    "marca": "PALISAD",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "QCBPMWM45,5",
    "desc": "QUADRO COM EBARA BPM WM4 5,5HP 220V MON",
    "marca": "EBARA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "QDSTRINGBOX 8PO",
    "desc": "QUADRO DISTRIB SOBREPOR P/ STRING BOX SO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC 2,000",
    "desc": "REBITE ALUMINIO 3,2 X 12",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "REB AL POP 3,2X",
    "desc": "REBITE ALUMINIO 3,2 X 16",
    "marca": "JOMARCA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JOMARCA",
    "desc": "REBITE ALUMINIO 4,0 X 12",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "REB AL POP 4X16",
    "desc": "REBITE ALUMINIO 4,0 X 16",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "REB AÇ POP 4X19",
    "desc": "REBITE ALUMINIO 4,0 X 19",
    "marca": "JOMARCA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "REB AL POP 4,8X",
    "desc": "REBITE ALUMINIO 4,8 X 16",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "1249558060",
    "desc": "REBOLO RETO 5 X 5/8\" MEDIO MARROM",
    "marca": "VONDER / OSTEN",
    "uni": "RL",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JC-FL01",
    "desc": "REFLETOR JNG JC-FL01 10W NEW",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JC-FL02",
    "desc": "REFLETOR JNG JC-FL02 20W ECO 6500K",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "031264",
    "desc": "REGULADOR GAS S/MAG. GD ALIANÇA 506",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TAMBASA 1,000",
    "desc": "RELE ACOPLADOR JNG JAR50 110V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JAR50 12VCC",
    "desc": "RELE ACOPLADOR JNG JAR50 12VCC",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JAR50 220VCA",
    "desc": "RELE ACOPLADOR JNG JAR50 220VCA 13470",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JAR50 24VCC",
    "desc": "RELE ACOPLADOR JNG JAR50 24VCA 13468",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HF41F 12VC 1091",
    "desc": "RELE ACOPLADOR SB HF41F 12VCC (SOMENTE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HF41F 24VC 5839",
    "desc": "RELE ACOPLADOR SB HF41F 24VCC (SOMENTE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "HF41F60V NIL220",
    "desc": "RELE ACOPLADOR SB HF41F 60V NIL 220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RAFI NPN SB 967",
    "desc": "RELE ACOPLADOR SB C/FONTE INT. RAFI NPN",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RAFI PNP SB 925",
    "desc": "RELE ACOPLADOR SB C/FONTE INT. RAFI PNP",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RAC-1 110VCA",
    "desc": "RELE ACOPLADOR SB RAC-1 110VCA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RAC-1 12VCC",
    "desc": "RELE ACOPLADOR SB RAC-1 12VCA/VCC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RAC-1 220VCA",
    "desc": "RELE ACOPLADOR SB RAC-1 220VCA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "009909",
    "desc": "RELE ACOPLADOR SB RAC-1 24VCA/VCC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 24,000",
    "desc": "RELE ACOPLADOR SB RAC-2 12VCC/VCA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RELEBMB CONDOMI",
    "desc": "RELE BOMBA CONDOMINIO 220V ( ACION ALTER",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "AEG-UEM 15MIN",
    "desc": "RELE COEL AEG-UEM-P 15MIN 94 A 242VCA /",
    "marca": "COEL",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RM22LA32MR",
    "desc": "RELE CONTROLE NIVEL MULTIFUNÇAO ATRASO L",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDP9F000",
    "desc": "RELE DIGIMEC DPF-1 208-408V (FALTA DE FA",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 1,000",
    "desc": "RELE DIGIMEC DPF-1 220-380V (FALTA DE FA",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC -4,000",
    "desc": "RELE DIGIMEC DPF-1 380V (FALTA DE FASE)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC",
    "desc": "RELE DIGIMEC DPF-1 440V (FALTA DE FASE)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 1,000",
    "desc": "RELE DIGIMEC DPFN-1 220V (FALTA DE FASE",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPG-1 SEQ FASE",
    "desc": "RELE DIGIMEC DPG-1 208-480V SEQUENCIA F",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDPS19N0",
    "desc": "RELE DIGIMEC DPN-1 110-220V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPN-1 127V",
    "desc": "RELE DIGIMEC DPN-1 127V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPN-1 12V",
    "desc": "RELE DIGIMEC DPN-1 12V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPN-1 220V",
    "desc": "RELE DIGIMEC DPN-1 220V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPN-1 380V",
    "desc": "RELE DIGIMEC DPN-1 380V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DPO-1220V SUP F",
    "desc": "RELE DIGIMEC DPO-1 57- 63HZ 220V (SUPE",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDP8SM01",
    "desc": "RELE DIGIMEC DPSM-1 220V (MIN-MAX)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 9,000",
    "desc": "RELE DIGIMEC DPST-1 220V (MIN-MAX)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 4,000",
    "desc": "RELE DIGIMEC DPST-1 380V (MIN-MAX)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 2,000",
    "desc": "RELE DIGIMEC DPST-1 440V (MIN-MAX)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 1,000",
    "desc": "RELE DIGIMEC DPX-70 220V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 5,000",
    "desc": "RELE DIGIMEC DTD-7 15SEG 24V (MAQ COLHER",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 2,000",
    "desc": "RELE DIGIMEC DTD-7 30SEG 220V ( TEMPO -",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DTE5M",
    "desc": "RELE DIGIMEC DTE-1 5M 110-220V (TEMPO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE004",
    "desc": "RELE DIGIMEC DTE-1 5SEG 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 14,000",
    "desc": "RELE DIGIMEC DTE-1 15HR 110-220V (TEMPO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTS0508",
    "desc": "RELE DIGIMEC DTE-1 15MIN 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE012",
    "desc": "RELE DIGIMEC DTE-1 15SEG 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE013",
    "desc": "RELE DIGIMEC DTE-1 30MIN 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE014",
    "desc": "RELE DIGIMEC DTE-1 30SEG 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 13,000",
    "desc": "RELE DIGIMEC DTE-1 5HR 110-220V (TEMPO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE015",
    "desc": "RELE DIGIMEC DTE-1 60MIN 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUE016",
    "desc": "RELE DIGIMEC DTE-1 60SEG 110-220V (TEMPO",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDTUI016",
    "desc": "RELE DIGIMEC DTI-1 60SEG 110-220V",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC",
    "desc": "RELE DIGIMEC DTRF 12-3SEG 220V (MAQ LAVA",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 4,000",
    "desc": "RELE DIGIMEC DTRR (DTS-26) 30-5SEG 220V",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DDT8Y104",
    "desc": "RELE DIGIMEC DTY 60SEG 220V (ESTRELA-TRI",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JPN-1 110-220V",
    "desc": "RELE DIGIMEC JPN-1 110-220V (NIVEL)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 12,000",
    "desc": "RELE DIGIMEC JTC-1 15HR 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC",
    "desc": "RELE DIGIMEC JTC-1 30MIN 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC",
    "desc": "RELE DIGIMEC JTC-1 30MIN 24V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JTC-1 30SEG 24",
    "desc": "RELE DIGIMEC JTC-1 30SEG 24V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT5ST05",
    "desc": "RELE DIGIMEC JTC-1 30SEG 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT8ST03",
    "desc": "RELE DIGIMEC JTC-1 3MIN 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JTC5HR",
    "desc": "RELE DIGIMEC JTC-1 5HR 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT8ST02",
    "desc": "RELE DIGIMEC JTC-1 60SEG 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT8ST04",
    "desc": "RELE DIGIMEC JTC-1 6MIN 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT90A08",
    "desc": "RELE DIGIMEC JTD-1 60SEG 24-240VCA/VCC",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JTD-7 30S",
    "desc": "RELE DIGIMEC JTD-7 30SEG 220V ( TEMPO -",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DJT85105",
    "desc": "RELE DIGIMEC JTD-7 60SEG 220V ( TEMPO -",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JTEI-15S220V",
    "desc": "RELE DIGIMEC JTEI - 15SEG 220V (RETARDAD",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MPI-1 220V",
    "desc": "RELE DIGIMEC MPI-1 0 A 5 AMP 220V MONI",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MPS-95 DMP89095",
    "desc": "RELE DIGIMEC MPS-95 220V (COMANDO A DIST",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 5,000",
    "desc": "RELE DIGIMEC MPS-99 180SEG 220V (MIN MAX",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC",
    "desc": "RELE DIGIMEC STC-1 60SEG 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "STCP-1/4 CICLIC",
    "desc": "RELE DIGIMEC STCP-1 / 4 60SEG 110/220V",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 3,000",
    "desc": "RELE DIGIMEC STCP-1 60SEG 220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "DIGIMEC 3,000",
    "desc": "RELE DIGIMEC STCP-1/4 110-220V (CICLICO)",
    "marca": "DIGIMEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SSR25A JNG 132",
    "desc": "RELE ESTADO SOLIDO SSR 25A JNG CHAVE E",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SSR25A SBTC",
    "desc": "RELE ESTADO SOLIDO SSR 25A SBTC CHAVE",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SSR40A JNG 13",
    "desc": "RELE ESTADO SOLIDO SSR 40A JNG CHAVE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LC10 110V",
    "desc": "RELE FOTO ELETRICO LC10 127V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LC10 220V",
    "desc": "RELE FOTO ELETRICO LC10 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RELE 24VCC JC-R",
    "desc": "RELE MODULAR INTERFACE ELETROM 24VCC JC-",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MK2PS-1",
    "desc": "RELE MULTI USO MK2PS-1 250V JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MK2PS-1",
    "desc": "RELE MULTI USO MK2PS-1 8 PINOS 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SFK-112DM",
    "desc": "RELE POTENCIA SANYOU SFK-112DM 20A",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RPF2P7",
    "desc": "RELE POTENCIA SCHNEIDER RPF2P7 30A HONG",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RELE PTC 4P GEL",
    "desc": "RELE PTC ORIG PARTIDA GELDEIRA 127V 4 PI",
    "marca": "AQUATURBO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RELE PTC 2PINOS",
    "desc": "RELE PTC PROTETOR TERMICO 2 PINOS TODOS",
    "marca": "AQUATURBO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "APE-1 24V",
    "desc": "RELE SALOMAO APE-1 24VCA/VCC NR-12 1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A02.01O.001.000",
    "desc": "RELE SALOMAO AFA-1 FALTA FASE 208 A",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.02F.008.000",
    "desc": "RELE SALOMAO AI-1 60 SEG 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AL-1 110-220V",
    "desc": "RELE SALOMAO AL-1 NIVEL 110-220VCA",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.014.000",
    "desc": "RELE SALOMAO AR-1 05 MIN 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.004.000",
    "desc": "RELE SALOMAO AR-1 05 SEG 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.016.000",
    "desc": "RELE SALOMAO AR-1 15 MIN 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.006.000",
    "desc": "RELE SALOMAO AR-1 15 SEG 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.017.000",
    "desc": "RELE SALOMAO AR-1 30 MIN 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.007.000",
    "desc": "RELE SALOMAO AR-1 30 SEG 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.018.000",
    "desc": "RELE SALOMAO AR-1 60 MIN 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.01F.008.000",
    "desc": "RELE SALOMAO AR-1 60 SEG 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.06F.008.000",
    "desc": "RELE SALOMAO AY-1 60 SEG 24VCA/VCC-11",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.023.000",
    "desc": "RELE SALOMAO SCL-1 05 HRS 24VCA/VCC-",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.013.000",
    "desc": "RELE SALOMAO SCL-1 03 MIN 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.015.000",
    "desc": "RELE SALOMAO SCL-1 06 MIN 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.066.000",
    "desc": "RELE SALOMAO SCL-1 1,5 HRS 24VCA/VCC-",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.019.000",
    "desc": "RELE SALOMAO SCL-1 120 MIN 24VCA/VCC-",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.009.000",
    "desc": "RELE SALOMAO SCL-1 120 SEG 24VCA/VCC-",
    "marca": "SALOMAO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S01.04F.017.000",
    "desc": "RELE SALOMAO SCL-1 30 MIN 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "S03.03K.001.000",
    "desc": "RELE SALOMAO SD-1 NIVEL 110-220VCA",
    "marca": "SALOMAO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.07F.007.000",
    "desc": "RELE SALOMAO SIS-1 30 SEG 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "A01.07F.008.000",
    "desc": "RELE SALOMAO SIS-1 60 SEG 24VCA/VCC-1",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SD-1 10-220V",
    "desc": "RELE SALOMAO SL-1 NIVEL 110-220VCA",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PULSO RETARDO",
    "desc": "RELE SALOMAO SRI-1 10 MIN ( ARI-1 ) 2",
    "marca": "SALOMAO",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PULSO RETARDO",
    "desc": "RELE SALOMAO SRI-1 15 SEG ( ARI-1 ) 2",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "PULSO RETARDO",
    "desc": "RELE SALOMAO SRI-1 60 SEG ( ARI-1 ) 2",
    "marca": "SALOMAO",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28K09",
    "desc": "RELE SOBRECARGA JNG JR28 K09 ( 5,5 - 8",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 1.6-2.5",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 1,6-2,5A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 2,5-4A",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 2,5-4A )",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 4-6A",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 4-6A )",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-25 5-8 A",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 5,5-8A )",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-25 7-10A",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 7-10A )",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-25 9-13A",
    "desc": "RELE SOBRECARGA JNG JR28-25 ( 9-13A )",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-25 12-18A",
    "desc": "RELE SOBRECARGA JNG JR28-25 (12-18A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-25 17-25A",
    "desc": "RELE SOBRECARGA JNG JR28-25 (17-25A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-2353 23-32",
    "desc": "RELE SOBRECARGA JNG JR28-33 (23-32A) 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-36 23-32",
    "desc": "RELE SOBRECARGA JNG JR28-36 (23-32A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-36 28-36",
    "desc": "RELE SOBRECARGA JNG JR28-36 (28-36A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 23-32 J",
    "desc": "RELE SOBRECARGA JNG JR28-93 (23-32A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 28-36A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (28-36A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93",
    "desc": "RELE SOBRECARGA JNG JR28-93 (30-40A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 37-50A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (37-50A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 48-65A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (48-65A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 55-70A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (55-70A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 63-80A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (63-80A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-93 80-93A",
    "desc": "RELE SOBRECARGA JNG JR28-93 (80-93A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2-135 55-80",
    "desc": "RELE SOBRECARGA JNG JRS2- 135Z (55-80A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2135 63-90 J",
    "desc": "RELE SOBRECARGA JNG JRS2- 135Z (63-90A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2-135 90-135",
    "desc": "RELE SOBRECARGA JNG JRS2- 135Z (90-120A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2-180 120-15",
    "desc": "RELE SOBRECARGA JNG JRS2- 180Z (120-150",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2-180 150-18",
    "desc": "RELE SOBRECARGA JNG JRS2- 180Z (150-180",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2-180 90-120",
    "desc": "RELE SOBRECARGA JNG JRS2- 180Z (90-120A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 1.5-2.5A",
    "desc": "RELE SOBRECARGA JNG JRS2-12.5/Z (1.6-2.",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 2.5-4A",
    "desc": "RELE SOBRECARGA JNG JRS2-12.5/Z (2.5-4A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 4-6.3A",
    "desc": "RELE SOBRECARGA JNG JRS2-12.5/Z (4-6.3A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 6.3-10A",
    "desc": "RELE SOBRECARGA JNG JRS2-12.5/Z (6.3-10",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 8-12.5",
    "desc": "RELE SOBRECARGA JNG JRS2-12.5/Z (8-12.5",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 12.5-20",
    "desc": "RELE SOBRECARGA JNG JRS2-25Z (12.5-20A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 16-25",
    "desc": "RELE SOBRECARGA JNG JRS2-25Z (16-25A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 20-32A",
    "desc": "RELE SOBRECARGA JNG JRS2-45Z (20-32A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 32-40",
    "desc": "RELE SOBRECARGA JNG JRS2-45Z (32-40A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 20-32A",
    "desc": "RELE SOBRECARGA JNG JRS2-88Z (20-32A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 32-50A",
    "desc": "RELE SOBRECARGA JNG JRS2-88Z (32-50A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 50-63A",
    "desc": "RELE SOBRECARGA JNG JRS2-88Z (50-63A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JRS2 63-80A",
    "desc": "RELE SOBRECARGA JNG JRS2-88Z (63-80A)",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RLTERM SB 200-6",
    "desc": "RELE SOBRECARGA SIBRATEC ELETRONICO JD",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 2,5-4A",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1308 (2,5",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 4-6A",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1310 (4-6",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "03075",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1312 (5,5",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-1314 7-10A",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1314 (7-1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "03076",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1316 (9-1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RELE 12-18 SB 3",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1321 (12-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-1322 17-25",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-1322 (17-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28 23-32 SB",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-2353 (23-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JR28-3361 55-70",
    "desc": "RELE SOBRECARGA SIBRATEC JR28-3361 (55-",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LR2KSBTC 4~6A",
    "desc": "RELE SOBRECARGA SIBRATEC LR2K-1312 (4,0",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LR2K 5.5-8A",
    "desc": "RELE SOBRECARGA SIBRATEC LR2K-1312 (5.5",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LR2KSBTC 7~10A",
    "desc": "RELE SOBRECARGA SIBRATEC LR2K-1312 (7,0",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JCT-T 0,1S~10H/",
    "desc": "RELE TEMPO MULTIPLA FUNÇÃO JCT-T 0,1S~10",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RT WEG 15-23A",
    "desc": "RELE TERM WEG 15~23A RW27-1D U023",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT",
    "desc": "RELE TERM WEG 5,5~8A RW17-D MINI CONTA",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "WEG ACIONAMENT",
    "desc": "RELE TERM WEG 50~63A RW67-2D",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "070015",
    "desc": "RELE VOLTIMETRICO ATE 5HP 220V 35A C/",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AGUATEC 22,000",
    "desc": "RELE WEG CPW17 24VCA/VCC 2NA CONTROLE PA",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RMW17",
    "desc": "RELE WEG FALTA DE FASE RMW17-FF01D65 200",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "RTW17 3SEG 1874",
    "desc": "RELE WEG RTW17-A01U003SE40 0,3-3S 220-24",
    "marca": "WEG ACIONAMENT",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "REPASSE FIO",
    "desc": "REPASSE FIO (MÃO DE OBRA)",
    "marca": "MF MAQUINAS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "S/REF",
    "desc": "REPASSE FIO (MÃO DE OBRA+CARRETEL)",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "OUTROS",
    "desc": "RESISTENCIA P/ ALTERNADO GERADOR KOHLBAC",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "RETENTOR 25X38X",
    "desc": "RETENTOR 25X38X7 BRG 8875",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "7790LX",
    "desc": "RETENTOR OIL SEAL 24X40X07",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "SELO1\"LÇLARGAMT",
    "desc": "RISELO MEC 1\" T-21 LOUÇA ALTA VED. MOTO",
    "marca": "FLOWSERVE PAC",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "055466",
    "desc": "RODA CARRINHO PNEU MACIÇO METALOSA ( CAR",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "6358160160",
    "desc": "RODO VONDER 160 MM P/ LIMPEZA",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN 8,000",
    "desc": "ROLAMENTO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05X14X05",
    "desc": "ROLAMENTO 605 NSK DDU 05X14X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05X14X05",
    "desc": "ROLAMENTO 605 ZEN ZZ 05X14X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "606 2RS ZEN",
    "desc": "ROLAMENTO 606 2RS ZEN 43829",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "06X17X06",
    "desc": "ROLAMENTO 606 NSK DDU 06X17X06",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "07X19X06",
    "desc": "ROLAMENTO 607 VTO DDU 07X19X06",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X22X07 608 N",
    "desc": "ROLAMENTO 608 NSK DDU C3 08X22X07",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X22X07",
    "desc": "ROLAMENTO 608 SKF DDU 08X22X07",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X22X07",
    "desc": "ROLAMENTO 608 VTO DDU 08X22X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X24X07",
    "desc": "ROLAMENTO 609 FAG ZZ 09X24X07",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X24X07",
    "desc": "ROLAMENTO 609 NSK DDU 09X24X07",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X247X07",
    "desc": "ROLAMENTO 609 VTO DDU 09X24X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05X16X05",
    "desc": "ROLAMENTO 625 FAG DDU 05X16X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "625ZZC3",
    "desc": "ROLAMENTO 625 FAG ZZ C3",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05X16X05",
    "desc": "ROLAMENTO 625 NSK DDU 05X16X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05X16X05",
    "desc": "ROLAMENTO 625 VTO DDU 05X16X05",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "06X19X06",
    "desc": "ROLAMENTO 626 FAG DDU C3 06X19X06",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "626FAGZZ",
    "desc": "ROLAMENTO 626 FAG ZZ",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "06X19X06",
    "desc": "ROLAMENTO 626 NSK DDU 06X19X06",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "07X22X07",
    "desc": "ROLAMENTO 627 FAG DDU 07X22X07",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "07X22X07",
    "desc": "ROLAMENTO 627 VTO DDU 07X22X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X24X08",
    "desc": "ROLAMENTO 628 VTO DDU 08X24X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X26X08",
    "desc": "ROLAMENTO 629 FAG DDU 09X26X08",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X26X08 629DDU",
    "desc": "ROLAMENTO 629 NSK DDU 09X26X08",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X26X08",
    "desc": "ROLAMENTO 629 VTO DDU 09X26X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X16X05",
    "desc": "ROLAMENTO 688 NSK DDU C3 08X16X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X16X05",
    "desc": "ROLAMENTO 688 ZEN DDU C3 08X16X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X17X05",
    "desc": "ROLAMENTO 689 NSK DDU C3 09X17X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "09X17X05",
    "desc": "ROLAMENTO 689 ZEN DDU C3 09X17X05 4",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "06X15X05",
    "desc": "ROLAMENTO 696 NSK ZZ C3 06X15X05",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "696ZENZZ",
    "desc": "ROLAMENTO 696 ZEN ZZ 44220",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "697 2RS ZEN",
    "desc": "ROLAMENTO 697 ZEN 2RS 51376",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "698NSKDDU",
    "desc": "ROLAMENTO 698 NSK DDU C3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK 4,000",
    "desc": "ROLAMENTO 699 NSK DDU C3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "699 2RS ZEN",
    "desc": "ROLAMENTO 699 ZEN 2RS 47513",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "100108",
    "desc": "ROLAMENTO 100108 VTO DDU",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X52X22",
    "desc": "ROLAMENTO 101006 VTO DDU 35X52X22",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X52X20",
    "desc": "ROLAMENTO 101007 VTO DDU 30X52X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X52X20",
    "desc": "ROLAMENTO 101011 VTO DDU 35X52X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "102949/10 RODA",
    "desc": "ROLAMENTO 102949/10 VTO CONICO RODA DIAN",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "104948/10 HILUX",
    "desc": "ROLAMENTO 104948/10 VTO CONICO RODA DIAN",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X39X13",
    "desc": "ROLAMENTO 11749/10 VTO CONICO 17,4X39,8X",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "11949/10",
    "desc": "ROLAMENTO 11949/10 VTO CONICO 19X45,2X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "1208K",
    "desc": "ROLAMENTO 1208K C3 NSK 2 CARR. ESF. (P",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "26,2X33X13,6 12",
    "desc": "ROLAMENTO 123861 VTO 26,2X33X13,6 MT",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "14125/74",
    "desc": "ROLAMENTO 14125/74 ROLETE 31,75 X 69,",
    "marca": "17X35X",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X35X08",
    "desc": "ROLAMENTO 16003 NSK S/BLINDAGEM 17X35X0",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X35X08",
    "desc": "ROLAMENTO 16003 NTN DDU C3 17X35X08",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X28X08",
    "desc": "ROLAMENTO 16100 FAG ZZ 10X28X08",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "176221",
    "desc": "ROLAMENTO 176221 VTO 17X62X21 AR COND",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "18590/20",
    "desc": "ROLAMENTO 18590/20 VTO CONICO RODA DIANT",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25577 25522",
    "desc": "ROLAMENTO 25577/23 VTO CONICO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "2580/23",
    "desc": "ROLAMENTO 2580/23 VTO CONICO TRATOR MF R",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "VETOR",
    "desc": "ROLAMENTO 28580/21 VTO CONICO RD TRAS CB",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "29749/11",
    "desc": "ROLAMENTO 29749/11 VTO CONICO LINHA AGRI",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "28X47X24",
    "desc": "ROLAMENTO 2B17-4G 2T1XDDG NSK DDU 28X47X",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30203",
    "desc": "ROLAMENTO 30203 VTO CONICO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X15,5 3020",
    "desc": "ROLAMENTO 30204 TIMKEM CONICO 20X47",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30204",
    "desc": "ROLAMENTO 30204 VTO CONICO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X16,25 302",
    "desc": "ROLAMENTO 30205 FAG ROLOS CONICO 25X52X1",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X16,25",
    "desc": "ROLAMENTO 30205 KOYO CONICO 25X52X16,25",
    "marca": "KOYO",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X16,25",
    "desc": "ROLAMENTO 30205 VTO CONICO 25X52X16,25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X17,25 302",
    "desc": "ROLAMENTO 30206 NSK ROLOS CONICOS 30X62X",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X17,25 30",
    "desc": "ROLAMENTO 30206 VTO CONICO 30X62X17,25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30207",
    "desc": "ROLAMENTO 30207 VTO CONICO 35X72X18,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X80X19,75 302",
    "desc": "ROLAMENTO 30208 TIMKEN ROLOS CONICO 40X8",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X80X19,75 302",
    "desc": "ROLAMENTO 30208 VTO ROLOS CONICO 40X80X1",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30209",
    "desc": "ROLAMENTO 30209 VTO ROLOS CONICO ROÇADEI",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X21,75 302",
    "desc": "ROLAMENTO 30210 TIMKEM ROLOS CONICOS 50",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30210",
    "desc": "ROLAMENTO 30210 VTO ROLOS CONICO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30211 VTO",
    "desc": "ROLAMENTO 30211VTO ROLOS CONICO",
    "marca": "VTO",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "VTO 4,000",
    "desc": "ROLAMENTO 30213 TMK CONICOS",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X16,25",
    "desc": "ROLAMENTO 30304 VTO CONICO 20X52X16,25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X18,5 3030",
    "desc": "ROLAMENTO 30305 TIMKEN ROLOS CONICOS 25X",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X18,5 303",
    "desc": "ROLAMENTO 30305 VTO ROLOS CONICOS 25X62X",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X20",
    "desc": "ROLAMENTO 30306 VTO CONICO 30X72X20,75",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30307 VTO",
    "desc": "ROLAMENTO 30307 VTO ROLOS CONICOS",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "304618",
    "desc": "ROLAMENTO 304618 VTO DDU",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "304712",
    "desc": "ROLAMENTO 304712 VTO DDU",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X47X20",
    "desc": "ROLAMENTO 304720 VTO DDU 30X47X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X50X20",
    "desc": "ROLAMENTO 30BD5020 VTO DDU 30X50X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X55X23",
    "desc": "ROLAMENTO 30BG05S5G VTO DDU 30X55X23",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X47X22",
    "desc": "ROLAMENTO 30BG4S13 VTO DDU 30X47X22",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X52X22",
    "desc": "ROLAMENTO 30BGS10G VTO DDU 30X52X22",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32005 NSK 25X47",
    "desc": "ROLAMENTO 32005 NSK CONICO 25X47X15,8",
    "marca": "BARTOFIL",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X62X18",
    "desc": "ROLAMENTO 32007X NSK CONICO 35X62X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32011",
    "desc": "ROLAMENTO 32011 NSK",
    "marca": "NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32011",
    "desc": "ROLAMENTO 32011 VTO",
    "marca": "VTO",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X17,5 3203",
    "desc": "ROLAMENTO 3203 NSK DDU C3 17X40X17,5 (",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X20,6 3205",
    "desc": "ROLAMENTO 3205 CRAFT 25X52X20,6",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X20,6 3205",
    "desc": "ROLAMENTO 3205 NSK 25X52X20,6",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X20,6 320",
    "desc": "ROLAMENTO 3205 VTO 25X52X20,6",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X27 3207 N",
    "desc": "ROLAMENTO 3207 NSK C3 CONTATO ANGULAR 35",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X27 3207DD",
    "desc": "ROLAMENTO 3207 ZSG DDU C3 CONTATO ANGULA",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32205NSK",
    "desc": "ROLAMENTO 32205 NSK CONICO 25X52X16,4",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X16,4",
    "desc": "ROLAMENTO 32205 VTO CONICO 25X52X16,4",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X21,25",
    "desc": "ROLAMENTO 32206 VTO CONICO 30X62X21,25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32209",
    "desc": "ROLAMENTO 32209 NSK CONICOS",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32209",
    "desc": "ROLAMENTO 32209 VTO CONICO 30X62X21,25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X24,75 322",
    "desc": "ROLAMENTO 32210 TIMKEM NSK CONICO 50X90",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X24,75",
    "desc": "ROLAMENTO 32210 VTO CONICO 50X90X24,75",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32X47X18",
    "desc": "ROLAMENTO 32470018 VTO DDU 32X47X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32X47X20 32472",
    "desc": "ROLAMENTO 324720 VTO AGULHA 32X47X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32X52X20/18 325",
    "desc": "ROLAMENTO 325220 VTO DDU 32X52X20 / 18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X22,2",
    "desc": "ROLAMENTO 3304 B NSK DDU 20X52X22",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X100X39,65 33",
    "desc": "ROLAMENTO 3309 OU 5309 NSK C3 45X100X3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X100X39,65 33",
    "desc": "ROLAMENTO 3309 OU 5309 NSK DDUC3 45X10",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK",
    "desc": "ROLAMENTO 33109 NSK CONICO DDUC3",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X80X26 33109",
    "desc": "ROLAMENTO 33109 TMK VTO CONICO 45X80X26",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "3311 / 5311 NSK",
    "desc": "ROLAMENTO 3311 NSK ( 5311 ) B-2RSRTNGC3",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35061CARDAN HIL",
    "desc": "ROLAMENTO 35061 CARDAN TOYOTA HILUX 2,8",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35062CARDAN HIL",
    "desc": "ROLAMENTO 35062 CARDAN TOYOTA HILUX 3,0",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X48X20",
    "desc": "ROLAMENTO 354820 VTO DDU 35X48X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "355212",
    "desc": "ROLAMENTO 355212 VTO DDU",
    "marca": "VETOR",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X62X20",
    "desc": "ROLAMENTO 356220 VTO DDU 35X62X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X22",
    "desc": "ROLAMENTO 357222 VTO DDU 35X72X22/17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35BD5020 NSK35X",
    "desc": "ROLAMENTO 35BD5020 NSK T1XDDUK 35X50X20",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X55X20",
    "desc": "ROLAMENTO 35BG05S10DST2 VTO DDU 35X55X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35BG05S7DL",
    "desc": "ROLAMENTO 35BG05S7DL NSK DDU 35X50X20",
    "marca": "NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X50X20",
    "desc": "ROLAMENTO 35BG05S7DL VTO DDU 35X50X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X52X23",
    "desc": "ROLAMENTO 35BGS05S06G VTO DDU 35X52X23",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X41X06,5",
    "desc": "ROLAMENTO 364530AR VTO 36/45° 30X41X06,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X52X07",
    "desc": "ROLAMENTO 364540BR VTO 36/45° 40X52X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X51,8X08",
    "desc": "ROLAMENTO 364540CR VTO 36/45° 40X51,8X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "38X54X17",
    "desc": "ROLAMENTO 38BG05S6DST2 VTO DDU 38X54X17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40BD219 NSK 40X",
    "desc": "ROLAMENTO 40BD219 NSK T12DDUK 40X62X24",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X55X24",
    "desc": "ROLAMENTO 40BD5524 VTO DDU 40X55X24",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X62X24",
    "desc": "ROLAMENTO 40BGS11DS VTO DDU 40X62X24",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X66X24",
    "desc": "ROLAMENTO 40BGS39G VTO DDU 40X66X24",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X41X06,5",
    "desc": "ROLAMENTO 454530AR VTO 45/45° 30X41X06,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X41,8X08",
    "desc": "ROLAMENTO 454530FC VTO 45/45° 30X41,8X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "34X46,9X07",
    "desc": "ROLAMENTO 454534BR VTO 45/45° 34X46,9X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X52X07",
    "desc": "ROLAMENTO 454540BR VTO 45/45° 40X52X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "51105 NSK AXIAL",
    "desc": "ROLAMENTO 51105 NSK AXIAL 25X42X11",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "ROLAMENTO 51106",
    "desc": "ROLAMENTO 51106 NSK AXIAL",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "51118",
    "desc": "ROLAMENTO 51108 NSK AXIAL 40X60X13",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "51208",
    "desc": "ROLAMENTO 51208 NSK AXIAL 40X68X19",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X60X21 51306",
    "desc": "ROLAMENTO 51306 NSK 30X60X21",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X44X12",
    "desc": "ROLAMENTO 60/22 KOYO DDU C3 22X44X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK",
    "desc": "ROLAMENTO 60/22 NSK DDU C3 22X44X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X44X12",
    "desc": "ROLAMENTO 60/22 VTO 22X44X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X26X08",
    "desc": "ROLAMENTO 6000 NSK DDU 10X26X08",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X26X08",
    "desc": "ROLAMENTO 6000 VTO DDU 10X26X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X28X08 6001DD",
    "desc": "ROLAMENTO 6001 NSK DDU C3 12X28X08",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X28X08",
    "desc": "ROLAMENTO 6001 NTN DDU 12X28X08",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X08X08",
    "desc": "ROLAMENTO 6001 VTO DDU 12X28X08",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X32X09 6002DD",
    "desc": "ROLAMENTO 6002 NSK DDU C3 15X32X09",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X32X09",
    "desc": "ROLAMENTO 6002 NTN DDU C3 15X32X09",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X32X09",
    "desc": "ROLAMENTO 6002 TIMKEN DDU 15X32X09",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X32X09",
    "desc": "ROLAMENTO 6002 VTO DDU 15X32X09",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X35X10",
    "desc": "ROLAMENTO 6003 NSK DDU C3 17X35X10",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6003 NSK T1XDD",
    "desc": "ROLAMENTO 6003 T1XDDGA=DW NSK DDU 16,98",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X35X10",
    "desc": "ROLAMENTO 6003 VTO DDU 17X35X10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "16,6X35X10",
    "desc": "ROLAMENTO 6003DW VTO DDU 16,6X35X10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X42X12 6004DD",
    "desc": "ROLAMENTO 6004 NSK DDU C3 20X42X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X42X12",
    "desc": "ROLAMENTO 6004 VTO DDU 20X42X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X47X12 6005DD",
    "desc": "ROLAMENTO 6005 NSK DDU C3 25X47X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X47X12",
    "desc": "ROLAMENTO 6005 NTN DDU C3 25X47X12",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X47X12",
    "desc": "ROLAMENTO 6005 VTO DDU 25X47X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X55X13 6006DD",
    "desc": "ROLAMENTO 6006 NSK DDUC3 30X55X13",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X55X13",
    "desc": "ROLAMENTO 6006 VTO DDU 30X55X13",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X62X14 6007DD",
    "desc": "ROLAMENTO 6007 NSK DDU 35X62X14",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X62X14",
    "desc": "ROLAMENTO 6007 VTO DDU 35X62X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X68X15",
    "desc": "ROLAMENTO 6008 NSK DDU 40X68X15",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X68X15",
    "desc": "ROLAMENTO 6008 VTO DDU 40X68X15",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X75X16",
    "desc": "ROLAMENTO 6009 NSK DDU 45X75X16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X75X16",
    "desc": "ROLAMENTO 6009 VTO DDU 45X75X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X80X16",
    "desc": "ROLAMENTO 6010 NSK DDU 50X80X16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X80X16",
    "desc": "ROLAMENTO 6010 VTO DDU 50X80X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X90X18",
    "desc": "ROLAMENTO 6011 NSK DDU 55X90X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X90X18",
    "desc": "ROLAMENTO 6011 VTO DDU 55X90X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "R6012 VTO",
    "desc": "ROLAMENTO 6012 VTO 60X95X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X95X18",
    "desc": "ROLAMENTO 6012 NSK DDU 60X95X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK 2,000",
    "desc": "ROLAMENTO 6013 NSK DDU 65X100X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "65X100X18",
    "desc": "ROLAMENTO 6013 NSK ZZ 65X100X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "75X115X20",
    "desc": "ROLAMENTO 6015 NSK DDU 75X115X20",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X50X14",
    "desc": "ROLAMENTO 62/22 NSK DDU 22X50X14",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X50X14 62/22",
    "desc": "ROLAMENTO 62/22 VTO 22X50X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "32X65X17 62/32",
    "desc": "ROLAMENTO 62/32 NSK DDU C3 32X65X17",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X30X09",
    "desc": "ROLAMENTO 6200 NSK DDU C3 10X30X09",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X30X09",
    "desc": "ROLAMENTO 6200 NSK ZZ C3 10X30X09",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X30X09",
    "desc": "ROLAMENTO 6200 VTO DDU 10X30X09",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12,7X32X10",
    "desc": "ROLAMENTO 6201 F.1/2 VTO DDU 12,7X32X10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X32X10",
    "desc": "ROLAMENTO 6201 NSK DDU C3 12X32X10",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X32X10",
    "desc": "ROLAMENTO 6201 VTO DDU 12X32X10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12,7X32X10",
    "desc": "ROLAMENTO 6201-08 F-1/2 NSK ZZ C3 1",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6202 EC",
    "desc": "ROLAMENTO 6202 EC NTN DDU 15X35X11 ANEL",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X35X11 6202DD",
    "desc": "ROLAMENTO 6202 NSK DDU C3 15X35X11",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X35X11",
    "desc": "ROLAMENTO 6202 NSK ZZ C3 15X35X11",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X35X11",
    "desc": "ROLAMENTO 6202 VTO DDU 15X35X11",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X12 6203DD",
    "desc": "ROLAMENTO 6203 NSK DDU C3 17X40X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X12",
    "desc": "ROLAMENTO 6203 NSK ZZ C3 17X40X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X12",
    "desc": "ROLAMENTO 6203 SKF ZZ 17X40X12",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X12",
    "desc": "ROLAMENTO 6203 VTO DDU 17X40X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X14",
    "desc": "ROLAMENTO 6204 NSK DDU C3 20X47X14",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X14",
    "desc": "ROLAMENTO 6204 NSK ZZ C3 20X47X14",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X14",
    "desc": "ROLAMENTO 6204 SKF ZZ 20X47X14",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X14",
    "desc": "ROLAMENTO 6204 VTO DDU 20X47X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X15",
    "desc": "ROLAMENTO 6205 NSK DDU C3 25X52X15",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X15",
    "desc": "ROLAMENTO 6205 NSK ZZ C3 25X52X15",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X52X15",
    "desc": "ROLAMENTO 6205 VTO DDU 25X52X15",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X16",
    "desc": "ROLAMENTO 6206 NSK DDU C3 30X62X16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X16",
    "desc": "ROLAMENTO 6206 NSK ZZ C3 30X62X16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X16",
    "desc": "ROLAMENTO 6206 TIMKEN DDU 30X62X16",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X16",
    "desc": "ROLAMENTO 6206 TIMKEN ZZ 30X62X16",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X62X16",
    "desc": "ROLAMENTO 6206 VTO DDU 30X62X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X17",
    "desc": "ROLAMENTO 6207 NSK DDU C3 35X72X17",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X17",
    "desc": "ROLAMENTO 6207 NSK ZZ C3 35X72X17",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X17",
    "desc": "ROLAMENTO 6207 NTN DDU C3 35X72X17",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X72X17",
    "desc": "ROLAMENTO 6207 VTO DDU 35X72X17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X80X18",
    "desc": "ROLAMENTO 6208 NSK DDU 40X80X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X80X18",
    "desc": "ROLAMENTO 6208 NSK ZZ C3 40X80X18",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X80X18",
    "desc": "ROLAMENTO 6208 VTO DDU 40X80X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X85X19",
    "desc": "ROLAMENTO 6209 NSK DDU 45X85X19",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X85X19",
    "desc": "ROLAMENTO 6209 NSK ZZ C3 45X85X19",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X85X19",
    "desc": "ROLAMENTO 6209 SKF ZZ 45X85X19",
    "marca": "SKF",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X85X19",
    "desc": "ROLAMENTO 6209 VTO DDU 45X85X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X20 6210 D",
    "desc": "ROLAMENTO 6210 NSK DDU 50X90X20",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X20",
    "desc": "ROLAMENTO 6210 NSK ZZ C3 50X90X20",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X90X20",
    "desc": "ROLAMENTO 6210 VTO DDU 50X90X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6211NSKDDU",
    "desc": "ROLAMENTO 6211 NSK DDU C3 55X100X21",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X100X21",
    "desc": "ROLAMENTO 6211 NSK ZZ C3 55X100X21",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X100X21",
    "desc": "ROLAMENTO 6211 VTO DDU 55X100X21",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X110X22",
    "desc": "ROLAMENTO 6212 NSK C3 60X110X22 S/ BLIN",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X110X22",
    "desc": "ROLAMENTO 6212 NSK ZZ C3 60X110X22",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X110X22",
    "desc": "ROLAMENTO 6212 VTO DDU 60X110X22",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "65X120X23",
    "desc": "ROLAMENTO 6213 NSK DDU C3 65X120X23",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "65X120X23",
    "desc": "ROLAMENTO 6213 VTO DDU 65X120X23",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "70X125X24",
    "desc": "ROLAMENTO 6214 NSK ZZ C3 70X125X24",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05 2,000",
    "desc": "ROLAMENTO 6216 NSK Z C3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X32X14",
    "desc": "ROLAMENTO 62201 NSK DDU 12X32X14",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X32X14",
    "desc": "ROLAMENTO 62201 VTO DDU 12X32X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X35X14",
    "desc": "ROLAMENTO 62202 VTO DDU 15X35X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X16",
    "desc": "ROLAMENTO 62203 VTO DDU 17X40X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X19",
    "desc": "ROLAMENTO 62204 VTO DDU 20X47X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK 2,000",
    "desc": "ROLAMENTO 623/22 VTO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X37X17",
    "desc": "ROLAMENTO 62301 VTO DDU 12X37X17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X47X19",
    "desc": "ROLAMENTO 62303 VTO DDU 17X47X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X21",
    "desc": "ROLAMENTO 62304-17 VTO DDU 17X52X21",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X24",
    "desc": "ROLAMENTO 62305 VTO DDU 25X62X24 23",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X27",
    "desc": "ROLAMENTO 62306 CRAFT BEARINGS DDU 30X72",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X27 62306",
    "desc": "ROLAMENTO 62306 VTO DDU 30X72X27",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X56X16",
    "desc": "ROLAMENTO 63/22 KOYO DDU C3 22X56X16",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X56X16",
    "desc": "ROLAMENTO 63/22 NSK C3 S/B 22X56X16",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X56X16 63/22",
    "desc": "ROLAMENTO 63/22 NSK DDU C3 22X56X16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "22X56X16",
    "desc": "ROLAMENTO 63/22 VTO 22X56X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "28X68X18",
    "desc": "ROLAMENTO 63/28 VTO DDU 28X68X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6300 2RS FAG",
    "desc": "ROLAMENTO 6300 2RS FAG 44761",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X35X11",
    "desc": "ROLAMENTO 6300 FAG 2RS 10X35X11",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X35X11",
    "desc": "ROLAMENTO 6300 VTO DDU 10X35X11",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X28X12",
    "desc": "ROLAMENTO 63001 VTO DDU 12X28X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X32X13",
    "desc": "ROLAMENTO 63002 FAG DDU 15X32X13 ( 3002",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X55X19",
    "desc": "ROLAMENTO 63006 VTO DDU 30X55X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X62X20 63007",
    "desc": "ROLAMENTO 63007 TIMKEM 35X62X20",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X37X12",
    "desc": "ROLAMENTO 6301 NSK DDU C3 12X37X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X37X12",
    "desc": "ROLAMENTO 6301 NSK ZZ C3 12X37X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X37X12",
    "desc": "ROLAMENTO 6301 VTO DDU 12X37X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X42X13",
    "desc": "ROLAMENTO 6302 NSK DDU C3 15X42X13",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X42X13",
    "desc": "ROLAMENTO 6302 NSK ZZ C3 15X42X13",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X42X13",
    "desc": "ROLAMENTO 6302 NTN DDU C3 15X42X13",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X42X13",
    "desc": "ROLAMENTO 6302 VTO DDU 15X42X13",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X47X14",
    "desc": "ROLAMENTO 6303 NSK DDU 17X47X14 B17-102",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X47X14",
    "desc": "ROLAMENTO 6303 VTO DDU 17X47X14 B17-10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X15",
    "desc": "ROLAMENTO 6304 FAG DDU 20X52X15",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X15",
    "desc": "ROLAMENTO 6304 NSK DDU 20X52X15",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X15",
    "desc": "ROLAMENTO 6304 NSK ZZ 20X52X15",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X15",
    "desc": "ROLAMENTO 6304 VTO DDU 20X52X15",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X15",
    "desc": "ROLAMENTO 6304-17 VTO DDU 17X52X15",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X17",
    "desc": "ROLAMENTO 6305 NSK DDU 25X62X17",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X17",
    "desc": "ROLAMENTO 6305 NSK ZZ 25X62X17",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X17",
    "desc": "ROLAMENTO 6305 SKF DDU 25X62X17",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X17",
    "desc": "ROLAMENTO 6305 VTO DDU 25X62X17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X62X17",
    "desc": "ROLAMENTO 6305-17 VTO DDU 17X62X17 ( 640",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X19 6306DD",
    "desc": "ROLAMENTO 6306 NSK DDU 30X72X19",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X19 6306ZZ",
    "desc": "ROLAMENTO 6306 NSK ZZ 30X72X19",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X72X19",
    "desc": "ROLAMENTO 6306 VTO DDU 30X72X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X72X19",
    "desc": "ROLAMENTO 6306/25 VTO DDU 25X72X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X80X21",
    "desc": "ROLAMENTO 6307 NSK DDU 35X80X21",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X80X21",
    "desc": "ROLAMENTO 6307 VTO DDU 35X80X21",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X90X23",
    "desc": "ROLAMENTO 6308 NSK C3 40X90X23 S/ BLI",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X90X23",
    "desc": "ROLAMENTO 6308 NSK DDU 40X90X23",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X90X23",
    "desc": "ROLAMENTO 6308 NSK ZZ 40X90X23",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X90X23",
    "desc": "ROLAMENTO 6308 VTO DDU 40X90X23",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X100X25 6309D",
    "desc": "ROLAMENTO 6309 NSK DDU 45X100X25",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X100X25",
    "desc": "ROLAMENTO 6309 NSK ZZ 45X100X25",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X100X25",
    "desc": "ROLAMENTO 6309 VTO DDU 45X100X25",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X110X27",
    "desc": "ROLAMENTO 6310 NSK DDU 50X110X27",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X110X27",
    "desc": "ROLAMENTO 6310 NSK ZZ 50X110X27",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "50X110X27",
    "desc": "ROLAMENTO 6310 VTO DDU 50X110X27",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X120X29 6311",
    "desc": "ROLAMENTO 6311 NSK DDU 55X120X29",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X120X29",
    "desc": "ROLAMENTO 6311 NSK ZZ 55X120X29",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "55X120X29",
    "desc": "ROLAMENTO 6311 VTO DDU 55X120X29",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X130X31",
    "desc": "ROLAMENTO 6312 NSK C3 60X130X31 (S/ BL",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X130X31",
    "desc": "ROLAMENTO 6312 NSK DDU 60X130X31",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X130X31",
    "desc": "ROLAMENTO 6312 NSK Z C3 60X130X31 (BLIN",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X130X31",
    "desc": "ROLAMENTO 6312 NSK ZZ C3 60X130X31",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "60X130X31",
    "desc": "ROLAMENTO 6312 VTO DDU 60X130X31",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "65X140X33",
    "desc": "ROLAMENTO 6313 NSK DDU 65X140X33",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK 2,000",
    "desc": "ROLAMENTO 6313 NSK ZZ 65X140X33",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "65X140X33",
    "desc": "ROLAMENTO 6313 VTO DDU 65X140X33",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "70X150X35",
    "desc": "ROLAMENTO 6314 NSK ZZ 70X150X35",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6315 NSK DDU",
    "desc": "ROLAMENTO 6315 NSK DDU C3 75 X 160 X 3",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "80X170X39",
    "desc": "ROLAMENTO 6316 NSK ZZ 80X170X39",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "05 2,000",
    "desc": "ROLAMENTO 6318 NSK DDU 90X190X43",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "LUCIOS ROL NSK",
    "desc": "ROLAMENTO 6318 NSK ZZ 90X190X43",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X52X22,2 6330",
    "desc": "ROLAMENTO 63304 DDUC3 NSK 3304 20X52X2",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X62X17",
    "desc": "ROLAMENTO 6403 VTO DDU 17X62X17 ( 6304-1",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X120X29",
    "desc": "ROLAMENTO 6409 NSK S/BLINDAGEM C3 45X120",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X120X29",
    "desc": "ROLAMENTO 6409 NSK ZZ C3 45X120X29",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X120X29 6409",
    "desc": "ROLAMENTO 6409 VTO DDU 45X120X29",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X62X20,5",
    "desc": "ROLAMENTO 6559469 VTO DDU 40X62X20,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6800",
    "desc": "ROLAMENTO 6800 NSK DDU C3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6802 NSK DDU",
    "desc": "ROLAMENTO 6802 NSK DDU 15X24X05",
    "marca": "NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X24X05 6802 V",
    "desc": "ROLAMENTO 6802 VTO DDU C3 15X24X05",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X24X05",
    "desc": "ROLAMENTO 6802 ZEN DDU C3 15X24X05",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X32X07",
    "desc": "ROLAMENTO 6804 NSK DDU C3 20X32X07",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6804",
    "desc": "ROLAMENTO 6804 VTO DDU C3 20X32X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X32X07",
    "desc": "ROLAMENTO 6804 ZEN DDU C3 20X32X07",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X37X07",
    "desc": "ROLAMENTO 6805 NSK DDU C3 25X37X07",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X37X07",
    "desc": "ROLAMENTO 6805 VTO DDU C3 25X37X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X47X07 6807",
    "desc": "ROLAMENTO 6807 NSK DDU C3 35X47X07",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X22X06",
    "desc": "ROLAMENTO 6900 NSK DDU C3 10X22X06",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X28X07",
    "desc": "ROLAMENTO 6902 VTO DDU 15X28X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "6903 NSK DDU 17",
    "desc": "ROLAMENTO 6903 NSK DDU 17X30X07",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X30X07",
    "desc": "ROLAMENTO 6903 VTO DDU 17X30X07",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X37X09",
    "desc": "ROLAMENTO 6904 NSK DDU C3 20X37X09",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X37X09",
    "desc": "ROLAMENTO 6904 VTO DDU 20X37X09",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X42X09",
    "desc": "ROLAMENTO 6905 VTO DDU 25X42X09",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X47X09",
    "desc": "ROLAMENTO 6906 NSK DDU C3 30X47X09",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X55X10",
    "desc": "ROLAMENTO 6907 NSK DDU C3 35X55X10",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X62X12",
    "desc": "ROLAMENTO 6908 NSK DDU C3 40X62X12",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X62X12",
    "desc": "ROLAMENTO 6908 VTO DDU 40X62X12 61908",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "45X38X40 6909NS",
    "desc": "ROLAMENTO 6909 NSK DDU C3 45X68X40",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "75X120X31 71424",
    "desc": "ROLAMENTO 714249 / 714210 75X120X31 TIM",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "7202",
    "desc": "ROLAMENTO 7202 CONTATO ANGULAR",
    "marca": "GERAL",
    "uni": "KG",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "7203",
    "desc": "ROLAMENTO 7203 B TN NTN CONTATO ANGULA",
    "marca": "7303 BG",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "7303 BG",
    "desc": "ROLAMENTO 7303 BG NTN CONTATO ANGULAR",
    "marca": "7303BG",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "7303BG",
    "desc": "ROLAMENTO 7303BG NTN",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X47X18",
    "desc": "ROLAMENTO 83A693A VTO DDU 30X47X18 30471",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25,4X57,1X19,4",
    "desc": "ROLAMENTO 84548/10 VTO CONICO 25,4X57,1X",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X64X21",
    "desc": "ROLAMENTO 86649/10 VTO CONICO 30X64X21",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "40X62X20",
    "desc": "ROLAMENTO 907257A VTO DDU 40X62X20",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X16",
    "desc": "ROLAMENTO 949100-3330 VTO DDU 17X52X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X46X14",
    "desc": "ROLAMENTO 949100-3360 VTO DDU 15X46X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X38X19",
    "desc": "ROLAMENTO 949100-3480 VTO DDU 15X38X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X52X16",
    "desc": "ROLAMENTO 949100-3820 VTO DDU 15X52X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X27X14 B10-27",
    "desc": "ROLAMENTO B10-27D VTO DDU 10X27X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X23X11",
    "desc": "ROLAMENTO B10-46D VTO DDU 10X23X11 (RASG",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X27X11",
    "desc": "ROLAMENTO B10-50D VTO DDU 10X27X11 (RASG",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X35X13",
    "desc": "ROLAMENTO B15-69 VTO DDU 15X35X13",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "VETOR 6,000",
    "desc": "ROLAMENTO B15-70 NSK DDU 15X32X11",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X47X14 B17-10",
    "desc": "ROLAMENTO B17-102 A-1T1X NSK DDU 17X47X1",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X18",
    "desc": "ROLAMENTO B17-116 D VTO DDU 17X52X18",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X18",
    "desc": "ROLAMENTO B17-116 T NSK DDU 17X52X18",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X21",
    "desc": "ROLAMENTO B17-123 NSK DDU",
    "marca": "LUCIOS ROL NSK",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X62X17,5",
    "desc": "ROLAMENTO B17-126 DW VTO DDU 17X62X17,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X62X17,5",
    "desc": "ROLAMENTO B17-126 NSK DDU C3 17X62X17,5",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X62X20,2 B171",
    "desc": "ROLAMENTO B17-127 VTO 17X62X20,2",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X42X12",
    "desc": "ROLAMENTO B17-147 NSK DDU 17X42X12",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X40X17,5 B17",
    "desc": "ROLAMENTO B17-31 T NSK DDU 17X40X17,5",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X47X24",
    "desc": "ROLAMENTO B17-47D VTO DDU 17X47X24",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X17",
    "desc": "ROLAMENTO B17-99 D VTO DDU 17X52X17",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X52X17",
    "desc": "ROLAMENTO B17-99 T NSK DDU 17X52X17",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X62X19 B25-14",
    "desc": "ROLAMENTO B25-147 25X62X19",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X23X14,2 B8-2",
    "desc": "ROLAMENTO B8-23 D VTO DDU 08X23X14,2",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "08X23X14 B8-85",
    "desc": "ROLAMENTO B8-85 D VTO DDU 08X23X14",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X64X37",
    "desc": "ROLAMENTO BD35-12AT12DDU8A NSK 35X64X3",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "GRA205-14 FRM",
    "desc": "ROLAMENTO GRA 205-14 FRM RIG. ESFERA",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X14X10",
    "desc": "ROLAMENTO HK1010 INA AGUALHA 10X14X10",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "18X24X16",
    "desc": "ROLAMENTO HK1816 INA AGUALHA 18X24X16",
    "marca": "05",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X26X16",
    "desc": "ROLAMENTO HK2016 INA AGUALHA 20X26X16",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X26X16 HK2016",
    "desc": "ROLAMENTO HK2016 VTO AGULHA 20X26X16 NB",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "VETOR 6,000",
    "desc": "ROLAMENTO HK2220 VTO AGULHA NB2220",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X23,8X17,5",
    "desc": "ROLAMENTO NB101 VTO AGULHA 17X23,8X17,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "10X14X10",
    "desc": "ROLAMENTO NB1010 VTO AGULHA 10X14X10",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "11,11X17,4X12,7",
    "desc": "ROLAMENTO NB102 VTO AGULHA 11,11X17,4X12",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "NB104 HK2216",
    "desc": "ROLAMENTO NB104 VTO AGULHA HK2216",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "18X24X16",
    "desc": "ROLAMENTO NB105 VTO AGULHA 18X24X16 HK",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X25X16",
    "desc": "ROLAMENTO NB108 VTO AGUALHA 17X25X16 N",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "17X23,8X31,5",
    "desc": "ROLAMENTO NB109 VTO AGULHA 17X23,8X31,5",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "15X21X16 NB1516",
    "desc": "ROLAMENTO NB1516 VTO AGULHA 15X21X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X26X16",
    "desc": "ROLAMENTO NB2016HK VTO AGUALHA 20X26X16",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "NU205 EW NSK",
    "desc": "ROLAMENTO NU-205 EWC3 ( GAIOLA METAL )",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "NU210KC3 NSK",
    "desc": "ROLAMENTO NU-210 KC-3 NSK",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "NU210KC3 NTN",
    "desc": "ROLAMENTO NU-210 KC-3 NTN",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "R8 LARG 1/4\"",
    "desc": "ROLAMENTO R8 LLU 1/2 X 1.1/8 X 1/4",
    "marca": "R",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "R8",
    "desc": "ROLAMENTO R8 LLU 1/2 X 1.1/8 X 5/16",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "RA205-16A FRM",
    "desc": "ROLAMENTO RA 205-16 FRM RIG. ESFERA",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "20X47X16 UC204",
    "desc": "ROLAMENTO UC 204 20X47X16 VTO",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "UC205-16 ZSG",
    "desc": "ROLAMENTO UC 205-16 ZSG 25,4X52X34,",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "UC205-16 FRM",
    "desc": "ROLAMENTO UC 205-16 V22 FRM 25,4X52X",
    "marca": "LUCIOS ROL NSK",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "35X80X48 UC307",
    "desc": "ROLAMENTO UC 307 CRAFT 35X80X48",
    "marca": "ROLIMAC FAG F",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "26X48,5X15",
    "desc": "ROLAMENTO VK0036CT VTO 26X48,5X15 CX DIR",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X43X12",
    "desc": "ROLAMENTO VK0043CR VTO 25X43X12 CX DIREC",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "30X55X17",
    "desc": "ROLAMENTO VK0045CF VTO 30X55X17 CX DIREC",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "25X47X15",
    "desc": "ROLAMENTO VK0046CX VTO 25X47X15 CX DIREC",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "355212",
    "desc": "ROLAMENTO VTO 355212",
    "marca": "VTO",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "12X32X15,8",
    "desc": "ROLAMENTO W6201 VTO DDU 12X32X15,8",
    "marca": "15",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "R10954",
    "desc": "ROTOR ABS SIM. AL. 1CV 115MM F-16MM SC",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16811",
    "desc": "ROTOR ALBACETE SIM. APP2 1/2CV 16",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16810",
    "desc": "ROTOR ALBACETE SIM. APP3 3/4CV 16",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26574",
    "desc": "ROTOR ANDRADE FECHADO NAE-75 LL DIREITO",
    "marca": "ANDRADE BOMBA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "10260",
    "desc": "ROTOR ANDRADE FECHADO NAX - 51 ESQUERDE",
    "marca": "ANDRADE BOMBA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1/2CV",
    "desc": "ROTOR CMB AQUA1/2CV",
    "marca": "AGUATEC",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501095P",
    "desc": "ROTOR DANCOR ORIG. 95S M 1/4CV 36X95",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501103P",
    "desc": "ROTOR DANCOR ORIG. 103S M 1/3CV 36X99MM",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501110P",
    "desc": "ROTOR DANCOR ORIG. 110S M 1/2CV 36X110",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500132",
    "desc": "ROTOR DANCOR ORIG. 132 / 232 ANTIGO NAO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501150P",
    "desc": "ROTOR DANCOR ORIG. 150S M 3/4CV 36X13",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501155P",
    "desc": "ROTOR DANCOR ORIG. 155S M 1,0CV 36X136M",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60503160P",
    "desc": "ROTOR DANCOR ORIG. 160S 1,5CV ALUMÍNIO 3",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60503170P",
    "desc": "ROTOR DANCOR ORIG. 170S 2,0CV ALUMÍNO 36",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60512103P",
    "desc": "ROTOR DANCOR ORIG. 2103 SDE 1CV FF 104MM",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60540630P",
    "desc": "ROTOR DANCOR ORIG. 630 5CV ALUMÍNIO 189M",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60540645",
    "desc": "ROTOR DANCOR ORIG. 645 7,5CV ALUMÍNIO 15",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60540650P",
    "desc": "ROTOR DANCOR ORIG. 650 7,5CV ALUMÍNIO 1",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60540690",
    "desc": "ROTOR DANCOR ORIG. 690 15 CV ALUMÍNIO 2",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501000P",
    "desc": "ROTOR DANCOR ORIG. CAM-W10 3CV ALUMÍNIO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60501510",
    "desc": "ROTOR DANCOR ORIG. CAM-W14 3CV ALUMÍNIO",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60510020P",
    "desc": "ROTOR DANCOR ORIG. DS 56-40 4CV 123MM 2",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500009",
    "desc": "ROTOR DANCOR ORIG. DS-9 SUBMERSIVEL",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60506142P",
    "desc": "ROTOR DANCOR ORIG. HAD-7 1,0CV M 53X98MM",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60504112P",
    "desc": "ROTOR DANCOR ORIG. HAD-7 1/2CV M 40X92MM",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60506112P",
    "desc": "ROTOR DANCOR ORIG. HAD-7 1/2CV M 53X92MM",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60507142P",
    "desc": "ROTOR DANCOR ORIG. HAD-W7 1,0CV M 53X98M",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60507112P",
    "desc": "ROTOR DANCOR ORIG. HAD-W7 1/2CV M 53X92M",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60507102P",
    "desc": "ROTOR DANCOR ORIG. HAD-W7 1/3CV M 53X81M",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "80560290P",
    "desc": "ROTOR DANCOR ORIG. INPULSOR SPP-2,1",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500803P",
    "desc": "ROTOR DANCOR ORIG. PF-17 803 1/4CV 47X92",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTDNCR 803 NOVO",
    "desc": "ROTOR DANCOR ORIG. PF-17 803 1/4CV MOD N",
    "marca": "DANCOR",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500804P",
    "desc": "ROTOR DANCOR ORIG. PF-17 804 1/3CV 47X96",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500805P",
    "desc": "ROTOR DANCOR ORIG. PF-17 805 1/2CV 47X10",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500807P",
    "desc": "ROTOR DANCOR ORIG. PF-17 807 3/4CV 47X10",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500810P",
    "desc": "ROTOR DANCOR ORIG. PF-17 810 1,0CV 47X10",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500815P",
    "desc": "ROTOR DANCOR ORIG. PF-17 815 1,5CV 47X11",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500820P",
    "desc": "ROTOR DANCOR ORIG. PF/CHS-17 2,0 CV M 4",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500122P",
    "desc": "ROTOR DANCOR ORIG. PF/CHS-22 1,5 CV 59X",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500222P",
    "desc": "ROTOR DANCOR ORIG. PF/CHS-22 2,0CV 59X1",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60500322P",
    "desc": "ROTOR DANCOR ORIG. PF/CHS-22 3,0CV 59X1",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DANCOR -4,000",
    "desc": "ROTOR DANCOR ORIG. ULTRA NORYL 1,0 CV 11",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "60508114P",
    "desc": "ROTOR DANCOR ORIG. ULTRA NORYL 1/2 CV 99",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "114MM",
    "desc": "ROTOR DANCOR SIM. AL 114MM 1/2CV",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT2911",
    "desc": "ROTOR DANCOR SIM. AL 150 1CV 128MM 3/4",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12041-1",
    "desc": "ROTOR DANCOR SIM. AL. 95S 91MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12041",
    "desc": "ROTOR DANCOR SIM. AL. 95S 95,5MM 1/4C",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12039",
    "desc": "ROTOR DANCOR SIM. AL. 103S 101,5MM 1/3C",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12091",
    "desc": "ROTOR DANCOR SIM. AL. 10MS 146MM M.ESTAG",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12037",
    "desc": "ROTOR DANCOR SIM. AL. 110S 110,5MM 1/2CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12047",
    "desc": "ROTOR DANCOR SIM. AL. 140S 122,5MM CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12045",
    "desc": "ROTOR DANCOR SIM. AL. 150S 130,5MM 3/4CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12043",
    "desc": "ROTOR DANCOR SIM. AL. 155S 136,5MM 1CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12035",
    "desc": "ROTOR DANCOR SIM. AL. 160S 145MM 1,5C",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12033",
    "desc": "ROTOR DANCOR SIM. AL. 170S 156MM 2CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12057",
    "desc": "ROTOR DANCOR SIM. AL. 4MS 104MM M.ESTAGI",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12059",
    "desc": "ROTOR DANCOR SIM. AL. 9MS 137MM M.ESTAGI",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11667",
    "desc": "ROTOR DANCOR SIM. NY 95 1/4CV 11",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "95S DNC NY PRL1",
    "desc": "ROTOR DANCOR SIM. NY 95S 1/4CV 13",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "5533",
    "desc": "ROTOR DANCOR SIM. NY 103 1/3CV 100MM 3",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "103S",
    "desc": "ROTOR DANCOR SIM. NY 103S 1/3CV 100MM 1",
    "marca": "D' SANTES",
    "uni": "KG",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1114 NY DNC PRL",
    "desc": "ROTOR DANCOR SIM. NY 114 1/2CV 553",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "114S",
    "desc": "ROTOR DANCOR SIM. NY 114S 1/2CV 114MM 1",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "140",
    "desc": "ROTOR DANCOR SIM. NY 140 3/4CV 120MM 3/4",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "2429",
    "desc": "ROTOR DANCOR SIM. NY 140S 36X120MM 3/4CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "150 DNC PRL 291",
    "desc": "ROTOR DANCOR SIM. NY 150 3YX12YMM 1,0CV",
    "marca": "P. MONTI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "150S DANCOR SIM",
    "desc": "ROTOR DANCOR SIM. NY 150S 3YX12YMM 1,0CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM 803 1/4",
    "desc": "ROTOR DANCOR SIM. NY PF17 803 1/4CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM 804 1/3",
    "desc": "ROTOR DANCOR SIM. NY PF17 804 1/3CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM 805 1/2",
    "desc": "ROTOR DANCOR SIM. NY PF17 805 1/2CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM 807 3/4",
    "desc": "ROTOR DANCOR SIM. NY PF17 807 3/4CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM 810 1CV",
    "desc": "ROTOR DANCOR SIM. NY PF17 810 1CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "DCR SIM SSP3,2",
    "desc": "ROTOR DANCOR SIM. NY SSP 3,2 BOOSTER (",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3725",
    "desc": "ROTOR DARKA ADO-1 1/3CV PISCINA CHAVETA",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3729",
    "desc": "ROTOR DARKA ADO-2 1/2 CV PISCINA CHAVET",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "5946",
    "desc": "ROTOR DARKA ADO-3 3/4CV PISCINA CHAVETA",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05947-1",
    "desc": "ROTOR DARKA ADO-4 ABS 099 D102-5/8 (49X1",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "06329-0",
    "desc": "ROTOR DARKA CA-4 096 D125-5/8 F. FUNDIDO",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "06583-8",
    "desc": "ROTOR DARKA PHVD-1 ABS 100 D100X5 (49X10",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05883-1",
    "desc": "ROTOR DARKA PHVD-2 ABS 100 D102X6 (49X10",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05884-0",
    "desc": "ROTOR DARKA PHVD-3 ABS 100 D102X7 (49X10",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05925-0",
    "desc": "ROTOR DARKA PHVD-4 ABS 100 D102X8 (49X10",
    "marca": "DARKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "24817.9",
    "desc": "ROTOR ELETROPLAS ORGI. FOFO SIMI-ABERTO",
    "marca": "ELETROPLAS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11997",
    "desc": "ROTOR ELETROPLAS SIM. AL. ECM 200 FINAL",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11998",
    "desc": "ROTOR ELETROPLAS SIM. AL. ECM 200 INICIA",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTFAL260MM 100X",
    "desc": "ROTOR FAL 100X80X26 ( 40/2 ) 260MM",
    "marca": "FAL BOMBA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTFAL330MM 100X",
    "desc": "ROTOR FAL 100X80X33 ( 40/2 ) 330MM",
    "marca": "FAL BOMBA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTFAL50X200 216",
    "desc": "ROTOR FAL ASM 50X200 216MM BOMBA MANCA",
    "marca": "FAL BOMBA",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11996",
    "desc": "ROTOR FAMAC SIM AL F7B/IF6E 2CV 44X142MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10974",
    "desc": "ROTOR FAMAC SIM. AL. F-5 C/CHAVETA F13,5",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10921",
    "desc": "ROTOR FAMAC SIM. AL. F6E 1,5CV ROSCA ABE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12000",
    "desc": "ROTOR FAMAC SIM. AL. FC/F17B 2CV 45X155M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11915",
    "desc": "ROTOR FAMAC SIM. AL. FES 105MM INICIAL",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11914",
    "desc": "ROTOR FAMAC SIM. AL. FES 105MM FINAL EIX",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12001",
    "desc": "ROTOR FAMAC SIM. AL. FI6E/F16F 1,5CV 45X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12011",
    "desc": "ROTOR FAMAC SIM. AL. IF7B/IF7C 2CV 57X14",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11995",
    "desc": "ROTOR FAMAC SIM. AL. IF7F/IF7H 3CV 57X16",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12029",
    "desc": "ROTOR FAMAC SIM. AL. IF8E 5CV 57X172MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTGEARTEC 220/1",
    "desc": "ROTOR GEARTEC 160X6X3/4 BC 220 / 1D D F",
    "marca": "GEARTECH",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT IGUI 1/2 RF",
    "desc": "ROTOR IGUI ORG. NORYL ROSCA FINA 1/2 CV",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT IGUI RGROSSA",
    "desc": "ROTOR IGUI ORG. NORYL ROSCA GROSSA 1/2CV",
    "marca": "IGUI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTIGUI1/2CV RF",
    "desc": "ROTOR IGUI SIM. NORYL ROSCA FINA 1/2CV N",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "IGUI 1CV R.GROS",
    "desc": "ROTOR IGUI SIM. NORYL ROSCA GROSSA 1,0 C",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTIGUI1/2CV RG",
    "desc": "ROTOR IGUI SIM. NORYL ROSCA GROSSA 1/2 C",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12089-02",
    "desc": "ROTOR INAPI SIM. AL. MU/MQ M4 49X132MM F",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTALINAPIMUMQ13",
    "desc": "ROTOR INAPI SIM. AL. MU/MQ M4 49X138MM F",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12089-01",
    "desc": "ROTOR INAPI SIM. AL. MU/MQ M4 49X138MM F",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12089",
    "desc": "ROTOR INAPI SIM. AL. MU/MQ M4 49X146MM F",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12088",
    "desc": "ROTOR INAPI SIM. AL. MU/MQ M4 COPO 49X14",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11976",
    "desc": "ROTOR INAPI SIM. AL. MVS 1A5CV 43X108MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05749502",
    "desc": "ROTOR JACUZZI 9186 128,4MM MA F.FUN",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05779400",
    "desc": "ROTOR JACUZZI DIA 142,9 -0,3 (15NDS1",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05734405",
    "desc": "ROTOR JACUZZI 0918-2 B-15GB2 194MM X",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05776208",
    "desc": "ROTOR JACUZZI 2500-2 164,3MM X 1,6 2",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05776307",
    "desc": "ROTOR JACUZZI 2500-3 164,5MM X 3,2 3",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05753512",
    "desc": "ROTOR JACUZZI 2794-2 130,2MM X 31,7 (",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05769518",
    "desc": "ROTOR JACUZZI 3271-2 225,3MM 15DL 1.",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "051775815",
    "desc": "ROTOR JACUZZI 3293-0 161,9MM DM2 FF",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05770904",
    "desc": "ROTOR JACUZZI 3392-3 130MM X 4,4 VJ",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05770706",
    "desc": "ROTOR JACUZZI 3392-3 150,8MM 3DM-1",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05745419",
    "desc": "ROTOR JACUZZI 3398- 5,3/4 VD FERRO",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05182415",
    "desc": "ROTOR JACUZZI 3398-0 164,3MM X 75",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05182019",
    "desc": "ROTOR JACUZZI 3398-0 6.1/4 X 2\" FF 5",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05161617",
    "desc": "ROTOR JACUZZI 3431-0 75DL 1.1/4",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05772306",
    "desc": "ROTOR JACUZZI 9838-2 5A 98,74MM NO",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05775200",
    "desc": "ROTOR JACUZZI 9963-4 82MM X 7,9 3JC-",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05779509",
    "desc": "ROTOR JACUZZI DIA 130,9 -0,3 (1NDS1)",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05770805",
    "desc": "ROTOR JACUZZI 3392-3 138,3MM 2DM1 15",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "05771100",
    "desc": "ROTOR JACUZZI 3392-3 143 X 4,3 ( 2VJF 1",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3210",
    "desc": "ROTOR JACUZZI SIM. AL. 1.1/2CV PISCINA 3",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12064",
    "desc": "ROTOR JACUZZI SIM. AL. MB 48,9X130MM F-1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "INJET 8,000",
    "desc": "ROTOR JACUZZI SIM. NY 1,5CV PISCINA",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1638",
    "desc": "ROTOR JACUZZI SIM. NY 1/2CV 1638 PISC",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1639",
    "desc": "ROTOR JACUZZI SIM. NY 1/3CV 1639 PISC",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "ROTOR JCZ 1/4CV",
    "desc": "ROTOR JACUZZI SIM. NY 1/4CV 1640 PISCI",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1636",
    "desc": "ROTOR JACUZZI SIM. NY 1CV 1636 PI",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3209",
    "desc": "ROTOR JACUZZI SIM. NY 2CV 3209 P",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "1637",
    "desc": "ROTOR JACUZZI SIM. NY 3/4CV 1637 PISCI",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "6450",
    "desc": "ROTOR JACUZZI SIM. NY 3CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "2266512",
    "desc": "ROTOR KSB HYDROBLOC MB 303",
    "marca": "KSB",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "2266509",
    "desc": "ROTOR KSB HYDROBLOC MB 303 - SELO",
    "marca": "KSB",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "02212127",
    "desc": "ROTOR KSB MEGA BLOC 32-125.1 70X144MM MO",
    "marca": "41",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "ROTOR KSB 125-4",
    "desc": "ROTOR KSB MEGANORM 125-400 ETAN 417MM",
    "marca": "KSB",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "XKP-305",
    "desc": "ROTOR LEPONO XKP-305 1/4CV",
    "marca": "DONGYIN/LEPONO",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796834",
    "desc": "ROTOR MARK DPL - 7 9/16\" X 118MM",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796788",
    "desc": "ROTOR MARK DS-08 ( DS7 / DS7X ) 17MM X 1",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796811",
    "desc": "ROTOR MARK DS-09 22 X 168MM 7,5CV",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796812",
    "desc": "ROTOR MARK DS-10 ( PB PC DV ) 22,22MM X",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796819",
    "desc": "ROTOR MARK DV-11 22,22MM X 198MM DIAM.",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98797490",
    "desc": "ROTOR MARK DX-11 22,22MM X 163MM DIAM.",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796848",
    "desc": "ROTOR MARK NXPD- 1 7/16\" X 105MM 0,3",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796847",
    "desc": "ROTOR MARK NXPD-2 0,5CV 7/16\" X 120MM",
    "marca": "MARK",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796845",
    "desc": "ROTOR MARK NXPD-3 0,75CV 7/16\" X 120MM",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "98796846",
    "desc": "ROTOR MARK NXPD-4 1,0CV 7/16\" X 120MM",
    "marca": "MARK",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10951",
    "desc": "ROTOR MARK SIM. AL. HM 105 EIXO 17MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10950",
    "desc": "ROTOR MARK SIM. AL. HM 108 EIXO 17MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10940",
    "desc": "ROTOR MARK SIM. AL. HU 132MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10919-01",
    "desc": "ROTOR MARK SIM. AL. HU 138MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10919",
    "desc": "ROTOR MARK SIM. AL. HU 146MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10955",
    "desc": "ROTOR MARK SIM. AL. HU CC 132 50 X 132M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "INJET 2,000",
    "desc": "ROTOR MARK SIM. AL. HU CC 139 50 X 139M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10956",
    "desc": "ROTOR MARK SIM. AL. HU CC 146 50 X 146M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12052",
    "desc": "ROTOR MARK SIM. AL. HUL 146 ALTA PRESSÃO",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12007",
    "desc": "ROTOR MARK SIM. AL. NDF5 127MM 1,5CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12006",
    "desc": "ROTOR MARK SIM. AL. NDF6 142MM 2CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12005",
    "desc": "ROTOR MARK SIM. AL. NDF7 159MM 3CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11978",
    "desc": "ROTOR MARK SIM. BR. HM 108MM EIXO 17MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT BPF1 1/3CV M",
    "desc": "ROTOR MARK SIM. NORYL BPF1 1/3CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BPF2 1/2CV MRK",
    "desc": "ROTOR MARK SIM. NORYL BPF2 1/2CV SELO",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "013159",
    "desc": "ROTOR MARK SIM. NORYL BPF3 3/4CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTMARK BPF4 1CV",
    "desc": "ROTOR MARK SIM. NORYL BPF4 1,0CV",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTMARK NDF6 2CV",
    "desc": "ROTOR MARK SIM. NORYL NDF-6 146MM 2CV",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTMARK NDF7 NY",
    "desc": "ROTOR MARK SIM. NORYL NDF-7 159MM 3CV",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070167",
    "desc": "ROTOR NAUTILUS 2137 NBF-0 1/4CV 88MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070168",
    "desc": "ROTOR NAUTILUS 2138 NBF-1 1/3CV 90MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070169",
    "desc": "ROTOR NAUTILUS 2139 NBF-2 1/2CV 100MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070170",
    "desc": "ROTOR NAUTILUS 2140 NBF-3 3/4CV 104MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070171",
    "desc": "ROTOR NAUTILUS 2141 NBF-4 1,0CV 108MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070172",
    "desc": "ROTOR NAUTILUS 2142 NBF-5 1,5CV 112MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "40070173",
    "desc": "ROTOR NAUTILUS 2143 NBF-6 2,0CV 112MM",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT NTLS SIM 1/3",
    "desc": "ROTOR NAUTILUS SIM. 2138 NBF-1 1/3CV 90",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT NLTS SIM 1/2",
    "desc": "ROTOR NAUTILUS SIM. 2139 NBF-2 1/2CV 1",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT NLTL SIM 3/4",
    "desc": "ROTOR NAUTILUS SIM. 2140 NBF-3 3/4CV 104",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "8701213151A",
    "desc": "ROTOR SCHN FE BCA-41 7,5CV 147MM X 13M",
    "marca": "SCHNEIDER",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BC92S2.1/2 1CV",
    "desc": "ROTOR SCHN ORI. AL BC-92S 2.1/2 94MM",
    "marca": "SCHNEIDER",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "BC92S2.1/2 3CV",
    "desc": "ROTOR SCHN ORI. AL BC-92S 2.1/2 127MM",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC21FE 12,5CV",
    "desc": "ROTOR SCHN ORI. FE BC21 R2.1/2 12,5CV 1",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT SCHN BC22 R1",
    "desc": "ROTOR SCHN ORI. FE BC22 R1.1/2 175MM (",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT SCHN BC22 R1",
    "desc": "ROTOR SCHN ORI. FE BC22 R1.1/2 201MM (",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC22FE 15CV 1",
    "desc": "ROTOR SCHN ORI. FE BC22 R2 168MM (15,",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT BCA43T5A 25C",
    "desc": "ROTOR SCHN ORI. FE BCA 43T 5A 220X218MM",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RT BCS320 4CV 1",
    "desc": "ROTOR SCHN ORI. FE BCS-320 137MM 4CV",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "ME1 IN 110MM IN",
    "desc": "ROTOR SCHN ORI. ME-1 IN 110MM INOX",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTMBI1/2CVNYC31",
    "desc": "ROTOR SCHN ORI. NY ASP-98 MBI-98 1/2CV 1",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC98NY 1/2CV",
    "desc": "ROTOR SCHN ORI. NY BC-98 1/2CV 107MMX4 A",
    "marca": "SCHNEIDER",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC98NY 1/3CV",
    "desc": "ROTOR SCHN ORI. NY BC-98 1/3CV 107MMX3 B",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBCR2010 1CV R",
    "desc": "ROTOR SCHN ORI. NY BCR-2010 1,0CV 128X5,",
    "marca": "SCHNEIDER",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC98AL 1/2CV",
    "desc": "ROTOR SCHN SIM AL. BC-98 0,5CV 118MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC20AL 1/4CV",
    "desc": "ROTOR SCHN SIM. AL. BC-20 1/4CV 91MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL 1/2CV",
    "desc": "ROTOR SCHN SIM. AL. BC-91 1/2CV 113MM C/",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL1/2CVS/",
    "desc": "ROTOR SCHN SIM. AL. BC-91 1/2CV S/SEDE 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL1,0CVC/",
    "desc": "ROTOR SCHN SIM. AL. BC-91 1CV C/SEDE 43X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL1,0CVS/",
    "desc": "ROTOR SCHN SIM. AL. BC-91 1CV S/SEDE 43X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL3/4CVS/",
    "desc": "ROTOR SCHN SIM. AL. BC-91 3/4CV S/SEDE 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTBC91AL3/4CVC/",
    "desc": "ROTOR SCHN SIM. AL. BC-91 BC-51 3/4A1CV",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11912",
    "desc": "ROTOR SCHN SIM. AL. BC-92 GH A 3CV C/SED",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11947",
    "desc": "ROTOR SCHN SIM. AL. BC-92 GH AA 1,5CV C/",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11913",
    "desc": "ROTOR SCHN SIM. AL. BC-92 GHA 2CV C/SED",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11988",
    "desc": "ROTOR SCHN SIM. AL. BC-92 SJC 2CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11987",
    "desc": "ROTOR SCHN SIM. AL. BC-92 SJC 3CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10996",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1,5CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086-04",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 1,5CV S/SE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086-05",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 1CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086-03",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 2CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086-02",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 2CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086-01",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 3CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12086",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1B 3CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087-02",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 1,5CV S/SE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087-03",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 1CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087-01",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 2CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 3,0 CV S/",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087-04",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 3/4CV S/SE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12087",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 1C 3CV S/SEDE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10995",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 2CV S/SEDE 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10994",
    "desc": "ROTOR SCHN SIM. AL. BC-92S 3CV S/SEDE 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10959",
    "desc": "ROTOR SCHN SIM. AL. BCR 2000 1/4CV 106MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12004",
    "desc": "ROTOR SCHN SIM. AL. MBI 3CV 44,5X155MM I",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10934",
    "desc": "ROTOR SCHN SIM. AL. ME-1 40 X 101MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10933",
    "desc": "ROTOR SCHN SIM. AL. ME-1 40 X 104MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10932",
    "desc": "ROTOR SCHN SIM. AL. ME-1 40 X 105MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10931",
    "desc": "ROTOR SCHN SIM. AL. ME-1 40 X 107MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10957",
    "desc": "ROTOR SCHN SIM. AL. ME-1 CC COPO 40 X 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12093",
    "desc": "ROTOR SCHN SIM. AL. ME-1 N 40 X 113MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12092",
    "desc": "ROTOR SCHN SIM. AL. ME-1 N 40 X 118MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10915",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 129M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10912",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 134M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10907",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 135M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10911",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 136M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10914",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 139M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10909",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 141M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10906",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 144M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10913",
    "desc": "ROTOR SCHN SIM. AL. ME-2 AP 49,5 X 146M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12075",
    "desc": "ROTOR SCHN SIM. AL. ME-2 CC AP 49,5 X 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10946",
    "desc": "ROTOR SCHN SIM. AL. ME-2 CC AP 49,5 X 13",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10949",
    "desc": "ROTOR SCHN SIM. AL. ME-2 CC CP 49,5 X 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11967",
    "desc": "ROTOR SCHN SIM. AL. ME-2 CP 49,5 X 146M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11911",
    "desc": "ROTOR SCHN SIM. BR. ME-1 40 X 107MM 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RF14003",
    "desc": "ROTOR SCHN SIM. FE BCS 220 2CV 2PAS 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RF14002",
    "desc": "ROTOR SCHN SIM. FE BCS 220 3CV 2PÁS 1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTAQUEX1/4CV280",
    "desc": "ROTOR SIBRAPE AQUEX 52X100 CMB HE 0,25CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTAQUEX1/3CV280",
    "desc": "ROTOR SIBRAPE AQUEX 52X100 CMB HE 0,33CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTAQUEX0,5CV280",
    "desc": "ROTOR SIBRAPE AQUEX 52X100 CMB HE 0,50CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTAQUEX3/4CV280",
    "desc": "ROTOR SIBRAPE AQUEX 52X100 CMB HE 0,75CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTAQUEX1,0CV280",
    "desc": "ROTOR SIBRAPE AQUEX 52X100 CMB HE 1,00CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070269",
    "desc": "ROTOR SIBRAPE BPF-0 / MC 90MM X 3,5 1",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070267",
    "desc": "ROTOR SIBRAPE BPF-1 / MC 95MM X 3,5 1",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070270",
    "desc": "ROTOR SIBRAPE BPF-2 / MC 95MM X 5,0 1",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070272",
    "desc": "ROTOR SIBRAPE BPF-3 / MC 95MM X 6,5 3",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070263",
    "desc": "ROTOR SIBRAPE EAGLE 1,0CV DIAM 110MM ESP",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070264",
    "desc": "ROTOR SIBRAPE EAGLE 1,5CV DIAM 110MM ESP",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070266",
    "desc": "ROTOR SIBRAPE EAGLE 2,0CV DIAM 115MM ESP",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070156",
    "desc": "ROTOR SIBRAPE FIT BAP 33 1/3CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070157",
    "desc": "ROTOR SIBRAPE FIT BAP 50 1/2CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070159",
    "desc": "ROTOR SIBRAPE HIDRO BAP 100 1CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070161",
    "desc": "ROTOR SIBRAPE HIDRO BAP 50 1/2CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "28070262",
    "desc": "ROTOR SIBRAPE HIDRO BAP 75 3/4CV",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "SBRPE BPF2 1/2C",
    "desc": "ROTOR SIBRAPE SIM. 1/2CV PISCINA BPF",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "SBRPE BPF1 1/3C",
    "desc": "ROTOR SIBRAPE SIM. 1/2CV PISCINA BPF",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "SBRPE BPF3 3/4C",
    "desc": "ROTOR SIBRAPE SIM. 3/4CV PISCINA BPF",
    "marca": "SIBRAPE",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001405",
    "desc": "ROTOR SODRAMAR 1,0 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001406",
    "desc": "ROTOR SODRAMAR 1,5 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001403",
    "desc": "ROTOR SODRAMAR 1/2 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001402",
    "desc": "ROTOR SODRAMAR 1/3 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001401",
    "desc": "ROTOR SODRAMAR 1/4 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001407",
    "desc": "ROTOR SODRAMAR 2,0 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "001404",
    "desc": "ROTOR SODRAMAR 3/4 CV MONOF MILENIUM",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "7018",
    "desc": "ROTOR SODRAMAR MILLENIUM 1,5CV TRIF 55X1",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16617",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 1,0",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16603",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 1,5",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16717",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 1/2",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16633",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 1/3",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "16651",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 1/4",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RTSDRM 3/4CV MI",
    "desc": "ROTOR SODRAMAR SIM. ( MILENIUM ) 3/4",
    "marca": "DSANTES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11981",
    "desc": "ROTOR SOMAR SIM. AL. SE1 2-3CV 40X108MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11918",
    "desc": "ROTOR SOMAR SIM. AL. SHX 3/4CV ABERTO 12",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11923",
    "desc": "ROTOR SOMAR SIM. AL. SHX-1 1CV 38001013",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11960",
    "desc": "ROTOR SOMAR SIM. AL. SHX-1 1CV 38001097",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11963",
    "desc": "ROTOR SOMAR SIM. AL. SHX2 3CV 38001092 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "3107001",
    "desc": "ROTOR STARMAC PROPULSOR MST25 FOFO F-18",
    "marca": "STARMAC ABS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12010",
    "desc": "ROTOR STARMAC SIM. AL. MOD 25 41X120MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12009-01",
    "desc": "ROTOR STARMAC SIM. AL. MOD 40 49X130MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401648",
    "desc": "ROTOR THEBE ORIG. B12 1/2CV 112MM -",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270401693 B1",
    "desc": "ROTOR THEBE ORIG. B12 1/3 CV 104MM",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "00216",
    "desc": "ROTOR THEBE ORIG. R20 7,5CV 185X5X5/8",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270404051 TH",
    "desc": "ROTOR THEBE ORIG. ABERTO TH-11 3/4CV 1",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11280406083",
    "desc": "ROTOR THEBE ORIG. B12P 1/2CV 118MM",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270405114",
    "desc": "ROTOR THEBE ORIG. NORYL P-11 F-16MM 38X1",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11270405113",
    "desc": "ROTOR THEBE ORIG. NORYL P-11 F-16MM 38X1",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "140006 AE2 2CV",
    "desc": "ROTOR THEBE SIM. ABERTO AE - 2 2,0 CV",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "14007 AE2 1,5",
    "desc": "ROTOR THEBE SIM. ABERTO AE-2 1,5CV 107",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10992",
    "desc": "ROTOR THEBE SIM. AL. P-11 F-16MM 38X100M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10991",
    "desc": "ROTOR THEBE SIM. AL. P-11 F-16MM 38X108M",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R10993",
    "desc": "ROTOR THEBE SIM. AL. P-11 F-16MM 38X90MM",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12032-03",
    "desc": "ROTOR THEBE SIM. AL. P-15 F F-16MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12016-03",
    "desc": "ROTOR THEBE SIM. AL. P-15 F F-19MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12032-02",
    "desc": "ROTOR THEBE SIM. AL. P-15 G F-16MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12016-02",
    "desc": "ROTOR THEBE SIM. AL. P-15 G F-19MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12032-01",
    "desc": "ROTOR THEBE SIM. AL. P-15 K F-16MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12016-01",
    "desc": "ROTOR THEBE SIM. AL. P-15 K F-19MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12016-04",
    "desc": "ROTOR THEBE SIM. AL. P-15 L F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12032",
    "desc": "ROTOR THEBE SIM. AL. P-15 N F-16MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12016",
    "desc": "ROTOR THEBE SIM. AL. P-15 N F-19MM 55X1",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11905",
    "desc": "ROTOR THEBE SIM. AL. PX-15 F F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11904",
    "desc": "ROTOR THEBE SIM. AL. PX-15 G F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11903",
    "desc": "ROTOR THEBE SIM. AL. PX-15 K F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11902",
    "desc": "ROTOR THEBE SIM. AL. PX-15 L F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11974",
    "desc": "ROTOR THEBE SIM. AL. PX-15 N F-16MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11901",
    "desc": "ROTOR THEBE SIM. AL. PX-15 N F-19MM 55X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12021-01",
    "desc": "ROTOR THEBE SIM. AL. RE-16 2,0CV 7/16 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12021",
    "desc": "ROTOR THEBE SIM. AL. RE-16 3,0CV 7/16 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11929",
    "desc": "ROTOR THEBE SIM. AL. TH-16 1,5CV 7/16 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11927",
    "desc": "ROTOR THEBE SIM. AL. TH-16 2,0CV 7/16 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R11925",
    "desc": "ROTOR THEBE SIM. AL. TH-16 3,0CV 7/16 44",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12028-02",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 1,0CV 7/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12026-02",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 1,0CV 9/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12028-03",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 1,5CV 7/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12028-01",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 1,5CV 7/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12028",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 2,0CV 7/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12026-01",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 2,0CV 9/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "R12026",
    "desc": "ROTOR THEBE SIM. AL. TJA-16 2,0CV 9/16 4",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "10991BR P11 10",
    "desc": "ROTOR THEBE SIM. BR. P-11 F-16MM 38 X",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RF14008",
    "desc": "ROTOR THEBE SIM. FF AE-2 R9/16 1,0CV ABE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RF14007",
    "desc": "ROTOR THEBE SIM. FF AE-2 R9/16 1,5CV ABE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "RF14006",
    "desc": "ROTOR THEBE SIM. FF AE-2 R9/16 2,0CV ABE",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153A VH1",
    "desc": "ROTOR VINEW MEKA BOMBA VH1 ( 1/3CV ) 4",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153B VH2",
    "desc": "ROTOR VINEW MEKA BOMBA VH2 ( 1/2CV )",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153C VH3",
    "desc": "ROTOR VINEW MEKA BOMBA VH3 ( 3/4CV )",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153D VH4",
    "desc": "ROTOR VINEW MEKA BOMBA VH4 ( 1,0CV )",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153F VH6",
    "desc": "ROTOR VINEW MEKA BOMBA VH6 ( 2,0CV )",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153G VH7",
    "desc": "ROTOR VINEW MEKA BOMBA VH7 (3,0CV )",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-153A",
    "desc": "ROTOR VINEW MEKA BOMBA VH1 (1/3CV)",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26680",
    "desc": "ROTOR WDM ORI. NORYL HE-1,5 10 1,0CV 42,",
    "marca": "WDM PUMPS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26680",
    "desc": "ROTOR WDM ORI. NORYL HE-1,5 15 1,5CV 42,",
    "marca": "WDM PUMPS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26680",
    "desc": "ROTOR WDM ORI. NORYL HE-1,5 20 2,0CV 42,",
    "marca": "WDM PUMPS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26680",
    "desc": "ROTOR WDM ORI. NORYL HE-1,5 30 3,0CV 42,",
    "marca": "WDM PUMPS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "26680",
    "desc": "ROTOR WDM ORI. NORYL HE-1,5 50 5,0CV 42,",
    "marca": "WDM PUMPS",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "SACAFUS NH SBTC",
    "desc": "SACA FUSIVEL NH SBTC TODOS",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "3051355200",
    "desc": "SACA PINO GEDORE 2MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3051355300",
    "desc": "SACA PINO GEDORE 3MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN 4,000",
    "desc": "SACA PINO GEDORE 4MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN -11,000",
    "desc": "SACA PINO GEDORE 5MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VONDER / OSTEN -6,000",
    "desc": "SACA PINO GEDORE 6MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3651320000",
    "desc": "SACA POLIA 3 GARRAS 200MM VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Correias e Polias"
  },
  {
    "ref": "HHL-30",
    "desc": "SACADOR HIDRAULICO POLIAS E ROLAMENTOS 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "SIBRATEC",
    "desc": "SACO ASPIRADOR ELETROLUX AQP20 E OUTROS",
    "marca": "ELETROLUX ELET",
    "uni": "SCO",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "111215",
    "desc": "SACO ASPIRADOR ELETROLUX AQP20 E OUTROS",
    "marca": "TAMBASA",
    "uni": "SCO",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SACOLA30X40",
    "desc": "SACOLA RECICLADA COLORIDA 30 X 40 KG",
    "marca": "SACOLA PLASTIC",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SACOLA40X50",
    "desc": "SACOLA RECICLADA COLORIDA 40 X 50 KG",
    "marca": "SACOLA PLASTIC",
    "uni": "KG",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60650",
    "desc": "SAIDA ANAUGER ORIG. COMPLETA 1\" 5G 6",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60649",
    "desc": "SAIDA ANAUGER ORIG. COMPLETA 3/4\" 5G",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SAIDA ECCO",
    "desc": "SAIDA JOIHA ECCO / 6\"",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SAIDA 1\"",
    "desc": "SAIDA JOIHA P/ BOMBA 1\"",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "JOIHA 52,000",
    "desc": "SAIDA JOIHA P/ BOMBA 1\" 5 FUROS PRL",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "60649",
    "desc": "SAIDA JOIHA P/ BOMBA 3/4\"",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "JOIHA 21,000",
    "desc": "SAIDA JOIHA P/ BOMBA 3/4\" 5 FUROS",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "SAIDA LIDER",
    "desc": "SAIDA P/ BOMBA LIDER 3/4\" ( 3 PARAFUSO",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "SANI STICKS AZU",
    "desc": "SANI STICKS AZUL LIMPADOR CANOS PIAS RAL",
    "marca": "SHOPPE",
    "uni": "PCT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60305 60654",
    "desc": "SEDE DE VALVULA ANAUGER 5G SIMPLES TO",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60648",
    "desc": "SEDE DE VALVULA ANAUGER 5G COMPLETA TOD",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SD VALV JH 650",
    "desc": "SEDE DE VALVULA JH 650 / 850 / 950 RAY",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VALVULA 900",
    "desc": "SEDE DE VALVULA JH 800 / 900 4G PEQ",
    "marca": "JOIHA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "JOIHA 539,000",
    "desc": "SEDEX",
    "marca": "FRETE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "B4T705/6/10 LAT",
    "desc": "SELO MEC BOMBA IMPORT MOTOR COMB B4T-705",
    "marca": "BRANCO MOTORES",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "B4T716",
    "desc": "SELO MEC BOMBA IMPORT MOTOR COMB B4T-716",
    "marca": "BRANCO MOTORES",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "B4T716 LOUÇA CA",
    "desc": "SELO MEC BOMBA IMPORT MOTOR COMB B4T-716",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SOD128100",
    "desc": "SELO MECANCIO THEBE 80TSBT6 7,5KW 10CV",
    "marca": "THEBE",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-65 3/4",
    "desc": "SELO MECANICO INPACOM T-65 3/4 S/SEDE",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC14MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 14M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC15MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 15M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC16MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 16M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC19MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 19M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC20MM FACE",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 20M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC22MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 22M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC24MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 24M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC25MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 25M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC28MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 28M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC30MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 30M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SLMEC32MM SEDEC",
    "desc": "SELO MECANICO FACE LOUÇA SEDE CARVAO 32M",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0116SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1\" VITON 20",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0116SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1\" BUNA GRAF",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "INPACOM FLUID 50,000",
    "desc": "SELO MECANICO INPACOM T-01 1\" SIC / VT",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0124SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/2\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0124SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/2\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0120SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/4\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0120SVT4TS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/4\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0120SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/4\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0120LBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/4\" LONGO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0118SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/8\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0118SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.1/8\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0128SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.3/4\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0128SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.3/4\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0122SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.3/8\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0122SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.3/8\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0126SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.5/8 BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0126SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1.5/8 VITON",
    "marca": "INPACOM FLUID",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0108SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1/2\" BUNA GR",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0108SBS4SS",
    "desc": "SELO MECANICO INPACOM T-01 1/2\" BUNA SI",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0108SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 1/2\" VITON 20",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0132SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 2\" BUNA GRAF",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0136SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 2.1/4\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0112SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 3/4\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0112SBS4SS",
    "desc": "SELO MECANICO INPACOM T-01 3/4\" BUNA S",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0112SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 3/4\" VITON 2",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0110SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 5/8\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0110SBS4SS",
    "desc": "SELO MECANICO INPACOM T-01 5/8\" BUNA S",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0110SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 5/8\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0107SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 7/16\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0114SBP4RS",
    "desc": "SELO MECANICO INPACOM T-01 7/8\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0114SVP4RS",
    "desc": "SELO MECANICO INPACOM T-01 7/8\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0261SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 11MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0262SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 12MM BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0263SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 13MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0264SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 14MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "INPACOM FLUID 6,000",
    "desc": "SELO MECANICO INPACOM T-02 14MM VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0265SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 15MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0266SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 16MM BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0270SBP4RS",
    "desc": "SELO MECANICO INPACOM T-02 20MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "INPACOM FLUID 1,000",
    "desc": "SELO MECANICO INPACOM T-02 30MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0462SBP4RS",
    "desc": "SELO MECANICO INPACOM T-04 12MM BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0568SBR4PS",
    "desc": "SELO MECANICO INPACOM T-05 18MM CER 304",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0568SVS4SS",
    "desc": "SELO MECANICO INPACOM T-05 18MM SIC / V",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0570SBR4PS",
    "desc": "SELO MECANICO INPACOM T-05 20MM CER 304",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0616SBP4RS",
    "desc": "SELO MECANICO INPACOM T-06 1\" BUNA GR",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0616SVP4RS",
    "desc": "SELO MECANICO INPACOM T-06 1\" VITON 20",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0612SBP4RS",
    "desc": "SELO MECANICO INPACOM T-06 3/4\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0612SVP4RS",
    "desc": "SELO MECANICO INPACOM T-06 3/4\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0612LBP4RS",
    "desc": "SELO MECANICO INPACOM T-06 3/4\" LONGO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0610SBP4RS",
    "desc": "SELO MECANICO INPACOM T-06 5/8\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0610SVP4RS",
    "desc": "SELO MECANICO INPACOM T-06 5/8\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "0610LBP4RS",
    "desc": "SELO MECANICO INPACOM T-06 5/8\" LONGO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1070SBP4RC",
    "desc": "SELO MECANICO INPACOM T-10 20MM INOX",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1075SBP4RS",
    "desc": "SELO MECANICO INPACOM T-10 25MM INOX",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1080SBP4RS",
    "desc": "SELO MECANICO INPACOM T-10 30MM INOX",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1012SVP4RS",
    "desc": "SELO MECANICO INPACOM T-10 3/4\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1012FBP4RC",
    "desc": "SELO MECANICO INPACOM T-10 3/4\" C/ BORR",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1012SBP4RS",
    "desc": "SELO MECANICO INPACOM T-10 3/4\" LATINHA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1010SBP4RS",
    "desc": "SELO MECANICO INPACOM T-10 5/8\" LATINHA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-11 12MM",
    "desc": "SELO MECANICO INPACOM T-11 12MM",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-11 14MM",
    "desc": "SELO MECANICO INPACOM T-11 14MM",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1165SBP4RT",
    "desc": "SELO MECANICO INPACOM T-11 15MM 1165SBP4",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1166SBP4RT",
    "desc": "SELO MECANICO INPACOM T-11 16MM 1166SBP4",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1220SVP4RS",
    "desc": "SELO MECANICO INPACOM T-12 1.1/4\" VITO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1608SBP4RS",
    "desc": "SELO MECANICO INPACOM T-16 1/2\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1608SVP4RS",
    "desc": "SELO MECANICO INPACOM T-16 1/2\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1612SBP4RS",
    "desc": "SELO MECANICO INPACOM T-16 3/4\" BUNA",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1612SVP4RS",
    "desc": "SELO MECANICO INPACOM T-16 3/4\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1610SBP4RS",
    "desc": "SELO MECANICO INPACOM T-16 5/8\" BUNA G",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1610SVP4RS",
    "desc": "SELO MECANICO INPACOM T-16 5/8\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "2024SVP400",
    "desc": "SELO MECANICO INPACOM T-20 1.1/2\" VITON",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "2018SBP400",
    "desc": "SELO MECANICO INPACOM T-20 1.1/8\" INOX",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "2112SBP4RS",
    "desc": "SELO MECANICO INPACOM T-21 3/4\" DUPLO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "2110SBP4RS",
    "desc": "SELO MECANICO INPACOM T-21 5/8\" DUPLO",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "INPACOM FLUID 7,000",
    "desc": "SELO MECANICO INPACOM T-43 1.1/4\" BU",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "IMG11250SVU4RAN",
    "desc": "SELO MECANICO INPACOM T-IMG1 1.1/4\" ( T",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "IMG11250SBU4RAN",
    "desc": "SELO MECANICO INPACOM T-IMG1 1.1/4\" (T-",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "IMG11250SVS4SAN",
    "desc": "SELO MECANICO INPACOM T-IMG1 1.1/4\" (T-",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "IMG11375SBU4RAN",
    "desc": "SELO MECANICO INPACOM T-IMG1 1.3/8 (T-1",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "IMG11375SVU4RAN",
    "desc": "SELO MECANICO INPACOM T-IMG1 1.3/8\" (T-1",
    "marca": "INPACOM FLUID",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-21 1\"",
    "desc": "SELO MECANICO JOHN CRANE T-21 1\"",
    "marca": "JHON CRANE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-21 1.1/4\"",
    "desc": "SELO MECANICO JOHN CRANE T-21 1.1/4\"",
    "marca": "JHON CRANE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-21 3/4\" US-C",
    "desc": "SELO MECANICO JOHN CRANE T-21 3/4\"",
    "marca": "JHON CRANE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-21 5/8",
    "desc": "SELO MECANICO JOHN CRANE T-21 5/8\"",
    "marca": "JHON CRANE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "T-21 7/8\" US-C",
    "desc": "SELO MECANICO JOHN CRANE T-21 7/8\" 239",
    "marca": "JHON CRANE",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SELO MEC TPSG04",
    "desc": "SELO MECANICO MOTOR BOMBA SUBMERSA 4\"",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "21 100 290",
    "desc": "SELO MECANICO MOTOR LEAO S600 1\"",
    "marca": "FLOWSERVE PAC",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SCHN",
    "desc": "SELO MECANICO SCHNEIDER ME1N 20MM",
    "marca": "FLOWSERVE PAC",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "BN-2 1/2\"",
    "desc": "SELO MECANICO SELOBRAS BN-2 1/2\"",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "DS-MG1 1/2\"",
    "desc": "SELO MECANICO SELOBRAS DS-MG1 1/2\" (T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "H11SBB",
    "desc": "SELO MECANICO SELOBRAS SB-ATR 1.1/8\" VIT",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SBFN18MMBUNA",
    "desc": "SELO MECANICO SELOBRAS SB-FN 18MM (T-05)",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SB-K 20MM",
    "desc": "SELO MECANICO SELOBRAS SB-K 20MM (T-02)",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SELOBRAS",
    "desc": "SELO MECANICO SELOBRAS SB-MG 5/8\" (T-16)",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "1418",
    "desc": "SELO MECANICO SELOBRAS SB-MG1 1.1/4\" DC-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SBMG1-1.1/4-BUN",
    "desc": "SELO MECANICO SELOBRAS SB-MG1 1.1/4\" DC-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SELOBRAS",
    "desc": "SELO MECANICO SELOBRAS SB-MG1 1.3/8\" DC-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SB-MG1 40MM VIT",
    "desc": "SELO MECANICO SELOBRAS SB-MG1 40MM VITON",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "SELO MG1 30MM S",
    "desc": "SELO MECANICO SELOBRAS SBMG1 30MM SEDE G",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TSP2",
    "desc": "SELO MECANICO SELOBRAS TS-P 2\" ( T-01",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TSP214",
    "desc": "SELO MECANICO SELOBRAS TS-P 2.1/4\" ( T",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 1\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 1\" ( T-01 )",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 1.1/2\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 1.1/2\" ( T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 1.1/4\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 1.1/4\" ( T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 1.3/4\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 1.3/4\" ( T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 1.5/8\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 1.5/8\" ( T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 2.3/8",
    "desc": "SELO MECANICO SELOBRAS TS-P 2.3/8\" ( T-",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TSP3/4 VITON",
    "desc": "SELO MECANICO SELOBRAS TS-P 3/4 VITON",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 3/4\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 3/4\" ( T-01",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 5/8\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 5/8\" ( T-01",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TSP-5/8 VITON",
    "desc": "SELO MECANICO SELOBRAS TS-P 5/8\" VITON",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-P 7/16\"",
    "desc": "SELO MECANICO SELOBRAS TS-P 7/16\" ( T-0",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-QL 5/8\"",
    "desc": "SELO MECANICO SELOBRAS TS-QL 5/8\" ( T-1",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-Y 3/4\"",
    "desc": "SELO MECANICO SELOBRAS TS-Y 3/4\" ( T-10",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "TS-YIE3/4 LOUÇA",
    "desc": "SELO MECANICO SELOBRAS TS-YIE 3/4\" BRAN",
    "marca": "SELOBRAS",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "CM182008A JNG",
    "desc": "SENSOR CAPACITIVO JNG CM18-2008 A 1NA 9",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CM182008ASBTC",
    "desc": "SENSOR CAPACITIVO SBTC CM18-2008 A 1NA 9",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CM18-3008PC",
    "desc": "SENSOR CAPACITIVO SBTC CM18-3008 PC PNP",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CM18-2005B 1NA",
    "desc": "SENSOR CAPACITIVO XXXX CM18-2005 B 1NA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 1,000",
    "desc": "SENSOR FOTOELETRICO G18-3A30 PC PNP 10~",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM12-3004PA",
    "desc": "SENSOR INDUTIVO JNG LM12-3004 PA PNP N",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM18-2008C",
    "desc": "SENSOR INDUTIVO JNG LM18-2008 C 250V N/F",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM18-3005PA",
    "desc": "SENSOR INDUTIVO JNG LM18-3005 PA 10~30V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM30-3015PC PNP",
    "desc": "SENSOR INDUTIVO JNG LM30-3015 PC PNP 6",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SENOR IND LM18-",
    "desc": "SENSOR INDUTIVO LKM LM18-3008 N/FACEAD",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM12-3004PA6A36",
    "desc": "SENSOR INDUTIVO SBTC LM12-3004 PA 6 A 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM18-3008 NC N",
    "desc": "SENSOR INDUTIVO SBTC LM18-3008 NC 6 A 3",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM18-3008PC PNP",
    "desc": "SENSOR INDUTIVO SBTC LM18-3008 PC 6 A 3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM30-2010B90-25",
    "desc": "SENSOR INDUTIVO SBTC LM30-2010B 90-250V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "LM30-3015PC6-36",
    "desc": "SENSOR INDUTIVO SBTC LM30-3015 PC 6-36VC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "077522",
    "desc": "SENSOR PRESENCA SOBREPOR QUALITRONIX",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "4611019001",
    "desc": "SERRA COPO STARRET 19MM 3/4\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SERRACOPO 22MM",
    "desc": "SERRA COPO STARRET 22MM 7/8\"",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "62680",
    "desc": "SERRA COPO STARRET 32MM 1.1/4\" AÇO M",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SERRACOPO51MMST",
    "desc": "SERRA COPO STARRET 51MM 2\" FCH0200G",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "VONDER / OSTEN 2,000",
    "desc": "SERRA COPO STARRET 60MM 2,3/8\"",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SERRACOPO14MMVN",
    "desc": "SERRA COPO VONDER 14MM - 9/16\"",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3509916136",
    "desc": "SERRA COPO VONDER AR 19MM P/ INOX",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3511100022",
    "desc": "SERRA COPO VONDER AR 22MM P/ INOX",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3511100050",
    "desc": "SERRA COPO VONDER AR 50MM P/ INOX",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "055698",
    "desc": "SERROTE PODA RAMADA 12 SIMETAL",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "063413",
    "desc": "SILICONE AUTOMOTIVO 300ML SPRAY M.PRIME",
    "marca": "MUNDIAL PRIME",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SILICONESPRAY B",
    "desc": "SILICONE SPRAY CARRO NOVO 300ML BARTOFI",
    "marca": "TRAMONTINA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "TRAMONTINA 5,000",
    "desc": "SINALEIRO JNG MONOBL BRANCO 22MM 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG -6,000",
    "desc": "SINALEIRO JNG MONOBL BRANCO 22MM 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 9,000",
    "desc": "SINALEIRO JNG MONOBL VERDE 22MM 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG -10,000",
    "desc": "SINALEIRO JNG MONOBL VERMELHO 22MM 220V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "24V",
    "desc": "SINALEIRO JNG MONOBL VERMELHO 22MM 24V",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG -3,000",
    "desc": "SINALEIRO JNG MONOBLOCO AZUL 12VCC",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SINAL AZUL 220V",
    "desc": "SINALEIRO JNG MONOBLOCO AZUL 220V",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC -4,000",
    "desc": "SINALEIRO OLHO DE BOI",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AMARELO",
    "desc": "SINALEIRO SIBRATEC LED AMARELO 127/220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC -5,000",
    "desc": "SINALEIRO SIBRATEC LED BRANCO 110/220 V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VERDE",
    "desc": "SINALEIRO SIBRATEC LED VERDE 127/220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 10,000",
    "desc": "SINALEIRO SIBRATEC LED VERMELHO 110/220V",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC -11,000",
    "desc": "SIRENE INDUSTRIAL MS-290 220VCA SIBRATEC",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "25309",
    "desc": "SOBREPOSTA ANDRADE NAX - 51 APERTA GAX",
    "marca": "ANDRADE BOMBA",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "ANDRADE BOMBA",
    "desc": "SOLDA COBIX 1,0MM CARRETEL 250G",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "0696",
    "desc": "SOLDA COBIX 1,0MM CARRETEL 500G",
    "marca": "39",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "SOLDA 1,5MM",
    "desc": "SOLDA COBIX 1,5MM CARRETEL 250G",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "0697",
    "desc": "SOLDA COBIX 1,5MM CARRETEL 500G",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "017247",
    "desc": "SOLDA FIO TUBETE C/4M",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7659",
    "desc": "SOLDA FOSCOPER VARETA",
    "marca": "MOTA REFRIG",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "3039012040",
    "desc": "SOQUETE HEXALOBULAR ENC. 1/2\" T-40 VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3039012045",
    "desc": "SOQUETE HEXALOBULAR ENC. 1/2\" T-45 VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3039012050",
    "desc": "SOQUETE HEXALOBULAR ENC. 1/2\" T-50 VND",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SUC",
    "desc": "SUCATA DE COBRE",
    "marca": "SUCATA",
    "uni": "KG",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "BASEDISCOVELCRO",
    "desc": "SUPORTE BASE DISCO LIXA VELCRO 114X14 BE",
    "marca": "BESTFER",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SUPROTORSELO280",
    "desc": "SUPORTE ROTOR AQUEX (SELO) 94316 INTERM",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "7855",
    "desc": "SUPORTE SBTC INCLIN. P/TRILHO DIN 45°",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "SIBRATEC 2,000",
    "desc": "SUPORTE SERRA COPO 14 - 29 MM MAKITA",
    "marca": "MAKITA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "SUPORTE CP 32-1",
    "desc": "SUPORTE SERRA COPO 32-152 MAKITA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "1037011820",
    "desc": "SUPORTE SERRA COPO C/BROCA 14 A 30 MM",
    "marca": "VONDER / OSTEN",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60652",
    "desc": "TAMPA ANAUGER SAIDA 5G ( PÇ PLASTICA F",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017115",
    "desc": "TAMPA DEFLETORA ORIG. WEG MOD. 90 MOTO",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016958 TPDEF1",
    "desc": "TAMPA DEFLETORA ORIG. WEG MOD. 180 W21",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "MOD63",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 63",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "MOD71",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 71",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "80",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 80",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "90",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 90",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "D' SANTES 1,000",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 100",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "MOD112",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 112",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "132",
    "desc": "TAMPA DEFLETORA SIM. EBERLE MOD. 132",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1171",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 63",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1172",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 71",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1044",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 80",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1000",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 90",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1045",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 100",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1176",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 112",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1242",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 132",
    "marca": "D' SANTES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TD10160",
    "desc": "TAMPA DEFLETORA SIM. WEG MOD. 160",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TD100",
    "desc": "TAMPA EBERLE DIANTEIRA 100 6206",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FIMACOM",
    "desc": "TAMPA EBERLE DIANTEIRA 112 6307",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "3D12777K 56 FE",
    "desc": "TAMPA EBERLE DIANTEIRA 56 FINA 6204 3D12",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "NAO TEMOS",
    "desc": "TAMPA EBERLE DIANTEIRA 56 FINA 6204 LN 3",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "3ED3746K",
    "desc": "TAMPA EBERLE DIANTEIRA 56 LARGA 6204 3E3",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "3D6919K",
    "desc": "TAMPA EBERLE ROL. 6203 ALTA",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TT100",
    "desc": "TAMPA EBERLE TRASEIRA 100 ROL. 6206",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "3D6117",
    "desc": "TAMPA EBERLE TRASEIRA LOA LT ALTA R. 620",
    "marca": "EBERLE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ED12780K",
    "desc": "TAMPA EBERLE TRASEIRA NEMA 56 LN 6203 3D",
    "marca": "FIMACOM",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TP FE FUND ARTC",
    "desc": "TAMPA FERRO FUNDIDO ARTICULADA INSPEÇAO",
    "marca": "ML VENDAS BRAS",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPDIANT HERC 56",
    "desc": "TAMPA HERCULES DIANTEIRA 56 R6204 0272",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "HERCULES MOTOR 1,000",
    "desc": "TAMPA HERCULES TRASEIRA 42 R.6201 02.52",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPTRASHERC56 62",
    "desc": "TAMPA HERCULES TRASEIRA 56 R.6203 50500",
    "marca": "HERCULES MOTOR",
    "uni": "KG",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "39302203",
    "desc": "TAMPA JACUZZI PRÉ-FILTRO 12181 B (39",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPFLNGKOLH149N5",
    "desc": "TAMPA KOHLBACH DIANTEIRA FLANGE 149 NEMA",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "157 TPDIANTKO 6",
    "desc": "TAMPA KOHLBACH DIANTEIRA N.56 R.6204 FI",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "62321072",
    "desc": "TAMPA KOHLBACH DIANTEIRA NEMA 48 R.6204",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "812",
    "desc": "TAMPA KOHLBACH DIANTEIRA NEMA 56 R.6204",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "043 TPTRASKO CN",
    "desc": "TAMPA KOHLBACH TRASEIRA N.56 R6203PLAT.",
    "marca": "KOHLBACH",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "041 2234 1096",
    "desc": "TAMPA KOHLBACH TRASEIRA NEMA 48 R.6202",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPTRKO486202LIQ",
    "desc": "TAMPA KOHLBACH TRASEIRA NEMA 48 R6202 P/",
    "marca": "ARAUJO MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "2954 62341196",
    "desc": "TAMPA KOHLBACH TRASEIRA NEMA 56 R6203 P/",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "046 824 D161",
    "desc": "TAMPA KOHLBACH TRASEIRA NEMA 56 R6203 P/",
    "marca": "ALAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "98797558",
    "desc": "TAMPA MARK SUCÇAO HM M920 ( IP21 )",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "98797662",
    "desc": "TAMPA MARK SUCÇÃO HU M6125 HU-2 / HU",
    "marca": "MARK GRUDFOS",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "40070119",
    "desc": "TAMPA NAUTILUS ACRILICA ROSCA PRE-FILTRO",
    "marca": "NAUTILUS",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "NAUTILUS 1,000",
    "desc": "TAMPA PORTA ESCOVA MAKITA 4100 NH",
    "marca": "FERRAMENTAS EL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TAPAFURO",
    "desc": "TAMPA PRETA P/ FURO 22MM (TAPA FURO) TAM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPSAK4-10 134",
    "desc": "TAMPA SAK AP3 ( SAK 4~6~10 ) PLACA P",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPSAK16 1349",
    "desc": "TAMPA SAK AP4 ( SAK 16 ) PLACA PROTE",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPSAK35 134",
    "desc": "TAMPA SAK AP5 ( SAK 35 ) PLACA PR",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "60711",
    "desc": "TAMPA SAÍDA ANAUGER ECCO 4G / SOLAR R10",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPSEK4-10",
    "desc": "TAMPA SBTC SEK 4~10 ( CONECTOR SEK 10 )",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TP ENT ME2 23/2",
    "desc": "TAMPA SCHN ENTRADA ME2 - 23 ( TODAS ) 24",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11950",
    "desc": "TAMPA SODRAMAR PRE FILTRO ( KIT ) NOVA",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11270404585",
    "desc": "TAMPA THEBE INTERMEDIARIA R-20 ( R/F )",
    "marca": "THEBE",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "2294",
    "desc": "TAMPA TRAPP CARRETEL MASTER 500/700/800/",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "M-320",
    "desc": "TAMPA VINEW MEKA P/BOMBA DM EM ABS",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "M-159",
    "desc": "TAMPA VINEW MEKA PRE FILTRO (MOD.NOVA)",
    "marca": "VINEW-MEKA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10142761",
    "desc": "TAMPA WEG DIANTEIRA 48 FLANG ESP FC-200",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016969",
    "desc": "TAMPA WEG DIANTEIRA 48 FLANGE FC-149 62",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017206",
    "desc": "TAMPA WEG DIANTEIRA 48 FLANGE JET PUMP",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016968",
    "desc": "TAMPA WEG DIANTEIRA 48B C48 C56 NOVA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017028",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC149 FC",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10120957",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE ESP/R 620",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017028",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC-149 62",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10978656",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC-149 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016970",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC-149 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017205",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC-165 62",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10156667",
    "desc": "TAMPA WEG DIANTEIRA 56 FLANGE FC-165 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017009",
    "desc": "TAMPA WEG DIANTEIRA 56H 6204 10017009",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11333946",
    "desc": "TAMPA WEG DIANTEIRA 63 W21 6201 113339",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016811",
    "desc": "TAMPA WEG DIANTEIRA 71 FLANGE C-105 62",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016805",
    "desc": "TAMPA WEG DIANTEIRA 71 FLANGE FC-95 620",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016796",
    "desc": "TAMPA WEG DIANTEIRA 71 FLANGE FF-130 62",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016780",
    "desc": "TAMPA WEG DIANTEIRA 71 W21 6203 1001678",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334106",
    "desc": "TAMPA WEG DIANTEIRA 71 W22 6202 113341",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPDIWEG80SIM R6",
    "desc": "TAMPA WEG DIANTEIRA 80 6204 (SIMILAR)",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334136",
    "desc": "TAMPA WEG DIANTEIRA 80 6204 11334136 10",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016813",
    "desc": "TAMPA WEG DIANTEIRA 80 FLANGE C 120 620",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPFLGW80FC149R6",
    "desc": "TAMPA WEG DIANTEIRA 80 FLANGE FC-149 62",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016806",
    "desc": "TAMPA WEG DIANTEIRA 80 FLANGE FC-95 620",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016798",
    "desc": "TAMPA WEG DIANTEIRA 80 FLANGE FF-165 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPDIWEG90SIM R.",
    "desc": "TAMPA WEG DIANTEIRA 90 6205 (SIMILAR)",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016815",
    "desc": "TAMPA WEG DIANTEIRA 90 FLANGE C-140 620",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016807",
    "desc": "TAMPA WEG DIANTEIRA 90 FLANGE FC-149 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016801",
    "desc": "TAMPA WEG DIANTEIRA 90 FLANGE FF-165 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334194",
    "desc": "TAMPA WEG DIANTEIRA 90 W22 6205 1133419",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016817",
    "desc": "TAMPA WEG DIANTEIRA 100 FLANGE C-DIN 160",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017102",
    "desc": "TAMPA WEG DIANTEIRA 100 FLANGE FC-149 62",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334224",
    "desc": "TAMPA WEG DIANTEIRA 100 W22 6206 1133422",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016817",
    "desc": "TAMPA WEG DIANTEIRA 112 FLANGE C-160 W21",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10024008",
    "desc": "TAMPA WEG DIANTEIRA 112 FLANGE FC-149 W2",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016875",
    "desc": "TAMPA WEG DIANTEIRA 112 FLANGE FF-215 63",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016840",
    "desc": "TAMPA WEG DIANTEIRA 112 W21 6307 1001684",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10579640",
    "desc": "TAMPA WEG DIANTEIRA 112 W21 MONOF R.6206",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334281",
    "desc": "TAMPA WEG DIANTEIRA 112 W22 6207 1133428",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10156803",
    "desc": "TAMPA WEG DIANTEIRA 132 FLANGE FC-149 63",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016885",
    "desc": "TAMPA WEG DIANTEIRA 132 FLANGE FC-184 63",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017104",
    "desc": "TAMPA WEG DIANTEIRA 132 FLANGE FC-184 63",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016876",
    "desc": "TAMPA WEG DIANTEIRA 132 FLANGE FF-265 63",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10628411",
    "desc": "TAMPA WEG DIANTEIRA 132 FLANGE JM/JP ME-",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334669",
    "desc": "TAMPA WEG DIANTEIRA 132 W21/W22 6308 11",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016886",
    "desc": "TAMPA WEG DIANTEIRA 160 FLANGE FC-184 63",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TPFLGWEG160FF30",
    "desc": "TAMPA WEG DIANTEIRA 160 FLANGE FF-300 6",
    "marca": "TDWEG160W21ROL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TDWEG160W21ROL6",
    "desc": "TAMPA WEG DIANTEIRA 160 W21 6309 ( SIMI",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334724",
    "desc": "TAMPA WEG DIANTEIRA 160 W22 3609 1133472",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11100947",
    "desc": "TAMPA WEG DIANTEIRA 250 W22 ( 225/250 W",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10083464",
    "desc": "TAMPA WEG DIANTEIRA 280 W22 FF600 ( 280",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10223721",
    "desc": "TAMPA WEG TRASEIRA 42 6201 BC-98 SCHN 1",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10811769",
    "desc": "TAMPA WEG TRASEIRA 48 6201 10811769 663",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10156598",
    "desc": "TAMPA WEG TRASEIRA 48 6201 MOTO CEIFADO",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10890289",
    "desc": "TAMPA WEG TRASEIRA 48 6201 WJET 108902",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10156601",
    "desc": "TAMPA WEG TRASEIRA 48 6202 10156601",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10156840",
    "desc": "TAMPA WEG TRASEIRA 48 6202 10156840",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11076530",
    "desc": "TAMPA WEG TRASEIRA 48 6202 11076530",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10083490",
    "desc": "TAMPA WEG TRASEIRA 48 6202 WJET PUMP 1",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017013",
    "desc": "TAMPA WEG TRASEIRA 48 6202 WJET PUMP 2",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017011",
    "desc": "TAMPA WEG TRASEIRA 56 6202 ABD ( 48 AN",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017359",
    "desc": "TAMPA WEG TRASEIRA 56 6202 ABD56J C/FUR",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017012",
    "desc": "TAMPA WEG TRASEIRA 56 6202 H W21 3 1001",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017204",
    "desc": "TAMPA WEG TRASEIRA 56 6202 JETPUMP FCHD",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017016 1119",
    "desc": "TAMPA WEG TRASEIRA 56 6203 ABD/F56H/G5",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10120942",
    "desc": "TAMPA WEG TRASEIRA 56 JET PUMP C56 E48C",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11335742",
    "desc": "TAMPA WEG TRASEIRA 63 W22 6201 11335742",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11334106",
    "desc": "TAMPA WEG TRASEIRA 71 W22 6202 1133577",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "01 2,000",
    "desc": "TAMPA WEG TRASEIRA 80 6203 (SIMILAR)",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017108",
    "desc": "TAMPA WEG TRASEIRA 80 FLANGE 6203 10017",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11335835",
    "desc": "TAMPA WEG TRASEIRA 80 W22 6203 11335835",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11336187",
    "desc": "TAMPA WEG TRASEIRA 90 W22 6204 1133618",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017220",
    "desc": "TAMPA WEG TRASEIRA 90 W22 FND FECHADO",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11336465",
    "desc": "TAMPA WEG TRASEIRA 100 W22 6205 11336465",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10223718",
    "desc": "TAMPA WEG TRASEIRA 112 MONOF 6206 102237",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11336601",
    "desc": "TAMPA WEG TRASEIRA 112 W22 6206 11336601",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017189",
    "desc": "TAMPA WEG TRASEIRA 132 MONOF 6206 10017",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ENSELLI 3,000",
    "desc": "TAMPA WEG TRASEIRA 132 W21 6207 (SIMILAR",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016858",
    "desc": "TAMPA WEG TRASEIRA 132 W21 6207 10016858",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TT10160",
    "desc": "TAMPA WEG TRASEIRA 160 W21 6209 ( SIMILA",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016859",
    "desc": "TAMPA WEG TRASEIRA 160 W21 6209 10016859",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11724448",
    "desc": "TAMPA WEG TRASEIRA 160 W22 6209 11724448",
    "marca": "01",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11249847",
    "desc": "TAMPA WEG TRASEIRA 180 W21 W22 62111724",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11250170",
    "desc": "TAMPA WEG TRASEIRA 200 W22 6212 11250170",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "1101019",
    "desc": "TAMPA WEG TRASEIRA 250 W22 ( 225/250 W2",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11101195",
    "desc": "TAMPA WEG TRASEIRA 280 W22 ( 280/315 W2",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "TERM 240 2F TRA",
    "desc": "TERMINAL COBRE P/TRAFO 240MM 2F P.CEM",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "INTELLI 2,000",
    "desc": "TERMINAL COMPRESSAO CABO FLEX 120MM PINO",
    "marca": "TERMINAL TCM",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM06 503",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 6MM 5",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM10 504 0599",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 10MM 50",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM16 505 0600",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 16MM 50",
    "marca": "20",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM25 506 0601",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 25MM 50",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM35 507 0602",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 35MM 50",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM50 508 0603",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 50MM 50",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM70 509",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 70MM 5",
    "marca": "39",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM95 510 0605",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 95MM 51",
    "marca": "INTELLI",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM120 511",
    "desc": "TERMINAL COMPRESSÃO INTELLI TM 120MM 5",
    "marca": "39",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CT3705-L",
    "desc": "TERMINAL CRIMPER PINO TUBULAR DUPLO AZU",
    "marca": "CRIMPER",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CT3707-L",
    "desc": "TERMINAL CRIMPER PINO TUBULAR DUPLO PRE",
    "marca": "CRIMPER",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "CT3706-L",
    "desc": "TERMINAL CRIMPER PINO TUBULAR DUPLO VERM",
    "marca": "CRIMPER",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BANDEIRA",
    "desc": "TERMINAL ENCAIXE BANDEIRA 7026 LATAO",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7020-B",
    "desc": "TERMINAL ENCAIXE RETO 7020-B LATAO",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDD2-250",
    "desc": "TERMINAL INTELLI FEMEA FDD 2-250 AZUL 2,",
    "marca": "ALAMAR",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FR2479-C",
    "desc": "TERMINAL INTELLI FORQUILHA ISOLADO AZUL",
    "marca": "CRIMPER",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDD 1,25-250",
    "desc": "TERMINAL JNG FEMEA FDD 1,25-250 22-16 VE",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SV1,125-4S",
    "desc": "TERMINAL JNG FORQUILHA SV 1,25-4 GARFO 1",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SV2-4L",
    "desc": "TERMINAL JNG FORQUILHA SV2-4L GARFO AZUL",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SV2-5",
    "desc": "TERMINAL JNG FORQUILHA SV2-5 GARFO AZUL",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SV5.5-5",
    "desc": "TERMINAL JNG FORQUILHA SV5.5-5 GARFO AM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "MDD2-250",
    "desc": "TERMINAL JNG MACHO MDD2-250 16-14 AZU",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PBDD2-250",
    "desc": "TERMINAL JNG MACHO/FEMEA PBDD2-250 AZUL",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV5.5-5",
    "desc": "TERMINAL JNG OLHAL AMARELO RV 5.5-5 137",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV5.5-6",
    "desc": "TERMINAL JNG OLHAL AMARELO RV 5.5-6 159",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV5.5-8",
    "desc": "TERMINAL JNG OLHAL AMARELO RV 5.5-8 15",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV 2-5 JNG",
    "desc": "TERMINAL JNG OLHAL AZUL RV 2-5",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV2-8",
    "desc": "TERMINAL JNG OLHAL AZUL RV 2-8",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV1.25-3",
    "desc": "TERMINAL JNG OLHAL VERMELHO RV 1.25-3",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV1.25-5S",
    "desc": "TERMINAL JNG OLHAL VERMELHO RV 1.25-5S",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV2-3 OLHAL VM",
    "desc": "TERMINAL JNG OLHAL VERMELHO RV 2-3",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RV2-5S",
    "desc": "TERMINAL JNG OLHAL VERMELHO RV 2-5S",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PTV5.5-13",
    "desc": "TERMINAL JNG PINO AMARELO PTV 5.5-13",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PTV2-12",
    "desc": "TERMINAL JNG PINO AZUL PTV 2-12",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E1008",
    "desc": "TERMINAL JNG TUBULAR E1008 1MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E1508",
    "desc": "TERMINAL JNG TUBULAR E1508 1,5MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E25-16",
    "desc": "TERMINAL JNG TUBULAR E25-16 25MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E2508",
    "desc": "TERMINAL JNG TUBULAR E2508 2,5MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E35-16",
    "desc": "TERMINAL JNG TUBULAR E35-16 35MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E4009",
    "desc": "TERMINAL JNG TUBULAR E4009 4MM",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E6012",
    "desc": "TERMINAL JNG TUBULAR E6012 6MM 11964",
    "marca": "JNG",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM OLHAL 10MM2",
    "desc": "TERMINAL OLHAL ( ARGOLA ) 10MM2 F-6",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM OLHAL 16MM2",
    "desc": "TERMINAL OLHAL ( ARGOLA ) 16MM2 F-6",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM OLHAL 25MM2",
    "desc": "TERMINAL OLHAL ( ARGOLA ) 25MM2 F-8",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM OLHAL 35MM2",
    "desc": "TERMINAL OLHAL ( ARGOLA ) 35MM2 F-8",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7021",
    "desc": "TERMINAL OLHAL LATAO 1,5MM 7021",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7022A",
    "desc": "TERMINAL OLHAL LATAO F 1/8 1,5MM 7022A",
    "marca": "OUTROS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "7009",
    "desc": "TERMINAL OLHAL LATAO FURO 3/16 7009",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "-1,000",
    "desc": "TERMINAL SB TUBULAR DUPLO TE4012 4,0MM",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TEDIN HT25",
    "desc": "TERMINAL SB CONECTOR GENER. PINO P/ DISJ",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDD2-250 SB AZ",
    "desc": "TERMINAL SB FEMEA FDD 2-250 16-14 AZUL (",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDD5,5-250",
    "desc": "TERMINAL SB FEMEA FDD 5,5-250 12-10 AM",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SIBRATEC 1.700,000",
    "desc": "TERMINAL SB FEMEA PRATA T- 187 4,8MM S/",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDFD 5,5-250",
    "desc": "TERMINAL SB FEMEA TOTAL ISOLADO AM FDFD",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDFD 2-250",
    "desc": "TERMINAL SB FEMEA TOTAL ISOLADO AZ FDFD",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "FDFD 2-250",
    "desc": "TERMINAL SB FEMEA TOTAL ISOLADO AZUL FDF",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GARFOSB 1,25-4",
    "desc": "TERMINAL SB FORQUILHA SVS 1,25-4 GARFO V",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SVS2-4 FORQ AZ",
    "desc": "TERMINAL SB FORQUILHA SVS 2-4 GARFO AZUL",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "SVS5,5-4 11979",
    "desc": "TERMINAL SB FORQUILHA SVS 5,5-4 GARFO AM",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RVS5,5-6 SB 119",
    "desc": "TERMINAL SB OLHAL AMARELO RV 5,5-6",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "RVS2-5 OLHAL 11",
    "desc": "TERMINAL SB OLHAL AZUL RVS 2-5",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DBV25-10 AM 140",
    "desc": "TERMINAL SB PINO CHATO DBV 25-15 AMAREL",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DBV35-20 PINOCH",
    "desc": "TERMINAL SB PINO CHATO DBV 35-20 VERMEL",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DBV50-20 PINOC",
    "desc": "TERMINAL SB PINO CHATO DBV 50-20 AZUL C",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "PTV2-12 SB AZUL",
    "desc": "TERMINAL SB PINO PTV 2-12 AZUL 2,5MM",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE1008 VM 11964",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE1008",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE1014",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE1014",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE1508 DUPLO 11",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE1508",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE2510",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE2510",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE4012 DUPLO",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE4012",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TE6014 0",
    "desc": "TERMINAL SB TUBULAR DUPLO (ILHOS) TE6014",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E1008",
    "desc": "TERMINAL SB TUBULAR E1008 1,00MM VERMELH",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "011955",
    "desc": "TERMINAL SB TUBULAR E1012 10MM MARRON",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E1508",
    "desc": "TERMINAL SB TUBULAR E1508 1,5MM PT",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "011956",
    "desc": "TERMINAL SB TUBULAR E1612 16MM VERDE",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E2508 2,50MM SB",
    "desc": "TERMINAL SB TUBULAR E2508 2,50MM AZUL 11",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "011957",
    "desc": "TERMINAL SB TUBULAR E2516 25MM MARRON",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E4012",
    "desc": "TERMINAL SB TUBULAR E4012 4MM CINZA",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "E6012",
    "desc": "TERMINAL SB TUBULAR E6012 6MM PRETO/VER",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET CU AL 35M",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET CU AL 50M",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET CU AL 70M",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET CU-AL 95",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET CU-AL 120",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM COMPRES BIME",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL 1",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET. CU-AL 18",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL 1",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "BIMET. CU-AL 24",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL 2",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TM COMPRES BIM",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL 2",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTA 25MM PINO B",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTA 35MM PINO B",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTA 50MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTLC 25MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTLC 35MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTLC 50MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTLC 70MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTLC 95MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES BIMET. CU-AL DT",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTLA 35MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES COBRE GTLA 35",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTLA 50MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES COBRE GTLA 50",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "GTLA 70MM PINO",
    "desc": "TERMINAL TUBULAR COMPRES COBRE GTLA 70",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "DTA 25MM PINO C",
    "desc": "TERMINAL TUBULAR PINO MACIÇO COBRE DTA-",
    "marca": "ALIEXPRESS",
    "uni": "UNI",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "140° 14602427",
    "desc": "TERMISTOR WEG 140°C PTC AZUL E BRANCO -",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "160° 14602428",
    "desc": "TERMISTOR WEG 160°C PTC AZUL E VERMELHO",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TERMO 1,5MM PT",
    "desc": "TERMOCONTRATIL 1,50 MM PRETO SBTC ESPAG",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 2,5MM PT",
    "desc": "TERMOCONTRATIL 2,5 MM PRETO SBTC ESPAG",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 4MM PT",
    "desc": "TERMOCONTRATIL 4,0 MM PRETO SBTC ESPAGU",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 4MM VERME",
    "desc": "TERMOCONTRATIL 4,0 MM VERMELHO SBTC ES",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 6MM PT",
    "desc": "TERMOCONTRATIL 6,0 MM PRETO SBTC ESPAG",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 6MM VERDE",
    "desc": "TERMOCONTRATIL 6,0 MM VERDE SBTC ESPAGU",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 6MM VERME",
    "desc": "TERMOCONTRATIL 6,0 MM VERMELHO SBTC ES",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMOCONTRATIL",
    "desc": "TERMOCONTRATIL 10,0 MM AMARELO SBTC ESPA",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 10MM AZUL",
    "desc": "TERMOCONTRATIL 10,0 MM AZUL SBTC ESPAGUE",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 10MM PT",
    "desc": "TERMOCONTRATIL 10,0 MM PRETO SBTC ESPAG",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 16MM PT",
    "desc": "TERMOCONTRATIL 16,0 MM PRETO SBTC ESPA",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 20MM PT",
    "desc": "TERMOCONTRATIL 20,0 MM PRETO SBTC ESPA",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMO 30MM PT",
    "desc": "TERMOCONTRATIL 30,0 MM PRETO SBTC ESPAG",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Cabos, Fios e Terminais"
  },
  {
    "ref": "TERMOSTATO 60 A",
    "desc": "TERMOSTATO FORNO 60° A 200 °C SEM BUCHA",
    "marca": "FTX",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "KTS-011 JNG",
    "desc": "TERMOSTATO JNG KTS-011 NA (CONTATO SECO",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KTS-011 SBTC",
    "desc": "TERMOSTATO SBTC KTS-011 NA (CONTATO SECO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TESOURA JARDN 8",
    "desc": "TESOURA JARDIM 8 PROF.THOMPS",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "062464",
    "desc": "TESOURA PODA PROFISSIONAL TRAMONTINA 783",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3085250000",
    "desc": "TESOURA USO GERAL 25 CM VONDER",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TESTE CAPACITOR",
    "desc": "TESTAR CAPACITOR ( MEDIR CAPACITANCIA )",
    "marca": "GERAL",
    "uni": "UNI",
    "cat": "Capacitores"
  },
  {
    "ref": "TNTSPRAY BRC BR",
    "desc": "TINTA SPRAY BRANCO BRILHANTE 400ML BAR",
    "marca": "TRAMONTINA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "TNTSPRAYPRETO B",
    "desc": "TINTA SPRAY PRETO BRILHANTE 400ML B",
    "marca": "TRAMONTINA",
    "uni": "UNI",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10002173 AZUL",
    "desc": "TINTA WEG GL AZUL RAL 5007 SRA 113 3,6L",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10002139 CINZA",
    "desc": "TINTA WEG GL CINZA 112 3,6LT",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10001537",
    "desc": "TINTA WEG GL VERDE RAL 6011 3,6LT SCHN",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "AZUL",
    "desc": "TINTA WEG SPRAY AZUL",
    "marca": "WEG QUIMICA PA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "CINZA",
    "desc": "TINTA WEG SPRAY CINZA",
    "marca": "WEG QUIMICA PA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "WEG QUIMICA PA -1,000",
    "desc": "TINTA WEG SPRAY PRETO",
    "marca": "WEG QUIMICA PA",
    "uni": "LA",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10002926",
    "desc": "TINTA WEG W-ESTER CVP 964 R VERMELHO O",
    "marca": "WEG QUIMICA PA",
    "uni": "LTR",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10002925",
    "desc": "TINTA WEG W-ESTER CVP 964 R VERMELHO OXI",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10001790 BOLA V",
    "desc": "TINTA WEG W-ESTER CVP 965 BOLA VERM OXI",
    "marca": "WEG QUIMICA PA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10002926 BOLA V",
    "desc": "TINTA WEG W-ESTER CVP 965 BOLA VERM OXI",
    "marca": "WEG QUIMICA PA",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "S/REF",
    "desc": "TIRANTE HASTE PARAFUSO MOTOR",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "KP100",
    "desc": "TIRESTOR KP 100 1200V 100 AMP SETA PI",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KP30",
    "desc": "TIRESTOR KP 30 1200V 30 AMP SETA PIN",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "KP50",
    "desc": "TIRESTOR KP 50 1200V 50 AMP SETA PIN",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "MGI-113 JNG",
    "desc": "TOMADA IND JNG MGI-113 2P+T 16A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-114 JNG",
    "desc": "TOMADA IND JNG MGI-114 3P+T 16A - 6H VER",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-123 JNG",
    "desc": "TOMADA IND JNG MGI-123 2P+T 32A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-124 JNG",
    "desc": "TOMADA IND JNG MGI-124 3P+T 32A - 6H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-124-9 JNG",
    "desc": "TOMADA IND JNG MGI-124-9H 3P+T 32A 9H",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "40079",
    "desc": "TOMADA IND LKM MGI-135 3P+T+N 63A - 6",
    "marca": "LUKMA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TMD SB MGI-124",
    "desc": "TOMADA IND SBTC MGI-124 3P+T 32A 9H",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-113 IP442P+",
    "desc": "TOMADA IND SBTC MGI-113 IP44 2P+T 16A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TOMADA MGI-114",
    "desc": "TOMADA IND SBTC MGI-114 IP44 3P+T 16A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-123 IP44 2",
    "desc": "TOMADA IND SBTC MGI-123 IP44 2P+T 32A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-123",
    "desc": "TOMADA IND SBTC MGI-123 2P+T 32A - 6H",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SIBRATEC 7,000",
    "desc": "TOMADA IND SBTC MGI-124-9H 3P+T 32A 9H",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TMDSB 63A 3P+T",
    "desc": "TOMADA IND SBTC MGI-134 IP44 3P+T 63A",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "MGI-223",
    "desc": "TOMADA IND SBTC MGI-223 2P+T 32A 6H",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TOMD324 32A3P+T",
    "desc": "TOMADA IND SBTC MGI-324 3P+T 32A - 6H E",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TOMADA LOUÇA 2X",
    "desc": "TOMADA LOUÇA 2 X 25A FEMEA 755",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TOMADA LOUÇA 2X",
    "desc": "TOMADA LOUÇA 2 X 30A FEMEA 755",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TOMADA LOUÇA 3X",
    "desc": "TOMADA LOUÇA 3 X 30A FEMEA 755",
    "marca": "GM DIV - GIOVA",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TBSEN2P+T EMBUT",
    "desc": "TOMADA SB P BRASILEIRO EMBUTIR PRETA 2P+",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "013989",
    "desc": "TOMADA SB TWDIN 2P + T 10A BRANCO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "013999",
    "desc": "TOMADA SB TWDIN 2P + T 10A VERMELHA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "013990",
    "desc": "TOMADA SB TWDIN 2P + T 20A BRANCO",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "014000",
    "desc": "TOMADA SB TWDIN 2P + T 20A VERMELHA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TORN ESFERA ACQ",
    "desc": "TORNEIRA ESFERA 1/2 X 3/4 ACQUATOP",
    "marca": "TAMBASA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TORNJRDM 1/2 BR",
    "desc": "TORNEIRA JARDIM ESFERA 1/2 BICO ADAPTAD",
    "marca": "TRAMONTINA",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "300VA E440A500V",
    "desc": "TRANSFORMADOR 300VA ENT 440-460-480-500V",
    "marca": "EIKON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "330VAE440-480S2",
    "desc": "TRANSFORMADOR 330VA ENT 440-480V SAI 24",
    "marca": "EIKON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "350VA E 220A480",
    "desc": "TRANSFORMADOR 350VA ENT 220-380-440-460-",
    "marca": "EIKON",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TRANSF1A 12VCA",
    "desc": "TRANSFORMADOR COMANDO 1A ENT. 110/220V",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7548 SB 1A 24V",
    "desc": "TRANSFORMADOR COMANDO SB 1A 24VA ENT.11",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "7549 SB 3A 24V",
    "desc": "TRANSFORMADOR COMANDO SB 3A 72VA ENT.1",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TC 150/5A DP",
    "desc": "TRANSFORMADOR CORRENTE DP-23 150/5A JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TC 100/5",
    "desc": "TRANSFORMADOR CORRENTE MES-30 100/5 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TC 150A",
    "desc": "TRANSFORMADOR CORRENTE MES-30 150/A JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TC 50/5",
    "desc": "TRANSFORMADOR CORRENTE MES-30 C/ TC50/5A",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TC400/5 SBTC",
    "desc": "TRANSFORMADOR CORRENTE TC 400/5 SBTC MS",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AVRV01550GR",
    "desc": "TRAVA ROLAMENTO ADESIVO AFRV015 - 50GR",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "1644015050",
    "desc": "TRAVA ROLAMENTO AFRV015 - 50 GR AZUL ADE",
    "marca": "VONDER / OSTEN",
    "uni": "UNI",
    "cat": "Rolamentos e Retentores"
  },
  {
    "ref": "132625 TRV ROSC",
    "desc": "TRAVA ROSCA CAR80 8040 TORQUE ALTO (",
    "marca": "BARTOFIL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TRV ROSCA USO 8",
    "desc": "TRAVA ROSCA CAR80 8040 TORQUE ALTO (",
    "marca": "BARTOFIL",
    "uni": "L",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ORBIFIX4 089134",
    "desc": "TRAVA ROSCA ORBIFIX4 10G ORBIQUIMICA",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TRL DIN 1MT 01",
    "desc": "TRILHO DIN PERFURADO SB 35 X 7,5 C/ 1 M",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VTO9004",
    "desc": "TRIZETA VTO 9004",
    "marca": "15",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VTO9006",
    "desc": "TRIZETA VTO 9006",
    "marca": "15",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBEXPN 4MM 10MT",
    "desc": "TUBO EXPANSIVEL 4MM C/10MT MALHA TRAN",
    "marca": "SIBRATEC",
    "uni": "PCT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBEXPN 6MM 10MT",
    "desc": "TUBO EXPANSIVEL 6MM C/10MT MALHA TRAN",
    "marca": "SIBRATEC",
    "uni": "PCT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBEXPN 8MM 10MT",
    "desc": "TUBO EXPANSIVEL 8MM C/10MT MALHA TRAN",
    "marca": "SIBRATEC",
    "uni": "MT",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBEXPNS 10MM PT",
    "desc": "TUBO EXPANSIVEL 10MM C/10MT MALHA TRA",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TBEXPN 12MM 10M",
    "desc": "TUBO EXPANSIVEL 12MM C/10MT MALHA TRAN",
    "marca": "SIBRATEC",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TB IRRG EDUTOR",
    "desc": "TUBO IRRIGAÇAO EDUTOR 1 ( 25MM )",
    "marca": "ALTRI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TB IRRG EDUT 1.",
    "desc": "TUBO IRRIGAÇAO EDUTOR 1.1/2 ( 40MM ) 4",
    "marca": "ALTRI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TB IRRG EDUT 1.",
    "desc": "TUBO IRRIGAÇAO EDUTOR 1.1/4 ( 32MM ) 4",
    "marca": "ALTRI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "TB IRRG EDUT 2",
    "desc": "TUBO IRRIGAÇAO EDUTOR 2 ( 50MM )",
    "marca": "ALTRI",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "UNIAOAQUEX28070",
    "desc": "UNIAO 50MM COLA SOLDAVEL SIBRAPE 2807",
    "marca": "SIBRAPE",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60550281P",
    "desc": "UNIAO DANCOR SOLDAVEL FEMEA / MACHO 40",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "9799",
    "desc": "UNIAO SODRAMAR ROSCA ( COMPLETO KIT )",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "50214",
    "desc": "VALVULA ANAUGER DESAERADORA ORIG 502",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "ANAUGER 27,000",
    "desc": "VALVULA JOIHA DESAREADOR ALIVIO",
    "marca": "GERAL",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "1/2\" 127V VALV",
    "desc": "VALVULA SOLENOIDE PLASTICA 1/2\" BSP 127V",
    "marca": "MERCADO LIVRE",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "3/4\"",
    "desc": "VALVULA SOLENOIDE PLASTICA 3/4\" BSP 127V",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VRSTOR14D241S14",
    "desc": "VARISTOR 14D241 / S14K150V SOFT START",
    "marca": "MERCADO LIVRE",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "047324",
    "desc": "VAZO JARDIM QUADRADO 54CM MODERNO CAFE",
    "marca": "TAMBASA",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "053019550",
    "desc": "VEDAÇÃO JACUZZI TAMPA DRENO POUP BANHEI",
    "marca": "JACUZZI",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VT12VLYTHIUM LY",
    "desc": "VENTILADOR AUTOMOTIVO 12 VOLTS LYTHIUM",
    "marca": "VETOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "56H",
    "desc": "VENTOINHA EBERLE SIM. 56 H F-11,8MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "56/63",
    "desc": "VENTOINHA EBERLE SIM. 56/63 CHANFRO F-1",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VENT EB. SIM. 6",
    "desc": "VENTOINHA EBERLE SIM. 63 2-8 P",
    "marca": "FERPA",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "63H",
    "desc": "VENTOINHA EBERLE SIM. 63 H F-11,8MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "EB71FP 171",
    "desc": "VENTOINHA EBERLE SIM. 71 FP F-09MM 1",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "EB71FG 170",
    "desc": "VENTOINHA EBERLE SIM. 71-FG F-15MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VENT EB 80 FG",
    "desc": "VENTOINHA EBERLE SIM. 80 FG F-20MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "EB80FP 173",
    "desc": "VENTOINHA EBERLE SIM. 80 FP F-11MM 1",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VENT EB 90 FG",
    "desc": "VENTOINHA EBERLE SIM. 90 FG F-25MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "90-FP",
    "desc": "VENTOINHA EBERLE SIM. 90 FP F-14MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "COPO48",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 48 F-18,",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "COPO48",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 48 F-21,",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "COPO56",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 56 F-21,",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "COPO56",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 56 F-24,",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "COPO63",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 63 CHANF",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VNTEBCP63CHNFRO",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 63 CHANF",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VNTEBCP63F20CHV",
    "desc": "VENTOINHA EBERLE SIM. MOD COPO 63 CHAVE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100-FG",
    "desc": "VENTOINHA EBERLE SIM. 100 FG F-28MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100-FP",
    "desc": "VENTOINHA EBERLE SIM. 100 FP F-16MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "112-FG",
    "desc": "VENTOINHA EBERLE SIM. 112-FG F-27MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VENT EB 112-FP",
    "desc": "VENTOINHA EBERLE SIM. 112-FP F-19MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "132 FG",
    "desc": "VENTOINHA EBERLE SIM. 132-FG F-38MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "132-FP",
    "desc": "VENTOINHA EBERLE SIM. 132-FP F-29MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FG160",
    "desc": "VENTOINHA EBERLE SIM. 160-FG 44MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FP160",
    "desc": "VENTOINHA EBERLE SIM. 160-FP 28MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "NEMA 48",
    "desc": "VENTOINHA EBERLE SIM. NEMA 48 F-18,5",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "NEMA 56",
    "desc": "VENTOINHA EBERLE SIM. NEMA 56 F-22",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-132",
    "desc": "VENTOINHA HERCULES NEMA 132 F-21,10",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-63",
    "desc": "VENTOINHA HERCULES NEMA 63 EIXO LISO",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "105007010 5000",
    "desc": "VENTOINHA HERCULES NEMA 42 LEC71 F.10",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "105007015 5000",
    "desc": "VENTOINHA HERCULES NEMA 42 COPO JETPUMP",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "500014911",
    "desc": "VENTOINHA HERCULES NEMA 42 / 80 FURO 14",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-42",
    "desc": "VENTOINHA HERCULES NEMA 42 F-18,2MM",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "105007031 458",
    "desc": "VENTOINHA HERCULES NEMA 42 F.12,6MM TNQ",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "105007008",
    "desc": "VENTOINHA HERCULES NEMA 48 F-18,5MM",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-48COPO",
    "desc": "VENTOINHA HERCULES NEMA 48 COPO JETPUMP",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "105007019 5000",
    "desc": "VENTOINHA HERCULES NEMA 48 F.18,2MM",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VHERC56BOMBA CE",
    "desc": "VENTOINHA HERCULES NEMA 56 F-23,5MM BOM",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-56",
    "desc": "VENTOINHA HERCULES NEMA 56 F-23,5MM CHA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-63",
    "desc": "VENTOINHA HERCULES NEMA 63 CHANFRADO",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-90",
    "desc": "VENTOINHA HERCULES NEMA 90 F-14MM CHANFR",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "105007071 2566",
    "desc": "VENTOINHA HERCULES NEMA TURBINA 56 F-23,",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "H-80",
    "desc": "VENTOINHA HERCULES SIM. MOD. 80",
    "marca": "HERCULES MOTOR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VENT HE SIM.N63",
    "desc": "VENTOINHA HERCULES SIM. NEMA 63 12,5MM",
    "marca": "FERPA",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K63",
    "desc": "VENTOINHA KOHLBACH SIM. 63 F-11MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K71",
    "desc": "VENTOINHA KOHLBACH SIM. 71 F-13MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K80",
    "desc": "VENTOINHA KOHLBACH SIM. 80 F-14MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K90",
    "desc": "VENTOINHA KOHLBACH SIM. 90 F-16MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100FG",
    "desc": "VENTOINHA KOHLBACH SIM. 100 FG F-23MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100FP",
    "desc": "VENTOINHA KOHLBACH SIM. 100 FP F-14MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "112FG",
    "desc": "VENTOINHA KOHLBACH SIM. 112 FG F-27MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "112FP",
    "desc": "VENTOINHA KOHLBACH SIM. 112 FP F-20MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "160FG",
    "desc": "VENTOINHA KOHLBACH SIM. 132 / 160 - FG",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "160FP",
    "desc": "VENTOINHA KOHLBACH SIM. 132 / 160 - FP",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "132 FP",
    "desc": "VENTOINHA KOHLBACH SIM. 132 FP F-19MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K-42/48",
    "desc": "VENTOINHA KOHLBACH SIM. 42/48 F-18,5MM",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "K-COPO48",
    "desc": "VENTOINHA KOHLBACH SIM. COPO 48",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "184/T",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 184/T (132)",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "184/T",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 184/T CHANF",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "184/T",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 184/T LISO",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "42T",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 42 TURBINA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48CENTRIFAGO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 CENTRIFA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48CHANFRADO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 CHANFRAD",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48CHANFRADO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 CHANFRAD",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48LISO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 LISO F-1",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48LISO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 LISO F-2",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "48TURBINA",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 48 TURBINA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "56T",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 56 TURBINA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "56BOMBABRANCA",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 56 B.BRC CE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "56CHANFRADO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 56 CHANFRAD",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "56LISO",
    "desc": "VENTOINHA KOHLBACH SIM. NEMA 56 LISO F-2",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "013455",
    "desc": "VENTOINHA SODRAMAR MOTOR 1,5 E 2,0 CV -",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "013453",
    "desc": "VENTOINHA SODRAMAR MOTOR 1/3 A 3/4 CV",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VNTWEGORG71CHVT",
    "desc": "VENTOINHA WEG ORIG 71 F12 CHAVETA PLA",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "WEG80 ORIGIN",
    "desc": "VENTOINHA WEG ORIG 80",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10017201",
    "desc": "VENTOINHA WEG ORIG 100 NEMA FURO 12MM C",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "WEG MOTORES",
    "desc": "VENTOINHA WEG ORIG 112 2P F-28MM CHAVET",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "ENSELLI -24,000",
    "desc": "VENTOINHA WEG ORIG 112 4P F-24MM CHAVET",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016916",
    "desc": "VENTOINHA WEG ORIG 132 2P C/ CHAVETA E",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "10016916",
    "desc": "VENTOINHA WEG ORIG 132 4P CHAVETA E TRA",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "10016917",
    "desc": "VENTOINHA WEG ORIG 160 2P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016919",
    "desc": "VENTOINHA WEG ORIG 180 2P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016920",
    "desc": "VENTOINHA WEG ORIG 180 4P 6P 8P 100169",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016921",
    "desc": "VENTOINHA WEG ORIG 200 2P",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016922",
    "desc": "VENTOINHA WEG ORIG 200 4P",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "E50",
    "desc": "VENTOINHA WEG ORIG E50 TRAP C/PINO ELAST",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10956190",
    "desc": "VENTOINHA WEG ORIG NEMA 42-W48 F.18,5MM",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "WEG MOTORES 3,000",
    "desc": "VENTOINHA WEG ORIG NEMA 48/56 COPO CHA",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11058825",
    "desc": "VENTOINHA WEG ORIG NEMA 56 90 4/2P F-14",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10821276 56WCHN",
    "desc": "VENTOINHA WEG ORIG NEMA 56 CHANFRO F-21",
    "marca": "FERPA",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016954",
    "desc": "VENTOINHA WEG ORIG NEMA 56 CHAVETA DUPLA",
    "marca": "WEG",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "10016933",
    "desc": "VENTOINHA WEG ORIG W21 250 2P F-65MM 10",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016936",
    "desc": "VENTOINHA WEG ORIG W21 280 4P F-75MM 10",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "10016934",
    "desc": "VENTOINHA WEG ORIG W21- 225 250 4P F-65",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "11482642 EIXO 6",
    "desc": "VENTOINHA WEG ORIG W22 225/250 4P PLUS 4",
    "marca": "WEG MOTORES",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11482643 EIXO 6",
    "desc": "VENTOINHA WEG ORIG W22 250-315 PLUS 4P",
    "marca": "WEG MOTORES",
    "uni": "UNI",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "11482640",
    "desc": "VENTOINHA WEG ORIG W22 315 2P F-65MM 11",
    "marca": "ENSELLI",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-63",
    "desc": "VENTOINHA WEG SIM. 63 F-9MM 17",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-71",
    "desc": "VENTOINHA WEG SIM. 71 F-12,5 MM",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-71",
    "desc": "VENTOINHA WEG SIM. 71 F-12MM NORMA",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-80",
    "desc": "VENTOINHA WEG SIM. 80 F-14MM",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-90 467",
    "desc": "VENTOINHA WEG SIM. 90 F-15MM 467",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-100",
    "desc": "VENTOINHA WEG SIM. 100 F-23MM",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-112 150",
    "desc": "VENTOINHA WEG SIM. 112 2P F-28MM CHAVE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-112",
    "desc": "VENTOINHA WEG SIM. 112 4P F-28MM CHAVE",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-132",
    "desc": "VENTOINHA WEG SIM. 132 2P F-30MM CHAVE",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-132",
    "desc": "VENTOINHA WEG SIM. 132 4P F-30MM CHAVE",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-160",
    "desc": "VENTOINHA WEG SIM. 160 2P F-44MM (SEM",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-160 420",
    "desc": "VENTOINHA WEG SIM. 160 4P F-44MM CHAVE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-180 442",
    "desc": "VENTOINHA WEG SIM. 180 4P F-50MM C",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-180",
    "desc": "VENTOINHA WEG SIM. 180 PULA-PULA F-3/4",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-180",
    "desc": "VENTOINHA WEG SIM. 180 PULA-PULA F-5/8 E",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W2002PNVCVT 421",
    "desc": "VENTOINHA WEG SIM. 200 2P MOD. NOVO C/ C",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-200",
    "desc": "VENTOINHA WEG SIM. 200 4P MODELO ANTIGO",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-200 459",
    "desc": "VENTOINHA WEG SIM. 200 4P MODELO NOVO C/",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "WE50TRAPP 448",
    "desc": "VENTOINHA WEG SIM. E50 TRAPP CEIFADORA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "EX61 WEG SIM",
    "desc": "VENTOINHA WEG SIM. EX-61 TRAPP",
    "marca": "FERPA",
    "uni": "UNI",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA -11,000",
    "desc": "VENTOINHA WEG SIM. MC 48 CEIFADOR F-18,5",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "449",
    "desc": "VENTOINHA WEG SIM. MC 48 CEIFADOR F-18,5",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA -6,000",
    "desc": "VENTOINHA WEG SIM. MC 48 CEIFADOR F-21,5",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "450",
    "desc": "VENTOINHA WEG SIM. MC 48 CEIFADOR F-21,5",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA 12,000",
    "desc": "VENTOINHA WEG SIM. MC 56 CEIFADOR F-21,",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "13 80,000",
    "desc": "VENTOINHA WEG SIM. MOTOSSERRAS F-28MM",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "13 5,000",
    "desc": "VENTOINHA WEG SIM. MOTOSSERRAS F-34MM",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "131",
    "desc": "VENTOINHA WEG SIM. NEMA 42 COPO CHANFRA",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA 82,000",
    "desc": "VENTOINHA WEG SIM. NEMA 42 CHANFRADO F-1",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "136",
    "desc": "VENTOINHA WEG SIM. NEMA 42 CHANFRADO PEQ",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "W-42",
    "desc": "VENTOINHA WEG SIM. NEMA 42 CHAVETA EIXO",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "NEMA42",
    "desc": "VENTOINHA WEG SIM. NEMA 42 CHAVETA PEQUE",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "W-48 406",
    "desc": "VENTOINHA WEG SIM. NEMA 48 CHAVETA P/CH",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "100V048",
    "desc": "VENTOINHA WEG SIM. NEMA 48 CHANFRADO F-1",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100V049",
    "desc": "VENTOINHA WEG SIM. NEMA 48 CHANFRADO F-2",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VTCPWEGN48COPOC",
    "desc": "VENTOINHA WEG SIM. NEMA 48/56 COPO CHA",
    "marca": "INJET",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "422",
    "desc": "VENTOINHA WEG SIM. NEMA 48/56 COPO CHA",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "13 -10,000",
    "desc": "VENTOINHA WEG SIM. NEMA 56 / 90 FURO 14",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "FERPA -6,000",
    "desc": "VENTOINHA WEG SIM. NEMA 56 CHANFRADO F-1",
    "marca": "13",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "100V056",
    "desc": "VENTOINHA WEG SIM. NEMA 56 CHANFRADO F-2",
    "marca": "14",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "VTWEG N56 F30CH",
    "desc": "VENTOINHA WEG SIM. NEMA 56 CHANFRADO F-3",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Carcaças, Tampas e Ventoinhas"
  },
  {
    "ref": "400",
    "desc": "VENTOINHA WEG SIM. NEMA 56 CHAVETA F-21",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "FERPA -259,000",
    "desc": "VENTOINHA WEG SIM. NEMA 56 CHAVETA F-30",
    "marca": "FERPA",
    "uni": "PC",
    "cat": "Rotores e Peças Internas"
  },
  {
    "ref": "FERPA 26,000",
    "desc": "VENTOSA ANAUGER ORIG 650 / 650 5G S/ BUC",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60728",
    "desc": "VENTOSA ANAUGER ORIG ECCO / 4\" H60 S/ BU",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60305",
    "desc": "VENTOSA ANAUGER ORIG S/ BUCHA 700 / 800",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60722",
    "desc": "VENTOSA ANAUGER ORIG. 6'' 4G S/BUCHA",
    "marca": "ANAUGER",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VENTOSA 3 900",
    "desc": "VENTOSA C/ BUCHA 3 900 JH",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "650",
    "desc": "VENTOSA C/ BUCHA 650 JH",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VENTOSA C/ BCH",
    "desc": "VENTOSA C/ BUCHA 900 ( PORCA ) JH",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "VENTOSA S/ BUCH",
    "desc": "VENTOSA S/ BUCHA 900 JH",
    "marca": "JOIHA E ANAU",
    "uni": "PC",
    "cat": "Selos e Vedações"
  },
  {
    "ref": "60551088",
    "desc": "VENTURI DANCOR BOMBA MOD. AAP",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "15842106 VRZ130",
    "desc": "VERNIZ WEG RESINA LACKTHERM 1303 5LTS",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "10979573 VRZ131",
    "desc": "VERNIZ WEG RESINA LACKTHERM 1314 / 40H",
    "marca": "WEG QUIMICA PA",
    "uni": "GL",
    "cat": "Ferramentas, Químicos e Fixação"
  },
  {
    "ref": "60550348",
    "desc": "VISOR DANCOR PRE FILTRO PF - 22",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "60550310P",
    "desc": "VISOR DANCOR PRE-FILTRO PF-17",
    "marca": "DANCOR",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "VOLTÍMETRO 48X4",
    "desc": "VOLTIMETRO ANALOGICO DIRETO 48 X 48 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CP-T72 500V",
    "desc": "VOLTIMETRO ANALOGICO DIRETO 72 X 72 JNG",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "72 600V SBTC",
    "desc": "VOLTIMETRO ANALOGICO DIRETO 72 X 72 SB S",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "96 600V SBTC",
    "desc": "VOLTIMETRO ANALOGICO DIRETO 96 X 96 SB S",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "CP-T96 500V",
    "desc": "VOLTIMETRO ANALOGICO DIRETO 96X96 JNG CP",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "52 500V JNG",
    "desc": "VOLTIMETRO ANALOGICO REDONDO JNG JPT 52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VOLT250V JPT-52",
    "desc": "VOLTIMETRO ANALOGICO REDONDO JNG JPT-52",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "52 600V SBTC",
    "desc": "VOLTIMETRO ANALOGICO REDONDO SBTC SF52 6",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "SF52-300V 124",
    "desc": "VOLTIMETRO ANALOGICO REDONDO SBTC SF52-3",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG1940-AX1",
    "desc": "VOLTIMETRO DIGITAL JNG 194U-AX1 1000",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "TX56D 010814",
    "desc": "VOLTIMETRO DIGITAL SIBRATEC CC TX-56D D",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VAD16-22D/S",
    "desc": "VOLTIMETRO DIGITAL VERDE 22MM JNG VAD16-",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AD22-22VS",
    "desc": "VOLTIMETRO DIGITAL VERDE 22MM SIBRATEC A",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VAD16-22D/S",
    "desc": "VOLTIMETRO DIGITAL VERMELHO 22MM JNG VAD",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "VAMP22MMJNG",
    "desc": "VOLTIMETRO E AMPERIMETRO JNG 22MM VER",
    "marca": "JNG",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "JNG 4,000",
    "desc": "VOLTIMETRO E AMPERIMETRO DIG SBTC CC TX",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AD16-22VAHZS",
    "desc": "VOLTIMETRO E AMPERIMETRO FREQUENCIMETRO",
    "marca": "ALIEXPRESS",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "AD22-22VAM-G",
    "desc": "VOLTIMETRO E AMPERIMETRO SIBRATEC 22MM",
    "marca": "SIBRATEC",
    "uni": "PC",
    "cat": "Elétrica e Automação"
  },
  {
    "ref": "008213",
    "desc": "VOLUTA SODRAMAR PLASTICA 114 P/ BOMBA (",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "008214",
    "desc": "VOLUTA SODRAMAR PLASTICA 120 P/ BOMBA (",
    "marca": "SODRAMAR",
    "uni": "PC",
    "cat": "Bombas e Motores"
  },
  {
    "ref": "SODRAMAR 3,000",
    "desc": "XEROX",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "OUTROS",
    "desc": "XEROX 2 LADOS / IDENTIDADE",
    "marca": "OUTROS",
    "uni": "PC",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "XP3FLEX 25ML",
    "desc": "XP3 FLEX 25ML ( TRATA 75 LITROS COMBU",
    "marca": "ECOFUEL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "XPPREMIUM 25ML",
    "desc": "XP3 PREMIUM DIESEL 25ML ( TRATA 100 L",
    "marca": "ECOFUEL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "XP3PREMIUM 1LT",
    "desc": "XP3 PREMIUM DIESEL 1LT ( TRATA 4000 LI",
    "marca": "ECOFUEL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  },
  {
    "ref": "XPPREMIUM 100ML",
    "desc": "XP3 PREMIUM DIESEL 100ML ( TRATA 400 LI",
    "marca": "ECOFUEL",
    "uni": "UNI",
    "cat": "Diversos e Acessórios"
  }
];
