// definicao: riscos técnicos, refinar proposta, mapear escopos técnicos, escolher propostas (stages 21-24)
export const riscosRefinamentoStages = [
  {
    id: 21,
    title: "mapear riscos técnicos de desenvolvimento",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "avaliação de riscos",
              url: "https://calirenato82.substack.com/p/prompt-ia-avaliacao-riscos-tecnicos-desenvolvimento",
            },
          ],
        },
      ],
    },
  },
  {
    id: 22,
    title: "refinar proposta final e avaliação de riscos",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment:
        "consultar líder técnico e product designer para avaliar a proposta e refinar uma proposta concreta o suficiente para guiar a implementação, abstrata o suficiente para dar autonomia ao time de implementação",
      resources: [
        {
          title: "ferramentas de ia para apoiar avaliação técnica",
          items: [
            { name: "augment code", url: "https://www.augmentcode.com/" },
            { name: "all hands (open source)", url: "https://github.com/All-Hands-AI/OpenHands" },
            { name: "swe agent (open source)", url: "https://swe-agent.com/" },
            { name: "agentless", url: "https://github.com/OpenAutoCoder/Agentless" },
            { name: "devin", url: "https://app.devin.ai/" },
            { name: "roocode (open source)", url: "https://roocode.com/" },
            { name: "cline (open source)", url: "https://cline.bot/" },
          ],
        },
      ],
    },
  },
  {
    id: 22.8,
    title: "decisão: discovery ou delivery",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment:
        "com base nas evidências sobre entrega de valor, proposta da solução e riscos técnicos, avalie se vale a pena operacionalizar e validar a ideia antes de produtizar. decida se vale a pena fazer discovery ou ir para o delivery.",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "explore opções para operacionalizar e decidir se fará discovery ou delivery",
              url: "https://calirenato82.substack.com/p/prompt-ia-discovery-operacionalizar-produtizar",
            },
          ],
        },
      ],
    },
  },   
  {
    id: 23,
    title: "mapear e sequenciar escopos técnicos",
    type: "stage",
    responsibles: ["ia"],
    details: {
      comment: "[se proposta de delivery] o refinamento do mapeamento gerado aqui será realizado no período de implementação.",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "mapeamento e sequenciamento de escopos para desenvolvimento técnico",
              url: "https://calirenato82.substack.com/p/prompt-ia-mapeamento-sequenciamento-escopos-desenvolvimento-tecnico",
            },
          ],
        },
      ],
    },
  },
  {
    id: 24,
    title: "escolher propostas para o próximo período",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment:
        "escolher propostas que mais se alinhem com a estratégia. utilize o prompt de apoio para priorizar propostas.",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "priorizar propostas com base em critérios evolutivos",
              url: "https://calirenato82.substack.com/p/prompt-ia-priorizar-propostas-solucao-criterios-evolutivos",
            },
          ],
        },
      ],
    },
  },
]
