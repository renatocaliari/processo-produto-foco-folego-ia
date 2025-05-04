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
      id: 41,
      title: "tipo de discovery",
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment:
          "avaliar oferta, comprometimento e operacionalização antes de produtizar. consulte tópicos no e-book abaixo.",
        resources: [
          {
            title: "recursos",
            items: [{ name: "[e-book] A Arte Da Experimentação: Da Ideia ao Produto", url: "https://calirenato82.substack.com/p/roteiro-pratico-para-validar-ideias" }],
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
            title: "mcp server para utilizar componentes ui de alta qualidade",
            items: [{ name: "21st.dev/magic", url: "https://21st.dev/magic" }],
          },
          {
            title: "ferramentas de ia — prototipação rápida",
            items: [
              { name: "v0", url: "https://v0.dev/" },
              { name: "tempo.new", url: "https://www.tempo.new/" },
              { name: "lovable", url: "https://lovable.dev/" },
              { name: "firebase.studio", url: "https://firebase.studio/" },
              { name: "+70 outras ferramentas", url: "https://vibecodingdirectory.com/" },
            ],
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
              { name: "promptlayer" (prompt + nós de automação)", url: "https://www.promptlayer.com/" },
              { name: "workflowai (estilo chat e prompt)", url: "https://workflowai.com/" },
              { name: "rowboatlabs (estilo chat)", url: "https://rowboatlabs.com/" },
              { name: "wordware.ai (estilo doc)", url: "https://app.wordware.ai/lp" },
              { name: "dify.ai (nós de automação)", url: "https://dify.ai" },
              { name: "n8n (nós de automação)", url: "https://n8n.io/ " },
            ],
          },          
          {
            title: "ferramentas de ia — prototipação rápida - open source",
            items: [
              { name: "dyad.sh", url: "https://www.dyad.sh/" },
              { name: "bolt.diy", url: "https://bolt.diy/" },
            ],
          },
          {
            title: "ferramentas no-code com ia para prototipação rápida",
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
            title: "ferramentas no-code sem ia para prototipação rápida",
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
  ],
}
