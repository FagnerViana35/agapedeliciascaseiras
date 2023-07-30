import React from 'react';
import { FooterContainer, FooterLink, FooterText, LinkMidias, SpanVersiculo, Versiculo } from './styles';
import Image from 'next/image';
import { Box } from '@/modules/shared/components/Box';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box
        css={{
          px: '$16',
          margin: '0 auto',
          maxWidth: '1200px',
          '@lg': {
            px: 0,
        },
      }}> 
      <LinkMidias>
        Siga-nos nas redes sociais:
        <FooterLink href="https://www.facebook.com/seu-facebook">
          Facebook
        </FooterLink>
        <FooterLink href="https://www.instagram.com/seu-instagram">
          Instagram
        </FooterLink>
      </LinkMidias>
      <Versiculo>
      <Image
      src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} /> 
        <FooterText>
        &ldquo;Eu sou o Alfa e o Omega, o principio e o fim, o promeiro e o derradeiro.&rdquo;  
        <br />
        <SpanVersiculo>
          Apocalipse 22:13.{' '}
        </SpanVersiculo>
        </FooterText>
      </Versiculo>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
