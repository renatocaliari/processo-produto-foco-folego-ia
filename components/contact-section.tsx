"use client"

export function ContactSection() {
  return (
    <div className="my-8 py-6 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <span role="img" aria-label="Automação" className="text-3xl">
            🤖
          </span>
          Deseja automatizar etapas com IA em sua empresa ou otimizar seu processo de produto?
        </h2>

        <button
          className="bg-black text-white font-bold py-2 px-6 rounded-md hover:bg-gray-800 transition-colors text-base"
          data-tally-open="3jgb49"
          data-tally-emoji-text="🤖"
          data-tally-emoji-animation="wave"
        >
          Entrar em contato
        </button>
      </div>
    </div>
  )
}
