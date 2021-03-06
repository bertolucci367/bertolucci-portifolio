/* eslint-disable */
import { useColorModeValue, Flex, Heading, Text, Box } from '@chakra-ui/react';

import Carrousel from '../Carrousel';

const Panel = ({
  slidesToShow,
  slidesToScroll,
  fade,
  HeadingTitle,
  description,
  children,
}) => {
  const bgColorPanel = useColorModeValue('#f4f4f4', '#000111');

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bg={bgColorPanel}
    >
      <Flex
        pt="10"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="3xl" pb="20px">
          {HeadingTitle}
        </Heading>

        <Text fontSize="18px" pb="10px">
          {description}
        </Text>
      </Flex>

      <Flex px={[2, 2]} py={[0, 10]} w="full" direction="column">
        <Box w="100%">
          <Carrousel
            slidesToScroll={slidesToScroll}
            slidesToShow={slidesToShow}
            fade={fade}
          >
            {children}
          </Carrousel>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Panel;
