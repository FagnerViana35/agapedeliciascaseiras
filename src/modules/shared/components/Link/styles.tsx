import { styled } from "@stitches/react";

export const StyledLink = styled('span', {
  'a': {
    textDecoration: 'none',
    color: 'red',
  },
  color: '$primary-pure',
  padding: 'auto',
  borderRadius: '0.3em',
  //backgroundColor: '$primary-pure',
  fontSize: '16px',
  textDecorationStyle: 'none',
  transition: 'background-color 0.3s ease',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: 'gray',
    color: 'white',
  },
  })

