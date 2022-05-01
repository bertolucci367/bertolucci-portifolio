/* eslint-disable */
import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiLogIn } from 'react-icons/fi';
import useAuth from 'src/hooks/useAuth';

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('#ffff', '#1A202C');

  const color = useColorModeValue('#1A202C', '#EDEEEE');

  const colorBorder = useColorModeValue('#ddd', '#27272A');

  const { signinGoogle } = useAuth();

  return (
    <Flex
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${colorBorder}`}
      w="full"
      position="fixed"
      zIndex={99999}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        w="full"
        h="60px"
        px={[4, 8]}
      >
        <Box>Teste</Box>
        <Flex alignItems="center" onClick={() => signinGoogle()}>
          <Box pr="10px">
            <FiLogIn size={20} />
          </Box>

          <span
            onMouseEnter={(e) => {
              e.target.style.textDecoration = 'underline';

              e.target.style.cursor = 'pointer';
            }}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            Login
          </span>
        </Flex>
        {colorMode === 'light' ? (
          <MoonIcon
            w={6}
            h={6}
            onClick={toggleColorMode}
            onMouseEnter={(e) => (e.target.style.cursor = 'pointer')}
          />
        ) : (
          <SunIcon
            w={6}
            h={6}
            onClick={toggleColorMode}
            onMouseEnter={(e) => (e.target.style.cursor = 'pointer')}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Topbar;
