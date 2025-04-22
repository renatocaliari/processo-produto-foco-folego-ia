"use client"

import { ChevronDown } from "lucide-react"
import { StageCard } from "./stage-card"

interface ProcessSectionProps {
  title: string
  emoji?: string
  description?: string
  isExpanded: boolean
  onToggle: () => void
  data: any
  filter: string | null
}

export function ProcessSection({ title, emoji, description, isExpanded, onToggle, data, filter }: ProcessSectionProps) {
  const getStages = () => {
    if (data.stages) {
      return data.stages
    } else if (data.tracks) {
      // For implementation section that has tracks
      const allStages: any[] = []
      Object.values(data.tracks).forEach((track: any) => {
        if (track.stages) {
          allStages.push(...track.stages)
        }
      })
      return allStages
    }
    return []
  }

  const stages = getStages()

  // Filter stages if a filter is active
  const filteredStages = filter
    ? stages.filter((stage) => {
        const responsible =
          stage.responsibles && stage.responsibles.length > 0 ? stage.responsibles[0].toLowerCase() : null

        // Correspondência exata em vez de parcial
        return responsible === filter.toLowerCase()
      })
    : stages

  // Don't show empty sections when filtering
  if (filter && filteredStages.length === 0) {
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
          <span className="ml-2 text-sm bg-black text-white px-2 py-0.5 rounded-full">{filteredStages.length}</span>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="border-t-2 border-black">
          {description && <p className="p-3 text-sm border-b-2 border-black">{description}</p>}

          <div className="p-4">
            <div className="overflow-x-auto pb-4 min-w-0">
              <div className="flex gap-4" style={{ minWidth: "max-content" }}>
                {filteredStages.map((stage: any) => (
                  <StageCard key={stage.id} stage={stage} filter={filter} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
