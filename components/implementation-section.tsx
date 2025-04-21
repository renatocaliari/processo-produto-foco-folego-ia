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
}

export function ImplementationSection({
  title,
  emoji,
  description,
  isExpanded,
  onToggle,
  data,
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
            />

            <ProcessSection
              title={data.tracks.delivery.title}
              emoji="🚚"
              description={data.tracks.delivery.description}
              isExpanded={expandedTracks.delivery}
              onToggle={() => toggleTrack("delivery")}
              data={data.tracks.delivery}
            />
          </div>
        </div>
      )}
    </div>
  )
}
