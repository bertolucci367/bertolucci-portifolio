/* eslint-disable */

//External libs

//Chakra UI
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  useMediaQuery,
  Button,
  Divider,
} from '@chakra-ui/react';

//Components
import Layout from 'src/components/Templates/Layout';

import Footer from 'src/components/Templates/Footer';

import Banner from 'src/components/AllBannersSliders/Structural/Banner';

//Libs
import {
  getAllDesigners,
  getAllLines,
  getSliderHome,
  getAllTypologies,
  getSliderOurHistory,
} from 'src/lib/graphcms';
import Link from 'next/link';

export default function Contato({ sliderNossaHistoria }) {
  const [isLargeThan700] = useMediaQuery('(max-width:700px)');

  return (
    <Layout corFundo="white">
      <Flex flexDirection="column">
        <Flex flexDirection={isLargeThan700 && 'column-reverse'}>
          <Box
            my={isLargeThan700 ? '10' : '90'}
            px="20"
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              mb="10"
              mt={isLargeThan700 && '-20'}
              pt={isLargeThan700 ? 0 : '10'}
            >
              Conheça a nossa fábrica
            </Heading>
            <Text mb="5">
              Sabemos a importância de mostrar “in loco” as particularidades dos
              processos da nossa fabricação, além do grande interesse e
              curiosidade de nossos clientes e parceiros em conhecer mais sobre
              o nosso processo produtivo e o seu caráter humano.{' '}
            </Text>
            <Text mb="5">
              Assim, a Bertolucci é a única fábrica de luminárias do Brasil que
              abre as suas portas e mostra o “como se faz”, tendo como objetivo
              reforçar a singularidade da produção artesanal e a sensibilização
              da mão-de-obra por trás dos nossos produtos.{' '}
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
          <Box w={isLargeThan700 ? '100%' : '50%'}>
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
      </Flex>

      <Divider
        colorScheme="red"
        size="10"
        orientation="horizontal"
        variant="solid"
      />
      <Text>blablabal</Text>

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
