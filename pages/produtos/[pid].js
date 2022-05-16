/* eslint-disable */
import { Input } from '@chakra-ui/react';
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
  Stack,
  Select,
  Spacer,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Checkbox,
  Link,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from 'src/components/Templates/Layout';
import { getProduct, getAllProducts } from 'src/lib/graphcms';
import ItemProduto from 'src/components/ItemProduto';
import React, { useEffect, useState } from 'react';

const Produto = () => {
  const router = useRouter();
  const query = router.query;
  const [ product, setProduct ] = useState(null)
  const pid = query.pid;

  if(!pid){  return ""; }

 if(!product) { getProduct(pid).then(x => setProduct(x))}

  console.log(product)

  return (
    <Layout>
      <BreakCrumb />
      <Box>
        <Flex flex="30%" b="lightgray">
          <Text fontSize="4xl">{ product?.name}</Text>
          <Text textTransform="capitalize" fontSize="2xl">
            { product?.designer?.name}
          </Text>
          <Text>{product?.history}</Text>
        </Flex>
        <Flex flex="1" b="lightblue">
          <Text>Ficha Tecnica</Text>
          <Text>Descrição</Text>
          <Text>{product?.description?.text}</Text>
        </Flex>
    </Box>
    </Layout>
  );
};

export default Produto;

const BreakCrumb = () => {
  const pid = '';
  const name = 'trocar';
  return (
    <Box flex="1" mt="85px">
      <Flex>
        <Box flex="1" p="15px">
          <Link as="a" d="inline" href="/">
            Bertolucci
          </Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href="/produtos">
            Produtos
          </Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href={'/produtos/' + pid}>
            {name}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
