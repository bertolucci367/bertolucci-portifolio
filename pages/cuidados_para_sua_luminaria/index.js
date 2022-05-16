/* eslint-disable */

//External libs

//Chakra UI
import {
  Box,
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
import { getSliderOurHistory } from 'src/lib/graphcms';
import { Form } from 'src/components/Form';
import { CheckIcon } from '@chakra-ui/icons';

export default function Cuidados({ sliderNossaHistoria }) {
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
              A Bertolucci
            </Heading>
            <Text mb="5">
              Fundada em São Paulo no bairro da Lapa há mais de 65 anos, a
              Bertolucci é um verdadeiro laboratório de criação e valorização do
              trabalho artístico dos artesões.
            </Text>
            <Text mb="5">
              São pessoas apaixonadas pelo design e com absoluto domínio da
              técnica artesanal e que instauram, nos detalhes, a individualidade
              do produto.
            </Text>
            <Text mb="5">
              Com o objetivo de melhorar a sua experiência com os produtos
              Bertolucci, aqui vão algumas instruções de uso, manutenção e de
              garantia.
            </Text>
            <Text mb="5">
              Seguem algumas recomendações importantes para a sua luminária.
            </Text>
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

      <Flex flexDirection="column">
        <Box my="5" px="20" alignItems="center" justifyContent="center">
          <Heading mb="10" mt={isLargeThan700 && '-20'} pt="0">
            Instalação
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              É recomendável que a instalação seja feita por um profissional
            </Text>
          </Flex>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Desligar a rede elétrica
            </Text>
          </Flex>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Verificar se a rede elétrica é 110V ou 220V
            </Text>
          </Flex>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Utilizar a lâmpada especificada na etiqueta do produto – potência
              máxima e voltagem
            </Text>
          </Flex>
        </Box>

        <Box my="5" px="20" alignItems="center" justifyContent="center">
          <Heading
            mb="10"
            fontWeight="medium"
            fontSize="3xl"
            mt={isLargeThan700 && '-20'}
            pt="0"
          >
            Manutenção e Limpeza
          </Heading>
          <Heading mb="10" fontWeight="medium" pt="0" fontSize="2xl">
            Todos os produtos
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Utilizar apenas flanela limpa, seca e macia
            </Text>
          </Flex>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              NUNCA utilizar produtos abrasivos, ásperos, à base de solvente,
              amoníaco ou álcool
            </Text>
          </Flex>
        </Box>

        <Box my="5" px="20" alignItems="center" justifyContent="center">
          <Heading
            mb="10"
            textTransform="capitalize"
            fontWeight="medium"
            fontSize="2xl"
          >
            Cromado Polido ou Escovado
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Utilizar cera automotiva periodicamente
            </Text>
          </Flex>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5">
              Para regiões de maior umidade, recomendamos a cada 6 meses, a
              manutenção das peças com sprays hidrofóbicos como o WD40.
            </Text>
          </Flex>
          <Text mb="5" px="5">
            <strong>OBS:</strong> &nbsp; Em ambientes expostos à maresia e
            umidade excessiva, o uso da cera automotiva deve ser efetuado com
            maior frequência.
          </Text>
        </Box>

        <Box my="5" px="20" alignItems="center" justifyContent="center">
          <Heading
            mb="10"
            textTransform="capitalize"
            fontWeight="normal"
            fontSize="2xl"
          >
            Madeira
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5" fontWeight="bold">
              Pode ser utilizado pano macio levemente umidecido em água
            </Text>
          </Flex>

          <Heading
            mb="10"
            textTransform="capitalize"
            fontWeight="normal"
            fontSize="2xl"
          >
            Pintura no metal
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5" fontWeight="bold">
              Pode ser utilizado pano macio levemente umidecido em água
            </Text>
          </Flex>

          <Heading
            mb="10"
            textTransform="capitalize"
            fontWeight="normal"
            fontSize="2xl"
          >
            Tecidos em geral
          </Heading>
          <Flex>
            <CheckIcon />
            <Text mb="5" px="5" fontWeight="bold">
              Recomenda-se aspirar o pó delicadamente e utilizar escova macia
            </Text>
          </Flex>
        </Box>
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
