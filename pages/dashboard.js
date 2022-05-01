import { Img, Button, Heading, Text } from '@chakra-ui/react';
import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  const { user, signout } = useAuth();

  return (
    <>
      <Heading>Bem vindo {user?.name} </Heading>
      <Text>{user?.email} </Text>
      <Img src={user?.photoUrl} w="80px" h="80px" />

      <Button onClick={() => signout()}>logout</Button>
    </>
  );
};

export default Dashboard;
