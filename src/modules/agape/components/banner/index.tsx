import { Box } from "@/modules/shared/components/Box";
import { ContainerBanner, TitleContainer } from "./styles";
import { Text } from "@/modules/shared/components/Text";
import { Typography } from "@/modules/shared/components/Typography";
import { Button } from "@/modules/shared/components/Button";

export const Banner = () =>{
    return(
        <ContainerBanner>
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
            <TitleContainer>
            <Text css={{
                fontSize: '$5xl' 
                }}
                >
                    Ágape Delícias Caseiras
                </Text> 
                <Typography css={{ fontSize: '$2xl'}}>
                    Dedicação e Amor para Encantar o Seu Paladar!
                </Typography>
                <Button css={{mt:'$34'}}>
                    <span>Entrar em Contato</span>
                </Button>
            </TitleContainer>
            </Box>
        </ContainerBanner>
    );
}