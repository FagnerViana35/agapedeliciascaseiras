import { styled } from "@stitches/react";

export const LogoNavBar = styled('div', {
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
  })

  
export const MenuNavBarUl = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
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

    })
  
  export const HamburgerMenu = styled('div', {
      display: 'flex',
      border: 'none',
      backgroundColor: '#fff',
      width: '100%',
      justifyContent: 'space-between',
      // display: 'none',
      // zIndex: '10',
      // position: 'absolute',
      // top: '0',
      // right: '0',
      // padding: '0.5rem',
      // backgroundColor: '#ccc',
      // border: 'none',
      // cursor: 'pointer',
      // '&:hover': {  
      //   backgroundColor: '#ddd' 
      // }
    });