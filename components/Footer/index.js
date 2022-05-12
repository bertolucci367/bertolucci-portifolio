/* eslint-disable */
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Image from 'next/image';
import { useMediaQuery } from '@chakra-ui/react';

const Logo = () => {
  return <Image src="/images/brand/index.png" width="150" height="151" />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="Bold" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const [isLargerThan500] = useMediaQuery('(max-width:500px)');
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'full'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: 'repeat(3,1fr)' }}
          spacing={6}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize="sm">
              Bertolucci © 2022, todos os direitos reservados.
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={isLargerThan500 ? 'center' : 'flex-start'}>
            <ListHeader>Fique por dentro das nossas novidades!</ListHeader>
            <Link href="#">Cuidados com suas luminárias</Link>
            <Link href="#">Visite nosso Showroom</Link>
            <Link href="#">Termos e condições de venda</Link>
            <Link href="#">Política de Privacidade</Link>
          </Stack>

          <Stack align={isLargerThan500 ? 'center' : 'flex-start'} spacing={6}>
            <ListHeader>
              Não se preocupe, nós também não gostamos de spam.
            </ListHeader>
            <Stack direction="row">
              <Input
                w="full"
                placeholder="| *E-mail"
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Enviar"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
