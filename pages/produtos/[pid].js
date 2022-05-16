import { Input } from '@chakra-ui/react'
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
  InputRightElement
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import Layout from 'src/components/Templates/Layout';
import { getProduct, getAllProducts } from 'src/lib/graphcms';
import ItemProduto from 'src/components/ItemProduto';

const Produto = ({ product }) => {
  return ( 
  <Layout>
      <BreakCrumb/>
      <ItemProduto product={product}/>
  </Layout>);
}

export default Produto

export async function getStaticPaths() {
  const products = await getAllProducts()
  const paths = products.map((s) => ( { params : { pid : s.id } } ))
  return {
    paths: paths,
    fallback: false,
  }
}

 export const getStaticProps = async ( { params } ) => {
  const product = await getProduct(params)
  return {
    props: {
      product
    },
    revalidate: 10,
  };
};

const BreakCrumb = () => {
  const pid = ""
  const name = "trocar"
  return (
    <Box flex='1' mt='85px'>
      <Flex>
        <Box flex='1' p="15px">
          <Link as="a" d="inline" href="/">Bertolucci</Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href="/produtos" >Produtos</Link>
          <Text d="inline"> | </Text>
          <Link as="a" d="inline" href={ "/produtos/" + pid }>{ name }</Link>
        </Box>
      </Flex>
    </Box>);
}

