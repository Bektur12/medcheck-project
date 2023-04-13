import styled from '@emotion/styled'
import React, { FC, useCallback } from 'react'
import { Button } from '../../components/UI/Button'
import SectionTitle from '../../components/UI/SectionTitle'

export const ServicesMed: FC = () => {
  const render = useCallback(() => {
    return [1, 2, 3, 4, 5, 6, 7].map((item) => {
      return (
        <CardContent key={item}>
          <Card key={item}>sd</Card>
          <span>{item}</span>
        </CardContent>
      )
    })
  }, [])
  return (
    <Container>
      <InnerContainer>
        <SectionTitle text='Наши' active='услуги' />
        <p>За все время работы клиника приняла более 1 млн. пациентов.</p>
        <div> {render()}</div>
      </InnerContainer>
      <Button width='147px'>Смотреть все</Button>
    </Container>
  )
}

const Card = styled('div')`
  height: 20vh;
  width: 70%;
  background-color: red;
  border-radius: 18px;
`
const CardContent = styled('div')`
  display: flex;
  flex-direction: column;
  width: 30%;
`
const InnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 35px;
`
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 120px;
  div {
    display: flex;
  }

  span {
    color: #048741;
  }
  p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #222222;
  }
`
