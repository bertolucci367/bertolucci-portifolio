/* eslint-disable */

import { Box, Text, Flex, Heading, Center, Image } from '@chakra-ui/react';

import Layout from 'src/components/Templates/Layout';

import { getAllDesigners } from 'src/lib/graphcms';

import React, { useState } from 'react';

import Footer from 'src/components/Templates/Footer';

// ==============================================

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          <Box flex="30%" m="10px" key={key}>
            <Center flex="1">
              <Image
                src={item.photo.map((item) => item.url)}
                w="30vw"
                h="55vh"
                objectFit="contain"
              />
            </Center>
            <Center flex="1" mt="10px">
              <Text fontSize="20px" textTransform="capitalize">
                {item.name.replace(new RegExp(/\..*/g), '')}
              </Text>
            </Center>
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
              <Items currentItems={currentItems} />
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
