import { Box } from "@/modules/shared/components/Box";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { ContainerHome } from "./styles";
import { Banner } from "../components/banner";

export const HomePage = () => {
 
return(
  <ContainerHome>
    <Box
    css={{
        py: '$12',
        px: '$16',
        margin: '0 auto',
        maxWidth: '1200px',
        background: 'F6EBDA',
        '@lg': {
          px: 0,
        },
      }}
    >
    <NavBar />
    <Box
    css={{
        py: '$34',
        px: '$16',
        margin: '0 auto',
        maxWidth: '1200px',
        background: 'F6EBDA',
        '@lg': {
          px: 0,
        },
      }}
    >
      <Banner />
    </Box>
    </Box>
    <Footer />
  </ContainerHome>
 );
}