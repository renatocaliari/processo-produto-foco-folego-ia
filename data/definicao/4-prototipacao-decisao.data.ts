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
          title: "mcp server para utilizar artefatos do figma em ferramentas com ia",
          items: [{ name: "framelink.ai", url: "https://www.framelink.ai/" }],
        },
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
]
