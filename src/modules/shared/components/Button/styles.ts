import { keyframes } from '@stitches/react'
import { styled } from '../../../../styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  height: '$48',
  color: '$white',
  fontSize: '$md',
  fontWeight: '$semibold',
  fontFamily: '$default',
  borderRadius: '$full',
  '-moz-border-radius': '$full',
  '-ms-border-radius': '$full',
  '-o-border-radius': '$full',
  boxSizing: 'border-box',
  border: '0',
  transition: 'color 0.2s, background-color 0.2s',
  padding: '0 $24',
  cursor: 'pointer',
  span: {
    textAlign: 'center',
    flex: 1,
  },
  '&:disabled': {
    color: '$low-light',
    backgroundColor: '$high-medium',
    border: '$high-medium',
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$primary-pure',
        '&:not(:disabled):hover': {
          transition: 'color 0.2s, background-color 0.2s',
          '@mdx': {
            color: '$primary-pure',
            backgroundColor: '$primary-light',
          },
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$secondary-dark',
        '&:not(:disabled):hover': {
          transition: 'color 0.2s, background-color 0.2s',
          '@mdx': {
            backgroundColor: '$secondary-light',
            color: '$secondary-pure',
          },
        },
      },
      icon: {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        height: 'inherit',
        '&:not(:disabled):hover': {
          transition: 'color 0.2s, background-color 0.2s',
          backgroundColor: '$primary-light',
          color: '$primary-pure',
        },
      },
      iconShadow: {
        display: 'flex',
        margin: 0,
        background: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$white',
        padding: '$16 ',
        height: 'auto',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 13px 19px 0px',
      },
    },
    isLoading: {
      true: {
        position: 'relative',
        pointerEvents: 'none',
        userSelect: 'none',
      },
    },
    onlyIcon: {
      true: {
        padding: '0',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    size: {
      sm: {
        height: '$32',
      },
      md: {
        height: '$48',
      },
      lg: {
        height: '$56',
      },
    },
    outline: {
      true: {
        backgroundColor: '$white',
        borderRadius: '$full',
        '-moz-border-radius': '$full',
        '-ms-border-radius': '$full',
        '-o-border-radius': '$full',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
  compoundVariants: [
    {
      isLoading: true,
      variant: 'primary',
      css: {
        backgroundColor: '$primary-light !important',
        color: '$primary-light !important',
        '&:hover': {
          color: '$primary-light !important',
        },
      },
    },
    {
      isLoading: true,
      variant: 'secondary',
      css: {
        backgroundColor: '$secondary-light !important',
        color: '$secondary-light !important',
        '&:hover': {
          color: '$secondary-light !important',
        },
      },
    },
    {
      onlyIcon: true,
      size: 'sm',
      css: {
        width: '$32',
      },
    },
    {
      onlyIcon: true,
      size: 'md',
      css: {
        width: '$48',
      },
    },
    {
      onlyIcon: true,
      size: 'lg',
      css: {
        width: '$56',
      },
    },
    {
      outline: true,
      variant: 'primary',
      css: {
        boxShadow: '0 0 0 1px #f61f79', // no safari o outline não funciona, trocado para boxShadow
        color: '$primary-pure',
        background: 'none',
      },
    },
  ],
})

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const prixClipFix = keyframes({
  '0%': {
    clipPath: 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)',
  },
  '25%': {
    clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)',
  },
  '50%': {
    clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)',
  },
  '75%': {
    clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)',
  },
  '100%': {
    clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)',
  },
})

export const Loading = styled('span', {
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  // '-webkit-border-radius': '50%',
  '-moz-border-radius': '50%',
  '-ms-border-radius': '50%',
  '-o-border-radius': '50%',
  position: 'absolute',
  right: 'calc(50% - 22px / 2)',
  animation: `${rotate} 1s linear infinite`,
  '&::before': {
    content: '',
    boxSizing: 'border-box',
    position: 'absolute',
    inset: '0',
    borderRadius: '50%',
    // '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    border: '3px solid $primary-pure',
    animation: `${prixClipFix} 2s linear infinite`,
  },
  variants: {
    variant: {
      primary: {
        '&::before': {
          borderColor: '$primary-pure',
        },
      },
      secondary: {
        '&::before': {
          borderColor: '$secondary-pure',
        },
      },
    },
  },
})
