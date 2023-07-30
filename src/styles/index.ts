import { utils } from './utils/index'
import {
  colors,
  fonts,
  space,
  fontWeights,
  fontSizes,
  radii,
  media,
} from './tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    // lineHeights,
    radii,
    space,
  },

  media,
  utils,
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '$default',
    fontStyle: 'normal',
    fontWeight: '$regular',
    fontSize: '16px',
    color: '$low-dark',
    backgroundColor: '$high-light',
    '-webkit-font-smoothing': 'antialiased',
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: 'none',
  },
  'h1,h2,h3,h5,h6': {
    margin: '0',
  },
  p: {
    margin: '0',
  },
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  '.ReactModalPortal': {
    '.ReactModal__Content': {
      height: '100vh',
      padding: '64px $24 64px $24 !important',
      '@mdx': {
        height: 'auto',
        maxHeight: 'calc(100vh - 100px)',
        padding: '32px 24px !important',
      },
    },
    '.ReactModal': {
      height: '100vh',
      backgroundColor: '$white',
      borderRadius: '0 !important',
      padding: '32px 16px !important',
      maxWidth: '838px',
      minWidth: '300px',
      transform: 'translate(-50%, -50%)',
      inset: 'none',
      left: '50%',
      top: '50%',
      position: 'relative',
      overflow: 'auto',
      '@mdx': {
        height: 'auto',
        maxHeight: 'calc(100vh - 100px)',
        padding: '32px 24px !important',
        borderRadius: '8px !important',
      },
    },
  },

  '.MuiPickersDay-root, .MuiDayCalendar-weekDayLabel, .MuiPickersYear-root': {
    fontFamily: 'Inter !important',
    color: '$low-pure !important',
    fontSize: '$md !important',
  },

  '.MuiDayCalendar-weekDayLabel': {
    fontWeight: '$bold !important',
    fontSize: '$md !important',
  },

  '.MuiPickersDay-today': {
    borderColor: '$primary-pure !important',
    color: '$primary-pure !important',
    backgroundColor: 'none !important',
  },

  '.MuiPickersDay-root.Mui-selected, .MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '$primary-pure !important',
    color: '$white !important',
  },

  '.MuiPickersPopper-paper': {
    borderRadius: '$lg !important',
  },
})
