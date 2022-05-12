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
import { HamburgerIcon,  AddIcon, MinusIcon, Search2Icon } from '@chakra-ui/icons'
import Layout from 'src/components/Layout';
import PaginatedItems from 'pages/products/paginate';

import {
  getAllProductsThumbs, getAllProductsCount
} from 'src/lib/graphcms';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// ==============================================



let temp = new Array(12).fill({'hello':'goodbye'});
let categorias = [
  {"nome":"TIPOLOGIA", 
   "items":
   [
      'Acrílico',
      'cerâmica',
      'cortiça',
      'fibra de vidro',
      'fibra de natural'
    ]
  },
  {"nome":"MATERIAIS", 
   "items":
   [
      'Acrílico',
      'cerâmica',
      'cortiça',
      'fibra de vidro',
      'fibra de natural'
    ]
  },{"nome":"COLEÇÕES", 
   "items":
   [
      'Acrílico',
      'cerâmica',
      'cortiça',
      'fibra de vidro',
      'fibra de natural'
    ]
  },{"nome":"DESIGNERS", 
   "items":
   [
      'Acrílico',
      'cerâmica',
      'cortiça',
      'fibra de vidro',
      'fibra de natural'
    ]
  }
]

let items = [];

for(var i = 0; i < 100; i++){
  items.push(i)
}

function Items({ currentItems }) {
  return (
    <>
    {currentItems &&
      currentItems.map((item,key) => (
        <Box flex="30%" m="10px" key={key}>
          <Center flex="1">
            <Box flex="1" h="350px" bg="lightgray"></Box>
          </Center>
          <Center flex="1" mt="10px">
            <Text fontSize="20px" textTransform="capitalize">{ item.name
              //.replaceAll(new RegExp(/\..*/g),"")
               }</Text>
          </Center>
        </Box>
      ))}
      </>
  )
}

const productsQtd = 42


export default function Products({ products, productsCount }) {
  
  const [ currentItems, setCurrentItems ] = useState(null);
  const [ setPageCount] = useState(0);
  const [ itemOffset, setItemOffset ] = useState(0);
  const itemsPerPage = productsQtd
  const pageCount = productsCount / productsQtd

  if(!currentItems){
    setCurrentItems(products)
  }

  useEffect(() => {
    console.log(currentItems)
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    getAllProductsThumbs(event.selected,productsQtd).then((x)=>{setCurrentItems(x)})
    setItemOffset(newOffset);
  };

  return (
    <Layout>
        <Box flex='1' mt='85px'>
          <Flex>
            <Box flex='1' p="15px">
              <Link d="inline">Bertolucci</Link>
              <Text d="inline"> | </Text>
              <Link d="inline">Produtos</Link>
            </Box>
            <Spacer/>
            <Box flex='1' py={2}>
                <InputGroup>
                  <InputRightElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.500' />}
                  />
                  <Input placeholder="Digite o que busca" border="2px solid black" _placeholder={{ opacity: 1, color: 'gray.500' }}
                  color='teal'/>  
                </InputGroup>
            </Box>
            <Spacer/>
            <Box flex='1' py={2}>
              <Stack spacing={3}>
              <Select placeholder='Ordenar Por:'>
                  <option value='option1'>mais novos</option>
                  <option value='option2'>mais antigos</option>
                  <option value='option3'>ordem alfabética a - z</option>
                  <option value='option4'>ordem alfabética z - a</option>
                  <option value='option5'>mais vistos</option>
              </Select>
            </Stack>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Heading as="h1" p="15px" size='xl'>TODOS OS PRODUTOS</Heading>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Button rightIcon={<HamburgerIcon />} >FILTROS</Button>
          </Flex>
        </Box>
        <Box w="100%">
          <Flex>
            <Box w='200px' pr="20px">
              {categorias.map( (items, index) =>(
                  <Box borderBottom="2px solid lightgray" py="10px" key={index}>
                    <Heading as="h2" size="l" pl="10px">{ items.nome } <MinusIcon pb="3px"/></Heading>
                    <List p="15px">
                      { items.items.map((x1, y1) => (
                          <ListItem key={y1}>
                            <Checkbox mr="20px" mt="3px"></Checkbox>{x1}
                          </ListItem>
                        ))
                      }
                    </List>
                  </Box>
                ))}
            </Box>
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
                <Center w="100%" py="20px">
                  <ReactPaginate
                    className="paginate"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={Math.ceil(pageCount)}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </Center>
              </Flex>
            </Box>      
          </Flex>
        </Box>
    </Layout>
    );
}

export const getStaticProps = async () => {
  const products = await getAllProductsThumbs(0,productsQtd)
  const productsCount = await getAllProductsCount()
  return {
    props: {
      products,
      productsCount
    },
    revalidate: 10,
  };
};