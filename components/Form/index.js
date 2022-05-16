/* eslint-disable */
import { useState } from 'react';

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
} from '@chakra-ui/react';

export const Form = () => {
  const [inputName, setInputName] = useState('');


  const handleInputChange = (e) => setInputName(e.target.value);

  const isError = inputName === '';

  return (
    <form>
      <FormControl isRequired isInvalid={isError} pb="30">
        <FormLabel htmlFor="first-name">Nome</FormLabel>
        <Input
          id="first-name"
          placeholder="Nome"
          value={inputName}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Digite seu nome para entrarmos em contat com você
          </FormHelperText>
        ) : (
          <FormErrorMessage>Nome é obrigatório.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={isError} pb="30">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={inputName}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Digite seu Email para entrarmos em contato com você
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email é obrigatório.</FormErrorMessage>
        )}
      </FormControl>
      <Flex>
        <FormControl>
          <Box>
            <FormLabel htmlFor="ddd">DDD</FormLabel>
            <NumberInput max={99} min={11}>
              <NumberInputField id="ddd" value="11" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </FormControl>
        <FormControl isRequired isInvalid={isError}>
          <FormLabel htmlFor="telefone">Telefone</FormLabel>
          <Input id="telefone" type="tel" placeholder="Telefone" />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
    </form>
  );
};
