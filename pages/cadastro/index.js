/* eslint-disable */
import { Heading, Flex } from '@chakra-ui/react';
import { Form2 } from 'src/components/Form';
import Footer from 'src/components/Templates/Footer';
import Layout from 'src/components/Templates/Layout';

const Cadastro = () => {
  return (
    <Layout>
      <Flex mt="30" alignItems="center" flexDir="column">
        <Heading mt="20">Cadastro de cliente</Heading>
        <Form2 />
      </Flex>

      <Footer />
    </Layout>
  );
};

export default Cadastro;
