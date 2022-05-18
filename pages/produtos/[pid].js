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
  SimpleGrid,
  IconButton
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';
import { getProduct, getAllProducts, getRelatedProducsFromCms } from 'src/lib/graphcms';
import ItemProduto from 'src/components/ItemProduto';
import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, DownloadIcon } from '@chakra-ui/icons'

const BreakCrumb = ({ pid, name }) => {
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

const Produto = () => {
  const router = useRouter();
  const query = router.query;
  const [ product, setProduct ] = useState(null)
  const [ productsRelated, setProductsRelated ] = useState(null)
  const pid = query.pid;

  if(!pid){  return ""; }

  if(!product) { 
    getProduct(pid).then(x => {
      setProduct(x);
      getRelatedProducsFromCms(x.lines[0]?.id,x.id).then( related => {
        setProductsRelated(related);
        console.log(related)
      })
    })
  }

  return (
    <Layout>
      <style global jsx>{`
        .css-133h7no {
          background-color: #fff;
        }
    `}</style>
      <BreakCrumb pid={ pid } name={ product?.name }/>
        <Flex flex="1" mt="40px" w="100%">
          <Box w="40%" pl="20px" pr="40px" fontFamily="nunito">
            <Text fontSize="4xl" textTransform="uppercase" letterSpacing="-1px" mb="-13px" >
              { product?.name}
            </Text>
            <Text textTransform="capitalize" fontSize="3xl" letterSpacing="-1px">
              {product?.designer?.name}
            </Text>
            <Text fontSize="" py="20px" ml="10px">História da luminária</Text>
            <Text my="10px" ml="10px" textAlign="justify">{product?.description?.text}</Text>
          </Box>
          <Box w="60%">
            <Flex w="100%">  
              <Box w="100%">
                <Flex w="100%" px="10px">
                  <Center bg="lightgray" w="78%" pr="20px" ml="20px">
                    <Image src={product?.photo[1].url} maxHeight="600px" m="0 auto"/>
                  </Center>
                  <Box w="20%" ml="20px" pr="30px">
                    <IconButton icon={<ChevronUpIcon />} w="100%" mb="10px" fontSize="30px" 
                    position="relative" bg="lightgray" float="top"></IconButton>                                        
                    <Box overflow="hidden" maxHeight="500px" mt="">
                      {product?.photo.map((x,y)=>(
                        <Flex pb="10px" key={y}>
                          <Center bg="lightgray" border="4px solid lightgray">
                            <Image src={x.url} w="100%" m="0 auto"/>
                          </Center>
                        </Flex>    
                      ))}
                      {product?.photo.map((x,y)=>(
                        <Flex pb="10px" key={y}>
                          <Center bg="lightgray" border="4px solid lightgray">
                            <Image src={x.url} w="100%" m="0 auto"/>
                          </Center>
                        </Flex>    
                      ))}
                    </Box>
                    <IconButton icon={<ChevronDownIcon />} w="100%" mb="10px" 
                    fontSize="30px" position="relative" bottom="-10px" bg="lightgray" 
                    float="bottom"></IconButton>
                  </Box>
                </Flex>    
              </Box>
            </Flex>  
          </Box>
        </Flex>
        <Flex flex="1" mt="40px" w="100%">
          <Box w="100%" px="20px">
            <Text fontSize="4xl" textTransform="uppercase" letterSpacing="-2px">Ficha Técnica</Text>
          </Box>
        </Flex>
        <Flex flex="1" mt="40px" w="100%" pb="16">
          <Box w="100%" pb="20px">
            <Flex flex="1" mt="15px" pl="20px" w="100%">
              <Box w="100%" pb="20px">
                <Flex flex="1">
                  <Box w="100%" px="20px">
                    <Text fontSize="l" fontWeight="bold" pb="10px">Descrição</Text>
                    <Text>{product?.text?.text}</Text>
                  </Box>
                </Flex>
              </Box>
              <Box w="100%" pb="20px">
                <Flex flex="1">
                  <Box w="100%" px="20px">
                    <Text fontSize="l" fontWeight="bold" pb="10px">Materiais</Text>
                    <Text textTransform="capitalize">{product?.materials.map(x => (x.name)).join(", ")}</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex flex="1" mt="10px" pl="20px" w="100%">
              <Box w="100%" pb="20px">
                <Flex flex="1">
                  <Box w="100%" px="20px">
                    <Text fontSize="l" fontWeight="bold" pb="10px">Designer</Text>
                    <Text textAlign="justify">{product?.designer?.text}</Text>
                  </Box>
                </Flex>
              </Box>
              <Box w="100%" pb="20px">
                <Flex flex="1">
                  <Box w="100%" px="20px">
                    <Text fontSize="l" fontWeight="bold" pb="10px">Acabamentos</Text>
                    <Text textTransform="capitalize">{product?.finishings?.map(x => (x.name)).join(", ")}</Text>
                  </Box>
                </Flex>
                </Box>
            </Flex>
          </Box>
          <Box w="30%" px="20px">
            <Text fontSize="l" fontWeight="bold" pb="10px" position="relative" top="0px">Dimensão</Text>
            <Image src={product?.photo[1].url} maxHeight="600px" m="0 auto"/>
            <Text>Altura: {product?.height} cm</Text>
            <Text>Diametro: {product?.diameter} cm</Text>
          </Box>
        </Flex>
        <Flex borderTop="2px solid lightgray">
          <Box p='4' w="100%">
            <Flex>
              <Box px='4' pt="6" w="100%">
                <Flex>
                  <Box>
                    <Text fontSize="l" fontWeight="bold" pb="10px">Downloads</Text>
                  </Box>
                  <Spacer />
                  <Box pr="40px">
                    <Text fontSize="l" fontWeight="bold" pb="10px">Referência</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Box px='4' pb="6" w="100%">
                <Flex>
                 <Box>
                    {product?.files.map((item, key ) => (
                      <Flex key={key}>
                        <Box py="5px">
                            <Link fontSize="l" id={item?.id}>Download {key} - {item?.name} <DownloadIcon mb="5px"/></Link>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                  <Spacer />
                  <Box pr='40px '>
                    <Text>Referência</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex borderTop="2px solid lightgray" px="6" py="16">
          <Box w="100%">
            <Text fontSize="xl" fontWeight="bold" pb="8">Outras luminárias da mesma coleção</Text>
            <SimpleGrid columns={6} spacing={10}>
              {productsRelated?.map((item, key ) => (
                <Box key={key}>
                  <Link href={`/produtos/${item.id}`}>
                  <Flex w="100%" h="180" bg="lightgray">
                    <Image src={ item && !item.cover[0] ? item.photo[0].url : item.cover[0].url}/>
                  </Flex>
                  <Flex>
                    <Center flex="1" p="2">
                      <Text textAlign="Center">{item.name}</Text>
                    </Center>
                  </Flex>
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
        <Flex borderTop="2px solid lightgray" px="6" py="16" mb="40">
          <Box w="100%">
            <Text fontSize="xl" fontWeight="bold" pb="8">Outras luminárias do mesmo tipo</Text>
              
            <SimpleGrid columns={6} spacing={10}>
              {[1,2,3,4,5,6].map((item, key ) => (
                <Box key={key}>
                  <Flex w="100%" h="180" bg="lightgray">
                    <Box></Box>
                  </Flex>
                  <Flex>
                    <Center flex="1" p="2">
                      <Text textAlign="Center">Name</Text>
                    </Center>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
        <Footer/>
    </Layout>
  );
};

export default Produto;