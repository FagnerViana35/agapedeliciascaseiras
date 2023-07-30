import React from 'react';
import { styled } from '@stitches/react';

const ErrorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
});

const ErrorHeading = styled('h1', {
  fontSize: '3rem',
  color: '#e74c3c',
  marginBottom: '1rem',
});

const ErrorMessage = styled('p', {
  fontSize: '1.5rem',
  color: '#333',
});

const ErrorImage = styled('img', {
  width: '500px',
  height: '500px',
  marginBottom: '2rem',
});

const Erro404: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorHeading>404 - Página não encontrada</ErrorHeading>
      <ErrorImage src="/image/404error.jpg" alt="Error 404" />
      <ErrorMessage>Desculpe, a página que você está procurando não existe.</ErrorMessage>
    </ErrorContainer>
  );
};

export default Erro404;
