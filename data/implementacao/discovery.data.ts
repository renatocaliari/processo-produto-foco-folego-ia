// implementacao: track discovery (stages 39-42)
export const discoveryTrackData = {
  title: "discovery",
  description: "etapas para descobrir e validar a solução",
  stages: [
    {
      id: 39,
      title: "projeto de discovery",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "o que fazer para operacionalizar antes de produtizar",
        resources: [
          {
            title: "prompts",
            items: [
              {
                name: "discovery: operacionalizar e produtizar",
                url: "https://calirenato82.substack.com/p/prompt-ia-discovery-operacionalizar-produtizar",
              },
            ],
          },
        ],
      },
    },
    {
      id: 40,
      title: "avaliação e refinamento de escopos",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "avaliar e refinar escopos",
      },
    },
    {
      id: 41,
      title: "tipo de discovery",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment:
          "avaliar oferta, comprometimento e operacionalização antes de produtizar. consulte tópicos no e-book abaixo.",
        resources: [
          {
            title: "e-book gratuito - A Arte Da Experimentação: Da Ideia ao Produto",
            url: "https://calirenato82.substack.com/p/roteiro-pratico-para-validar-ideias",
          },
        ],
      },
    },
    {
      id: 42,
      title: "evoluir protótipo ou novos protótipos",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
      details: {
        comment: "gerar protótipo com ia",
        resources: [
          {
            title: "ferramentas",
            items: [
              { name: "v0", url: "https://v0.dev/" },
              { name: "tempo.new", url: "https://www.tempo.new/" },
              { name: "lovable", url: "https://lovable.dev/" },
              { name: "firebase.studio", url: "https://firebase.studio/" },
              { name: "+70 outras ferramentas", url: "https://vibecodingdirectory.com/" },
            ],
          },
        ],
      },
    },
  ],
}
