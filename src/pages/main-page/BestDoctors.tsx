/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { styled } from '@mui/material'
import { dataDoctors } from '../../utils/constants'
import SectionTitle from '../../components/UI/SectionTitle'
import { Button } from '../../components/UI/Button'

const BestDoctors = () => {
  return (
    <>
      <SectionTitle active='врачи' text='Лучшие' />
      <Description>
        Попасть в команду медицинской клиники «MedCheck» могут
        <br /> только лучшие специалисты с многолетней практикой и доказанным опытом.
      </Description>
      <Content>
        <DoctorsInfo>
          {dataDoctors.map((item) => (
            <Card key={Math.random()}>
              <Image src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span>{item.position}</span>
            </Card>
          ))}
        </DoctorsInfo>
        <Button>Все врачи клиники</Button>
      </Content>
    </>
  )
}

export default BestDoctors

const Image = styled('img')``

const DoctorsInfo = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  text-align: center;
  margin: 60px 0 40px 0;
`
const Description = styled('p')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #222222;
  margin-top: 34px;
`
const Content = styled('div')`
  text-align: center;
`
const Card = styled('p')`
  font-style: normal;
  font-family: 'Manrope';
  font-weight: 500;
  line-height: 19px;
  h3 {
    font-size: 16px;
  }
  span {
    font-size: 14px;
    color: #959595;
  }
`
