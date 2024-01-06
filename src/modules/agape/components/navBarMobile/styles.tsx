import { styled } from "@stitches/react";

export const LogoNavBar = styled('div', {
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
  })

  
export const MenuNavBarUl = styled('ul', {
  display: 'flex',
  justifyItems: 'center',
  //alignItems: 'center',
  justifyContent: 'center', // Centraliza horizontalmente
  backgroundColor: 'F6EBDA',
  color: '$warning-dark',
  fontWeight: 'bold',
  flexDirection: 'column',
  position: 'absolute',
  //marginLeft:'-20px'
  //top: '7%', // Coloca o elemento na metade da altura da tela
  //transform: 'translateY(-50%)', // Move o elemento de volta para cima metade da sua altura
  //right: '5%', // Ajuste a posição horizontal conforme necessário
  //left:'3%'  
})

  export const MenuNavBarLink = styled('li', {
    listStyleType: 'none',
    paddingRight: '50px',
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
  })

  export const CloseOpenMenu = styled('button', {
    cursor: 'pointer',
    marginLeft: 'auto',
    })
  
  export const HamburgerMenu = styled('div', {
      display: 'flex',
      border: 'none',
      backgroundColor: '#fff',
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'column',
      justifyItems: 'center',
    });

    export const HamburgerMenuNavBar = styled('div', {
      display: 'flex',
      border: '1px solid red',
      justifyItems: 'center',
      backgroundColor: '#fff',
      width: '110%',
      justifyContent: 'space-between',
    });
    export const HamburgerMenuLink = styled('div', {
      display: 'flex',
      border: 'none',
      backgroundColor: '#fff',
      width: 'auto',
      justifyContent: 'space-between',
    });

    export const MenuNavBarLinkMobile = styled('div', {
      listStyleType: 'none',
      paddingRight: 'auto',
      backgroundColor: '$primary-pure',
      color: '$warning-dark',
      fontWeight: 'bold',
      padding: '0.5rem 8rem',
      textDecoration: 'none',
      border: '1px solid red',
      borderRadius:'4px',
      //width: '100%',
    });