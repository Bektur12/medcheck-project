import styled from '@emotion/styled'
import React from 'react'
import {
  Telegram,
  Instagram,
  Whatsapp,
  Location,
  Clock,
  Telephone,
  Message,
  MedCheckIcon,
} from '../assets/indexIcon'

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Heading>
          <MedCheckIcon />
          <h3>Медицинская клиника «MedCheck»</h3>
          <p>
            Международная Медицинская клиника «MedCheck» — это клиника, в которой применяются
            новейшие диагностические и лечебные технологии и ведут прием лучшие специалисты.
          </p>
        </Heading>
        <ContactInfo>
          <h2>Контактная информация</h2>
          <FormContact>
            <Location />
            <span>106452, г. Бишкек, Гражданская 119</span>
            <Clock />
            <span>пн-сб 08:00 до 18:00 </span>
            <Telephone />
            <span>
              +996(800) 000 000
              <br /> +996(505) 000 000
            </span>
            <Message />
            <span>medchek.kg</span>
          </FormContact>
        </ContactInfo>
        <SocialNetworkContainer>
          <h2>Мы в социальных сетях:</h2>
          <div>
            <Instagram />
            <Telegram />
            <Whatsapp />
          </div>
        </SocialNetworkContainer>
      </Container>

      <BottomPart>
        <li>О клинике</li>
        <li>Услуги</li>
        <li>Врачи</li>
        <li>Прайс</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </BottomPart>
      <CopyRight>© Peaksoft House 2023 | MedCheck | Все права защищены</CopyRight>
    </FooterContainer>
  )
}

const FooterContainer = styled('footer')`
  background: #212529;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #cccccc;
  height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 68px 120px 0px 120px;
  align-items: center;
  gap: 50px;
`

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`

const SocialNetworkContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    gap: 12px;
  }
`
const Heading = styled('div')`
  width: 20%;
  display: grid;
  grid-template-rows: 100px 50px 20px;
`
const FormContact = styled('div')`
  display: grid;
  grid-template-columns: 10% 100%;
  row-gap: 10px;
`
const BottomPart = styled('div')`
  display: flex;
  list-style: none;
  gap: 24px;
  border-bottom: 1px solid #6f7074;
  padding-bottom: 48px;
  width: 100%;
  justify-content: center;
`
const ContactInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 33px;
`

const CopyRight = styled('h6')`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #959595;
`
