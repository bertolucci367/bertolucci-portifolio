import { useColorModeValue, Flex, Heading, Text, Box } from '@chakra-ui/react';

import Image from 'next/image';

const LinhasProdutos = () => {
  const bgColorPersona = useColorModeValue('#fff', '#1A202C');

  return (
    <Flex
      bgColor={bgColorPersona}
      flex
      alignItems="center"
      justifyContent="space-between"
      p="50"
      w="full"
    >
      <Box w="100%" p="10px" flex alignItems="center" justifyContent="center">
        <Flex direction="column" p="10px">
          <Heading fontSize="6xl">Persona</Heading>
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
  );
};

export default LinhasProdutos;
