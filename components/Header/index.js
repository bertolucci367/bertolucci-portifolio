/* eslint-disable */
import {
  Box,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import useAuth from 'src/hooks/useAuth';

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('#ffff', '#1A202C');

  const color = useColorModeValue('#1A202C', '#EDEEEE');

  const colorBorder = useColorModeValue('#ddd', '#27272A');

  const { signinGoogle, user, signout } = useAuth();

  const submenuUserLogged = [
    {
      title: 'Meu Perfil',
      url: '',
      action: '/dashboard',
      hasOnClick: false,
    },
    {
      title: 'logout',
      url: '',
      action: () => signout(),
      hasOnClick: true,
    },
  ];

  const menuitems = [
    {
      title: 'Produtos',
      url: '',
    },
    {
      title: 'Designers',
      url: '',
    },
    {
      title: 'A fábrica',
      url: '',
    },
    {
      title: 'Persona',
      url: '',
    },
    {
      title: 'Giornale',
      url: '',
    },
    {
      title: 'Contato',
      url: '',
    },
  ];

  return (
    <Flex
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${colorBorder}`}
      w="full"
      position="fixed"
      direction="column"
      zIndex={99999}
    >
      <Flex alignItems="center" justifyContent="center" p="10px">
        <Image src="images/logo/index.png" w="50" h="50" />
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        w="full"
        h="80px"
        px={[4, 8]}
      >
        <Flex alignItems="center" justifyContent="center" w="100%">
          <Menu>
            {menuitems.map((items, index) => (
              <MenuButton
                key={index}
                px={4}
                py={2}
                fontWeight="500"
                transition="all 0.2s"
                _hover={{ textDecoration: 'underline', fontWeight: 700 }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                {items.title}
              </MenuButton>
            ))}
          </Menu>
        </Flex>
        <Flex>
          {user ? (
            <Flex pr="20px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <FiUser title="Logado" size={20} />
                </MenuButton>
                <MenuList>
                  {submenuUserLogged
                    .filter((f) => !f.hasOnClick)
                    .map((item, index) => (
                      <MenuItem key={index}>
                        <Link href={item.action}>{item.title}</Link>
                      </MenuItem>
                    ))}
                  {submenuUserLogged
                    .filter((f) => f.hasOnClick)
                    .map((item, index) => (
                      <MenuItem key={index} onClick={item.action}>
                        {item.title}
                      </MenuItem>
                    ))}
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Flex alignItems="center" onClick={() => signinGoogle()} pr="10px">
              <Button colorScheme="red">
                <Box pr="10px">
                  <AiOutlineGooglePlus title="Login with Google" size={20} />
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
              </Button>
            </Flex>
          )}

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
    </Flex>
  );
};

export default Topbar;
