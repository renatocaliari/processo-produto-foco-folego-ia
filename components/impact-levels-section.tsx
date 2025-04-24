"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp, DollarSign } from "lucide-react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ImpactCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  content: string
}

export function ImpactLevelsSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const impactCards: ImpactCard[] = [
    {
      id: "impact-levels",
      title: "Níveis de impacto",
      description: "Entenda os diferentes níveis de impacto e como evoluir na carreira",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "bg-amber-100 border-amber-300",
      content: `# repensando carreiras: para além dos modelos lineares de progressão

o mundo do trabalho está em constante evolução, desafiando a noção tradicional de carreiras lineares e previsíveis. a forma como aprendemos e nos desenvolvemos raramente segue um caminho reto; é um processo contínuo, exploratório e muitas vezes não linear. como, então, podemos criar sistemas de progressão profissional que verdadeiramente reflitam essa dinâmica, especialmente em áreas que exigem adaptabilidade e aprendizado constante, como a de desenvolvimento de produto?

este artigo explora as limitações de modelos de progressão hierárquicos tradicionais e propõe uma abordagem alternativa, focada em impacto, habilidades contextuais e aprendizado contínuo. é um convite à reflexão sobre como podemos alinhar nossas estruturas de desenvolvimento com a natureza fluida do trabalho moderno.

## os desafios dos modelos lineares tradicionais

modelos de progressão baseados em níveis fixos (como júnior, pleno, sênior) podem apresentar alguns desafios inerentes:

* **rigidez em um mundo dinâmico:** estruturas fixas podem ter dificuldade em acomodar a especialização profunda, a mudança de foco ou a velocidade necessária em ambientes que mudam rapidamente. como reconhecer adequadamente indivíduos que se aprofundam verticalmente ou que transitam entre diferentes áreas de expertise?
* **foco em 'subir' vs. impacto real:** a ênfase pode, inadvertidamente, deslocar-se para a conquista do próximo "nível", em vez de reconhecer e valorizar as diversas formas como as pessoas geram impacto – seja aprofundando conhecimentos, ampliando habilidades ou resolvendo problemas complexos de maneiras inovadoras.
* **desconexão com o aprendizado prático:** se o aprendizado é visto como contínuo e não linear, uma trilha que se assemelha a um 'checklist' pode não ser a forma mais eficaz de incentivar o desenvolvimento genuíno, a autonomia e a expressão da singularidade de cada profissional.
* **avaliações e vieses:** modelos muito estruturados em torno de competências abstratas definidas por nível podem, involuntariamente, aumentar a subjetividade nas avaliações. isso pode dificultar o reconhecimento do impacto concreto e criar espaço para decisões influenciadas por vieses.
* **preparando para o futuro:** o futuro do trabalho exige adaptabilidade, a combinação de habilidades diversas (t-shaped, π-shaped) e aprendizado constante. será que uma estrutura linear tradicional oferece o melhor mapa para navegar nesse cenário?
* **engajamento e autonomia:** impor caminhos únicos pode subutilizar o potencial individual e desconectar as pessoas de suas motivações intrínsecas. modelos mais flexíveis tendem a promover maior autonomia e senso de propósito.

## uma abordagem alternativa: impacto, papéis e selos

diante desses desafios, uma alternativa é explorar modelos mais fluidos e adaptativos. considere um sistema que combina:

1.  **níveis amplos focados em impacto/autonomia:** em vez de muitos degraus, níveis mais abrangentes que descrevem o escopo de impacto e a autonomia esperada.
2.  **papéis contextuais:** funções que as pessoas assumem com base nas necessidades do momento, do projeto ou do time, e que podem mudar com o tempo.
3.  **reconhecimento de habilidades específicas ('selos'):** uma forma de validar e reconhecer competências ou experiências concretas, independentemente do nível de impacto ou do papel atual.

esta abordagem busca colocar em prática os princípios de aprendizado contínuo e desenvolvimento adaptativo.

## experiência e referências

estas reflexões e propostas baseiam-se em experiência prática com design organizacional, gestão de rh e atuação em times de produto, combinada com a assistência de um llm (large language model) treinado com base em conceitos de futuro do trabalho, agilidade e análises críticas sobre trilhas de progressão.

para quem deseja aprofundar, os critérios usados para a análise e os artigos de referência podem ser encontrados aqui:

* [prompt ia para trilha de progressão](https://calirenato82.substack.com/p/prompt-ia-trilha-de-progressao)
* [contornos - trilhas de progressão](https://calirenato82.substack.com/i/141644281/trilha-de-progressao)
* [perigos de avaliação de desempenho tradicionais e alternativas](https://calirenato82.substack.com/p/os-perigos-da-avaliacao-de-desempenho)

## para além de júnior, pleno e sênior: níveis de impacto

abaixo está um exemplo de níveis de impacto que poderiam ser aplicados em diversas áreas dentro de uma organização. a utilização de nomenclaturas novas, com descrições explícitas e concisas, pode ajudar a minimizar a percepção de hierarquia baseada puramente em cargos, poder ou tempo de carreira.

**níveis de impacto - níveis da trilha**

* **contribuindo:**
    * **foco:** aprender e aplicar com orientação.
    * **autonomia:** guiada (precisa de direcionamento no 'o quê' e 'como').
    * **complexidade:** tarefas claras e bem definidas.
    * **impacto:** local (tarefas individuais, time imediato).
* **construindo:**
    * **foco:** aplicar de forma autônoma, propor soluções.
    * **autonomia:** define o 'como', busca alinhar o 'o quê'.
    * **complexidade:** problemas conhecidos, desafios claros.
    * **impacto:** time, produto/serviço.
* **liderando:**
    * **foco:** lidar com ambiguidade, multiplicar conhecimento.
    * **autonomia:** define o 'o quê' e 'como' em escopos maiores.
    * **complexidade:** problemas ambíguos, escopo amplo.
    * **impacto:** multi-time, área, organização.
* **escalando:**
    * **foco:** lidar com desafios sistêmicos, criar novas capacidades.
    * **autonomia:** define direção estratégica.
    * **complexidade:** problemas sistêmicos, estratégicos.
    * **impacto:** estratégico (organização, ecossistema).`,
    },
    {
      id: "evaluation-compensation",
      title: "Avaliação e Remuneração",
      description: "Conheça nosso processo de avaliação e estrutura de remuneração",
      icon: <DollarSign className="w-12 h-12" />,
      color: "bg-teal-100 border-teal-300",
      content: `## aprendizado, avaliação e reconhecimento

modelos alternativos de progressão exigem abordagens diferentes para aprendizado e avaliação, dissociando o desenvolvimento contínuo da avaliação formal para fins de remuneração. mais detalhes e alternativas podem ser encontrados [aqui](https://calirenato82.substack.com/p/os-perigos-da-avaliacao-de-desempenho).

algumas possibilidades incluem:

* mentoria entre pares e comunidades de prática.
* mentoria direta ou por grupos de apoio/treinadores.
* processos transparentes para definição de remuneração (combinando nível, papéis, selos).
* documentação dinâmica via perfis ou portfólios individuais.
* avaliação subjetiva focada no desempenho em papéis específicos.
* coleta de percepções sobre o trabalho realizado.
* avaliação de aspectos correlacionados ao desempenho de grupos/times.

três processos podem se destacar em um sistema como este:

1.  **feedback contínuo para desenvolvimento:**
    * **objetivo:** apoiar o aprendizado e crescimento contínuos, sem impacto direto em salário ou progressão formal.
    * **como funciona:** a pessoa busca ativamente feedback contextualizado (sobre ações e situações concretas) de colegas, líderes, stakeholders, etc. conversas regulares de desenvolvimento com mentores ou líderes focam em aspirações, desafios e oportunidades, usando a estrutura de níveis/selos/papéis como guia. retrospectivas de time continuam sendo usadas para melhoria coletiva.
    * **o que evita:** pressão por feedback apenas em ciclos formais; feedback genérico; mistura de desenvolvimento com avaliação para recompensa.

2.  **validação de selos (reconhecimento de habilidades/experiências):**
    * **objetivo:** reconhecer formalmente a demonstração de proficiência ou experiência em uma habilidade específica.
    * **como funciona:** a pessoa submete um conjunto de evidências concretas (projetos, análises, código, workshops facilitados, etc.) que demonstram a aplicação prática da habilidade. um grupo definido (pares, comitê técnico) analisa as evidências e valida (ou não) a concessão do selo de forma transparente.
    * **o que evita:** auto-declaração sem comprovação; decisões centralizadas e potencialmente enviesadas.

3.  **constatação de nível de impacto (base para progressão e faixa salarial):**
    * **objetivo:** determinar se a pessoa opera consistentemente no próximo nível de impacto, autonomia e complexidade, justificando a progressão para a faixa salarial correspondente.
    * **como funciona:** quando a pessoa, em diálogo com mentores/líderes, acredita ter evidências robustas de atuação consistente no nível seguinte, ela compila um portfólio abrangente (resultados, complexidade superada, autonomia, influência, selos relevantes). um comitê diverso avalia coletivamente as evidências para constatar o novo nível, buscando consenso baseado nas provas. não há um ciclo obrigatório fixo para todos.
    * **o que evita:** progressão baseada apenas na avaliação subjetiva de um gestor; inflação de cargos sem aumento comprovado de impacto; pressão por promoções anuais.

em resumo, os processos de avaliação se tornam mais:

* **descentralizados:** diferentes processos para diferentes fins.
* **contínuos (para feedback):** o aprendizado é constante.
* **baseados em evidências (para selos e níveis):** foco na demonstração concreta.
* **justos:** múltiplas perspectivas reduzem vieses individuais.
* **focados no desenvolvimento:** o sistema guia e reconhece o crescimento.

## conectando desenvolvimento e remuneração

como esses elementos (níveis, papéis, selos) podem se conectar à remuneração de forma transparente e justa?

* **níveis de impacto -> base salarial:**
    * **conexão:** os níveis refletem a capacidade sustentada de gerar valor, lidar com complexidade e ter autonomia, servindo como base para faixas salariais (salary bands).
    * **mecanismo:** a progressão para um novo nível (constatada por evidências e validação coletiva) torna a pessoa elegível para a faixa salarial do nível superior. dentro da faixa, outros fatores (tempo de atuação consistente, selos críticos) podem influenciar a posição.
    * **vantagem:** clareza sobre expectativas por faixa salarial, baseando a progressão maior em impacto comprovado.

* **papéis contextuais -> adicionais ou critério de alocação:**
    * **conexão:** assumir papéis de alta complexidade, responsabilidade crítica ou que exigem habilidades raras pode ter reconhecimento adicional.
    * **mecanismo:** pode ser um adicional temporário (ex: liderança de iniciativa estratégica) ou um critério para posicionamento dentro da faixa salarial base.
    * **cuidado:** evitar recriar hierarquias disfarçadas; o foco deve ser na demanda e complexidade do trabalho exigido pelo papel no contexto.

* **selos (habilidades/experiências comprovadas) -> componentes variáveis, bônus, desenvolvimento:**
    * **conexão:** ideais para reconhecimento granular ou variável.
    * **mecanismo:** bônus por conquista de selos complexos/raros; adicional por selos ativos que exigem manutenção; desbloqueio de orçamento para desenvolvimento; critério indireto para portfólio de nível; reconhecimento não-financeiro (acesso a projetos, mentoria).

**princípios chave para essa conexão:**

* **transparência:** clareza nas faixas salariais, critérios de validação e como papéis/selos influenciam a remuneração.
* **base em evidências:** progressão de nível (e acesso a faixas maiores) depende de demonstração validada de impacto e capacidades.
* **desacoplamento da avaliação tradicional:** salário não definido por nota de desempenho subjetiva anual.
* **foco no desenvolvimento:** sistema incentiva aquisição de habilidades (selos) e aumento de impacto (níveis).
* **processos claros e justos:** decisões (validação, bônus, adicional) seguem processos definidos para minimizar vieses.`,
    },
  ]

  const openModal = (cardId: string) => {
    setSelectedCard(cardId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
  }

  // Encontrar o conteúdo do card selecionado
  const selectedCardContent = selectedCard ? impactCards.find((card) => card.id === selectedCard)?.content || "" : ""

  return (
    <div id="niveis-impacto" className="mt-20 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="Impacto" className="text-3xl">
          📊
        </span>
        Níveis de impacto, Avaliação e Remuneração
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impactCards.map((card) => (
          <div
            key={card.id}
            className={`border-2 border-black rounded-lg ${card.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-6 flex flex-col items-center text-center cursor-pointer`}
            onClick={() => openModal(card.id)}
          >
            <div className="mb-4 bg-white p-4 rounded-full border-2 border-black">{card.icon}</div>
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <button className="mt-auto bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <h2 className="text-2xl font-bold">{impactCards.find((card) => card.id === selectedCard)?.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <div className="prose max-w-none">
                <ReactMarkdown>{selectedCardContent}</ReactMarkdown>
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
