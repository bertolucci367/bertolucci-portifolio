/* eslint-disable */

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

const ItemProduto = ({ product }) => {
  console.log(product);
  if (!product) return false;

  return (
    <Box>
      <Flex flex="30%" b="lightgray">
        <Text fontSize="4xl">{product.name}</Text>
        <Text textTransform="capitalize" fontSize="2xl">
          {product.designer.name}
        </Text>
        <Text>{product.history}</Text>
      </Flex>
      <Flex flex="1" b="lightblue">
        <Text>Ficha Tecnica</Text>
        <Text>Descrição</Text>
        <Text>{product.description.text}</Text>
      </Flex>
    </Box>
  );
};

export default ItemProduto;
