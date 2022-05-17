/* eslint-disable */
import { Input } from '@chakra-ui/react';
import {
  Box,
  Image,
  Text,
  Flex,
  Center,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from 'src/components/Templates/Layout';
import { getDesigner } from 'src/lib/graphcms';

import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Designer = () => {
  const router = useRouter();
  const query = router.query;
  const [designer, setDesigner] = useState(null);
  const pid = query.pid;

  if (!pid) {
    return '';
  }

  if (!designer) {
    getDesigner(pid).then((x) => {
      setDesigner(x);
    });
  }

  return (
    <Layout>
      <BreakCrumb pid={pid} name={designer?.name} />
      <Flex flex="1" mt="40px" w="100%">
        <Box w="40%" pl="20px" pr="40px" fontFamily="nunito">
          <Text
            fontSize="4xl"
            textTransform="uppercase"
            letterSpacing="-1px"
            mb="-13px"
          >
            {designer?.name}
          </Text>
          <Text textTransform="capitalize" fontSize="3xl" letterSpacing="-1px">
            {designer?.designer?.name}
          </Text>
          <Text fontSize="" py="20px" ml="10px">
            História do designer
          </Text>
          <Text my="10px" ml="10px" textAlign="justify">
            {designer?.description?.text}
          </Text>
        </Box>
        <Box w="60%">
          <Flex w="100%">
            <Box w="100%">
              <Flex w="100%" px="10px">
                <Center bg="trasparent" w="38%" pr="20px" ml="20px">
                  <Image
                    src={designer?.photo.map((x) => x.url)}
                    maxHeight="700px"
                    m="0 auto"
                    w="20vw"
                    objectFit="cover"
                  />
                </Center>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex flex="1" mt="40px" w="100%">
        <Box w="100%" px="20px">
          <Text fontSize="4xl" textTransform="uppercase" letterSpacing="-2px">
            Coleções de {designer?.name}
          </Text>
        </Box>
      </Flex>
      <Flex flex="1" mt="40px" w="100%">
        <Box w="100%" pb="20px">
          <Flex flex="1" mt="15px" pl="20px" w="100%">
            <Box w="100%" pb="20px">
              <Flex flex="1">
                <Box w="100%" px="20px">
                  
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Designer;

const BreakCrumb = ({ pid, name }) => {
  return (
    <Box flex="1" mt="85px">
      <Flex>
        <Box flex="1" p="15px">
          <Link as="a" d="inline" href="/">
            Bertolucci
          </Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href="/designers">
            Designers
          </Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href={'/designers/' + pid}>
            {name}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
