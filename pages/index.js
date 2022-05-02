/* eslint-disable */
//Native Imports
import Image from 'next/image';
import { useState } from 'react';
//Chackra UI
import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Center,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

//Components
import Layout from 'src/components/Layout';
import Carousel from 'src/components/SliderCarousel';
import LinhasProdutos from 'src/components/LinhasProdutos';
//Libs
import { getAllLines, getAllTypologies } from 'src/lib/graphcms';

const Cover = ({ typologies }) => {
  const [alltypologies] = useState(typologies);

  const cards = [
    {
      title: 'Umbu |',
      text: 'Inspirada nas antigas luminárias dos anos 70',
      image: 'images/banner/index.png',
    },
  ];

  const bgColor = useColorModeValue('#fff', '#1A202C');

  return (
    <Box bgColor={bgColor}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <Box w="full">
          <Carousel cards={cards} />
        </Box>

        <Flex
          px={[2, 8]}
          py={[0, 10]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Box w="full">
            <Flex
              direction="column"
              p="30px"
              alignItems="center"
              justifyContent="center"
            >
              <Heading pb="30px">Tipologias</Heading>
              <Text pb="30px">O tipo ideal de luminária para seu ambiente</Text>
            </Flex>
            <Wrap pb={20}>
              {alltypologies.map((tech, index) => (
                <WrapItem key={index}>
                  <Center
                    w="200px"
                    h="200px"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <Image
                      src={tech.products[0].photo[1].url}
                      alt={tech.name}
                      width={180}
                      height={180}
                      title={tech.name}
                      objectFit="cover"
                      objectPosition={'center'}
                    />
                    <Text
                      fontSize="xl"
                      textAlign="center"
                      fontWeight="800"
                      mt={2}
                      textTransform="capitalize"
                    >
                      {tech.name}
                    </Text>
                  </Center>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default function Home({ typologies, lines }) {
  return (
    <Layout>
      <Cover typologies={typologies} />
      <LinhasProdutos lines={lines} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const typologies = await getAllTypologies();
  const lines = await getAllLines();

  return {
    props: {
      typologies,
      lines,
    },
    revalidate: 10,
  };
};
