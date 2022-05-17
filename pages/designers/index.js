/* eslint-disable */

import {
  Box,
  Text,
  Flex,
  Heading,
  Center,
  Image,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';

import Layout from 'src/components/Templates/Layout';

import { getAllDesigners } from 'src/lib/graphcms';

import React, { useState } from 'react';

import useMediaQuery from 'src/components/useMediaQuery';

import Footer from 'src/components/Templates/Footer';

// ==============================================

function Items({ currentItems }) {
  const isMobileScreen = useMediaQuery('(max-width:767px)');
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          <Box key={key}>
            <Link as="a" href={`/designers/${item.id}`}>
              <Center flex="1">
                <Image
                  src={item.photo.map((item) => item.url)}
                  w={isMobileScreen ? 'full' : '30vw'}
                  h={isMobileScreen ? '40vh' : '55vh'}
                  objectFit="contain"
                />
              </Center>
              <Center flex="1" mt="10px">
                <Text fontSize="20px" textTransform="capitalize">
                  {item.name.replace(new RegExp(/\..*/g), '')}
                </Text>
              </Center>
            </Link>
          </Box>
        ))}
    </>
  );
}

export default function Designers({ designers }) {
  const [currentItems, setCurrentItems] = useState(null);

  if (!currentItems) {
    setCurrentItems(designers);
  }

  return (
    <Layout>
      <Box flex="1" mt="85px">
        <Flex alignItems="center" justifyContent="center">
          <Heading as="h1" p="15px" size="xl" textAlign="center">
            Designers
          </Heading>
        </Flex>
      </Box>

      <Box w="100%" p="20">
        <Flex>
          <Box flex="1">
            <Flex direction="row" wrap="wrap" w="100%">
              <SimpleGrid
                templateColumns={{
                  sm: '1fr',
                  md: 'repeat(2,1fr)',
                  lg: 'repeat(3,1fr)',
                }}
              >
                <Items currentItems={currentItems} />
              </SimpleGrid>
              <style global jsx>{`
                ul.paginate li {
                  display: inline;
                  padding: 0px 7px;
                  font-weight: bold;
                  font-size: 20px;
                }

                ul.paginate li.selected {
                  font-size: 25px;
                }
              `}</style>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const designers = await getAllDesigners();
  return {
    props: {
      designers,
    },
    revalidate: 10,
  };
};
