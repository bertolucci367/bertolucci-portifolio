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
  IconButton,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from 'src/components/AllBannersSliders/Structural/Banner';
import { useRouter } from 'next/router';
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';
import { getProduct, getAllProducts, getRelatedProducsSameLineFromCms, getRelatedProducsSameTypoFromCms } from 'src/lib/graphcms';
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Produto = () => {
  const router = useRouter();
  const query = router.query;
  const carrouselPlaceholder = [{id: 'ckifwuku01ige0a86uaoaqnuq', name: 'ju.ab', photo: [{url:""}], cover: []}];
  const [ product, setProduct ] = useState(null)
  const [ productsRelated, setProductsRelated ] = useState(carrouselPlaceholder)
  const [ productsRelatedTypology, setProductsRelatedTypology ] = useState(carrouselPlaceholder)
  const [ cover, setCover ] = useState("")
  const pid = query.pid;

  if(!pid){  return ""; }

  if(!product) { 
    getProduct(pid).then(x => {
      setProduct(x);
      setCover(x.photo[0].url);
      getRelatedProducsSameLineFromCms(x.lines[0]?.id,x.id).then( related => {
        setProductsRelated(related);
      })
      getRelatedProducsSameTypoFromCms(x.typologies[0]?.id,x.id).then( related => {
        setProductsRelatedTypology(related);
      })
    })
  }

  const setCoverFoto = (event) => {
    if(event.target.tagName !== "IMG")return;
    setCover(event.target.src)
  }


  const handleScroll = (event) => {
    let scrollBox = document.querySelector("#scrollBox");
    let increase = scrollBox.scrollHeight / 10;
    let id = event.target.id
    
    if(event.target.tagName !== "BUTTON")
      id = event.target.parentElement.id;

    if(id === 'scrollUp'){ 
      scrollBox.scrollTop -= scrollBox.offsetHeight
    }

    if(id === 'scrollDown'){
      scrollBox.scrollTop += scrollBox.offsetHeight
    }
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
                    <Center bg="lightgray" w="78%" ml="20px" h="600px">
                      <Image src={cover} maxHeight="600px" minWidth="full" objectFit="contain" m="0 auto"/>
                    </Center>
                    <Box w="20%" ml="20px" pr="30px">
                      <IconButton id="scrollUp" onClick={handleScroll} icon={<ChevronUpIcon />} w="100%" mb="10px" fontSize="30px" 
                      position="relative" bg="lightgray" float="top"></IconButton>                                        
                      <Box id="scrollBox" overflow="hidden" h="500px" mt="">
                        {product?.photo.map((x,y)=>(
                          <Link onClick={setCoverFoto} key={y}>
                          <Flex pb="10px">
                            <Center bg="lightgray" border="4px solid lightgray">
                              <Image src={x.url} w="100%" m="0 auto"/>
                            </Center>
                          </Flex>    
                          </Link>
                        ))}
                        {product?.photo.map((x,y)=>(
                          <Link onClick={setCoverFoto} key={y}>
                          <Flex pb="10px">
                            <Center bg="lightgray" border="4px solid lightgray">
                              <Image src={x.url} w="100%" m="0 auto"/>
                            </Center>
                          </Flex>    
                          </Link>
                        ))}
                        {product?.photo.map((x,y)=>(
                          <Link onClick={setCoverFoto} key={y}>
                          <Flex pb="10px">
                            <Center bg="lightgray" border="4px solid lightgray">
                              <Image src={x.url} w="100%" m="0 auto"/>
                            </Center>
                          </Flex>    
                          </Link>
                        ))}
                        {product?.photo.map((x,y)=>(
                          <Link onClick={setCoverFoto} key={y}>
                          <Flex pb="10px">
                            <Center bg="lightgray" border="4px solid lightgray">
                              <Image src={x.url} w="100%" m="0 auto"/>
                            </Center>
                          </Flex>    
                          </Link>
                        ))}
                        {product?.photo.map((x,y)=>(
                          <Link onClick={setCoverFoto} key={y}>
                          <Flex pb="10px">
                            <Center bg="lightgray" border="4px solid lightgray">
                              <Image src={x.url} w="100%" m="0 auto"/>
                            </Center>
                          </Flex>    
                          </Link>
                        ))}
                      </Box>
                      <IconButton id="scrollDown" onClick={handleScroll} icon={<ChevronDownIcon />} w="100%" mb="10px" 
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
                              <Link fontSize="l" id={item?.id}>Download {key +  1} - {item?.name} <DownloadIcon mb="5px"/></Link>
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
            <Box w="full">
              <Flex w="full">
                 <Box>
                    <Text fontSize="xl" fontWeight="bold" pb="8">Outras luminárias do mesmo tipo</Text>
                 </Box>
              </Flex>
              <Flex w="full">
                <Box w="full">
                    <Carousel responsive={responsive}>
                      {productsRelated?.map((item, key) => {
                          return (
                            <Box key={key}>
                              <Link href={`/produtos/${item.id}`}>
                              <Flex w="100%" h="180">
                                <Center flex="1" p="2">
                                  <Image src={ item && !item.cover[0] ? item.photo[0].url : item.cover[0].url}/>
                                </Center>
                              </Flex>
                              <Flex>
                                <Center flex="1" p="6">
                                  <Text textAlign="Center" textTransform="capitalize">{item.name}</Text>
                                </Center>
                              </Flex>
                              </Link>
                            </Box>
                          );
                        })}
                    </Carousel>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex borderTop="2px solid lightgray" px="6" py="16" mb="40">
            <Box w="full">
              <Flex w="full">
                 <Box>
                    <Text fontSize="xl" fontWeight="bold" pb="8">Outras luminárias do mesmo tipo</Text>
                 </Box>
              </Flex>
              <Flex w="full">
                <Box w="full">
                    <Carousel responsive={responsive}>
                      {productsRelatedTypology?.map((item, key) => {
                          return (
                            <Box key={key}>
                              <Link href={`/produtos/${item.id}`}>
                              <Flex w="100%" h="180">
                                <Center flex="1" p="2">
                                  <Image src={ item && !item.cover[0] ? item.photo[0].url : item.cover[0].url}/>
                                </Center>
                              </Flex>
                              <Flex>
                                <Center flex="1" p="6">
                                  <Text textAlign="Center" textTransform="capitalize">{item.name}</Text>
                                </Center>
                              </Flex>
                              </Link>
                            </Box>
                          );
                        })}
                    </Carousel>
                </Box>
              </Flex>
            </Box>
          </Flex>
        <Footer/>
    </Layout>
  );
};

export default Produto;