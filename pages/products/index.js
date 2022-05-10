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

import {
  getAllProductsThumbs,
} from 'src/lib/graphcms';

console.log(getAllProductsThumbs())

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

let paginacao = ["1","2","3","4","5","6","7","...","50",]

export default function  Products() {
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
                  <Box borderBottom="2px solid lightgray" py="10px">
                    <Heading as="h2" size="l" pl="10px">{ items.nome } <MinusIcon pb="3px"/></Heading>
                    <List p="15px">
                      { items.items.map((x, y) => (
                          <ListItem>
                            <Checkbox mr="20px" mt="3px"></Checkbox>{x}
                          </ListItem>
                        ))
                      }
                    </List>
                  </Box>
                ))}
            </Box>
            <Box flex="1">
              <Flex direction="row" wrap="wrap" w="100%">
                {temp.map((x,y)=>(
                  <Box flex="30%" m="10px">
                  <Center flex="1">
                    <Box flex="1" h="250px" bg="lightgray"></Box>
                  </Center>
                  <Center flex="1" mt="10px">
                    <Text>Nome</Text>
                  </Center>
                </Box>
                ))}
              </Flex>
            </Box>      
          </Flex>
        </Box>
        <Box>
        <Flex>
          <Box w='200px'>
          </Box>
          <Box w="100%" my="20px">
            <Flex>
              <Center flex="1">
                {paginacao.map((item, key)=>(
                  <Link px="5px" fontWeight="bold" fontSize="20px">{item}</Link>))
                }
              </Center>
            </Flex>
          </Box>
        </Flex>
        </Box>
    </Layout>
    );
}