// compreensao: mapeamento inicial
export const mapeamentoInicialData = {
  id: 1,
  title: "mapeamento inicial",
  type: "stage",
  responsibles: ["humano com assistência de ia"],
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
        title: "recursos",
        items: [
          {
            name: "serviço zero-to-insight (especialista humano + ia)",
            url: "https://v0-zero-to-insight-jtbd.vercel.app/",
          },
          {
            name: "[e-book gratuito] inovação baseada em jobs to be done",
            url: "https://calirenato82.substack.com/p/e-book-jobs-to-be-done-em-portugues",
          },
        ],
      },
      {
        title: "ferramentas ia generalistas",
        items: [
          { name: "chatgpt", url: "https://chatgpt.com/" },
          { name: "claude", url: "https://claude.ai/" },
          { name: "deepseek", url: "https://www.deepseek.com/" },
          { name: "gemini", url: "https://gemini.google.com/" },
          { name: "grok", url: "https://grok.x.ai/" },
          { name: "mistral", url: "https://chat.mistral.ai/chat" },
          { name: "qwen", url: "https://chat.qwen.ai/" },
          { name: "z.ai", url: "https://chat.z.ai/" },
        ],
      },
      {
        title: "ferramentas para saber o que o público já pesquisa sobre o assunto",
        items: [
          { name: "answerthepublic", url: "https://answerthepublic.com/" },
          { name: "google trends", url: "https://trends.google.com.br/trends/" },
          { name: "glimpse", url: "https://meetglimpse.com/"},
          { name: "globe.engineer", url: "https://globe.engineer/" },
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
