import { mapeamentoInicialData } from "./1-mapeamento-inicial.data"
import { aprendizadoPublicoData } from "./2-aprendizado-publico.data"
import { analiseQualitativaData } from "./3-analise-qualitativa.data"
import { analiseTendenciasData } from "./4-analise-tendencias.data"
import { feedbackUsuariosData } from "./5-feedback-usuarios.data"
import { analiseDadosProducaoData } from "./6-analise-dados-producao.data"
import { feedbackContinuoData } from "./7-feedback-continuo.data"
import { evolucaoSolucaoData } from "./8-evolucao-solucao.data"

export const compreensaoData = {
  title: "aprendizado do espaço do problema e solução",
  description: "etapas para compreender o espaço do problema, descobrir oportunidades e definir soluções",
  stages: [
    mapeamentoInicialData,
    aprendizadoPublicoData,
    analiseQualitativaData,
    analiseTendenciasData,
    feedbackUsuariosData,
    analiseDadosProducaoData,
    feedbackContinuoData,
    evolucaoSolucaoData,
  ],
}
