import SliderCardsCarrousel from 'src/components/SliderCardsCarrousel';

import { useColorModeValue, Flex, Heading, Text, Box } from '@chakra-ui/react';

import Image from 'next/image';

const LinhasProdutos = ({ lines }) => {
  const bgColorPanel = useColorModeValue('#f4f4f4', '#000111');
  const bgColorPersona = useColorModeValue('#fff', '#1A202C');

  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg={bgColorPanel}
      >
        <Flex
          pt="10"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading pb="30px">Coleções</Heading>

          <Text pb="10px">Conheça cada detalhe de nossas linhas</Text>
        </Flex>

        <Flex
          px={[2, 2]}
          py={[0, 10]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Box w="100%">
            <SliderCardsCarrousel lines={lines} />
          </Box>
        </Flex>
      </Flex>

      <Flex
        bgColor={bgColorPersona}
        alignItems="center"
        justifyContent="space-between"
        p="50"
      >
        <Box w="50%" p="10px">
          <Flex direction="column" p="10px">
            <Heading fontSize="4xl">Persona</Heading>
            <Text fontSize="2xl" fontWeight="600">
              Luminárias únicas feitas para você
            </Text>
          </Flex>

          <Flex p="10px">
            <Text fontSize="2xl">
              A Persona Bertolucci é uma combinação de criatividade, técnica e
              concretização, que resultam em peças especiais e que atendem todas
              as expectativas e propostas de cada projeto arquitetônico e de
              decoração.
            </Text>
          </Flex>
        </Box>

        <Box w="50%" p="10px">
          <Image
            src="/images/boxPersona/index.png"
            width="500px"
            height="300px"
          />
        </Box>
      </Flex>
    </>
  );
};

export default LinhasProdutos;
