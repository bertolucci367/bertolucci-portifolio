/* eslint-disable */
//Native Imports
import { useState } from 'react';
//Chackra UI
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

//Components
import Layout from 'src/components/Layout';

import Banner from 'src/components/Banner';

//Libs
import {
  getAllDesigners,
  getAllLines,
  getAllTypologies,
} from 'src/lib/graphcms';

import Panel from 'src/components/Panel';
import LinhasProdutos from 'src/components/LinhasProdutos';

const cards = [
  {
    title: 'Umbu ',
    text: 'Inspirada nas antigas luminárias dos anos 70',
    image: 'images/banner/index.png',
  },
];
const Cover = ({ typologies }) => {
  const [alltypologies] = useState(typologies);

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
          <Banner cards={cards} />
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
              <Heading fontSize="6xl" pb="30px">
                Tipologias
              </Heading>
              <Text fontSize="18px" pb="30px">
                O tipo ideal de luminária para seu ambiente
              </Text>
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
                      src={tech.products[0].photo[0].url}
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

export default function Home({ typologies, lines, designers }) {
  return (
    <Layout>
      <Cover typologies={typologies} />

      <Panel
        fade={false}
        slidesToShow={2}
        HeadingTitle="Coleções"
        description="Conheça cada detalhe de nossas linhas"
      >
        {lines.map((items, index) => (
          <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
            key={index}
            p="80px"
          >
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Image
                src={items.products.map((item, index) => item.photo[index].url)}
                w="20vw"
                h="30vh"
                objectFit="cover"
              />
            </Flex>
            <Flex p="30" alignItems="center" justifyContent="center">
              <Heading textTransform="capitalize">{items.name}</Heading>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text fontSize="2xl">
                {items.products.map((item) =>
                  JSON.stringify(item.description?.text),
                )}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Panel>
      <LinhasProdutos />
      <Panel
        fade={false}
        slidesToShow={3}
        HeadingTitle="Designers"
        description="Designers renomados que fazem parte da nossa história"
      >
        {designers.map((items, index) => (
          <Flex w="20%" alignItems="center" justifyContent="center" key={index}>
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Image
                src={items.photo.map((item) => item.url)}
                w="20vw"
                h="40vh"
                objectFit="cover"
              />
            </Flex>
            <Flex p="30px" alignItems="center" justifyContent="center">
              <Heading textTransform="capitalize">{items.name}</Heading>
            </Flex>
            <Flex px="32px" alignItems="center" justifyContent="center">
              <Text textAlign="center" fontSize="2xl">
                {items.text}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Panel>
      <Box w="full">
        <Banner cards={cards} />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const typologies = await getAllTypologies();
  const lines = await getAllLines();
  const designers = await getAllDesigners();
  return {
    props: {
      typologies,
      lines,
      designers,
    },
    revalidate: 10,
  };
};
