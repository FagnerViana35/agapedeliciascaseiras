import { Box } from "@/modules/shared/components/Box";
import { CloseOpenMenu, HamburgerMenu, LogoNavBar, MenuNavBarLink, MenuNavBarUl } from "./styles";
import Image from 'next/image'
import CustomLink from "@/modules/shared/components/Link";
import { useState } from "react";

export const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

    return(
        <Box
        css={{
            px: '$16',
            margin: '0 auto',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            '@lg': {
              px: 0,
            },
          }}>
        <HamburgerMenu>
        {!isMenuOpen && (
          <>
            <LogoNavBar>
            <Image src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} />
            </LogoNavBar>
            <MenuNavBarUl>
                <MenuNavBarLink>
                    <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLink>
                <MenuNavBarLink>
                    <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLink>
                <MenuNavBarLink>
                    <CustomLink href="/sobre">Sobre Nós</CustomLink>
                </MenuNavBarLink>
            </MenuNavBarUl>    
          </>
        )}
            <CloseOpenMenu onClick={() => toggleMenu()}>
              AQUI
            </CloseOpenMenu>
        </HamburgerMenu>
        </Box>
    );
}