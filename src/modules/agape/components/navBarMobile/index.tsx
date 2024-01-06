import { Box } from "@/modules/shared/components/Box";
import { CloseOpenMenu, HamburgerMenu, HamburgerMenuLink, HamburgerMenuNavBar, LogoNavBar, MenuNavBarLink, MenuNavBarLinkMobile, MenuNavBarUl } from "./styles";
import Image from 'next/image'
import CustomLink from "@/modules/shared/components/Link";
import { useState } from "react";

export const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

    return(
        <Box
        css={{
            margin: '1 auto',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            
        <HamburgerMenu>
          <HamburgerMenuNavBar>
            <LogoNavBar>
              <Image src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} />
            </LogoNavBar>
            <CloseOpenMenu 
              css={{
                //px: '$16',
                justifyContent: 'flex-end',
              }}
            onClick={() => toggleMenu()}>
                  X
            </CloseOpenMenu>
          </HamburgerMenuNavBar>
        
        {!isMenuOpen && (

          <HamburgerMenuLink>
              <MenuNavBarUl>
                <MenuNavBarLinkMobile><br />
                  <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLinkMobile>
                <MenuNavBarLinkMobile>
                  <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLinkMobile>
                <MenuNavBarLinkMobile>
                  <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLinkMobile>
              </MenuNavBarUl>
          </HamburgerMenuLink>
        )}
           
        </HamburgerMenu>
        </Box>
    );
}