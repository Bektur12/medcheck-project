/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { styled } from '@mui/material'
import image from '../../assets/image/Mask.png'
import { Button } from '../../components/UI/Button'
import SectionTwo from './SectionTwo'
import { ServicesMed } from './ServicesMed'
import BestDoctors from './BestDoctors'
import SectionTitle from '../../components/UI/SectionTitle'
import { AboutClinic } from './AboutClinic'
import { ContactForm } from './ContactForm'

export const MainPage = () => {
  return (
    <Container>
      <LandingHero>
        <InnerContainer>
          <h1>Добро пожаловать в клинику MedCheck</h1>
          <Title>
            Международный Медицинская клиника «MedCheck — это клиника, в которой применяются
            новейшие диагностические и лечебные технологии и ведут прием лучшие специалисты.
          </Title>
          <Button>оставьте заявку</Button>
        </InnerContainer>
      </LandingHero>
      <ServicesSection>
        <SectionTitle text='Почему' active='нас выбирают?' />
        <div>
          <SectionTwo />
        </div>
      </ServicesSection>
      <ServicesMed />
      <AboutOurClinic>
        <SectionTitle text='О нашей клинике' active='“MedCheck”' />
        <AboutClinic />
      </AboutOurClinic>
      <BestDoctors />
      <ContactForm />
    </Container>
  )
}

const Container = styled('div')`
  padding: 22px 120px 0px 120px;
  height: 100%;
  h1 {
    background: linear-gradient(90deg, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    width: 40%;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 900;
    line-height: 67px;
  }
`

const LandingHero = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  background-repeat: no-repeat;
  height: 70vh;
  background-image: url(${image});
  background-position: left 99% top 10%;
`

const InnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: start;
`

const Title = styled('p')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  width: 50%;
  color: #222222;
`

const ServicesSection = styled('div')`
  div {
    margin-top: 50px;
    display: flex;
    gap: 19px;
    width: 100%;
  }
`
const AboutOurClinic = styled('div')`
  margin: 120px 0px 120px 0px;
`
