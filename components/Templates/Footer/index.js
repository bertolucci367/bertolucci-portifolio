/* eslint-disable */

// Native packages

import Image from 'next/image';

//chakra Packages

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
  useMediaQuery,
} from '@chakra-ui/react';

// Icones
import { FaInstagram, FaWhatsapp, FaPinterest, FaVimeoV } from 'react-icons/fa';

import { BiMailSend } from 'react-icons/bi';

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
      target="_blank"
      referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
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

export default function Footer() {
  const [isLargerThan600] = useMediaQuery('(max-width:600px)');

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'full'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: 'repeat(4,1fr)' }}
          spacing={12}
        >
          <Stack align={isLargerThan600 ? 'center' : 'flex-start'} spacing={6}>
            <Box>
              <Logo />
            </Box>
          </Stack>

          <Stack align={isLargerThan600 ? 'center' : 'flex-start'} spacing={6}>
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

          <Stack align={isLargerThan600 ? 'center' : 'flex-start'}>
            <ListHeader>Fique por dentro das nossas novidades!</ListHeader>
            <Link
              as="a"
              href="/care_for_your_lamp"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Cuidados com suas luminárias
            </Link>
            <Link
              as="a"
              href="/visit_our_showroom"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Visite nosso Showroom
            </Link>
            <Link
              as="a"
              href="/terms_and_conditions_of_sale"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Termos e condições de venda
            </Link>
            <Link
              as="a"
              href="/privacy_policy"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Política de Privacidade
            </Link>
          </Stack>

          <Stack align={isLargerThan600 ? 'center' : 'flex-start'}>
            <ListHeader>Siga nos</ListHeader>
            <Stack direction="row" spacing={6}>
              <SocialButton
                label="WhatsApp"
                href="https://wa.me/5511945219938?text=Gostei%20dos%20produtos%2C%20podemos%20conversar%20%3F"
              >
                <FaWhatsapp />
              </SocialButton>
              <SocialButton
                label="Instagram"
                href="https://www.instagram.com/bertolucci.iluminacao/"
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Pinterest" href="">
                <FaPinterest />
              </SocialButton>
              <SocialButton label="Pinterest" href="">
                <FaVimeoV />
              </SocialButton>
            </Stack>
            <Link as="a" href="#">
              11 3874 2879
            </Link>
            <Link
              as="a"
              href="https://wa.me/5511945219938?text=Gostei%20dos%20produtos%2C%20podemos%20conversar%20%3F"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              11 9 4521 9938
            </Link>
            <Link
              as="a"
              href="/terms_and_conditions_of_sale"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Termos e condições de venda
            </Link>
            <Link
              as="a"
              href="https://goo.gl/maps/rsbFTXUUgNtBuj8P9"
              target="_blank"
              referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
            >
              Rua Espártaco, 367 | Lapa | São Paulo | SP
            </Link>
          </Stack>
        </SimpleGrid>
        <Text fontSize="sm" textAlign="center">
          Bertolucci © 2022, todos os direitos reservados.
        </Text>
      </Container>
    </Box>
  );
}
