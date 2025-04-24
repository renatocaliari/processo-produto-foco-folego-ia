// Este arquivo re-exporta os dados do diretório data sem modificar os arquivos originais
import { processData } from "./data"

// Re-exportar todos os dados necessários
export { processData }

// Dados de backup para garantir que a aplicação funcione mesmo se houver problemas com as importações originais
export const backupProcessData = {
  compreensao: {
    title: "aprendizado do espaço do problema e solução",
    description: "etapas para compreender o espaço do problema, descobrir oportunidades e definir soluções",
    stages: [],
  },
  definicao: {
    title: "definição",
    description: "etapas para definir o problema e a solução",
    stages: [],
  },
  implementacao: {
    title: "implementação",
    description: "etapas para implementar a solução definida",
    tracks: {
      delivery: {
        title: "delivery",
        description: "etapas para entregar a solução em produção",
        stages: [],
      },
      discovery: {
        title: "discovery",
        description: "etapas para descobrir e validar a solução",
        stages: [],
      },
    },
  },
  folego: {
    title: "fôlego",
    description: "atividades para manter o ritmo e a qualidade do processo",
    content: [],
  },
}
