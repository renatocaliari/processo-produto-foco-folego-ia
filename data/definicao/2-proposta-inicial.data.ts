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
        {
          title: "ferramentas para apoiar criação de documentação",
          items: [
            {
              name: "templaio",
              url: "https://www.templaio.com/",
            },
            {
              name: "codeguide.dev",
              url: "https://www.codeguide.dev/",
            },
            {
              name: "scopesflow",
              url: "https://scopesflow.com/",
            },
            {
              name: "eraser.io",
              url: "https://eraser.io/",
            },
          ],
        }
      ],
    },
  },
  {
    id: 18.1,
    title: "refinar proposta",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "refinar proposta"
    },
  },
  {
    id: 18.2,
    title: "avaliar proposta de solução",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "avaliar proposta de solução",
              url: "https://calirenato82.substack.com/p/prompt-ia-avaliacao-da-proposta-de-solucao",
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
    title: "ui/ux - definição inicial",
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
    title: "ui/ux - refinar fluxos e wireframes",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "refinar fluxos e confirmar necessidade de wireframes",
      resources: [
        {
          title: "ferramentas ia para fluxos",
          items: [
            { name: "wireframe.cc", url: "https://wireframe.cc/" },
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
            { name: "excalidraw", url: "https://excalidraw.com/" },
            { name: "tldraw", url: "https://www.tldraw.com/" },
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
  {
    id: 20.8,
    title: "ui/ux - avaliar definição",
    type: "stage",
    responsibles: ["ia"],
    details: {
      comment: "avaliar a proposta de fluxos, affordances e dados",
      resources: [
        {
          title: "prompts",
          items: [
            { name: "avaliação de fluxos, affordances e dados", url: "https://calirenato82.substack.com/p/prompt-ia-avaliacao-da-definicao-fluxos-affordances" },
          ],
        },
        {
          title: "ferramentas ia para rodar o prompt",
          items: [
            { name: "gemini live (compartilhe a tela do wireframe ou protótipo com a gemini", url: "https://aistudio.google.com/live" },
            { name: "gemini chat (anexe o screenshot ou pdf do fluxo ou wireframe)", url: "https://gemini.google.com/" },
            { name: "chat gpt (anexe o screenshot ou pdf do fluxo ou wireframe)", url: "https://chatgpt.com/" },
            { name: "deepseek r1 (anexe o screenshot ou pdf do fluxo ou wireframe)", url: "https://chat.deepseek.com/" },
            { name: "grok think (anexe o screenshot ou pdf do fluxo ou wireframe)", url: "https://grok.com/" },
          ],
        },        
      ],
    },
  },
]
