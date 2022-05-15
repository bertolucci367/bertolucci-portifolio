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
import NextLink from "next/link"

import {
  getAllProductsThumbs, getAllProductsCount, getAllFilters
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
            <Box flex="1" bg="lightgray"
              border="1px solid dashed"
            >
              <Image src={item.photo[0].url} w="100%"/>
            </Box>
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


export default function Products({ products, productsCount, filters }) {
  
  const [ currentItems, setCurrentItems ] = useState(null);
  const [ setPageCount] = useState(0);
  const [ itemOffset, setItemOffset ] = useState(0);
  const [ showFiltersBar, setShowFiltersBar ] = useState(false);
  const [ showTypology, setShowTypology ] = useState(false);
  const [ showMaterial, setShowMaterial ] = useState(false);
  const [ showCategory, setShowCategory ] = useState(false);
  const [ showDesigners, setShowDesigners ] = useState(false);
  const itemsPerPage = productsQtd
  const pageCount = productsCount / productsQtd

  // ========================================================


  if(!currentItems){ setCurrentItems(products) }

  const toggleFiltersBar = () => setShowFiltersBar(!showFiltersBar)
  const toggleTypology = () =>  setShowTypology(!showTypology)
  const toggleMaterial = () =>  setShowMaterial(!showMaterial)
  const toggleCategory = () =>  setShowCategory(!showCategory)
  const toggleDesigners = () =>  setShowDesigners(!showDesigners)

  useEffect(() => {
  }, []);

  var where = {"materials": {"id_in": []},
                  "lines": {"id_in": []},
                  "typologies": {"id_in": []},
                  "designer": {"id_in": []}
                }

  const handlePageClick = (event) => {
    getAllProductsThumbs(event.selected,productsQtd, where).then((x)=>{setCurrentItems(x)})
  };


  const handleFilterClick = (event) => {
    let item = event.target.offsetParent.attributes.getNamedItem("category")
    if(item === null || item === 'undefined'){ console.error("O item enviado está vazio.", item)}
    
    switch(item.value){
      case "typology":
        where.typologies.id_in.push(event.target.value)
      break;
      case "material":
        where.materials.id_in.push(event.target.value)
      break;
      case "line":
        where.lines.id_in.push(event.target.value)
      break;
      case "designer":
        where.designer.id_in.push(event.target.value)
      break;
      default:
      console.error("Não foi possível classificar.")
      break;
    }
    getAllProductsThumbs(1,itemsPerPage, where).then((x)=>{setCurrentItems(x)})
    console.log(JSON.stringify(where.materials.id_in))
    console.log(JSON.stringify(where.lines.id_in))
    console.log(JSON.stringify(where.typologies.id_in))
    console.log(JSON.stringify(where.designer.id_in))
  };

  return (
    <Layout>
        <Box flex='1' mt='85px'>
          <Flex>
            <Box flex='1' p="15px">
              <NextLink href="/" passHref>
              <Link d="inline">Bertolucci</Link>
              </NextLink>
              <Text d="inline"> | </Text>
              <NextLink href="/products" passHref>
              <Link d="inline">Produtos</Link>
              </NextLink>
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
            <Button rightIcon={ showFiltersBar ? <AddIcon/> : <MinusIcon />} onClick={toggleFiltersBar} variant='outline'>FILTROS</Button>
          </Flex>
        </Box>
        <Box w="100%">
          <Flex>
            <Box w='200px' pr="20px" hidden={showFiltersBar}>
              <Button rightIcon={ showTypology ? <AddIcon/> : <MinusIcon />} onClick={toggleTypology} variant='link' color="black">
                <Heading as="h2" size="l" pl="10px" pt="10px" pb="5px">TIPOLOGIA </Heading>
              </Button>
              <Box borderBottom="2px solid lightgray">
                <List p="15px" hidden={showTypology}>
                  { filters.typologies.map((item, key) => (
                      <ListItem key={key} py="3px">
                        <Checkbox mr="20px" mt="3px" category="typology" onChange={handleFilterClick} value={item.id}></Checkbox>{item.name}
                      </ListItem>
                    ))
                  }
                </List>
              </Box>
              <Button rightIcon={ showMaterial ? <AddIcon/> : <MinusIcon />} onClick={toggleMaterial} variant='link' color="black">
                <Heading as="h2" size="l" pl="10px" pt="10px" pb="5px">MATERIAIS </Heading>
              </Button>
              <Box borderBottom="2px solid lightgray">
                <List p="15px"  hidden={showMaterial}>
                  { filters.materials.map((item, key) => (
                      <ListItem key={key} py="3px">
                        <Checkbox mr="20px" mt="3px" category="material" onChange={handleFilterClick} value={item.id}></Checkbox>{item.name}
                      </ListItem>
                    ))
                  }
                </List>
              </Box>
              <Button rightIcon={ showCategory ? <AddIcon/> : <MinusIcon />} onClick={toggleCategory} variant='link' color="black">
                <Heading as="h2" size="l" pl="10px" pt="10px" pb="5px">CATEGORIAS </Heading>
              </Button>

              <Box borderBottom="2px solid lightgray" maxHeight="300px" overflow="auto">
                <List p="15px"  hidden={showCategory}>
                  { filters.lines.map((item, key) => (
                      <ListItem key={key} py="3px">
                        <Checkbox mr="20px" mt="3px" category="line" onChange={handleFilterClick} value={item.id}></Checkbox>{item.name}
                      </ListItem>
                    ))
                  }
                </List>
              </Box>
              <Button rightIcon={ showDesigners ? <AddIcon/> : <MinusIcon />} onClick={toggleDesigners} variant='link' color="black">
                <Heading as="h2" size="l" pl="10px" pt="10px" pb="5px">DESIGNERS </Heading>
              </Button>

              <Box borderBottom="2px solid lightgray" maxHeight="300px" overflow="auto">
                <List p="15px"  hidden={showDesigners}>
                  { filters.designers.map((item, key) => (
                      <ListItem key={key} title={item.name} textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
                        <Checkbox mr="20px" mt="3px" category="designer" onChange={handleFilterClick} value={item.id}></Checkbox>{item.name}
                      </ListItem>
                    ))
                  }
                </List>
              </Box>
            </Box>
            <Box flex="1" px="10px">
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

var where = {"materials": {"id_in": []},
                  "lines": {"id_in": []},
                  "typologies": {"id_in": []},
                  "designer": {"id_in": []}
                };

export const getStaticProps = async () => {
  const products = await getAllProductsThumbs(0,productsQtd, where)
  const productsCount = await getAllProductsCount()
  const filters = await getAllFilters()
  return {
    props: {
      products,
      productsCount,
      filters
    },
    revalidate: 10,
  };
};