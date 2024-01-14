import Carousel from "react-multi-carousel";
import { ResponsiveType } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Box } from "@/modules/shared/components/Box";

const BreakpointSlides: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
};

export const Carossel = () =>{
  return (
    <Box
                css={{
                    px: '$16',
                    margin: '0 auto',
                    maxWidth: '1200px',
                    width: '70%',
                    height: '10%', 
                    justifyContent: 'space-between',
                    '@lg': {
                        px: 0,
                        
                    },
            }}>
    <Carousel
                    responsive={BreakpointSlides}
                    ssr
                    infinite
                    itemClass="carousel-item"
                    autoPlay
                    slidesToSlide={1}
                >
                    <Image
                        alt="padaria_vovo_lucia"
                        src="/image/padaria_vovo_lucia.jpg"
                        priority
                        layout="responsive"
                        width={30}
                        height={30} />
                    <Image
                        alt="padaria_pedra_lua."
                        src="/image/padaria_pedra_lua.jpg"
                        priority
                        layout="responsive"
                        width={100}
                        height={100} />
                    <Image
                        alt="sacolao_emporio_do_campo"
                        src="/image/sacolao_emporio_do_campo.jpg"
                        priority
                        layout="responsive"
                        width={100}
                        height={100} />
                    <Image
                        alt="sacolao_tio_joão"
                        src="/image/sacolao_tio_joão.jpg"
                        layout="responsive"
                        width={100}
                        height={100} />
                    <Image
                        alt="hortifruti-passarinho"
                        src="/image/hortifruti-passarinho.png"
                        layout="responsive"
                        width={100}
                        height={100} />
                </Carousel>
            </Box >
  );
}
