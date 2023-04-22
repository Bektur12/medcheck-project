import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ReactComponent as ExpandMoreIcon } from '../../../assets/image/arrow.svg'
import styled from '@emotion/styled'
import { MenuItem } from '@mui/material'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

export const Select = () => {
  return (
    <AccordionStyle>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>hello</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {names?.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </AccordionDetails>
    </AccordionStyle>
  )
}

const AccordionStyle = styled(Accordion)(() => ({
  width: '100%',
  borderRadius: '16px',
  boxShadow: 'none',
  borderTop: 'none',
}))
