"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface FolegoSectionProps {
  data: any
  emoji?: string
  isExpanded: boolean
  onToggle: () => void
}

export function FolegoSection({ data, emoji, isExpanded, onToggle }: FolegoSectionProps) {
  const isMobile = useIsMobile()

  return (
    <div
      className={`
        border-4 border-black rounded-xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-300 flex-shrink-0 flex flex-col
        ${isExpanded ? "lg:w-1/5" : "lg:w-16"}
      `}
    >
      <button
        onClick={onToggle}
        className={`
          w-full font-bold text-xl flex items-center justify-between p-4
          ${isExpanded ? "border-b-2 border-black" : "h-full"}
          hover:bg-gray-100 relative
        `}
      >
        {!isExpanded && !isMobile ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="transform rotate-90 flex flex-row text-center">
              {isExpanded ? <ChevronRight className="rotate-180" size={20} /> : <ChevronDown size={20} />}
              {emoji && (
                <span role="img" aria-label="Fôlego" className="text-2xl">
                  {emoji}
                </span>
              )}
              fôlego
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              {emoji && (
                <span role="img" aria-label="Fôlego" className="text-2xl">
                  {emoji}
                </span>
              )}
              <span>fôlego</span>
            </div>
            {isExpanded ? <ChevronRight className="rotate-180" size={20} /> : <ChevronDown size={20} />}
          </>
        )}
      </button>

      {isExpanded && (
        <>
          {data.description && (
            <div className="p-4 text-sm border-b-2 border-black">
              <p>{data.description}</p>
            </div>
          )}

          <div className="p-4 flex-grow overflow-y-auto">
            <ul className="list-disc pl-5 space-y-2">
              {data.content.map((item: string, index: number) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
