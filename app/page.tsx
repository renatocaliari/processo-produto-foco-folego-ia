"use client"

import { useState } from "react"
import { processData } from "@/data"
import { ProcessSection } from "@/components/process-section"
import { FolegoSection } from "@/components/folego-section"
import { ResponsibleLegend } from "@/components/responsible-legend"
import { ImplementationSection } from "@/components/implementation-section"
import { ResourcesSection } from "@/components/resources-section"

export default function ProductProcess() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    compreensao: false,
    definicao: false,
    implementacao: false,
  })

  const [isFolegoExpanded, setIsFolegoExpanded] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8 font-mono">
      <h1 className="text-4xl font-bold mb-2 text-center">Processo de Produto com IA</h1>

      {/* Legend for responsible parties */}
      <ResponsibleLegend className="mb-8" />

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div
          className={`border-4 border-black rounded-xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
          ${isFolegoExpanded ? "lg:w-4/5" : "md:w-full lg:11/12"}`}
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
            />

            <ProcessSection
              title="definição de solução"
              emoji="💡"
              description={processData.definicao.description}
              isExpanded={expandedSections.definicao}
              onToggle={() => toggleSection("definicao")}
              data={processData.definicao}
            />

            <ImplementationSection
              title="implementação"
              emoji="🛠️"
              description={processData.implementacao.description}
              isExpanded={expandedSections.implementacao}
              onToggle={() => toggleSection("implementacao")}
              data={processData.implementacao}
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

      {/* Resources section */}
      <ResourcesSection emoji="📚" />
    </div>
  )
}
