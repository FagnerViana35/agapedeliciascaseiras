import { styled } from "@stitches/react";


export const BannerRigth = styled('div', {
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
  })

export const ContainerBanner = styled('div', {    
    backgroundColor: 'F6EBDA',
    color: '$warning-dark',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      width: '380px'
    }
  })

  

export const BannerLeft = styled('div', {
    color: '$warning-dark',
    paddingTop: '$30',
    paddingRight:'$40',
    '@media (max-width: 768px)': {
      display: 'none',
      paddingTop: '$30',
      paddingBottom: '$30',
    }
});