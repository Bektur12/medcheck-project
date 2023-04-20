import React from 'react'
import { Input } from '../../components/UI/Input'
import styled from '@emotion/styled'
import { Button } from '../../components/UI/Button'
import doctor from '../../assets/image/doctor.png'

export const Form = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Оставьте заявку</Title>
        <Description>
          Оставьте свой номер и наши специалисты свяжутся с Вами
          <br /> в ближайшее время
        </Description>
        <WrapperInput>
          <InputContainer>
            <InputLabel>Как к Вам обратиться?</InputLabel>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputLabel>Номер мобильного телефона</InputLabel>
            <Input />
          </InputContainer>
        </WrapperInput>
        <Button variant='outlined'>ОТПРАВИТЬ ЗАЯВКУ</Button>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  color: #222222;
  background: #dbebff;
  border-radius: 20px;
  width: 40%;
  height: 40%;
  padding: 71px 70px;
`
const WrapperInput = styled('div')`
  display: flex;
  gap: 13px;
`

const Title = styled('h2')`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
`

const Description = styled('p')`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`

const InputLabel = styled('label')`
  margin-bottom: 5px;
`

const Container = styled('div')`
  width: 100%;
  background-image: url(${doctor});
  background-repeat: no-repeat;
  background-color: red;
  background-position: left 70% top 90%;
  z-index: 2;
`
