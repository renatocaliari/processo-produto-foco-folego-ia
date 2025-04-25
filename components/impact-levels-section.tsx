"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { TrendingUp, DollarSign, LineChart } from "lucide-react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ImpactCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export function ImpactLevelsSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  // Definição dos cards de impacto (apenas metadados)
  const impactCards: ImpactCard[] = [
    {
      id: "impact-levels",
      title: "Níveis de impacto",
      description: "Entenda os diferentes níveis de impacto e como evoluir na carreira",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "bg-amber-100 border-amber-300",
    },
    {
      id: "avaliacao-desenvolvimento",
      title: "Avaliação e Desenvolvimento",
      description: "Conheça nosso processo de avaliação e desenvolvimento profissional",
      icon: <LineChart className="w-12 h-12" />,
      color: "bg-teal-100 border-teal-300",
    },
    {
      id: "evaluation-compensation",
      title: "Remuneração",
      description: "Entenda nossa estrutura de remuneração e benefícios",
      icon: <DollarSign className="w-12 h-12" />,
      color: "bg-blue-100 border-blue-300",
    },
  ]

  // Carregar o conteúdo do arquivo markdown quando um card é selecionado
  useEffect(() => {
    if (!selectedCard) return

    const fetchContent = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/impact-levels/${selectedCard}.md`)

        if (!response.ok) {
          throw new Error(`Erro ao carregar: ${response.status}`)
        }

        const text = await response.text()
        setContent(text)
      } catch (error) {
        console.error("Erro ao carregar conteúdo:", error)
        setContent("Erro ao carregar o conteúdo. Por favor, tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchContent()
  }, [selectedCard])

  const openModal = (cardId: string) => {
    setSelectedCard(cardId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
    setContent("")
  }

  return (
    <div id="niveis-impacto" className="mt-20 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="Impacto" className="text-3xl">
          📊
        </span>
        Níveis de impacto, Avaliação e Remuneração
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impactCards.map((card) => (
          <div
            key={card.id}
            className={`border-2 border-black rounded-lg ${card.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all p-6 flex flex-col items-center text-center cursor-pointer`}
            onClick={() => openModal(card.id)}
          >
            <div className="mb-4 bg-white p-4 rounded-full border-2 border-black">{card.icon}</div>
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <button className="mt-auto bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <h2 className="text-2xl font-bold">{impactCards.find((card) => card.id === selectedCard)?.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                </div>
              ) : (
                <article className="prose prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-black prose-strong:font-bold max-w-none">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </article>
              )}
            </div>

            <div className="p-4 border-t-2 border-black flex justify-end">
              <button
                onClick={closeModal}
                className="bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
