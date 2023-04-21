import React from 'react'
import { styled } from '@mui/material'
const INFO = [
  {
    number: 1,
    title: 'Высокий профессионализм сотрудников',
    description: 'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.',
  },
  {
    number: 4,
    title: 'Высокий профессионализм сотрудников',
    description: 'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.',
  },
  {
    number: 2,
    title: 'Высокий профессионализм сотрудников',
    description: 'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.',
  },
]

const SectionTwo = () => {
  return (
    <>
      {INFO.map(({ number, title, description }) => (
        <Container key={Math.random()}>
          <h1>{number}</h1>
          <h2>{title}</h2>
          <p> {description}</p>
        </Container>
      ))}
    </>
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
