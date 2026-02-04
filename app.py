from html import escape
from http.server import BaseHTTPRequestHandler, HTTPServer

from planilhas.ia_planilha import IACriadoraPlanilha


def obter_dados_planilha():
    ia = IACriadoraPlanilha()
    resultado = ia.criar_planilha()
    return {
        "cabecalhos": resultado.cabecalhos,
        "observacoes": resultado.observacoes,
        "memoria": resultado.memoria_consultada,
    }


def renderizar_html(dados: dict) -> str:
    linhas = "\n".join(
        f"<tr><td>{indice}</td><td>{escape(cabecalho)}</td></tr>"
        for indice, cabecalho in enumerate(dados["cabecalhos"], start=1)
    )
    memoria = escape(dados["memoria"]).replace("\n", "<br>")
    return f"""<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Planilhas com Memória</title>
    <style>
      body {{
        font-family: "Segoe UI", Arial, sans-serif;
        margin: 2rem;
        color: #1a1a1a;
      }}
      h1 {{
        margin-bottom: 0.5rem;
      }}
      .badge {{
        display: inline-block;
        padding: 0.2rem 0.6rem;
        background: #eef2ff;
        border-radius: 999px;
        font-size: 0.85rem;
      }}
      section {{
        margin-top: 1.5rem;
      }}
      pre {{
        background: #f6f8fa;
        padding: 1rem;
        border-radius: 8px;
        white-space: pre-wrap;
      }}
      table {{
        width: 100%;
        border-collapse: collapse;
        margin-top: 0.75rem;
      }}
      th,
      td {{
        border: 1px solid #d0d7de;
        padding: 0.6rem;
        text-align: left;
      }}
      th {{
        background: #f6f8fa;
      }}
    </style>
  </head>
  <body>
    <h1>Planilha Gerada a partir da Memória</h1>
    <p class="badge">Memória consultada automaticamente</p>

    <section>
      <h2>Colunas sugeridas</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome da coluna</th>
          </tr>
        </thead>
        <tbody>
          {linhas}
        </tbody>
      </table>
    </section>

    <section>
      <h2>Observações</h2>
      <p>{escape(dados["observacoes"])}</p>
    </section>

    <section>
      <h2>Conteúdo da Memória</h2>
      <pre>{memoria}</pre>
    </section>
  </body>
</html>
"""


class PlanilhaHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/":
            self.send_error(404)
            return
        dados = obter_dados_planilha()
        resposta = renderizar_html(dados).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(resposta)))
        self.end_headers()
        self.wfile.write(resposta)


def executar_servidor(porta: int = 8000) -> None:
    servidor = HTTPServer(("0.0.0.0", porta), PlanilhaHandler)
    print(f"Servidor iniciado em http://localhost:{porta}")
    servidor.serve_forever()


if __name__ == "__main__":
    executar_servidor()
