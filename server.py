#!/usr/bin/env python3
"""
Servidor Opcional Local para o Catálogo MF Máquinas.
Se você abrir os arquivos direto ou hospedar no GitHub Pages / Netlify com Firebase,
não precisa deste servidor. Mas se quiser rodar localmente na sua máquina/rede e
salvar tudo automaticamente em `estado_admin.json`, basta executar:
  python3 server.py
E acessar http://localhost:8000/index.html ou http://localhost:8000/admin.html
"""
import http.server
import json
import os
import socketserver

PORT = 8000
STATE_FILE = "estado_admin.json"


class CatalogHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/api/state"):
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            if os.path.exists(STATE_FILE):
                with open(STATE_FILE, "r", encoding="utf-8") as f:
                    self.wfile.write(f.read().encode("utf-8"))
            else:
                self.wfile.write(b"{}")
            return
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith("/api/state"):
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8")
            try:
                data = json.loads(body)
                with open(STATE_FILE, "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(b'{"ok": true}')
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(str(e).encode("utf-8"))
            return
        self.send_response(404)
        self.end_headers()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), CatalogHandler) as httpd:
        print(f"Servidor MF Máquinas rodando em:")
        print(f" -> Catálogo: http://localhost:{PORT}/index.html")
        print(f" -> Admin:    http://localhost:{PORT}/admin.html")
        httpd.serve_forever()
