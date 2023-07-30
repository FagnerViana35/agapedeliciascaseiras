import { styled } from '@/styles'
import { space } from '@/styles/tokens'

enum axisEnum {
  'X',
  'Y',
}

function generateSpaces(property: string, axis?: number) {
  const sizes: any = {}

  Object.keys(space).forEach((key) => {
    sizes[key] = {}

    if (axis === axisEnum.X) {
      sizes[key][property + 'Left'] = `$${key}`
      sizes[key][property + 'Right'] = `$${key}`
    } else if (axis === axisEnum.Y) {
      sizes[key][property + 'Top'] = `$${key}`
      sizes[key][property + 'Bottom'] = `$${key}`
    } else {
      sizes[key][property] = `$${key}`
    }
  })

  return sizes
}

export const BoxVariants = {
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    fullHeight: {
      true: {
        height: '100vh',
      },
    },
    flex: {
      true: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
    justifyContent: {
      'space-between': {
        justifyContent: 'space-between',
      },
      'flex-start': {
        justifyContent: 'flex-start',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      'flex-end': {
        alignItems: 'flex-end',
      },
    },
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    flexWrap: {
      wrap: {
        flexWrap: 'wrap',
      },
    },
    m: generateSpaces('margin'),
    mx: generateSpaces('margin', axisEnum.X),
    my: generateSpaces('margin', axisEnum.Y),
    ml: generateSpaces('marginLeft'),
    mr: generateSpaces('marginRight'),
    mt: generateSpaces('marginTop'),
    mb: generateSpaces('marginBottom'),
    p: generateSpaces('padding'),
    px: generateSpaces('padding', axisEnum.X),
    py: generateSpaces('padding', axisEnum.Y),
    pl: generateSpaces('paddingLeft'),
    pr: generateSpaces('paddingRight'),
    pt: generateSpaces('paddingTop'),
    pb: generateSpaces('paddingBottom'),
  },
}

export const Box = styled('div', BoxVariants)
