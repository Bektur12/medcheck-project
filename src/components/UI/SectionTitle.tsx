import React, { FC } from 'react'
import { styled } from '@mui/material'

type SectionProps = {
  text: string
  active: string
}
const SectionTitle: FC<SectionProps> = ({ text, active }) => {
  return (
    <Content>
      {text} <span> {active}</span>
    </Content>
  )
}

export default SectionTitle

const Content = styled('h2')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  color: #222222;
  span {
    color: #048741;
  }
`
