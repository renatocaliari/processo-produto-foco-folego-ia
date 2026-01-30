// definicao: delimitar problema, apetite, entender existentes, gerar/selecionar ideia (stages 9-15)
export const delimitacaoIdeacaoStages = [
  {
    id: 9,
    title: "delimitar problema e apetite",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "definir o problema a ser resolvido com clareza e o apetite de tempo. a pergunta não é 'O que poderíamos construir?' mas 'O que está acontecendo de errado (ou que poderia ser melhor)?'. defina quantas semanas tem de apetite para investir tempo em uma solução. sem isso não conseguirá determinar o que fica fora e o que precisa ser simplificado. essa informação é crucial e diferente da ideia de estimar pontos ou tempo posteriormente - que cairia na falácia do planejamento e viés do otimismo. leia mais abaixo",
      resources: [
        {
          title: "recursos", 
          items: [
            {
              name: "restrição de tempo em vez de estimativa de tempo",
              url: "https://calirenato82.substack.com/i/160124085/restricao-de-tempo",
            },
            {
              name: "shape up - apetite de tempo",
              url: "https://basecamp-com.translate.goog/shapeup/1.2-chapter-03?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=en&_x_tr_pto=wapp",
            }
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
      comment: "ia avalia a delimitação do problema para ver se está em um nível de abstração suficiente e com informações suficientes",
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
    id: 14,
    title: "mapear potenciais soluções para o problema",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "agente de ia: principais critérios de sucesso",
              url: "https://calirenato82.substack.com/p/agente-ia-principais-criterios-de-sucesso",
            },
            {
              name: "gerar mapeamento de oportunidades e potenciais soluções priorizando por critérios evolutivos e abordando estratégias de 'Job-to-Be-Done Growth Strategy'",
              url: "https://calirenato82.substack.com/p/prompt-ia-mapeamento-de-oportunidades",
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
      resources: [
        {
          title: "ferramentas para validação de conceito",
          items: [
            {
              name: "reforge concept testing",
              url: "https://www.reforge.com/blog/concept-testing",
            },
          ],
        },
      ],
    },
  },
]
