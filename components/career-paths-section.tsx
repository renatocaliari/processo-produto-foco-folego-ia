"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { FileCode2, Palette, Briefcase } from "lucide-react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface CareerPath {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export function CareerPathsSection() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  // Definição das trilhas de carreira
  const careerPaths: CareerPath[] = [
    {
      id: "product-manager",
      title: "Product Manager",
      description: "Lidere a estratégia e execução de produtos digitais",
      icon: <Briefcase className="w-12 h-12" />,
      color: "bg-blue-100 border-blue-300",
    },
    {
      id: "product-designer",
      title: "Product Designer",
      description: "Crie experiências excepcionais centradas no usuário",
      icon: <Palette className="w-12 h-12" />,
      color: "bg-purple-100 border-purple-300",
    },
    {
      id: "product-developer",
      title: "Product Developer",
      description: "Construa soluções técnicas inovadoras e escaláveis",
      icon: <FileCode2 className="w-12 h-12" />,
      color: "bg-green-100 border-green-300",
    },
  ]

  // Carregar o conteúdo do arquivo markdown quando um caminho é selecionado
  useEffect(() => {
    if (!selectedPath) return

    const fetchContent = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/career-paths/${selectedPath}.md`)

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
  }, [selectedPath])

  const openModal = (pathId: string) => {
    setSelectedPath(pathId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPath(null)
    setContent("")
  }

  return (
    <div id="papeis-evolutivos" className="mt-20 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <span role="img" aria-label="Progressão" className="text-3xl">
          🚀
        </span>
        Papéis evolutivos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {careerPaths.map((path) => (
          <div
            key={path.id}
            onClick={() => openModal(path.id)}
            id={`career-paths-open-${path.id}`}
            data-name={`career-paths-open-${path.id}`}
            className="border-2 border-black rounded-lg bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              {path.icon}
            </div>
            <h3 className="font-bold text-xl mb-2">{path.title}</h3>
            <p className="text-sm mb-4">{path.description}</p>
            <div className="flex justify-center">
              <button
                id={`career-paths-view-${path.id}`}
                name={`career-paths-view-${path.id}`}
                className="mt-auto bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                Ver Trilha
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPath && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b-2 border-black flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                Trilha: {careerPaths.find((path) => path.id === selectedPath)?.title}
              </h2>
              <button
                onClick={closeModal}
                id="career-paths-modal-close"
                name="career-paths-modal-close"
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
                id="career-paths-modal-close-bottom"
                name="career-paths-modal-close-bottom"
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
