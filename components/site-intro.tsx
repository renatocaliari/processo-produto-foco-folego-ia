"use client"

export function SiteIntro() {
  // Função para rolar até a seção correspondente
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-4xl mx-auto mb-12 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div
          className="flex flex-col items-center text-center p-4 bg-amber-50 rounded-lg border border-black cursor-pointer hover:bg-amber-100 transition-colors"
          onClick={() => scrollToSection("processo-foco")}
          id="site-intro-processo-foco"
          data-name="site-intro-processo-foco"
        >
          <span role="img" aria-label="Processo" className="text-2xl mb-2">
            🔄
          </span>
          <h3 className="font-bold mb-1">Processo Adaptativo</h3>
          <p className="text-sm">Um framework de produto que equilibra foco e fôlego, potencializado por IA</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg border border-black cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() => scrollToSection("papeis-evolutivos")}
          id="site-intro-papeis-evolutivos"
          data-name="site-intro-papeis-evolutivos"
        >
          <span role="img" aria-label="Papéis" className="text-2xl mb-2">
            👥
          </span>
          <h3 className="font-bold mb-1">Papéis Evolutivos</h3>
          <p className="text-sm">Trilhas de progressão flexíveis para PM, Designer e Developer</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg border border-black cursor-pointer hover:bg-green-100 transition-colors"
          onClick={() => scrollToSection("niveis-impacto")}
          id="site-intro-niveis-impacto"
          data-name="site-intro-niveis-impacto"
        >
          <span role="img" aria-label="Crescimento" className="text-2xl mb-2">
            📈
          </span>
          <h3 className="font-bold mb-1">Estrutura de progressão</h3>
          <p className="text-sm">Sistema de avaliação e remuneração baseado em impacto e evidências concretas</p>
        </div>

        <div
          className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg border border-black cursor-pointer hover:bg-purple-100 transition-colors"
          onClick={() => scrollToSection("recursos-consulta")}
          id="site-intro-recursos-consulta"
          data-name="site-intro-recursos-consulta"
        >
          <span role="img" aria-label="Recursos" className="text-2xl mb-2">
            📚
          </span>
          <h3 className="font-bold mb-1">Recursos</h3>
          <p className="text-sm">Materiais e ferramentas para aprofundar conhecimentos e implementar práticas</p>
        </div>
      </div>
    </div>
  )
}
