"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { ExperimentationModal } from "./experimentation-modal"

export function ExperimentationCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-amber-100 text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <Sparkles className="w-5 h-5" />
          <span>✨ Saiba como experimentar</span>
        </button>
      </div>

      <ExperimentationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
