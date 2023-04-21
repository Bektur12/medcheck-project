import React from 'react'
import styled from '@emotion/styled'
import { Input } from '../../components/UI/Input'
import { Button } from '../../components/UI/Button'
import doctorImage from '../../assets/image/doctor.png'

export const ContactForm = () => {
  return (
    <FormImage>
      <FormContainer>
        <FormWrapper>
          <FormTitle>Оставьте заявку</FormTitle>
          <FormDescription>
            Оставьте свой номер и наши специалисты свяжутся с Вами
            <br /> в ближайшее время
          </FormDescription>
          <FormInputWrapper>
            <div>
              <FormInputLabel>Как к Вам обратиться?</FormInputLabel>
              <Input />
            </div>
            <div>
              <FormInputLabel>Номер мобильного телефона</FormInputLabel>
              <Input />
            </div>
          </FormInputWrapper>
          <Button variant='outlined'>ОТПРАВИТЬ ЗАЯВКУ</Button>
        </FormWrapper>
      </FormContainer>
    </FormImage>
  )
}

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  font-family: 'Manrope', sans-serif;
  color: #222222;
  background-color: #dbebff;
  border-radius: 20px;
  width: 40%;
  height: 40%;
  padding: 71px 70px;
  position: relative;
  z-index: 1;
  left: 200px;
`

const FormWrapper = styled('div')`
  text-align: center;
`

const FormTitle = styled('h2')`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
`

const FormDescription = styled('p')`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
`

const FormInputWrapper = styled('div')`
  display: flex;
  margin-bottom: 20px;
`

const FormInputLabel = styled('label')`
  margin-bottom: 5px;
`

const FormImage = styled('div')`
  width: 100%;
  height: 100%;
  background-image: url(${doctorImage});
  background-repeat: no-repeat;
  background-position: left 70% top 90%;
  padding-top: 100px;
  margin-bottom: 120px;
`
