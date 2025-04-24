export function AutomationHighlight() {
  return (
    <div className="mb-8 p-4 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
      <div>
        <h3 className="text-sm md:text-base font-bold flex items-center gap-2 mb-3">
          <span role="img" aria-label="dicas" className="text-xl">
            ✨
          </span>
          Você pode experimentar o processo por partes:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
            <span role="img" aria-label="separação" className="text-base mt-0.5 flex-shrink-0">
              ↔️
            </span>
            <span>Treinando a separação entre delimitação de problema (framing) e definição de solução (shaping)</span>
          </div>

          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
            <span role="img" aria-label="tempo" className="text-base mt-0.5 flex-shrink-0">
              ⏱️
            </span>
            <span>Definindo e respeitando apetite de tempo em vez de estimativas</span>
          </div>

          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
            <span role="img" aria-label="ciclos" className="text-base mt-0.5 flex-shrink-0">
              🔄
            </span>
            <span>Separando ciclos de foco e fôlego</span>
          </div>

          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md md:col-span-2 lg:col-span-1">
            <span role="img" aria-label="automação" className="text-base mt-0.5 flex-shrink-0">
              🤖
            </span>
            <span>Automatizando etapas com IA dentro de suas próprias ferramentas</span>
          </div>

          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md md:col-span-2">
            <span role="img" aria-label="separação" className="text-base mt-0.5 flex-shrink-0">
              ⚙️
            </span>
            <span>
              Treinando trilhas em paralelo com focos em períodos diferentes: compreensão (contínua), definição
              (apostas para próximo ciclo) e implementação (apostas definidas no ciclo passado)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
