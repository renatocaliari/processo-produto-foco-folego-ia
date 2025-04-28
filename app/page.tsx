"use client"

import { useState } from "react"
// Importando do novo arquivo de dados consolidado
import { processData } from "@/data-export"
import { ProcessSection } from "@/components/process-section"
import { FolegoSection } from "@/components/folego-section"
import { ImplementationSection } from "@/components/implementation-section"
import { ResourcesSection } from "@/components/resources-section"
import { FilterBar } from "@/components/filter-bar"
import { ExperimentationCTA } from "@/components/experimentation-cta"
import { CareerPathsSection } from "@/components/career-paths-section"
import { ImpactLevelsSection } from "@/components/impact-levels-section"
import { SiteIntro } from "@/components/site-intro"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function ProductProcess() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    compreensao: false,
    definicao: false,
    implementacao: false,
  })
  const [isFolegoExpanded, setIsFolegoExpanded] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-neutral-100 font-mono">
      <div className="mx-auto max-w-[1024px] px-4 md:px-8">
        {/* Hero section com mais espaço e clean */}
        <div className="pt-16 pb-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <span role="img" aria-label="Futuro" className="text-4xl">
              🚀
            </span>
            <div className="flex flex-col">
              <span>Product Ops</span>
              <span className="text-2xl">Navegando na complexidade e potencializando times com IA</span>
            </div>
          </h1>
          
          <p className="text-center max-w-2xl mb-8">
            uma abordagem integrada para evolução não-linear em um mundo em constante mudança.
          </p>
          
          <div className="text-center mb-8">
            <button
              className="text-sm md:text-base bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center gap-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              data-tally-open="3jgb49"
              data-tally-emoji-text="🤖"
              data-tally-emoji-animation="wave"
            >
              <span role="img" aria-label="Contato" className="text-base md:text-lg">
                👋
              </span>
              Precisa de ajuda? Entre em contato
            </button>
          </div>
        </div>

        {/* Mover SiteIntro (cards) para depois da primeira dobra */}
        <SiteIntro />

        {/* Subtítulo "Processo Foco & Fôlego com IA" */}
        <h2 id="processo-foco" className="text-2xl font-bold mb-2 text-center mt-12">Processo Foco & Fôlego com Inteligência Artifical</h2>
        
        {/* Novo subtítulo com estatísticas */}
        <p className="text-center text-sm mb-6">2 ciclos, 3 trilhas, +100 ferramentas, +10 prompts, <br/>+etapas automatizadas ou assistidas por inteligência artificial</p>

        {/* Stickers abaixo do título "Processo Foco & Fôlego com IA" */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-4">
            <Link href="http://calirenato82.substack.com/p/processo-de-produto-foco-and-folego" target="_blank">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pKb78DESfUMWDkvoEmRxBQAL434QUW.png"
                alt="Foco & Fôlego"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform cursor-pointer"
              />
            </Link>
            <div className="text-3xl font-bold">+</div>
            <Link
              href="https://calirenato82.substack.com/p/produto-digital-processo-assistencia-inteligencia-artificial"
              target="_blank"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RqtpI7SoccYImW9EgzL1qjCZBDMBvx.png"
                alt="IA"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* ExperimentationCTA movido para abaixo dos stickers */}
        <div className="mb-8">
          <ExperimentationCTA />
        </div>

        <div className="mb-8">
          {/* Filter bar (agora também serve como legenda) */}
          <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div
            className={`border-4 border-black rounded-xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            ${isFolegoExpanded ? "lg:w-4/5" : "md:w-full lg:w-11/12"}`}
          >
          {/* Foco section with title and description in the same pattern as Fôlego */}
          <div className="border-b-2 border-black">
            <div className="p-4 font-bold text-xl flex items-center gap-2">
              <span role="img" aria-label="Target" className="text-2xl">
                🎯
              </span>{" "}
              foco
            </div>
          </div>

          {processData.compreensao.description && (
            <div className="p-4 border-b-2 border-black text-sm">{processData.compreensao.description}</div>
          )}

          <div className="p-4">
            <ProcessSection
              title="mapeamento de oportunidades"
              emoji="🔍"
              description={processData.compreensao.description}
              isExpanded={expandedSections.compreensao}
              onToggle={() => toggleSection("compreensao")}
              data={processData.compreensao}
              filter={activeFilter}
            />

            <ProcessSection
              title="definição de solução"
              emoji="💡"
              description={processData.definicao.description}
              isExpanded={expandedSections.definicao}
              onToggle={() => toggleSection("definicao")}
              data={processData.definicao}
              filter={activeFilter}
            />

            <ImplementationSection
              title="implementação"
              emoji="🛠️"
              description={processData.implementacao.description}
              isExpanded={expandedSections.implementacao}
              onToggle={() => toggleSection("implementacao")}
              data={processData.implementacao}
              filter={activeFilter}
            />
          </div>
        </div>

        <FolegoSection
          data={processData.folego}
          isExpanded={isFolegoExpanded}
          onToggle={() => setIsFolegoExpanded(!isFolegoExpanded)}
          emoji="🧘"
        />
      </div>

        {/* Nova seção de Níveis de impacto, Avaliação e remuneração */}
        <div id="niveis-impacto">
          <ImpactLevelsSection />
        </div>

        {/* Career Paths Section (renomeada para "Papéis evolutivos") */}
        <div id="papeis-evolutivos">
          <CareerPathsSection />
        </div>

        {/* Resources section (com título ajustado para mesmo tamanho) */}
        <div id="recursos-consulta">
          <ResourcesSection emoji="📚" />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
