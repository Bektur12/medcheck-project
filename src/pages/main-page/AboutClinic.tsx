/* eslint-disable no-irregular-whitespace */
import styled from '@emotion/styled'
import React from 'react'
import { clinic, image2, image3, image4 } from '../../assets/indexIcon'

export const AboutClinic = () => {
  return (
    <Container>
      <Description>
        <p>
          Вся наша команда готова обеспечить вам медицинский уход и заботу на самом высоком уровне.
          Наша главная задача — оказать Вам теплый прием и обеспечить самый лучший медицинский уход.
          У нас Вы в хороших руках! В нашей клинике используются только качественные материалы
          и проверенные технологии. Для каждого клиента специалисты нашей клиники разработают
          индивидуальный план лечения, подробно рассказывая о каждом этапе.
        </p>
        <p>
          Доброжелательность и уважительное отношение к пациентам, не только материальная,
          но и моральная ответственность за результаты лечения — все это взято за основу политики
          Medical Clinic. Профессионализм и высокое качество оказываемых услуг помогают нам привлечь
          пациентов которые рекомендуют нас своим родным и близким.
        </p>
        <p>
          Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя и развивая передовые
          методы лечения для сохранения здоровья наших пациентов.{' '}
        </p>
        <h2 style={{ color: '#048741', marginTop: '70px' }}>Читать подробнее о клинике </h2>
      </Description>
      <Images>
        <img src={clinic} />
        <div className='inner_image'>
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
        </div>
      </Images>
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  gap: 20%;
  margin-top: 60px;
`
const Images = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 26px;
  .inner_image {
    display: flex;
    gap: 30px;
  }
`

const Description = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 40%;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #4d4e51;
`
