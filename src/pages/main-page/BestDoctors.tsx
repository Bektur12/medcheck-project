/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { styled } from '@mui/material'
import { dataDoctors } from '../../utils/constants'
import SectionTitle from '../../components/UI/SectionTitle'

const BestDoctors = () => {
  return (
    <div>
      <SectionTitle active='врачи' text='Лучшие' />
      <Description>
        Попасть в команду медицинской клиники «MedCheck» могут
        <br /> только лучшие специалисты с многолетней практикой и доказанным опытом.
      </Description>
      <DoctorsInfo>
        {dataDoctors.map((item) => (
          <div key={Math.random()}>
            <Image src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.position}</span>
          </div>
        ))}
      </DoctorsInfo>
    </div>
  )
}

export default BestDoctors

const Image = styled('img')``

const DoctorsInfo = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  text-align: center;
`
const Description = styled('p')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #222222;
`
