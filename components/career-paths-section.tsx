"use client"

import type React from "react"

import { useState } from "react"
import { FileCode2, Palette, Briefcase } from "lucide-react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface CareerPath {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  content: string
}

export function CareerPathsSection() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Conteúdo embutido para cada trilha
  const careerPaths: CareerPath[] = [
    {
      id: "product-manager",
      title: "Product Manager",
      description: "Lidere a estratégia e execução de produtos digitais",
      icon: <Briefcase className="w-12 h-12" />,
      color: "bg-blue-100 border-blue-300",
      content: `# Trilha de Progressão: Product Manager

## Visão Geral

O Product Manager é responsável por identificar oportunidades de produto, definir a visão e estratégia, e trabalhar com equipes multidisciplinares para entregar valor aos usuários e ao negócio.

## papéis e responsabilidades (pode ter múltiplos)

* mapeamento de espaço do problema
* pm | delimitação de problema
* pm | definição de solução
* pm | entrega & otimização de produto
* pm | produto técnico (incluindo plataformas, apis, sdks, infraestrutura)
* 🤖 pm | produto com ia embarcada (foco específico em produtos que utilizam ia como core)
* pm | plataforma
* pm | growth
* pm | estratégia de área/portfólio (evitar conotação hierárquica)
* líder de capítulo de produto (papel distinto de desenvolvimento da disciplina/pessoas)
* mentor(a) de pms (papel distinto de desenvolvimento individual)

## selos

### estratégia & visão de produto:

* [selo] definição e comunicação de visão de produto
* [selo] mapeamento do espaço do problema (ex: jobs to be done)
* 🤖 [selo] análise de mercado e concorrência (realiza análises multi-fontes, demonstrando habilidade em alavancar ferramentas de ia para pesquisa e análise de tendências - ex: perplexity, askpot)
* [selo] modelagem de negócios & monetização
* [selo] construção e comunicação de roadmap estratégico (desenvolve e comunica roadmaps alinhados à visão, utilizando ferramentas apropriadas, incluindo potenciais recursos de ia para planejamento - ex: productplan, airfocus)
* [selo] definição de métricas norte e kpis estratégicos

### descoberta & validação:

* [selo] avaliação estratégica de iniciativas (demonstra capacidade de analisar criticamente novas ideias ou problemas, avaliando o alinhamento estratégico, potencial de mercado (oferta), adequação ao apetite (comprometimento) e definindo a abordagem inicial (operacionalização).)
* [selo] design de mvp & estratégia de validação (projeta a forma mais simples de entregar e testar o valor central de uma proposta (mvp, experimento), definindo a estratégia para coleta de evidências e aprendizado rápido.)
* [selo] condução de pesquisa qualitativa com usuários (planeja e executa entrevistas e sessões de escuta eficazes, utilizando ia como suporte para rascunho e análise inicial, quando apropriado)
* 🤖 [selo] análise de dados qualitativos (identifica padrões e insights em dados não estruturados, utilizando eficazmente ferramentas ia de análise textual para processar grandes volumes e acelerar a síntese - ex: dovetail, delve)
* [selo] design e análise de experimentos (a/b testing)
* [selo] priorização de oportunidades e features (aplica frameworks de priorização de forma consistente, podendo utilizar suporte ia para avaliação multicritério)
* [selo] definição de apetite de tempo e delimitação do escopo
* 🤖 [selo] prototipagem e teste de conceito (colabora com design na validação de conceitos, explorando e utilizando ferramentas ia/no-code para prototipagem rápida quando vantajoso - ex: v0, bubble)
* [selo] avaliação de riscos (técnicos, mercado, usabilidade) (identifica e comunica riscos de forma proativa, colaborando com especialistas e utilizando ia como suporte para análise, se aplicável)

### entrega & execução:

* [selo] escrita eficaz de propostas de soluções
* [selo] gerenciamento de backlog e fluxo de trabalho (utilizando ferramentas de gestão de tarefas/projetos - ex: jira, linear)
* [selo] colaboração técnica com engenharia
* 🤖 [selo] análise de métricas de produto pós-lançamento (monitora e interpreta métricas de performance, utilizando as capacidades de ferramentas de product analytics, incluindo funcionalidades de ia embarcadas - ex: posthog, amplitude)
* 🤖 [selo] colaboração na definição de comportamento e testes (participa na definição de critérios de aceite, explorando geração assistida por ia para cenários de teste - ex: bdd/gherkin)

### análise de dados & feedback:

* 🤖 [selo] proficiência em ferramentas de product analytics (demonstra autonomia na configuração, exploração e geração de insights a partir de ferramentas de análise de produto, incluindo o uso de funcionalidades de ia - ex: posthog, mixpanel, amplitude)
* 🤖 [selo] exploração de dados com linguagem natural (utiliza ferramentas ia para consultar bases de dados e obter insights de forma conversacional - ex: juliusai, thoughtspot)
* [selo] gestão e análise de feedback de usuários (estrutura a coleta e análise de feedback direto, utilizando ferramentas de gestão e, quando aplicável, ia para sumarização inicial - ex: canny, featurebase)
* 🤖 [selo] integração e análise de feedback multicanal (consolida e analisa feedback de diversas fontes, aplicando ferramentas ia para classificação automática, sumarização e identificação de temas - ex: clientzen, usepainboard)

### liderança & colaboração:

* [selo] gerenciamento e comunicação com stakeholders
* [selo] facilitação de reuniões & workshops
* [selo] apresentação eficaz de resultados e visão
* [selo] mentoria e desenvolvimento de pms (aplicável a quem exerce papel de mentor/líder de capítulo)

### aplicação de ia no processo de produto:

* 🤖 [selo] análise de viabilidade (mercado & negócio) assistida por ia (utiliza proativamente ferramentas de ia para coletar, sintetizar e analisar dados de mercado, concorrência e feedback, suportando decisões sobre a viabilidade e o potencial de novas iniciativas.)
* 🤖 [selo] uso estratégico de ia generativa (aplica ia generativa de forma eficaz para pesquisa, ideação, sumarização e outras tarefas relevantes ao ciclo de produto - ex: gemini, claude)
* 🤖 [selo] avaliação crítica de ferramentas ia para produto (capacidade de identificar, testar e avaliar a aplicabilidade de novas ferramentas ia para otimizar o processo de produto)
* 🤖 [selo] fundamentos e ética de ia em produtos (compreende os princípios básicos de ia, suas limitações e as considerações éticas ao aplicá-la em produtos)`,
    },
    {
      id: "product-designer",
      title: "Product Designer",
      description: "Crie experiências excepcionais centradas no usuário",
      icon: <Palette className="w-12 h-12" />,
      color: "bg-purple-100 border-purple-300",
      content: `# Trilha de Progressão: Product Designer

## Visão Geral

O Product Designer combina habilidades de UX e UI para criar experiências de produto centradas no usuário, trabalhando na interseção entre necessidades do usuário, objetivos de negócio e viabilidade técnica.

## papéis (pode ter múltiplos)

* pesquisador(a) de usuário (pode ser papel primário, ou compartilhado com researcher)
* analista qualitativo de dados (pode ser papel primário, ou compartilhado com researcher)
* mapeador(a) e designer do espaço da solução
* designer de interação e fluxos (incluindo visualização com mermaid e ferramentas visuais)
* 🤖 designer visual (ui) e arquiteto(a) de design system (com uso de ia/mcp)
* 🤖 prototipador(a) (rápido e complexo, utilizando ferramentas ia, no-code e tradicionais)
* 🤖 facilitador(a) de workshops (agora integrando o potencial da ia)
* colaborador(a) na definição de comportamento (bdd)
* 🤖 avaliador(a) de interfaces (incluindo métodos ia-assistidos e testes rápidos)
* integrador(a) de feedback contínuo (em colaboração com pm)
* 🤖 designer | design de produtos com ia: focado na criação de produtos que incorporam funcionalidades de ia.
* 🤖 designer | experimentação rápida com ia: especialista em utilizar ferramentas de ia para gerar e testar rapidamente múltiplas iterações.
* 🤖 facilitador(a) | workshops de ia generativa para design: conduz workshops explorando o potencial de ferramentas de ia generativa.
* estrategista de conteúdo / ux writer (opcional, se mantido como papel distinto)

## selos

### processo & métodos:

* [selo] avaliação estratégica de propostas (demonstra capacidade de analisar propostas de solução avaliando valor da oferta, adequação ao apetite/comprometimento e viabilidade de operacionalização inicial.)
* [selo] design de experimentos pré-produto (projeta e facilita experimentos de baixo custo/fidelidade para validar hipóteses chave de oferta e demanda antes do desenvolvimento.)
* [selo] aprendizado sobre o público (sessões de escuta, entrevistas)
* [selo] mapeamento do espaço do problema (ex: jobs to be done, com pm)
* [selo] modelagem visual de fluxos
* [selo] design ui alta fidelidade
* [selo] construção de mvps visuais
* [selo] teste de usabilidade moderado remoto
* [selo] condução de testes de usabilidade guerrilha
* [selo] análise de dados quantitativos (foco em comportamento do usuário)
* [selo] análise de dados qualitativos
* [selo] análise e integração de feedback contínuo
* [selo] colaboração na definição de bdd
* [selo] facilitação de workshops
* [selo] contributor de design system

### ferramentas & tecnologias:

* 🤖 [selo] análise de viabilidade assistida por ia (utiliza ferramentas de ia para coletar e analisar dados de mercado, feedback e concorrência, suportando a avaliação estratégica de novas propostas.)
* 🤖 [selo] uso de ia para assistência em ux/ui (proposta e avaliação)
* [selo] ferramentas de design ui avançadas (ex: figma, penpot, motiff)
* [selo] ferramentas de modelagem de fluxos (ex: mermaid, figjam, miro)
* 🤖 [selo] criação de fluxos assistidos por ia (ex: mermaid com ia)
* 🤖 [selo] wireframing e ideação assistidos por ia (ex: uxpilot, whimsical ia)
* 🤖 [selo] figma - ia assistida (plugins e recursos de ia)
* 🤖 [selo] integração com design systems via mcp/ia (ex: framelink.ai, 21st.dev/magic)
* 🤖 [selo] prototipagem rápida com ia (ex: v0, tempo.new, lovable, firebase.studio)
* [selo] prototipagem rápida no-code (ex: bubble, webflow, plasmic)
* 🤖 [selo] avaliação visual de interfaces assistida por ia (ex: gemini live, gemini, claude, chatgpt visual)
* 🤖 [selo] teste de navegação simulado com ia (ex: operator.browserbase, browser use, skyvern)
* [selo] ferramentas de análise de dados quanti (ex: amplitude, metabase)
* 🤖 [selo] ferramentas de análise de dados quali (ex: dovetail, delve, amplitude notes) (algumas podem usar ia)
* [selo] ferramentas de análise de comportamento (ex: hotjar, clarity)
* 🤖 [selo] análise de feedback assistida por ia (ferramentas de classificação/integração com ia)

### conhecimento de domínio:

* [selo] acessibilidade wcag aa - aplicação prática
* [selo] design para e-learning (se aplicável ao contexto)
* [selo] psicologia cognitiva aplicada ao design
* 🤖 [selo] fundamentos, capacidades e limitações da ia para design
* 🤖 [selo] ética no design de produtos com ia e uso de ia no processo de design

### experiências / impacto:

* [selo] liderou discovery de produto x
* [selo] mentorou designer [nome/nível]
* [selo] facilitou série de workshops [tema]
* [selo] apresentou estudo de caso em [evento/comunidade]
* 🤖 [selo] liderou a criação e validação de um conceito usando prototipagem rápida ia/no-code
* 🤖 [selo] otimizou um fluxo de design utilizando ferramentas e métodos assistidos por ia, demonstrando ganho de eficiência.
* 🤖 [selo] utilizou ia para obter insights cruciais que impactaram decisões de design em um projeto.
* 🤖 [selo] contribuiu significativamente para a criação ou evolução de um design system, incluindo a integração de ferramentas ia/mcp.
* 🤖 [selo] aplicou com sucesso métodos de validação assistida por ia em um projeto, gerando feedback rápido e útil.
* 🤖 [selo] desenvolveu um design de interface para um produto que incorpora funcionalidades inovadoras de ia.`,
    },
    {
      id: "product-developer",
      title: "Product Developer",
      description: "Construa soluções técnicas inovadoras e escaláveis",
      icon: <FileCode2 className="w-12 h-12" />,
      color: "bg-green-100 border-green-300",
      content: `# Trilha de Progressão: Product Developer

## Visão Geral

O Product Developer é um engenheiro de software com foco em construir produtos digitais, combinando excelência técnica com entendimento profundo de negócios e experiência do usuário.

## papéis (pode ter múltiplos)

* developer | evolução contínua [produto/feature]
* developer | prototipagem & validação rápida (foco em construir e testar rapidamente protótipos funcionais usando diversas abordagens: código, ia, no-code)
* developer | implementação inicial (mvp) (foco em construir a primeira versão lançável de um produto)
* developer | automação & integrações (foco em criar automações e conectar ferramentas)
* 🤖 developer | criação de agentes & soluções ia (foco em utilizar frameworks e plataformas para construir funcionalidades baseadas em ia)
* mentor(a) técnico(a) | desenvolvimento rápido & ia (papel distinto focado no desenvolvimento de outros devs nessas abordagens)

## selos

### prototipagem & construção:

* [selo] proficiência em plataformas no-code/low-code (descrição: constrói aplicações funcionais utilizando plataformas no-code/low-code - ex: bubble, webflow, weweb, toddle)
* 🤖 [selo] prototipagem rápida assistida por ia (descrição: utiliza ferramentas ia para gerar interfaces, componentes ou protótipos funcionais rapidamente - ex: v0, lovable, firebase.studio, motiff)
* 🤖 [selo] desenvolvimento front-end assistido por ia (descrição: utiliza ia para acelerar a construção de interfaces, aplicando boas práticas)
* 🤖 [selo] desenvolvimento back-end/lógica assistido por ia (descrição: utiliza ia para gerar lógica de negócio, integrações ou apis simples/complexas)
* [selo] seleção de abordagem de prototipagem (descrição: avalia e escolhe a melhor abordagem - código, low-code, no-code, ia - com base nos requisitos, apetite e objetivos de validação)

### 🤖 desenvolvimento assistido por ia:

* 🤖 [selo] proficiência em assistentes de código ia (descrição: utiliza eficazmente ferramentas ia integradas ao ide para gerar, completar e refatorar código - ex: github copilot, gemini code assist, augment code)
* 🤖 [selo] engenharia de prompt para geração de código (descrição: elabora prompts eficazes para guiar ferramentas ia na geração de código complexo e específico)
* 🤖 [selo] revisão de código assistida por ia (descrição: utiliza ferramentas ia para realizar ou complementar code reviews, identificando bugs, sugerindo melhorias e verificando conformidade - ex: code rabbit)
* 🤖 [selo] formatação de codebase para llms (descrição: prepara bases de código para serem compreendidas e analisadas por llms - ex: code2prompt, repomix)
* 🤖 [selo] uso de ia para entendimento de código legado/complexo (descrição: aplica ferramentas ia para analisar e documentar bases de código existentes)

### testes & validação:

* [selo] implementação de testes unitários/integração (descrição: escreve e mantém testes automatizados básicos)
* 🤖 [selo] execução de testes bdd assistida por ia (descrição: utiliza ferramentas ia para rodar e validar cenários bdd - ex: hercules, skyvern)
* [selo] homologação técnica de funcionalidades (descrição: realiza testes funcionais e validação em ambientes de teste/produção)
* 🤖 [selo] avaliação técnica de protótipos ia/no-code (descrição: analisa a viabilidade e escalabilidade de soluções criadas com ia/no-code)

### automação & integração:

* [selo] proficiência em plataformas de automação (descrição: cria e gerencia fluxos de trabalho automatizados - ex: zapier, make, n8n, activepieces)
* 🤖 [selo] desenvolvimento de agentes de ia (no-code) (descrição: utiliza plataformas visuais para construir e configurar agentes de ia - ex: http://dify.ai , latitude.so, n8n)
* 🤖 [selo] desenvolvimento de agentes de ia (código) (descrição: utiliza frameworks para construir agentes de ia customizados - ex: inngest, cloudflare/google agent kit)
* [selo] integração de apis e serviços

### colaboração & processo:

* [selo] interpretação de especificações de produto/design
* [selo] colaboração com pm & design
* [selo] contribuição para práticas de devops (ci/cd) (descrição: participa e contribui para processos de integração e deploy contínuos)
* [selo] automação de deploy
* 🤖 [selo] geração/sumarização de changelog assistida por ia (descrição: utiliza ia ou ferramentas específicas para comunicar mudanças - ex: ducalis.io)

### 🤖 fundamentos de ia para desenvolvimento:

* 🤖 [selo] fundamentos de ia e machine learning (descrição: compreende os conceitos básicos de diferentes tipos de ia e como eles funcionam)
* 🤖 [selo] ética no desenvolvimento com ia (descrição: considera as implicações éticas ao usar ia para gerar código ou ao construir produtos com ia)
* 🤖 [selo] avaliação de ferramentas ia para desenvolvimento (descrição: capacidade de pesquisar, testar e comparar novas ferramentas ia relevantes para o ciclo de desenvolvimento)

### experiências / impacto: (exemplos)

* [selo] entregou mvp funcional usando [abordagem: ia/no-code/código]
* [selo] automatizou processo x, gerando ganho de eficiência y
* [selo] protótipo validou/invalidou hipótese chave rapidamente
* [selo] contribuiu para a melhoria de práticas de desenvolvimento rápido
* [selo] mentorou developer [nível/nome]
* 🤖 [selo] implementou solução inovadora utilizando agente de ia
* 🤖 [selo] reduziu tempo de desenvolvimento da feature x usando assistentes de código ia`,
    },
  ]

  const openModal = (pathId: string) => {
    setSelectedPath(pathId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPath(null)
  }

  // Encontrar o conteúdo da trilha selecionada
  const selectedPathContent = selectedPath ? careerPaths.find((path) => path.id === selectedPath)?.content || "" : ""

  return (
    <div id="papeis-evolutivos" className="mt-20 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="Progressão" className="text-3xl">
          🚀
        </span>
        Papéis evolutivos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {careerPaths.map((path) => (
          <div
            key={path.id}
            className={`border-2 border-black rounded-lg ${path.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-6 flex flex-col items-center text-center cursor-pointer`}
            onClick={() => openModal(path.id)}
          >
            <div className="mb-4 bg-white p-4 rounded-full border-2 border-black">{path.icon}</div>
            <h3 className="font-bold text-xl mb-2">{path.title}</h3>
            <p className="text-sm mb-4">{path.description}</p>
            <button className="mt-auto bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">
              Ver Trilha
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPath && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Trilha: {careerPaths.find((path) => path.id === selectedPath)?.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              {/* Renderizar o markdown diretamente do conteúdo embutido */}
              <div className="prose max-w-none">
                <ReactMarkdown>{selectedPathContent}</ReactMarkdown>
              </div>
            </div>

            <div className="p-4 border-t-2 border-black flex justify-end">
              <button
                onClick={closeModal}
                className="bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
