from pathlib import Path

MEMORIA_PATH = Path(__file__).resolve().parents[1] / "Memória.md"


def carregar_memoria() -> str:
    """Carrega o arquivo Memória como base para criação de planilhas."""
    if not MEMORIA_PATH.exists():
        raise FileNotFoundError(
            f"Arquivo Memória não encontrado em {MEMORIA_PATH}."
        )
    return MEMORIA_PATH.read_text(encoding="utf-8")
