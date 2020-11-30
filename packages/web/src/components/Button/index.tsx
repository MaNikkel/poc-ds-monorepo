import React from 'react'
import { ButtonStyled } from './styles'

const Button: React.FC = ({ children }) => {
  return <ButtonStyled color="blue">{children}</ButtonStyled>
}

export default Button
