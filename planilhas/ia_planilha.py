from dataclasses import dataclass

from planilhas.memoria import carregar_memoria


@dataclass
class ResultadoPlanilha:
    cabecalhos: list[str]
    observacoes: str
    memoria_consultada: str


class IACriadoraPlanilha:
    """IA responsável por criar planilhas sempre consultando o arquivo Memória."""

    def criar_planilha(self) -> ResultadoPlanilha:
        memoria = carregar_memoria()
        cabecalhos = self._extrair_cabecalhos(memoria)
        observacoes = (
            "Planilha gerada seguindo as diretrizes registradas em Memória."
        )
        return ResultadoPlanilha(
            cabecalhos=cabecalhos,
            observacoes=observacoes,
            memoria_consultada=memoria,
        )

    def _extrair_cabecalhos(self, memoria: str) -> list[str]:
        linhas = [linha.strip() for linha in memoria.splitlines()]
        cabecalhos: list[str] = []
        for linha in linhas:
            if not linha:
                continue
            partes = linha.split(".", 1)
            if len(partes) != 2:
                continue
            indice, conteudo = partes
            if indice.isdigit():
                cabecalhos.append(conteudo.strip())
        return cabecalhos or ["Data", "Responsável", "Descrição"]
