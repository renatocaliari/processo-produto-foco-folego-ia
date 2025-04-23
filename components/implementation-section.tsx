"use client"

import { ChevronDown } from "lucide-react"
import { ProcessSection } from "./process-section"
import { useState } from "react"

interface ImplementationSectionProps {
  title: string
  emoji?: string
  description?: string
  isExpanded: boolean
  onToggle: () => void
  data: any
  filter: string | null
}

export function ImplementationSection({
  title,
  emoji,
  description,
  isExpanded,
  onToggle,
  data,
  filter,
}: ImplementationSectionProps) {
  const [expandedTracks, setExpandedTracks] = useState<Record<string, boolean>>({
    delivery: false,
    discovery: false,
  })

  const toggleTrack = (track: string) => {
    setExpandedTracks((prev) => ({
      ...prev,
      [track]: !prev[track],
    }))
  }

  // Calcular o total de estágios em todas as trilhas
  const getTotalStages = () => {
    let totalStages = 0

    Object.values(data.tracks).forEach((track: any) => {
      if (track.stages) {
        if (filter) {
          // Se houver filtro, contar apenas os estágios que correspondem ao filtro
          const filteredStages = track.stages.filter((stage: any) => {
            const responsible =
              stage.responsibles && stage.responsibles.length > 0 ? stage.responsibles[0].toLowerCase() : null
            return responsible === filter.toLowerCase()
          })
          totalStages += filteredStages.length
        } else {
          // Se não houver filtro, contar todos os estágios
          totalStages += track.stages.length
        }
      }
    })

    return totalStages
  }

  const totalStages = getTotalStages()

  // Se houver filtro e nenhum estágio corresponder, não mostrar a seção
  if (filter && totalStages === 0) {
    return null
  }

  return (
    <div className="border-2 border-black rounded-lg mb-4 overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full bg-white p-3 font-bold text-xl flex justify-between items-center hover:bg-gray-100"
      >
        <div className="flex items-center gap-2">
          {emoji && (
            <span role="img" aria-label={title} className="text-2xl">
              {emoji}
            </span>
          )}
          {title}
          <span className="ml-2 text-sm bg-black text-white px-2 py-0.5 rounded-full">{totalStages}</span>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="border-t-2 border-black">
          {description && <p className="p-3 text-sm border-b-2 border-black">{description}</p>}

          <div className="p-4">
            <ProcessSection
              title={data.tracks.discovery.title}
              emoji="🔬"
              description={data.tracks.discovery.description}
              isExpanded={expandedTracks.discovery}
              onToggle={() => toggleTrack("discovery")}
              data={data.tracks.discovery}
              filter={filter}
            />

            <ProcessSection
              title={data.tracks.delivery.title}
              emoji="🚚"
              description={data.tracks.delivery.description}
              isExpanded={expandedTracks.delivery}
              onToggle={() => toggleTrack("delivery")}
              data={data.tracks.delivery}
              filter={filter}
            />
          </div>
        </div>
      )}
    </div>
  )
}
