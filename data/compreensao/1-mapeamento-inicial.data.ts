// compreensao: mapeamento inicial
export const mapeamentoInicialData = {
  id: 1,
  title: "mapeamento inicial",
  type: "stage",
  responsibles: ["ia"],
  details: {
    comment: "mapeamento inicial do espaço do problema",
    resources: [
      {
        title: "prompts",
        items: [
          {
            name: "mapear o espaço do problema com jobs to be done",
            url: "https://calirenato82.substack.com/i/141662256/prompts-ia-para-problem-space",
          },
        ],
      },
      {
        title: "serviços",
        items: [
          {
            name: "zero-to-insight",
            url: "https://v0-zero-to-insight-jtbd.vercel.app/",
            description: "serviço híbrido - especialista humano + ia - para mapeamento de jobs to be done",
          },
        ],
      },
      {
        title: "recursos",
        items: [
          {
            name: "e-book gratuito: inovação baseada em jobs to be done",
            url: "https://calirenato82.substack.com/p/e-book-jobs-to-be-done-em-portugues",
          },
        ],
      },
      {
        title: "ferramentas ia generalistas",
        items: [
          { name: "gemini", url: "https://gemini.google.com/" },
          { name: "grok", url: "https://grok.x.ai/" },
          { name: "deepseek", url: "https://www.deepseek.com/" },
          { name: "claude", url: "https://claude.ai/" },
          { name: "chatgpt", url: "https://chatgpt.com/" },
        ],
      },
      {
        title: "ferramentas para saber o que o público já pesquisa sobre o assunto",
        items: [
          { name: "answerthepublic", url: "https://answerthepublic.com/" },
          { name: "backlinko - people also ask", url: "https://backlinko.com/" },
          { name: "ubersuggest", url: "https://neilpatel.com/ubersuggest/" },
        ],
      },
      {
        title: "ferramentas para encontrar insights no reddit",
        items: [
          { name: "gummysearch", url: "https://gummysearch.com/" },
          { name: "search pullpush", url: "https://search-new.pullpush.io/" },
        ],
      },
    ],
  },
}
