import { User, Bot, UserCog } from "lucide-react"

interface ResponsibleLegendProps {
  className?: string
}

export function ResponsibleLegend({ className = "" }: ResponsibleLegendProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          <User size={18} />
        </div>
        <span>Humano</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          <Bot size={18} />
        </div>
        <span>IA</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          <UserCog size={18} />
        </div>
        <span>Humano com Assistência de IA</span>
      </div>
    </div>
  )
}
