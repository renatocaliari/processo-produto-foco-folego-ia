// definicao: proposta inicial, estrutura, escopos, métricas, ui/ux (stages 16-20.5)
export const propostaInicialStages = [
  {
    id: 16,
    title: "definir proposta inicial de solução",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "elaborar um esboço sumarizado da proposta inicial",
    },
  },
  {
    id: 17,
    title: "estruturação de proposta",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "definição suficiente para implementação de produto",
              url: "https://calirenato82.substack.com/p/prompt-ia-prd-elegance",
            },
          ],
        },
      ],
    },
  },
  {
    id: 18,
    title: "mapear escopos por entrega de valor",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "mapeamento e sequenciamento de escopos verticais",
              url: "https://calirenato82.substack.com/p/prompt-ia-mapeamento-e-sequenciamento-escopos-verticais-entrega-valor",
            },
          ],
        },
      ],
    },
  },
  {
    id: 19,
    title: "mapear métricas para acompanhar",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "métricas de produto",
              url: "https://calirenato82.substack.com/p/prompt-ia-metricas-produto",
            },
          ],
        },
      ],
    },
  },
  {
    id: 20,
    title: "definição inicial de ui/ux",
    type: "stage",
    responsibles: ["ia"],
    details: {
      comment: "fluxos com mermaid, telas, affordances",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "definição de fluxos e affordances",
              url: "https://calirenato82.substack.com/p/prompt-ia-definicao-de-fluxos-affordances",
            },
          ],
        },
        {
          title: "ferramenta para visualizar mermaid",
          items: [{ name: "mermaid mind", url: "https://mermaid-mind.vercel.app/" }],
        },
      ],
    },
  },
  {
    id: 20.5,
    title: "refinar definição de ui/ux",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "refinar os fluxos e wireframes iniciais com maior precisão",
      resources: [
        {
          title: "ferramentas ia para fluxoes",
          items: [
            { name: "figjam", url: "https://www.figma.com/templates/flow-chart-template/" },
            { name: "whimsical flowcharts", url: "https://whimsical.com/flowcharts" },
            { name: "eraser.io", url: "https://www.eraser.io/" },
            { name: "flowchart.fun", url: "https://flowchart.fun/" },
            { name: "mermaid mind", url: "https://mermaid-mind.vercel.app/" },
            { name: "miro", url: "https://miro.com/aq/paid-search/pt/fluxograma-gratis" },
          ],
        },
        {
          title: "ferramentas ia para wireframes (evite qualquer detalhe como cor, texto, imagem, etc)",
          items: [
            { name: "wireframe.cc", url: "https://wireframe.cc/" },
            { name: "whimsical wireframes", url: "https://whimsical.com/wireframes" },
            { name: "figma", url: "https://www.figma.com/templates/wireframe-kits/" },
            { name: "flowchart.fun", url: "https://flowchart.fun/" },
            { name: "uxpilot", url: "https://uxpilot.ai/" },
            { name: "miro", url: "https://miro.com/pt/wireframe/" },
          ],
        },
      ],
    },
  },
]
