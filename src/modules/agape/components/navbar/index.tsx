import { Box } from "@/modules/shared/components/Box";
import { LogoNavBar, MenuNavBarLi, MenuNavBarUl } from "./styles";
import Image from 'next/image'
import CustomLink from "@/modules/shared/components/Link";

export const NavBar = () => {
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
        <LogoNavBar>
        <Image src="/image/logo-agape.png" alt="Logo_Agape" width={100} height={50} />
        </LogoNavBar>
        <MenuNavBarUl>
            <MenuNavBarLi>
                <CustomLink href="/sobre">Sobre Nós</CustomLink>
            </MenuNavBarLi>
            <MenuNavBarLi>
                <CustomLink href="/sobre">Sobre Nós</CustomLink>
            </MenuNavBarLi>
            <MenuNavBarLi>
                <CustomLink href="/sobre">Sobre Nós</CustomLink>
            </MenuNavBarLi>
        </MenuNavBarUl>   
        </Box>
    );
}