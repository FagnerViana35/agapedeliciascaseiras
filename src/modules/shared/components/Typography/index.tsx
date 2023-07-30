import { styled } from '@/styles'
import { fontSizes } from '@/styles/tokens'
import { ReactNode } from 'react'

const Paragraph = styled('p', {
  margin: 0,
  padding: 0,
})

const Caption = styled('p', {
  margin: 0,
  padding: 0,
  fontSize: '$xs',
  color: '$low-light',
})

const Title1 = styled('h1', {})
const Title2 = styled('h2', {})
const Title3 = styled('h3', {})
const Title4 = styled('h4', {})
const Title5 = styled('h5', {})
const Title6 = styled('h6', {})

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption'
  children: ReactNode
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
}

const TypographyBase = ({
  variant = 'body',
  children,
  size,
  ...props
}: TypographyProps) => {
  switch (variant) {
    case 'h1':
      return (
        <Title1 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title1>
      )
    case 'h2':
      return (
        <Title2 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title2>
      )
    case 'h3':
      return (
        <Title3 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title3>
      )
    case 'h4':
      return (
        <Title4 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title4>
      )
    case 'h5':
      return (
        <Title5 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title5>
      )
    case 'h6':
      return (
        <Title6 css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Title6>
      )
    case 'caption':
      return <Caption {...props}>{children}</Caption>
    default:
      return (
        <Paragraph css={size && { fontSize: fontSizes[size] }} {...props}>
          {children}
        </Paragraph>
      )
  }
}

export const Typography = styled(TypographyBase, {
  fontFamily: 'Inter',
})
