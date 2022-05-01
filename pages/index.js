/* eslint-disable */
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
import Image from 'next/image';
import Layout from 'src/components/Layout';
import { getAllTechnologies } from 'src/lib/dato-cms';
import { useState } from 'react';

const Cover = ({ technologies }) => {
  const [currentTechnologies, setTechnologies] = useState(technologies);

  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');

  const handleShowAllTechnologies = () => {
    const tecs = currentTechnologies.map((t) => {
      t.defaultVisible = true;
      return t;
    });
    setTechnologies(tecs);
  };

  const hiddenTechnologies = currentTechnologies?.filter(
    (t) => !t.defaultVisible,
  ).length;

  return (
    <Box bgColor={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={[4, 8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '52px', lg: '72px' }}
            mb={4}
            fontWeight="bold"
          >
            Gabriel Rodrigues
            <Box>
              <Box>
                Desenvolvedor
                <Text bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
                  Frontend
                </Text>
              </Box>
            </Box>
          </Heading>
          <Box>
            <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
              <Box>
                Mantenha seus conhecimentos atualizados com as mais novas{' '}
              </Box>
              <Box>tecnologias que estão disponíveis no mercado!</Box>
            </Text>
          </Box>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
          <Box>
            <Wrap>
              {currentTechnologies
                .filter((f) => f.defaultVisible)
                .map((tech, index) => (
                  <WrapItem key={index}>
                    <Center
                      w="100px"
                      h="100px"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      flexDirection="column"
                    >
                      <Image
                        src={tech.logo.url}
                        alt={tech.name}
                        width={180}
                        height={180}
                        title={tech.name}
                        objectFit="cover"
                        objectPosition={'center'}
                      />
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {tech.name}
                      </Text>
                    </Center>
                  </WrapItem>
                ))}
              {hiddenTechnologies > 0 && (
                <WrapItem>
                  <Center
                    w="100px"
                    h="100px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <Link onClick={handleShowAllTechnologies}>
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {`+${hiddenTechnologies} outras`}
                      </Text>
                    </Link>
                  </Center>
                </WrapItem>
              )}
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default function Home({ technologies }) {
  return (
    <Layout>
      <Cover technologies={technologies} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();

  return {
    props: {
      technologies,
    },
    revalidate: 10,
  };
};
