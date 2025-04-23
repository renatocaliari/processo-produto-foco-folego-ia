export function AutomationHighlight() {
  return (
    <div className="mb-8 p-3 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-2">
        <p className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span role="img" aria-label="dicas" className="text-xl md:text-2xl">
            ✨
          </span>
          <span>
            Você pode experimentar o processo por partes: treinando a separação entre delimitação de problema (framing) e definição de solucão (shaping), definindo e respeitando apetite de tempo em vez de estimativas, separando ciclos de foco e fôlego, 🤖 automatizando etapas com IA dentro de suas próprias ferramentas e muito mais.
          </span>
        </p>
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
