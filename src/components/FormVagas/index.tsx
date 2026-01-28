import { FormEvent, useState } from 'react'
import FormSearch, { ButtonSearch, InputSearch } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <FormSearch onSubmit={aoEnviarForm}>
      <InputSearch
        type="search"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
      />
      <ButtonSearch type="submit">Pesquisar</ButtonSearch>
    </FormSearch>
  )
}

export default FormVagas
