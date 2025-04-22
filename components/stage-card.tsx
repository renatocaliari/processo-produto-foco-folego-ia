"use client"

import { User, Bot, UserCog } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface StageCardProps {
  stage: any
  filter: string | null
}

export function StageCard({ stage, filter }: StageCardProps) {
  const getResponsibleIcon = (responsible: string) => {
    switch (responsible.toLowerCase()) {
      case "humano":
        return <User className="w-5 h-5" />
      case "ia":
        return <Bot className="w-5 h-5" />
      case "humano com assistência de ia":
        return <UserCog className="w-5 h-5" />
      default:
        return null
    }
  }

  // Get the first responsible party for the icon
  const primaryResponsible =
    stage.responsibles && stage.responsibles.length > 0 ? stage.responsibles[0].toLowerCase() : null

  // Check if this card should be shown based on the filter
  // Correspondência exata em vez de parcial
  if (filter && primaryResponsible && primaryResponsible !== filter.toLowerCase()) {
    return null
  }

  return (
    <div
      className="border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex-shrink-0"
      style={{ width: "300px", height: "400px" }}
    >
      <div className="p-3 font-bold text-lg flex items-center gap-2 border-b-2 border-black">
        {primaryResponsible && (
          <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full flex-shrink-0">
            {getResponsibleIcon(primaryResponsible)}
          </div>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="truncate cursor-help">{stage.title}</span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[300px] bg-white text-black border-black">
              {stage.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
