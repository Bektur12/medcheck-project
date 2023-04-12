import React from 'react'
import { styled } from '@mui/material'
import {
  Telegram,
  Instagram,
  Whatsapp,
  ClockIcon,
  LabelIcon,
  MedCheckIcon,
  Profile,
} from '../assets/indexIcon'
import { Input } from '../components/UI/Input'
import { Button } from '../components/UI/Button'

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
        <IconContainer>
          <Instagram />
          <Telegram />
          <Whatsapp />
        </IconContainer>
        <HeaderNumber>
          <span>+996(800) 000 000</span>
          <span>+996(505) 000 000</span>
        </HeaderNumber>
        <Profile />
      </HeaderTop>
      <HeaderBottom>
        <MedCheckIcon />
        <div>
          <a>О клинике</a>
          <a>Услуги</a>
          <a>Врачи</a>
          <a>Прайс</a>
          <a>Контакты</a>
        </div>
        <Button width='90%'>получить результаты</Button>
        <Button variant='outlined' width='158px'>
          запись онлайн
        </Button>
      </HeaderBottom>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled('div')`
  width: 100%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`

const HeaderInfo = styled('div')`
  display: grid;
  grid-template-columns: 1% 100%;
  row-gap: 4px;
  column-gap: 10%;
`

const HeaderTop = styled('div')`
  display: grid;
  grid-template-columns: 30% 30% 10% 12% 10%;
  column-gap: 35px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 12px;
`

const HeaderNumber = styled('div')`
  display: flex;
  flex-direction: column;
`
const IconContainer = styled('div')`
  display: flex;
  gap: 10px;
`

const HeaderBottom = styled('div')`
  display: grid;
  grid-template-columns: 25% 37% 20% 20%;
  align-items: center;
  div {
    display: flex;
    gap: 30px;
  }
`
