"use client"

interface ResourcesSectionProps {
  emoji?: string
}

export function ResourcesSection({ emoji }: ResourcesSectionProps) {
  const resources = [
    {
      title: "workshop organizacional sobre o futuro do trabalho com inteligência artificial",
      url: "https://calirenato82.substack.com/p/workshop-organizacional-sobre-o-futuro",
      description: "menu de perguntas e uma estrutura de \"consultoria cética\" para quebrar certezas e gerar ações em grupo",
    },
    {
      title: "kick-off e workshop tático",
      url: "https://calirenato82.substack.com/p/kick-off-workshop-tatico",
      description: "um guia para aterrissar iniciativas para implementação",
    },
    {
      title: "além da \"força-tarefa\": cultivando ambientes para times mais adaptáveis e fluidos",
      url: "https://calirenato82.substack.com/p/alem-da-forca-tarefa",
      description: "a velocidade vista em projetos especiais não é uma condição ideal inatingível, mas um sintoma de um sistema com autonomia e foco",
    },
    {
      title: "o futuro do trabalho em produto: como a i.a. está transformando papéis e práticas",
      url: "https://calirenato82.substack.com/p/o-futuro-do-trabalho-em-produto",
      description: "perspectivas de mercado seguidas por minhas reflexões finais",
    },
    {
      title: "Produto Digital: Processo com Assistência de Inteligência Artificial",
      url: "https://calirenato82.substack.com/p/produto-digital-processo-assistencia-inteligencia-artificial",
      description:
        "Guia completo sobre como integrar IA no processo de desenvolvimento de produto digital, com foco em ferramentas e metodologias práticas.",
    },
    {
      title: "Processo de Produto: Foco & Fôlego",
      url: "https://calirenato82.substack.com/p/processo-de-produto-foco-and-folego",
      description:
        "Explicação detalhada sobre o equilíbrio entre foco (atividades direcionadas ao produto) e fôlego (atividades de sustentação) no processo de produto.",
    },
    {
      title: "Recursos Principais para Produto com IA",
      url: "https://calirenato82.substack.com/p/recursos-principais",
      description:
        "Compilação dos recursos essenciais para profissionais de produto que desejam incorporar IA em seus processos e ferramentas.",
    },
    {
      title: "Zero-To-Insight: Inovação Centrada no Público",
      url: "https://v0-zero-to-insight-jtbd.vercel.app/",
      description:
        "Descubra o que realmente importa para seu público e construa produtos, serviços e experiências que geram resultados reais.",
    },
    {
      title: "[e-book] A Arte da Experimentação: Da Ideia ao Produto",
      url: "https://calirenato82.substack.com/p/roteiro-pratico-para-validar-ideias",
      description:
        "Compilação dos recursos essenciais para profissionais de produto que desejam incorporar IA em seus processos e ferramentas.",
    },
    {
      title: "[e-book] Inovação baseada em Jobs To Be Done",
      url: "https://calirenato82.substack.com/p/e-book-jobs-to-be-done-em-portugues",
      description:
        "Processo passo a passo na utilização do framework de inovação Jobs To Be Done aplicado a negócios e produto.",
    },
    {
      title: "Definir papéis e mapear responsabilidades para trabalho em conjunto",
      url: "https://calirenato82.substack.com/p/definir-papeis-e-mapear-responsabilidades",
      description:
        "Aprenda a definir papéis flexíveis e mapeie responsabilidades para um trabalho conjunto adaptável.",
    },
    {
      title: "Os perigos da avaliação de desempenho nas organizações",
      url: "https://calirenato82.substack.com/p/os-perigos-da-avaliacao-de-desempenho",
      description:
        "Análise crítica sobre os riscos e armadilhas das avaliações de desempenho tradicionais, incluindo o Nine-Box, com alternativas mais eficazes.",
    },
    {
      title: "O perigo ao usar metas em organizações",
      url: "https://calirenato82.substack.com/p/o-perigo-de-metas-em-organizacoes",
      description:
        "Reflexão sobre como metas podem gerar comportamentos indesejados e alternativas para criar alinhamento sem os efeitos colaterais negativos.",
    },
    {
      title: "[e-book] Contornos - Tecnologia Social para organizações",
      url: "https://calirenato82.substack.com/p/e-book-contornos-tecnologia-social",
      description:
        "Sistema com regras básicas para dar mais agilidade, distribuir decisões com autonomia e responsabilidade, e fomentar experimentações.",
    },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        {emoji && (
          <span role="img" aria-label="Recursos" className="text-3xl">
            {emoji}
          </span>
        )}
        Recursos para Consulta
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {resources.map((resource, index) => (
          <div
            key={index}
            id={`resources-card-${index}`}
            className="flex items-center"
          >
            <div
              className="border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-4 flex flex-col h-full w-full"
            >
              <h3 className="font-bold text-lg mb-2 border-b-2 border-black pb-2">{resource.title}</h3>
              <p className="text-sm mb-4 flex-grow">{resource.description}</p>
              <div className="mt-auto">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`resources-access-${index}`}
                  data-name={`resources-access-${index}`}
                  className="inline-block bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors w-full text-center"
                >
                  Acessar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
