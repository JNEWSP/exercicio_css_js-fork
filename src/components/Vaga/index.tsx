import VacanciesList, { VacanciesLink, VacanciesTitle } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <VacanciesList>
    <VacanciesTitle>
      <h3>{titulo}</h3>
    </VacanciesTitle>
    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <VacanciesLink href="#">Ver detalhes e candidatar-se</VacanciesLink>
  </VacanciesList>
)

export default Vaga
