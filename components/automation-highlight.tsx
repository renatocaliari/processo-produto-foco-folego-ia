export function AutomationHighlight() {
  return (
    <div className="mb-8 p-4 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-3">
        <h3 className="text-sm md:text-base font-bold flex items-center gap-2 mb-2">
          <span role="img" aria-label="dicas" className="text-xl">
            ✨
          </span>
          Você pode experimentar o processo por partes:
        </h3>

        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span role="img" aria-label="separação" className="text-base mt-0.5 flex-shrink-0">
              ↔️
            </span>
            <span>Treinando a separação entre delimitação de problema (framing) e definição de solução (shaping)</span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="separação" className="text-base mt-0.5 flex-shrink-0">
              ⚙️
            </span>
            <span>
              Treinando trilhas em paralelo mas com focos em períodos diferentes: compreensão (contínua), definição
              (apostas para próximo ciclo) e implementação (apostas definidas no ciclo passado)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="tempo" className="text-base mt-0.5 flex-shrink-0">
              ⏱️
            </span>
            <span>Definindo e respeitando apetite de tempo em vez de estimativas</span>
          </li>

          <li className="flex items-start gap-2">
            <span role="img" aria-label="ciclos" className="text-base mt-0.5 flex-shrink-0">
              🔄
            </span>
            <span>Separando ciclos de foco e fôlego</span>
          </li>

          <li className="flex items-start gap-2">
            <span role="img" aria-label="automação" className="text-base mt-0.5 flex-shrink-0">
              🤖
            </span>
            <span>Automatizando etapas com IA dentro de suas próprias ferramentas</span>
          </li>
        </ul>
      </div>

      <div className="text-center mt-3">
        <button
          className="text-xs md:text-sm bg-black text-white py-1 px-3 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center gap-1"
          data-tally-open="3jgb49"
          data-tally-emoji-text="🤖"
          data-tally-emoji-animation="wave"
        >
          <span role="img" aria-label="Contato" className="text-xs md:text-sm">
            👋
          </span>
          Precisa de ajuda? Entre em contato
        </button>
      </div>
    </div>
  )
}
