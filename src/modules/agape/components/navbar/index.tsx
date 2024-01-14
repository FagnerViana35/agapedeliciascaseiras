import { Box } from "@/modules/shared/components/Box";
import { CloseOpenMenu, ContainerNavBar, HamburgerMenu, LogoNavBar, MenuMobile, MenuNavBarLink, MenuNavBarUl } from "./styles";
import Image from 'next/image'
import Link from 'next/link';
import CustomLink from "@/modules/shared/components/Link";
import { NavBarMobile } from "../navBarMobile";

export const NavBar = () => {
    return(
        <ContainerNavBar
        css={{
            //px: '$16',
            margin: '0px auto',
            zIndex:'9999',
            //maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'fixed',
            top: '0',
            paddingLeft: '30px',
            marginLeft: '-10px',
            width:'100%',
            '@lg': {
              //px: 0,
            },
          }}>
          {/* <HamburgerMenu 
            css={{
                '@media (max-width: 768px)': {
                    display: 'none',
                  }
            }}
           > */}
            <LogoNavBar>
            <Link href="/">
                <Image src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} />
            </Link>
            </LogoNavBar>
            <MenuNavBarUl 
             css={{
                paddingRight: '60px',
            }}
            >
                <MenuNavBarLink>
                    <CustomLink href="#about">Quem Somos</CustomLink>
                </MenuNavBarLink>
                <MenuNavBarLink>
                    <CustomLink href="#product">Nossos Produtos</CustomLink>
                </MenuNavBarLink>
                <MenuNavBarLink>
                    <CustomLink href="#form_contact">Contato</CustomLink>
                </MenuNavBarLink>
            </MenuNavBarUl>  

            {/* </HamburgerMenu>
            <MenuMobile css={{
                display: 'none',
                '@media (max-width: 768px)': {
                    display: 'block',
                  }
            }}>
                <NavBarMobile/>   */}
            {/* </MenuMobile> */}
        </ContainerNavBar>
    );
}