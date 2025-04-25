// compreensao: análise dos dados da solução em produção
export const analiseDadosProducaoData = {
  id: 6,
  title: "análise dos dados da solução em produção",
  type: "stage",
  responsibles: ["humano com assistência de ia"],
  details: {
    comment:
      "descobrir informações e insights de produtos em produção. observar indicadores de comportamento e mapas de calor.",
    resources: [
      {
        title: "prompts",
        items: [
          { name: "descoberta de métricas para acompanhamento", url: "https://calirenato82.substack.com/p/prompt-ia-metricas-produto" },
        ],
      },
      {
        title: "ferramentas de métricas com apoio de ia",
        items: [
          { name: "posthog", url: "https://posthog.com/" },
          { name: "mixpanel", url: "https://mixpanel.com/home/" },
          { name: "amplitude", url: "https://amplitude.com/" },
        ],
      },
      {
        title: "ferramentas de ia para explorar banco de dados de estado em linguagem humana",
        items: [
          { name: "juliusai", url: "https://julius.ai/" },
          { name: "wrenai", url: "https://getwren.ai/oss" },
          { name: "supaboardai", url: "https://supaboard.ai/" },
          { name: "thoughtspot", url: "https://www.thoughtspot.com/" },
          { name: "briefer", url: "https://briefer.cloud" },
          { name: "observablehq", url: "https://observablehq.com/" },
          { name: "dataline", url: "https://dataline.app/" },
          { name: "chat2db.ai", url: "https://chat2db.ai/pt-pt" },
        ],
      },
      {
        title: "ferramentas para avaliação visual (mapa de calor) e captura de informações in-site (enquetes)",
        items: [
          { name: "posthog", url: "https://posthog.com/" },
          { name: "hotjar", url: "https://www.hotjar.com/pt-br/" },
          { name: "microsoft clarity", url: "https://clarity.microsoft.com/" },
        ],
      },
    ],
  },
}
