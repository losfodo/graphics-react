import React, { InputHTMLAttributes } from 'react';//InputHTMLAttributes:possui todos os atributos de um input html

import { Container }  from './styles'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;//recebe na interface o InputHTMLAttributes recebendo HTMLInputElement com elementos de input

const Input: React.FC<IInputProps> = ({ ...rest }) => (
    <Container {...rest} />//passa para o container ...rest com todas essa propriedades react de input
);

export default Input;//exporta tudo