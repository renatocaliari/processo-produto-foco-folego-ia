// definicao: prototipar, gerar bdd, decisão discovery/delivery (stages 25-27)
export const prototipacaoDecisaoStages = [
  {
    id: 25,
    title: "prototipar ou alta fidelidade",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "utilizar ia para apoiar, seja qual for a decisão",
      resources: [
        {
          title: "ferramentas ia — alta fidelidade",
          items: [
            { name: "motiff", url: "https://motiff.com/" },
            { name: "uxpilot (há plugin pro figma)", url: "https://uxpilot.ai/" },
            { name: "penpot", url: "https://penpot.app/" },
            { name: "fraydesign (com figma)", url: "https://fray.design/" },
            { name: "figma", url: "https://figma.com/" },
          ],
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
          title: "ferramentas de ia — prototipação rápida - open source",
          items: [
            { name: "dyad.sh", url: "https://www.dyad.sh/" },
            { name: "bolt.diy", url: "https://bolt.diy/" },
          ],
        },
        {
          title: "mcp server para utilizar artefatos do figma em ferramentas com ia",
          items: [{ name: "framelink.ai", url: "https://www.framelink.ai/" }],
        },
        {
          title: "mcp server para utilizar componentes ui de alta qualidade",
          items: [{ name: "21st.dev/magic", url: "https://21st.dev/magic" }],
        },
      ],
    },
  },
  {
    id: 26,
    title: "gerar bdd para testes",
    type: "stage",
    responsibles: ["ia"],
    details: {
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "gerar cenários bdd gherkin",
              url: "https://calirenato82.substack.com/p/prompt-ia-gerar-cenarios-bdd-gherkin",
            },
          ],
        },
      ],
    },
  },
  {
    id: 27,
    title: "decisão: discovery ou delivery",
    type: "stage",
    responsibles: ["humano"],
    details: {
      comment:
        "avalie o que poderia ser feito para operacionalizar antes de produtizar, e decida se vale a pena fazer discovery ou ir direto pro delivery",
      resources: [
        {
          title: "prompts",
          items: [
            {
              name: "discovery: operacionalizar",
              url: "https://calirenato82.substack.com/p/prompt-ia-discovery-operacionalizar-produtizar",
            },
          ],
        },
      ],
    },
  },
]
