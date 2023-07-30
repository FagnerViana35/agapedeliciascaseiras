import { styled } from "@stitches/react";

export const FooterContainer = styled('footer', {
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%'
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
  justifyContent: 'space-between',
  color: '#555',
  textDecoration: 'none',
  fontSize: '$md',
  margin: '0 30px',
  '&:hover': {
    textDecoration: 'underline'
  }
})

export const LinkMidias = styled('div', {
  color: '#555',
  textDecoration: 'none',
  fontSize: '$mb',
  '&:hover': {
    textDecoration: 'underline'
  }
})

export const SpanVersiculo = styled('span', {
  color: '#555',
  textDecoration: 'none',
  fontSize: '$xs',
  float: 'right',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline'
  }
})

