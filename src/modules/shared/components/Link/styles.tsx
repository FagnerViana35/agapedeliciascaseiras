import { styled } from "@stitches/react";

export const StyledLink = styled('span', {
  color: '$primary-pure',
  padding: 'auto',
  borderRadius: '0.3em',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: 'gray',
    color: 'white',
  }
  })

