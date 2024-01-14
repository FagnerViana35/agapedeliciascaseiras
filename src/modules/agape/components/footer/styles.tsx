import { styled } from "@stitches/react";

export const FooterContainer = styled('footer', {
    textAlign: 'center',
    backgroundColor: '#F6EBDA',
    position: 'fixed',
    bottom: '0',
    marginLeft: '-10px',
    width: '100%',
    '@lg': {
      padding: '20px',
  },

})

export const FooterText = styled('p', {
  fontSize: '14px',
  color: '#777'
})

export const FooterLink = styled('a', {
  color: '#555',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline'
  }
})

export const Versiculo = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  
  color: '#555',
  fontSize: '$md',
  margin: '0 30px'
})

export const LinkMidias = styled('div', {
  color: '#555',
  textDecoration: 'none',
  fontSize: '$mb',
  marginBottom: '12px'
})

export const SpanVersiculo = styled('span', {
  color: '#555',
  textDecoration: 'none',
  fontSize: '$xs',
  float: 'right',
  margin: '0 10px'
})

