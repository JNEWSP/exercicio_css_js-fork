import styled, { createGlobalStyle } from 'styled-components'

const EstiloGLobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
  }
}
export const Cores = {
  corPrincipal: '#6edf05ff',
  corSecundaria: '#f9f5e7'
}

export default EstiloGLobal
