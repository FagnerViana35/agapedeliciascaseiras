import { Box } from "@/modules/shared/components/Box";
import { CloseOpenMenu, HamburgerMenu, LogoNavBar, MenuMobile, MenuNavBarLink, MenuNavBarUl } from "./styles";
import Image from 'next/image'
import CustomLink from "@/modules/shared/components/Link";
import { NavBarMobile } from "../navBarMobile";

export const NavBar = () => {
    return(
        <Box
        css={{
            //px: '$16',
            margin: '0 auto',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            '@lg': {
              px: 0,
            },
          }}>
          <HamburgerMenu 
            css={{
                '@media (max-width: 768px)': {
                    display: 'none',
                  }
            }}
           >
            <LogoNavBar>
            <Image src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} />
            </LogoNavBar>
            <MenuNavBarUl 
             css={{
                '@media (max-width: 768px)': {
                    display: 'none',
                  },
            }}>
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
            </HamburgerMenu>
            <MenuMobile css={{
                display: 'none',
                '@media (max-width: 768px)': {
                    display: 'block',
                  }
            }}>
                <NavBarMobile/>  
            </MenuMobile>
        </Box>
    );
}