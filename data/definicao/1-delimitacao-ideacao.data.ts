// definicao: delimitar problema, apetite, entender existentes, gerar/selecionar ideia (stages 9-15)
export const delimitacaoIdeacaoStages = [
  {
    id: 9,
    title: "delimitar problema",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "definir o problema a ser resolvido com clareza",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "agente de ia: principais critérios de sucesso",
              url: "https://calirenato82.substack.com/p/agente-ia-principais-criterios-de-sucesso",
            },
          ],
        },
      ],
    },
  },
  {
    id: 10,
    title: "avaliar delimitação do problema",
    type: "stage",
    responsibles: ["ia"],
    details: {
      comment: "ia avalia a delimitação do problema para ver se está em um nível de abstração suficiente",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "avaliação de delimitação de problema",
              url: "https://calirenato82.substack.com/p/prompt-ia-avaliacao-delimitacao-problema",
            },
          ],
        },
      ],
    },
  },
  {
    id: 11,
    title: "definir apetite de tempo",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "definir período para investir tempo em uma solução",
      resources: [
        {
          title: "recursos",
          items: [
            {
              name: "saiba mais",
              url: "https://calirenato82.substack.com/i/160124085/restricao-de-tempo",
            },
          ],
        },
      ],
    },
  },
  {
    id: 12,
    title: "identificar produtos atuais para integração",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "consultar líder técnico para saber links dos repositórios do produtos no github",
    },
  },
  {
    id: 13,
    title: "entender produtos próprios atuais",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "ler readme atualizado do repositório github",
      resources: [
        {
          title: "ferramentas",
          items: [
            { name: "readme-ai", url: "https://github.com/eli64s/readme-ai" },
            { name: "quill", url: "https://github.com/mainnebula/quill" },
            { name: "code2prompt", url: "https://code2prompt.dev/" },
          ],
        },
      ],
    },
  },
  {
    id: 14,
    title: "gerar ideias para resolver problema",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "gerar ideias de soluções",
              url: "https://calirenato82.substack.com/p/prompt-ia-gerar-ideias-solucoes",
            },
            {
              name: "priorizar soluções com base em 9 elementos",
              url: "https://calirenato82.substack.com/p/prompt-ia-gerar-ideias-solucoes",
            },
          ],
        },
      ],
    },
  },
  {
    id: 15,
    title: "selecionar ideia",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment: "escolher ideia mais promissora para o apetite",
    },
  },
]
