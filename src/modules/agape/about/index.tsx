import { ContainerAbout } from './styles';
import { Box } from "@/modules/shared/components/Box";

export const About = () => {
    return(
      <ContainerAbout>
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
          Oi
        </Box>
      </ContainerAbout>
     );
    }