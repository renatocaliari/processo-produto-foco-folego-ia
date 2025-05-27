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
            title: "ferramentas ia para entender melhor o código - via documentação, mcp server ou outras formas",
            items: [
              { name: "code2tutorial", url: "https://code2tutorial.com/" },
              { name: "DeepWiki Open (versão open-source)", url: "https://github.com/AsyncFuncAI/deepwiki-open" },
              { name: "probe ai", url: "https://probeai.dev/" },
              { name: "gitmcp (transforma um repositório em um mcp server pra consulta)", url: "https://gitmcp.io/" },
              { name: "context7 (carregar docs de libs para llm)", url: "https://context7.com/" },
              { name: "DeepWiki", url: "http://deepwiki.com/" },
              { name: "CodeAlive", url: "https://www.codealive.ai/" },
              {
                name: "serena (análise semântica para qualquer agente ia ou integração claude desktop)",
                url: "https://github.com/oraios/serena",
              },
              { name: "CodeGraph", url: "https://github.com/ChrisRoyse/CodeGraph" },
              { name: "readme-ai", url: "https://github.com/eli64s/readme-ai" },
              { name: "quill", url: "https://github.com/mainnebula/quill" },
              { name: "code2prompt", url: "https://code2prompt.dev/" },
              { name: "web2md", url: "https://web2md.answer.ai/" }, 
              { name: "repomix", url: "https://repomix.com/" },
              { name: "llmstxt", url: "https://www.llmstxt.new/" },
              { name: "gitingest", url: "https://gitingest.com/" },
              { name: "GitDiagram", url: "https://gitdiagram.com/" },
            ],
          },         
          {
            title: "ferramentas ia para gerar código — extensões open-source para código dentro de ide",
            items: [
              { name: "roocode", url: "https://roocode.com/" },
              { name: "cline", url: "https://cline.bot/" },
              { name: "augment code", url: "https://www.augmentcode.com/" },
            ],
          },
          {
            "title": "swe-agents - agentes de software engineer",
            "items": [
              { name: "jules", url: "https://jules.google.com/" },
              { name: "codex", url: "https://openai.com/codex/" },
              { "name": "all hands (open source)", "url": "https://github.com/All-Hands-AI/OpenHands" },
              { "name": "swe agent (open source)", "url": "https://swe-agent.com/" },
              { "name": "devin", "url": "https://devin.ai/" }
            ]
          },
          {
            title: "ferramentas ia para gerar código — pagas/freemium para código",
            items: [
              { name: "bolt", url: "https://bolt.new/" },
              { name: "replit", url: "https://replit.com/" },
              { name: "cursor", url: "https://www.cursor.com/" },
              { name: "windsurf", url: "https://codeium.com/windsurf" },
            ],
          },
          {
            title: "ferramentas ia para gerar código — web editor/ide open-source",
            items: [
              { name: "dyad.sh", url: "https://dyad.sh" },
              { name: "bolt.diy", url: "https://bolt.diy" },
            ],
          },
          {
            "title": "ferramentas ia execução de cenários bdd",
            "items": [
              { "name": "hercules", "url": "https://github.com/test-zeus-ai/testzeus-hercules/" },
              { "name": "skyvern", "url": "https://skyvern.com/" },
              { "name": "genesis", "url": "https://autify.com/genesis" },
              { "name": "shortest", "url": "https://shortest.com/" },
              { "name": "rag-web-browser", "url": "https://apify.com/apify/rag-web-browser" },
            ]
          },
          {
            title: "ferramentas de automação",
            items: [
              { name: "lutra.ai (vibe automation; com ia)", url: "https://lutra.ai/" },
              { name: "activepieces (open-source; com ia)", url: "https://www.activepieces.com/" },
              { name: "n8n (fair code; com ia)", url: "https://n8n.io/" },
              { name: "lindy.ai (com ia)", url: "https://www.lindy.ai/" },
              { name: "zapier (com ia)", url: "https://zapier.com/" },
              { name: "make", url: "https://www.make.com/" },
              { name: "gumloop", url: "https://www.gumloop.com/" },
              { name: "magicloops (vibe automation)", url: "https://magicloops.dev/pt" },
            ],
          },
          {
            title: "ferramentas para criar agentes de ia sem código",
            items: [
              { name: "latitude.so (estilo prompt)", url: "https://latitude.so/" },
              { name: "promptlayer (prompt + nós de automação)" , url: "https://www.promptlayer.com/" },
              { name: "workflowai (estilo chat e prompt)", url: "https://workflowai.com/" },
              { name: "rowboatlabs (estilo chat)", url: "https://rowboatlabs.com/" },
              { name: "wordware.ai (estilo doc)", url: "https://app.wordware.ai/lp" },
              { name: "dify.ai (nós de automação)", url: "https://dify.ai" },
              { name: "n8n (nós de automação)", url: "https://n8n.io/ " },
              { name: "lamatic.ai (nós de automação)", url: "https://lamatic.ai// " },
            ],
          },          
          {
            title: "frameworks para criar agentes de ia com código",
            items: [
              { name: "inngest agent kit", url: "https://agentkit.inngest.com/overview" },
              { name: "cloudflare agent kit", url: "https://github.com/cloudflare/agents-starter" },
              { name: "google agent kit", url: "https://google.github.io/adk-docs/" },
              { name: "agno", url: "https://agno.com/" },
              { name: "smolagents", url: "https://github.com/huggingface/smolagents" },
              { name: "pocketflow", url: "https://the-pocket.github.io/PocketFlow/" },
              { name: "motia", url: "https://github.com/MotiaDev/motia" },
            ],
          },
          {
            title: "banco de dados, memória ou RAG-as-a-service para agentes ia",
            items: [
              { name: "mem0.ai", url: "https://mem0.ai/" },
              { name: "zep", url: "https://www.getzep.com/" },
              { name: "graphlit", url: "https://www.graphlit.com/" },
              { name: "letta", url: "https://www.letta.com/" },
              { name: "cognee", url: "https://www.cognee.ai/" },
              { name: "supermemory", url: "https://supermemory.ai/" },
              { name: "airweave", url: "https://airweave.ai/" },
              { name: "ragie", url: "https://www.ragie.ai/" },
              { name: "nuclia", url: "https://nuclia.com/rag-as-a-service/" },
              {
                name: "graphiti (memória em grafo para agentes ia)",
                url: "https://github.com/getzep/graphiti/blob/main/mcp_server/README.md",
              },
              { name: "memgraph", url: "https://memgraph.com/" },
              { name: "weaviate", url: "https://weaviate.io/" },
              { name: "helix-db", url: "https://www.helix-db.com/" },
              { name: "trychroma", url: "https://www.trychroma.com/" },
              { name: "kuzu", url: "https://kuzudb.com/" },
              { name: "qdrant", url: "https://qdrant.tech/" },    
              { name: "milvus", url: "https://milvus.io/" },    
              
            ],
          },   
          {
            title: "ferramentas ia para conectar a outros serviços e apps",
            items: [
              { name: "activepieces mcp server", url: "https://www.activepieces.com/mcp" },
              { name: "airweave", url: "https://airweave.ai/" },
              { name: "graphlit", url: "https://www.graphlit.com/" },
              { name: "composio", url: "https://composio.dev/" },
            ],
          },    
          {
            title: "ferramentas ia para avaliar e evoluir resultados de prompts do produto",
            items: [
              { name: "latitude.so", url: "https://latitude.so/" },
              { name: "align eval", url: "https://aligneval.com/" },
              { name: "workflowai", url: "https://github.com/WorkflowAI/workflowai" },
              { name: "opik", url: "https://github.com/comet-ml/opik" },
              { name: "phoenix", url: "https://github.com/Arize-ai/phoenix" },
              { name: "agenta", url: "https://github.com/agenta-ai/agenta" },
              { name: "prompt layer", url: "https://github.com/MagnivOrg/prompt-layer-library" },
              { name: "langtrace", url: "https://github.com/Scale3-Labs/langtrace" },
              { name: "openlit", url: "https://github.com/openlit/openlit" },
            ],
          },          
          {
            title: "ferramentas no-code com ia",
            items: [
              { name: "bubble", "url": "https://bubble.io/" },
              { name: "webstudio", url: "https://weweb.io/" },
              { name: "weweb.io", url: "https://lovable.dev/" },
              { name: "webflow", url: "http://webflow.com/" },
              { name: "plasmic", url: "https://plasmic.app/" },
              { name: "builder", url: "https://www.builder.io/" },
            ],
          },
          {
            title: "ferramentas no-code sem ia",
            "items": [
              { name: "dittofi", "url": "https://www.dittofi.com/" },
              { name: "fuzzen.io", "url": "https://fuzen.io/" },
              { name: "momen", "url": "https://momen.app/" },
              { name: "wappler.io", "url": "https://wappler.io/" },
              { name: "toddle.dev", "url": "https://toddle.dev/" },
              { name: "fluxscape", "url": "https://fluxscape.io/" }
            ]
          },
        ],
      },
    },
    {
      id: 31,
      title: "pull request",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment:
          "pull request no repositório",
      },
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
      title: "rodar testes automatizados gerais",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
      details: {
        comment:
          "rodar testes automatizados: unitário e-ou integração",
      },
    },
    {
      id: 34,
      title: "homologar em ambiente de testes",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment:
          "avaliar se a implementação está ok",
      },
    },
    {
      id: 35,
      title: "rodar bdd automatizado",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "caso tenha gerado cenários BDD, realizar a execução",
        resources: [
          {
            "title": "ferramentas ia execução de cenários bdd",
            "items": [
              { "name": "hercules", "url": "https://github.com/test-zeus-ai/testzeus-hercules/" },
              { "name": "skyvern", "url": "https://skyvern.com/" },
              { "name": "genesis", "url": "https://autify.com/genesis" },
              { "name": "shortest", "url": "https://shortest.com/" },
              { "name": "rag-web-browser", "url": "https://apify.com/apify/rag-web-browser" },
            ]
          },

        ]
      },
    },
    {
      id: 36,
      title: "deploy",
      type: "stage",
      responsibles: ["ia"],
      details: {
        comment:
          "automação: realizar deploy em produção",
      },
    },
    {
      id: 37,
      title: "homologação em ambiente de produção",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment:
          "avaliar se a implementação está ok",
      },
    },
    {
      id: 38,
      title: "publicar changelog",
      type: "stage",
      responsibles: ["humano com assistência de ia"],
      details: {
        comment: "pode ter um agente de ia para ler changelogs do github e sumarizar uma release. ou usar ferramentas para gerenciar changelog.",
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
