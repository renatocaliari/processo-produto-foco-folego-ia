// definicao: prototipar, gerar bdd, decisão discovery/delivery (stages 25-27)
export const prototipacaoDecisaoStages = [
  {
    id: 25,
    title: "prototipar ou alta fidelidade",
    type: "stage",
    responsibles: ["humano com assistência de ia"],
    details: {
      comment: "utilizar ia para apoiar",
      resources: [
        {
          title: "ferramentas ia — prototipação via agente",
          items: [
            { name: "v0 mcp - criar protótipos via agente", url: "https://github.com/m2rads/v0-mcp" },
          ],
        },                
        {
          title: "ferramentas ia — alta fidelidade",
          items: [
            { name: "figma", url: "https://figma.com/" },
            { name: "fraydesign (com figma)", url: "https://fray.design/" },
            { name: "magicpatterns", url: "https://www.magicpatterns.com/" },
            { name: "motiff", url: "https://motiff.com/" },
            { name: "penpot", url: "https://penpot.app/" },
            { name: "stitch google (exporta pra figma)", url: "https://stitch.withgoogle.com/" },
            { name: "super design (free e open source)", url: "https://www.superdesign.dev/" },
            { name: "uxpilot (há plugin pro figma)", url: "https://uxpilot.ai/" },
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
            { name: "+70 outras ferramentas", url: "https://vibecodingdirectory.com/" },
            { name: "bolt.diy (open source)", url: "https://bolt.diy/" },
            { name: "dyad.sh (open source)", url: "https://www.dyad.sh/" },
            { name: "firebase.studio", url: "https://firebase.studio/" },
            { name: "Figma Make + Site", url: "https://www.figma.com/make/" },
            { name: "lovable", url: "https://lovable.dev/" },
            { name: "open lovable (open source)", url: "https://github.com/firecrawl/open-lovable" },
            { name: "super design (free e open source)", url: "https://www.superdesign.dev/" },
            { name: "tempo.new", url: "https://www.tempo.new/" },
            { name: "v0", url: "https://v0.dev/" },
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
            { "name": "minimax", "url": "https://agent.minimax.io/" },
            { "name": "scout new", "url": "https://scout.new/" },
            { "name": "kortix suna", "url": "https://www.suna.so/" },
            { "name": "skywork", "url": "https://skywork.ai/" },
            { "name": "operator.browserbase", "url": "https://operator.browserbase.com/" },
            { "name": "browser use", "url": "https://browser-use.com/" },
            { "name": "dobrowser", "url": "https://www.dobrowser.io/" },
            { "name": "hyperbrowser", "url": "https://www.hyperbrowser.ai/" },
            { "name": "simular", "url": "https://www.simular.ai/" },            
            { "name": "skyvern", "url": "https://skyvern.com/" },
            { "name": "owl", "url": "https://github.com/camel-ai/owl" },
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
