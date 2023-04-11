import React, { FC } from 'react'
import { Button as MuiButton, styled, ButtonProps } from '@mui/material'

type BtnProps = ButtonProps & {
  isDesabled?: boolean
  width?: string
}

export const Button: FC<BtnProps> = ({
  onClick,
  children,
  isDesabled = false,
  width,
  variant = 'contained',
}) => {
  return (
    <StyledButton width={width} onClick={onClick} disabled={isDesabled} variant={variant}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled(MuiButton)(
  ({ width, variant }: { width?: string; variant: string }) => ({
    '&.MuiButton-root': {
      color: variant === 'outlined' ? '#FFFFFF' : '#048741',
      background: variant === 'outlined' ? '#048741' : '#FFFFFF',
      width,
      borderRadius: '24px;',
      textTransform: 'uppercase',
      border: variant === 'outlined' ? '1px solid #FFFFFF ' : '1px solid #048741',
    },
  }),
)
