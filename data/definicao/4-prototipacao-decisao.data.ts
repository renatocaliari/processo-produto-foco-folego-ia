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
    "id": 25.5,
    "title": "avaliação rápida da versão simplificada",
    "type": "stage",
    "responsibles": ["humano com assistência de ia"],
    "details": {
      "comment": "a execução ou opcionalidade dessa etapa depende do contexto: complexidade da solução, velocidade e custo desejados para obter feedback inicial, e a tolerância a riscos. combina abordagens humanas e com assistência de ia.",
      "resources": [
        {
          "title": "ferramentas ia de navegação autônoma",
          "items": [
            { "name": "operator.browserbase", "url": "https://operator.browserbase.com/" }, 
            { "name": "scout new", "url": "https://scout.new/" }, 
            { "name": "browser use", "url": "https://browser-use.com/" },
            { "name": "dobrowser", "url": "https://www.dobrowser.io/" },
            { "name": "hyperbrowser", "url": "https://www.hyperbrowser.ai/" },
            { "name": "simular", "url": "https://www.simular.ai/" },            
            { "name": "skyvern", "url": "https://skyvern.com/" },
            { "name": "owl", "url": "https://github.com/camel-ai/owl" },
            { "name": "kortix suna", "url": "https://www.suna.so/" },            
            { "name": "open manus", "url": "https://github.com/FoundationAgents/OpenManus" },
            { "name": "automate", "url": "https://github.com/yuruotong1/autoMate" },            
            { "name": "manus", "url": "https://manus.im/" },
            { "name": "openai operator", "url": "https://openai.com/index/introducing-operator/" },
            { "name": "claude computer", "url": "https://docs.anthropic.com/en/docs/agents-and-tools/computer-use" },
          ]
        },
        {
          "title": "ferramentas ia para avaliação rápida",
          "items": [
            { "name": "gemini live (avaliação ao vivo por vídeo)", "url": "https://aistudio.google.com/live" },
            { "name": "gemini (avaliação via imagem", "url": "https://gemini.google.com/" },
            { "name": "claude (avaliação via imagem)", "url": "https://claude.ai/" },
            { "name": "chatgpt (avaliação via imagem)", "url": "https://chat.openai.com/" },
            { "name": "grok (avaliação via imagem)", "url": "https://grok.x.ai/" },
            { "name": "deepseek (avaliação via imagem)", "url": "https://chat.deepseek.com/" },
          ]
        },
        {
          "title": "metodologias e ferramentas de feedback humano",
          "items": [
            { "name": "braintrust da pixar (metodologia)", "url": "https://medium.com/boost/braintrust-da-pixar-sess%C3%B5es-de-feedback-mais-enriquecedoras-e-seguras-7e8a6e49fa3e" },
            { "name": "avaliação com especialista em ux (método)", "url": "na" },
            { "name": "teste de usabilidade minimalista - guerrilha (método)", "url": "https://www.nngroup.com/articles/guerrilla-usability-testing/" },
            { "name": "usertesting (ferramenta para encontrar participantes)", "url": "https://www.usertesting.com/" },
          ],
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
