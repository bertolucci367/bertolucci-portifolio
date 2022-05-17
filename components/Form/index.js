/* eslint-disable */
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';

import InputMask from 'react-input-mask';

import { Formik, Field, Form } from 'formik';

export const Form2 = () => {
  const [phone, setPhone] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [id, setId] = useState('');
  const refPhoneNumber = useRef(null);
  const refCPFNumber = useRef(null);
  const refRGNumber = useRef(null);
  const router = useRouter();

  const onSubmit = async (values, setFieldValue) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const onBlurCep = (ev, handleChange) => {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        handleChange('address', data.logradouro);

        handleChange('city', data.localidade);
      });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        cep: '',
        logradouro: '',
        numero: '',
        cidade: '',
      }}
      render={({ values, setFieldValue }) => (
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <Flex flexDir="column" w="full">
            <FormControl py="2">
              <Field name="idDoctor" type="text" style={{ display: 'none' }} />
              <label>Nome Completo</label>
              <Input name="name" type="text" />
            </FormControl>
            <FormControl py="2">
              <label>Sexo</label>
              <Input name="sex" type="text" />
            </FormControl>
            <FormControl py="2">
              <label>Idade</label>
              <NumberInput defaultValue={0} min={0} max={100}>
                <NumberInputField name="age" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Flex>
          <Box>
            <FormControl py="2">
              <label>CPF</label>
              <Input
                as={InputMask}
                mask="999.999.999-99"
                name="cpf"
                type="text"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
                ref={refCPFNumber.current}
              />
            </FormControl>
            <FormControl py="2">
              <label>RG</label>
              <Input
                as={InputMask}
                mask="99.999.999-9"
                name="rg"
                type="text"
                value={rg}
                onChange={(e) => setRG(e.target.value)}
                ref={refRGNumber.current}
              />
            </FormControl>
            <FormControl py="2">
              <label>Telefone</label>

              <Input
                as={InputMask}
                mask="(99)99999-9999"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                ref={refPhoneNumber.current}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl py="2">
              <label>Cep</label>
              <Input
                name="cep"
                type="text"
                onBlur={(ev) => onBlurCep(ev, setFieldValue)}
              />
            </FormControl>
            <FormControl py="2">
              <label>Cidade</label>
              <Input name="city" value={values.city} type="text" />
            </FormControl>
            <FormControl py="2">
              <label>Endereço</label>
              <Input name="address" value={values.address} type="text" />
            </FormControl>
          </Box>
          <Box>
            <FormControl py="2">
              <label>Número</label>
              <Input name="number" type="number" />
            </FormControl>
          </Box>
          <Box>
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
                Cadastrar
              </Button>
            </FormControl>
          </Box>
        </Form>
      )}
    />
  );
};
