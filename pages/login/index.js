/* eslint-disable */
import {
  Heading,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import Footer from 'src/components/Templates/Footer';
import Layout from 'src/components/Templates/Layout';

const Login = () => {
  return (
    <Layout>
      <Flex mt="30" alignItems="center" flexDir="column">
        <Heading mt="20">Login</Heading>
        <Formik
          render={({ values, setFieldValue }) => (
            <Form>
              <Flex flexDir="column" p="20">
                <FormControl py="2" w="full">
                  <FormLabel>Email</FormLabel>
                  <Input name="email" type="email" />
                </FormControl>
                <FormControl py="2" w="full">
                  <FormLabel>Senha</FormLabel>
                  <Input name="password" type="password" />
                </FormControl>
                <FormControl py="2">
                  <Button
                    type="submit"
                    border="1px solid green.300"
                    color="green.300"
                    bg="transparent"
                    transition="all 1.3 ease"
                    _hover={{
                      bgColor: 'green.300',
                      color: 'white',
                      border: 'none',
                    }}
                  >
                    Entrar
                  </Button>
                </FormControl>
              </Flex>
            </Form>
          )}
        ></Formik>
      </Flex>

      <Footer />
    </Layout>
  );
};

export default Login;
