import { Img, Button, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={20}
      >
        <Heading p={30}>Bem vindo {user?.name} </Heading>

        <Img src={user?.photoUrl} w="280px" h="280px" />

        <Button
          mt="30px"
          color="white"
          _hover={{ color: 'white', bg: 'gray.900' }}
          bg="gray.500"
        >
          <Link href="/">voltar a pagina inicial</Link>
        </Button>
      </Flex>
    </Layout>
  );
};

export default Dashboard;
