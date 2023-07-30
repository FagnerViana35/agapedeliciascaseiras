import { ReactNode } from 'react'
import { ButtonContainer, Loading } from './styles'
import { ComponentProps } from '@stitches/react'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  children?: ReactNode
  as?: any
  href?: string
  target?: string
}

const Button = ({ children, isLoading, variant, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer isLoading={isLoading} variant={variant} {...rest}>
      {children}
      {isLoading ? <Loading variant={variant as any} /> : ''}
    </ButtonContainer>
  )
}

export { Button }
