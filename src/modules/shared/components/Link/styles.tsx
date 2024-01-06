import { styled } from "@stitches/react";

export const StyledLink = styled('span', {
  textDecoration: 'none',
  color: 'blue',
  padding: 'auto',
  borderRadius: '0.3em',
  backgroundColor: '$primary-pure',
  transition: 'background-color 0.3s ease',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: 'gray',
    color: 'white',
  },
  })

