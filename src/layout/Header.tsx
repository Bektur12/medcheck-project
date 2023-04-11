import React from 'react'
import { styled } from '@mui/material'
import { Telegram, Instagram, Whatsapp, ClockIcon, LabelIcon, MedCheckIcon } from '../assets/index'
import { Input } from '../components/UI/Input'

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTop>
        <HeaderInfo>
          <LabelIcon />
          <span>106452, г. Бишкек, Гражданская 119</span>
          <ClockIcon /> <span>пн-сб 08:00 до 18:00 </span>
        </HeaderInfo>
        <Input />
        <div>
          <Instagram />
          <Telegram />
          <Whatsapp />
        </div>
      </HeaderTop>
      <div></div>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled('div')`
  width: 100%;
  background-color: red;
  padding: 30px 120px 30px 120px;
`

const Image = styled('img')``

const HeaderInfo = styled('div')`
  display: grid;
  grid-template-columns: 2% 100%;
  row-gap: 4px;
  column-gap: 10%;
`

const HeaderTop = styled('div')`
  display: flex;
  gap: 30px;
`
