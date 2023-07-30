import { styled } from '@/styles'

export const Text = styled('p', {
  variants: {
    variant: {
      title: {
        fontSize: '$3xl',
        fontWeight: 'bold',
        color: '$secondary-dark',
        '@mdx': {
          fontSize: '$4xl',
        },
      },
      subtitle: {
        fontSize: '$sm',
        fontWeight: 'bold',
        color: '$primary-pure',
      },
      description: {
        color: '$secondary-dark',
        fontWeight: '$regular',
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'description',
  },
})
