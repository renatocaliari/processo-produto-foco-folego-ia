"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface CareerPathModalProps {
  pathId: string
  onClose: () => void
}

export default function CareerPathModal({ pathId, onClose }: CareerPathModalProps) {
  const [content, setContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true)
        // O problema pode estar aqui - o caminho pode estar incorreto ou o arquivo pode não existir
        const response = await fetch(`/career-paths/${pathId}.md`)

        // Verificar se a resposta foi bem-sucedida
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
  }, [pathId])

  // Impedir o scroll do body quando o modal está aberto
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Adicionar log para debug
  useEffect(() => {
    console.log("Conteúdo carregado:", content)
  }, [content])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b-2 border-black flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {pathId === "product-manager" && "Trilha: Product Manager"}
            {pathId === "product-designer" && "Trilha: Product Designer"}
            {pathId === "product-developer" && "Trilha: Product Developer"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
          ) : (
            // Usar a classe prose para estilizar o markdown
            <div className="prose max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>

        <div className="p-4 border-t-2 border-black flex justify-end">
          <button
            onClick={onClose}
            className="bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
