"use client"

import { User, Bot, UserCog } from "lucide-react"
import { useState, useRef } from "react"

interface StageCardProps {
  stage: any
}

export function StageCard({ stage }: StageCardProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const titleRef = useRef<HTMLSpanElement>(null)

  const getResponsibleIcon = (responsible: string) => {
    switch (responsible) {
      case "Humano":
        return <User className="w-5 h-5" />
      case "IA":
        return <Bot className="w-5 h-5" />
      case "Humano com Assistência de IA":
        return <UserCog className="w-5 h-5" />
      default:
        return null
    }
  }

  // Check if title is truncated
  const isTitleTruncated = () => {
    const element = titleRef.current
    return element ? element.scrollWidth > element.clientWidth : false
  }

  // Get the first responsible party for the icon
  const primaryResponsible = stage.responsibles && stage.responsibles.length > 0 ? stage.responsibles[0] : null

  return (
    <div
      className="border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex-shrink-0"
      style={{ width: "300px", height: "400px" }}
    >
      <div className="p-3 font-bold text-lg flex items-center gap-2 border-b-2 border-black relative">
        {primaryResponsible && (
          <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full flex-shrink-0">
            {getResponsibleIcon(primaryResponsible)}
          </div>
        )}
        <span
          ref={titleRef}
          className="truncate"
          onMouseEnter={() => setShowTooltip(isTitleTruncated())}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {stage.title}
        </span>

        {showTooltip && (
          <div className="absolute left-0 -top-10 z-50 bg-white border border-black rounded-md px-3 py-1.5 text-sm shadow-md">
            {stage.title}
          </div>
        )}
      </div>

      <div className="p-4 pb-9 overflow-y-auto" style={{ height: "calc(400px - 50px)" }}>
        {stage.details?.comment && (
          <div className="mb-4">
            <p className="text-sm">{stage.details.comment}</p>
          </div>
        )}

        {stage.details?.resources && stage.details.resources.length > 0 && (
          <>
            {stage.details.resources.map((resource: any, resourceIndex: number) => (
              <div key={resourceIndex} className="mb-4">
                <h4 className="font-bold mb-2">{resource.title}:</h4>
                <ul className="list-disc pl-5 text-sm">
                  {resource.items.map((item: any, itemIndex: number) => (
                    <li key={itemIndex} className="mb-1">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
