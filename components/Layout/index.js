import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Topbar from '../Header';

const Layout = ({ children }) => {
  const bgColor = useColorModeValue('#f4f5f6', '#1A202C');

  return (
    <Box bg={bgColor} minH="100vh">
      <Topbar />
      <Flex flexDirection="column" pt={16}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
