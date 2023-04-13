import React, { FC } from 'react'
import { styled } from '@mui/material'

interface SectionProps {
  number: number
  title: string
  description: string
}
const SectionTwo: FC<SectionProps> = ({ number, title, description }) => {
  return (
    <Container>
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p> {description}</p>
    </Container>
  )
}

export default SectionTwo

const Container = styled('div')`
  background-color: #dbebff;
  width: 389px;
  height: 280px;
  font-family: 'Manrope';
  padding: 30px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 66px;
    color: #048741;
  }
`
