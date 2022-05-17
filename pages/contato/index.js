/* eslint-disable */
//External libs
import { Box, Text, Flex, Heading, Button, Divider } from '@chakra-ui/react';
//Chakra UI
import { useMediaQuery } from 'src/components/useMediaQuery';
//Components
import Layout from 'src/components/Templates/Layout';

import Footer from 'src/components/Templates/Footer';

import Banner from 'src/components/AllBannersSliders/Structural/Banner';

//Libs
import { getSliderOurHistory } from 'src/lib/graphcms';

import { Form2 } from 'src/components/Form';

export default function Contato({ sliderNossaHistoria }) {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout corFundo="white">
      <Flex flexDirection={isTabletOrMobile ? 'column-reverse' : 'row'}>
        <Box
          my={isTabletOrMobile ? '-20' : '90'}
          px={isTabletOrMobile ? '10' : '20'}
          alignItems="center"
          justifyContent="center"
        >
          <Heading mb="10" mt="90" pt="0">
            Conheça a nossa fábrica
          </Heading>
          <Text mb="5">
            Sabemos a importância de mostrar “in loco” as particularidades dos
            processos da nossa fabricação, além do grande interesse e
            curiosidade de nossos clientes e parceiros em conhecer mais sobre o
            nosso processo produtivo e o seu caráter humano.{' '}
          </Text>
          <Text mb="5">
            Assim, a Bertolucci é a única fábrica de luminárias do Brasil que
            abre as suas portas e mostra o “como se faz”, tendo como objetivo
            reforçar a singularidade da produção artesanal e a sensibilização da
            mão-de-obra por trás dos nossos produtos.{' '}
          </Text>
          <Text mb="5">
            Cada luminária é única, pois é produzida com amor e inspiração do
            artesão.{' '}
          </Text>
          <Button
            bgColor="blackAlpha.700"
            color="whiteAlpha.900"
            _hover={{ bgColor: 'blackAlpha.900', color: 'whiteAlpha.900' }}
          >
            <a
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
              target="_blank"
              href="https://wa.me/5511945219938?text=Gostei%20dos%20produtos%2C%20podemos%20conversar%20%3F"
            >
              Agende sua visita
            </a>
          </Button>
        </Box>

        <Box w={isTabletOrMobile ? '100%' : '50%'}>
          <Banner isSlider dots arrows>
            {sliderNossaHistoria.map((items, index) => {
              return (
                <Box
                  key={index}
                  h="600px"
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  bgImage={`url(${items.photoNossaHistoriaSlider.url})`}
                  w="full"
                ></Box>
              );
            })}
          </Banner>
        </Box>
      </Flex>

      <Divider
        colorScheme="red"
        size="10"
        orientation="horizontal"
        variant="solid"
      />

      <Flex flexDir={isTabletOrMobile ? 'column' : 'row'}>
        <Box
          my={isTabletOrMobile ? '40' : '90'}
          px="20"
          alignItems="center"
          justifyContent="center"
        >
          <Heading mb="10" pt="0">
            Conheça a nossa fábrica
          </Heading>
          <Text mb="5">
            Você quer mais informações? Caso não tenha encontrado as informações
            necessárias, não hesite em nos contactar preenchendo o formulário ao
            lado.
          </Text>
          <Text mb="5">
            Assim, a Bertolucci é a única fábrica de luminárias do Brasil que
            abre as suas portas e mostra o “como se faz”, tendo como objetivo
            reforçar a singularidade da produção artesanal e a sensibilização da
            mão-de-obra por trás dos nossos produtos.
          </Text>
          <Text mb="5">
            Cada luminária é única, pois é produzida com amor e inspiração do
            artesão.
          </Text>
        </Box>
        <Box w="90%" p="50">
          <Form2 />
        </Box>
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="center" p="30">
        <Heading fontSize="3xl" textAlign="center" p="10">
          Fábrica e Showroom
        </Heading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3658.1907936715015!2d-46.6986636!3d-23.5256392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef871230a6f63%3A0x36843374e384d82a!2sBertolucci%20Ilumina%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1652625562879!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  //GraphCMS Queries

  const sliderNossaHistoria = await getSliderOurHistory();
  return {
    props: {
      sliderNossaHistoria,
    },
    revalidate: 10,
  };
};
