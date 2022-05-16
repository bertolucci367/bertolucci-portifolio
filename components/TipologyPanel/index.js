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

export const Cover = ({ typologies }) => {
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
              <Heading fontSize="3xl" pb="40px">
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
                      objectFit="contain"
                      objectPosition={'center'}
                    />
                    <Text
                      fontSize="xl"
                      textAlign="center"
                      fontWeight="500"
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
