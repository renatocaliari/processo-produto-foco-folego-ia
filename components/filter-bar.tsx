"use client"

import { User, Bot, UserCog, X } from "lucide-react"

interface FilterBarProps {
  activeFilter: string | null
  setActiveFilter: (filter: string | null) => void
}

export function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {
  const filters = [
    { id: "humano", label: "Humano", icon: <User size={16} /> },
    { id: "humano com assistência de ia", label: "Humano com IA", icon: <UserCog size={16} /> },
    { id: "ia", label: "IA", icon: <Bot size={16} /> },
  ]

  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center gap-2 p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-sm font-bold mr-2">Filtrar por:</span>

        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors ${
              activeFilter === filter.id ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200 text-black"
            }`}
          >
            {filter.icon}
            <span className="text-sm">{filter.label}</span>
          </button>
        ))}

        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="ml-2 p-1 rounded-full hover:bg-gray-100"
            title="Limpar filtro"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
