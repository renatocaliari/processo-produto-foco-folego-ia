// implementacao: track discovery (stages 39-42)
export const discoveryTrackData = {
  title: "discovery",
  description: "etapas para descobrir e validar a solução",
  stages: [
    {
      id: 39, // Este ID será mantido para a seção renomeada
      title: "operacionalizar antes de produtizar", // Nome antigo: "planejar e executar discovery"
      type: "stage",
      responsibles: ["humano"],
      details: {
        comment: "o que fazer para operacionalizar antes de produtizar?",
        resources: [
          {
            title: "recursos",
            items: [
              { name: "[e-book] A Arte Da Experimentação: Da Ideia ao Produto", url: "https://calirenato82.substack.com/p/roteiro-pratico-para-validar-ideias" },
              { name: "capítulo Descobrir o processo: você consegue de fato resolver o problema e satisfazer essas pessoas?", url: "https://calirenato82.substack.com/i/141677388/descobrir-o-processo-voce-consegue-de-fato-resolver-o-problema-e-satisfazer-essas-pessoas" }
            ],
          },
          {
            title: "prompts",
            items: [
              {
                name: "discovery: descobrir como avaliar e operacionalizar discovery antes de produtizar",
                url: "https://calirenato82.substack.com/p/prompt-ia-discovery-operacionalizar-produtizar",
              },
              {
                name: "discovery: estratégia de lançamento para discovery + validar interesse e comprometimento",
                url: "https://calirenato82.substack.com/p/prompt-ia-estrategia-de-lancamento-discovery",
              },
              // Mantidos os prompts existentes que não foram explicitamente removidos
            ],
          },
          {
            title: "ferramentas para recrutar pessoas, validar protótipos e mais",
            items: [
              { name: "maze", url: "https://maze.co/" },
              { name: "greatquestion", url: "https://greatquestion.co/" },
              { name: "uxtweak (Card Sorting, Tree Testing)", url: "https://www.uxtweak.com/" },
            ],
          },          
          {
          title: "ferramentas para mapa de calor, enquete, card sorting, tree testing, five seconds test",
            items: [
              { name: "uxtweak (Card Sorting, Tree Testing)", url: "https://www.uxtweak.com/" },
              { name: "posthog", url: "https://posthog.com/" },
              { name: "hotjar", url: "https://www.hotjar.com/pt-br/" },
              { name: "microsoft clarity", url: "https://clarity.microsoft.com/" },
            ],
          },
          {
          title: "ferramentas para mapa de calor, enquete, card sorting, tree testing, five seconds test",
            items: [
              { name: "uxtweak (Card Sorting, Tree Testing)", url: "https://www.uxtweak.com/" },
              { name: "posthog", url: "https://posthog.com/" },
              { name: "hotjar", url: "https://www.hotjar.com/pt-br/" },
              { name: "microsoft clarity", url: "https://clarity.microsoft.com/" },
            ],
          },
        ],
      },
    },
    {
      // Novo ID para a nova seção, ou ajuste conforme necessário se houver um padrão de IDs
      id: 40, // Exemplo de novo ID, ajuste se necessário
      title: "elaborar oferta",
      type: "stage",
      responsibles: ["humano"], // Ajuste conforme necessário
      details: {
        comment: "elaborar e avaliar oferta: as pessoas desejam sua solução para resolver o problema?",
        resources: [
          {
            title: "recursos",
            items: [
              { name: "Capítulo 'Elaborar e Avaliar oferta'", url: "https://calirenato82.substack.com/i/141677388/elaborar-e-avaliar-oferta-as-pessoas-desejam-sua-solucao-para-resolver-o-problema" },
              { name: "Definir precificação", url: "https://calirenato82.substack.com/i/141677388/precificacao" },
              { name: "Criar formas de aumentar percepção de probabilidade de ter sucesso", url: "https://calirenato82.substack.com/i/141677388/formas-de-aumentar-percepcao-de-probabilidade-do-publico-ter-sucesso" },
            ],
          },
          {
            title: "prompts",
            items: [
              { name: "Ideias para Estimular Oferta e Demanda de um Marketplace", url: "https://calirenato82.substack.com/p/prompt-ia-ideias-para-estimular-oferta" },
              { name: "Anúncios para veiculação online", url: "https://calirenato82.substack.com/p/prompt-ia-anuncios-para-veiculacao" },
              { name: "Criar Promoções para lançamento", url: "https://calirenato82.substack.com/p/prompt-ia-promocoes-para-lancamento" },
              { name: "Definir Formas de garantia", url: "https://calirenato82.substack.com/p/prompt-ia-garantia-alex-hormozi" },
              { name: "Definir Tipos de Bônus", url: "https://calirenato82.substack.com/p/prompt-ia-bonus-alex-hormozi" },
            ],
          },
        ],
      },
    },
    {
      // Novo ID para a nova seção
      id: 41, // Exemplo de novo ID, ajuste se necessário
      title: "avaliar comprometimento",
      type: "stage",
      responsibles: ["humano"], // Ajuste conforme necessário
      details: {
        comment: "Avaliar o comprometimento: elas investirão seu tempo para dar mais informações e pagarão pela sua futura solução?",
        resources: [
          {
            title: "recursos",
            items: [
              { name: "capítulo Avaliar o comprometimento", url: "https://calirenato82.substack.com/i/141677388/avaliar-o-comprometimento-elas-investirao-seu-tempo-para-dar-mais-informacoes-e-pagarao-pela-sua-futura-solucao" },
            ],
          },
          // Adicionar seção de prompts se necessário
        ],
      },
    },
     {
      // Novo ID para a nova seção
      id: 43, // Exemplo de novo ID, ajuste se necessário - o ID 42 já existe
      title: "modelos de negócio",
      type: "stage",
      responsibles: ["humano"], // Ajuste conforme necessário
      details: {
        comment: "Explorar Modelos de Negócio e Evoluir o sistema para um negócio viável",
        resources: [
          {
            title: "recursos",
            items: [
              { name: "capítulo Evoluir o sistema para um negócio viável — Compatibilidade de interseção: Mercado e Produto (Market-Product Fit), Modelo de negócio e Mercado (Model-Market Fit), Canal e Modelo de negócio (Channel-Model Fit), Produto e Canal (Product-Channel Fit).", url: "https://calirenato82.substack.com/i/141677388/evoluir-o-sistema-para-um-negocio-viavel-compatibilidade-de-intersecao" },
            ],
          },
          {
            title: "prompts",
            items: [
               { name: "Explorar Modelos de Negócio — Como reduzir custos variados e fixos e Gerar receita", url: "https://calirenato82.substack.com/i/141677388/modelos-de-negocio-como-reduzir-custos-e-fixos-e-gerar-receita" },
            ]
          }
        ],
      },
    },
    {
      id: 42, // ID existente, mantido
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
              { name: "Figma Make + Site", url: "https://www.figma.com/make/" },
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
              { name: "promptlayer (prompt + nós de automação)", url: "https://www.promptlayer.com/" },
              { name: "workflowai (estilo chat e prompt)", url: "https://workflowai.com/" },
              { name: "rowboatlabs (estilo chat)", url: "https://rowboatlabs.com/" },
              { name: "chai (estilo chat)", url: "https://chai.new/" },
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
