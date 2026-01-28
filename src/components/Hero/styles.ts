import styled from 'styled-components'
import { Cores } from '../../styles'

const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

    @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Cores.corPrincipal};
    content: '';
    opacity: 0.7;
    z-index: 1;

`

export const HeroTitle = styled.h2`
  position: relative;
  font-family: Gloock, serif;
  font-size: 40px;
  color: ${Cores.corSecundaria};
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export default FormHero
