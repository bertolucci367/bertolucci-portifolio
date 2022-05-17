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
  IconButton,
} from '@chakra-ui/react';
import  useMediaQuery  from 'src/components/useMediaQuery';
import Link from 'next/link';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import useAuth from 'src/hooks/useAuth';

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLargeThan768 = useMediaQuery('(max-width:768px)');

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
      url: '/produtos',
    },
    {
      title: 'Designers',
      url: '/designers',
    },
    {
      title: 'A fábrica',
      url: '/fabrica',
    },

    {
      title: 'Contato',
      url: '/contato',
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
      <Flex
        alignItems="center"
        justifyContent="center"
        p="10px"
        cursor="pointer"
      >
        <Link href="/">
          <Image src="/images/logo/index.png" w="50" h="50" />
        </Link>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        w="50%"
        h="80px"
        px={[4, 8]}
        flexDir={isLargeThan768 ? 'row-reverse' : 'row'}
      >
        {isLargeThan768 ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {menuitems.map((items, index) => (
                <MenuItem
                  as={Button}
                  key={index}
                  bg="transparent"
                  fontWeight="500"
                  transition="all 0.2s"
                  _hover={{
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                    fontWeight: 700,
                  }}
                  _expanded={{ backgroundColor: 'transparent' }}
                  _active={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <a href={`${items.url}`}>{items.title}</a>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ) : (
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Menu>
              {menuitems.map((items, index) => (
                <Button
                  as={Button}
                  key={index}
                  bg="transparent"
                  fontWeight="500"
                  transition="all 0.2s"
                  _hover={{
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                    fontWeight: 700,
                  }}
                  _expanded={{ backgroundColor: 'transparent' }}
                  _active={{ bg: 'transparent', boxShadow: 'none' }}
                >
                  <a href={`${items.url}`}>{items.title}</a>
                </Button>
              ))}
            </Menu>
          </Flex>
        )}

        <Flex>
          {user ? (
            <Flex p="20px">
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
            <Flex justifyContent="space-between">
              <Flex
                alignItems="center"
                onClick={() => signinGoogle()}
                pr="10px"
              >
                <Button colorScheme="red">
                  <Box pr="10px">
                    <AiOutlineGooglePlus title="Login with Google" size={20} />
                  </Box>

                  <span
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = 'underline';

                      e.target.style.cursor = 'pointer';
                    }}
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = 'none')
                    }
                  >
                    Login
                  </span>
                </Button>
              </Flex>
              <Flex alignItems="center" pr="10px">
                <Link href="/login">
                  <span
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = 'underline';

                      e.target.style.cursor = 'pointer';
                    }}
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = 'none')
                    }
                  >
                    login
                  </span>
                </Link>
              </Flex>
              <Flex alignItems="center" pr="10px">
                <Link href="/cadastrar">
                  <span
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = 'underline';

                      e.target.style.cursor = 'pointer';
                    }}
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = 'none')
                    }
                  >
                    cadastrar
                  </span>
                </Link>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Topbar;
