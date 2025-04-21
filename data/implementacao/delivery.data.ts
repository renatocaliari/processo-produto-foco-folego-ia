// implementacao: track delivery (stages 29-38)
export const deliveryTrackData = {
  title: "delivery",
  description: "etapas para entregar a solução em produção",
  stages: [
    {
      id: 29,
      title: "avaliação e refinamento de escopos",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "avaliar e refinar escopos",
      },
    },
    {
      id: 30,
      title: "desenvolvimento com integração contínua",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
      details: {
        resources: [
          {
            title: "ferramentas ia — extensões open-source para código dentro de ide",
            items: [
              { name: "roocode", url: "https://roocode.com/" },
              { name: "cline", url: "https://cline.bot/" },
              { name: "augment code", url: "https://www.augmentcode.com/" },
            ],
          },
          {
            title: "ferramentas ia — pagas/freemium para código",
            items: [
              { name: "devin", url: "https://devin.ai/" },
              { name: "bolt", url: "https://bolt.new/" },
              { name: "replit", url: "https://replit.com/" },
              { name: "cursor", url: "https://www.cursor.com/" },
              { name: "windsurf", url: "https://codeium.com/windsurf" },
            ],
          },
          {
            title: "ferramentas ia — web editor/ide open-source",
            items: [
              { name: "dyad.sh", url: "https://dyad.sh" },
              { name: "bolt.diy", url: "https://bolt.diy" },
            ],
          },
          {
            title: "ferramentas para executar testes e validar cenários",
            items: [
              { name: "hercules", url: "https://github.com/test-zeus-ai/testzeus-hercules/" },
              { name: "skyvern", url: "https://www.skyvern.com/" },
              { name: "genesis", url: "https://autify.com/genesis" },
              { name: "shortest", url: "https://shortest.com/" },
            ],
          },
          {
            title: "ferramentas ia — formatar base de código para llm",
            items: [
              { name: "code2prompt", url: "https://code2prompt.dev/" },
              { name: "repomix", url: "https://repomix.com/" },
              { name: "llmstxt", url: "https://www.llmstxt.new/" },
              { name: "gitingest", url: "https://gitingest.com/" },
            ],
          },
          {
            title: "ferramentas ia — suporte (mcp servers e mais)",
            items: [
              { name: "context7 (carregar docs de libs para llm)", url: "https://context7.com/" },
              {
                name: "graphiti (memória em grafo para agentes ia)",
                url: "https://github.com/gifflet/graphiti-mcp-server",
              },
              { name: "mcp server qdrant (busca vetorial)", url: "https://github.com/qdrant/mcp-server-qdrant" },
              {
                name: "serena (análise semântica para qualquer agent ia ou integração claude desktop)",
                url: "https://github.com/oraios/serena",
              },
            ],
          },
        ],
      },
    },
    {
      id: 31,
      title: "pull request",
      type: "stage",
      responsibles: ["humano"],
    },
    {
      id: 32,
      title: "code review e sugestões",
      type: "stage",
      responsibles: ["ia"],
      details: {
        comment:
          "utilizar ia para realizar code review. criar um prompt customizado para utilizar nas ferramentas abaixo, informando princípios de codificação usado no produto atual e qualquer contexto importante",
        resources: [
          {
            title: "ferramentas",
            items: [
              { name: "gemini code assist", url: "https://github.com/marketplace/gemini-code-assist" },
              { name: "code rabbit", url: "https://www.coderabbit.ai/" },
              {
                name: "github copilot",
                url: "https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review",
              },
            ],
          },
        ],
      },
    },
    {
      id: 33,
      title: "testes automatizados gerais",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
    },
    {
      id: 34,
      title: "homologação em ambiente de testes",
      type: "stage",
      responsibles: ["humano"],
    },
    {
      id: 35,
      title: "rodar bdd automatizado",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "caso tenha gerado cenários",
      },
    },
    {
      id: 36,
      title: "deploy",
      type: "stage",
      responsibles: ["humano"],
    },
    {
      id: 37,
      title: "homologação em ambiente de produção",
      type: "stage",
      responsibles: ["humano"],
    },
    {
      id: 38,
      title: "publicar changelog",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
      details: {
        comment: "ia pode ler changelogs do github e sumarizar uma release",
        resources: [
          {
            title: "ferramentas",
            items: [
              { name: "ducalis.io", url: "https://ducalis.io/" },
              { name: "featurebase.app", url: "https://featurebase.app/" },
            ],
          },
        ],
      },
    },
  ],
}
