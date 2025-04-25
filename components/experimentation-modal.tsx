"use client"

import { useState } from "react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ExperimentationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExperimentationModal({ isOpen, onClose }: ExperimentationModalProps) {
  // Prevent body scroll when modal is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  if (!isOpen) return null

  const content = `
## Como experimentar o processo por partes

* **↔️ Separação de problemas e soluções**: Treine a separação entre delimitação de problema (framing) e definição de solução (shaping)

* **⏱️ Apetite de tempo**: Defina e respeite apetites de tempo em vez de estimativas

* **🔄 Ciclos separados**: Separe ciclos de foco e fôlego para melhor gerenciamento de energia e recursos

* **🤖 Automação com IA**: Automatize etapas com IA dentro de suas próprias ferramentas

* **⚙️ Trilhas paralelas**: Treine trilhas em paralelo com focos em períodos diferentes:
  - Mapeamento de oportunidades (contínuo)
  - Definição de solução (apostas para próximo ciclo)
  - Implementação (apostas definidas no ciclo passado)
`

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b-2 border-black flex justify-between items-center">
          <h2 className="text-2xl font-bold">Como experimentar o processo</h2>
          <button
            onClick={onClose}
            id="experimentation-modal-close"
            name="experimentation-modal-close"
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="prose max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>

        <div className="p-4 border-t-2 border-black flex justify-end">
          <button
            onClick={onClose}
            id="experimentation-modal-close-bottom"
            name="experimentation-modal-close-bottom"
            className="bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
