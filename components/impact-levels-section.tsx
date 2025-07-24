"use client"

import type React from "react"
import { GitMerge, RedoDot } from "lucide-react"

export function ImpactLevelsSection() {
  const cards = [
    {
      title: "sistema de sinais de engajamento, parceria e prontidão combinado com um ecossistema de desenvolvimento",
      href: "https://calirenato82.substack.com/p/de-avaliacao-para-sinais-continuos",
      icon: <GitMerge className="w-12 h-12" />,
      color: "bg-purple-100 border-purple-300",
    },
    {
      title: "redesenhando o processo seletivo: sem currículos ou fit cultural",
      href: "https://calirenato82.substack.com/p/redesenhando-o-processo-seletivo",
      icon: <RedoDot className="w-12 h-12" />,
      color: "bg-green-100 border-green-300",
    },
  ]

  return (
    <div id="niveis-impacto" className="mt-20 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="Impacto" className="text-3xl">
          💡
        </span>
        Níveis de impacto, Avaliação e Remuneração
      </h2>

      <div className="flex justify-center gap-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            data-ph-capture-attribute={`card:impact-levels:open-${index}`}
            className={`border-2 border-black rounded-lg ${card.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-6 flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer`}
          >
            <div className="mb-4 bg-white p-4 rounded-full border-2 border-black">{card.icon}</div>
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <button
              className="mt-auto bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors"
              data-ph-capture-attribute={`button:impact-card:view-details-${index}`}
            >
              Ver Detalhes
            </button>
          </a>
        ))}
      </div>
    </div>
  )
}
