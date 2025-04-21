import { delimitacaoIdeacaoStages } from "./1-delimitacao-ideacao.data"
import { propostaInicialStages } from "./2-proposta-inicial.data"
import { riscosRefinamentoStages } from "./3-riscos-refinamento.data"
import { prototipacaoDecisaoStages } from "./4-prototipacao-decisao.data"

export const definicaoData = {
  title: "definição",
  description: "etapas para definir o problema e a solução",
  stages: [
    ...delimitacaoIdeacaoStages,
    ...propostaInicialStages,
    ...riscosRefinamentoStages,
    ...prototipacaoDecisaoStages,
  ],
}
