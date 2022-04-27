import { Box, Flex } from '@chakra-ui/react';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  const bgColor = '#f4f5f6';

  return (
    <>
      <Topbar />{' '}
      <Box bg={bgColor} minH="100vh">
        <Flex flexDirection="column" pt={16}>
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
