/* eslint-disable */
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import Topbar from '../Header';

const Layout = ({ children, corFundo }) => {
  const bgColor = useColorModeValue('#f4f5f6', '#1A202C');

  return (
    <Box bg={corFundo ? corFundo : bgColor} minH="100vh">
      <Topbar />
      <Flex flexDirection="column" pt={16}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
