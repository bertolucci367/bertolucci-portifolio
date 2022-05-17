/* eslint-disable */
import { Box, Text, Heading } from '@chakra-ui/react';
import  useMediaQuery  from '../useMediaQuery';

export const PanelNossaHistoriaHome = () => {
  const isLargeThan700 = useMediaQuery('(max-width:700px)');

  return (
    <Box bg="white" p={isLargeThan700 ? '0' : '20'}>
      <Heading pt="5" textAlign="center" fontSize="4xl">
        Nossa História
      </Heading>

      <Text p="5" fontSize="xl">
        A pequena oficina de luminárias nos anos 50 transformou-se, hoje, em uma
        consolidada empresa do setor, que cria, fabrica e comercializa peças,
        desde o conceito criativo à fabricação de todos os componentes, até a
        entrega do produto final.
      </Text>

      <Text p="5" fontSize="xl">
        Atualmente especializada no modelo fabril artesanal, a Bertolucci tem
        mais de 250 produtos de fabricação própria com mais de 200 opções de
        acabamentos diferentes, todos feitos com matérias-primas 100% nacionais
        e assinados por profissionais influentes no mercado brasileiro de
        arquitetura e design.
      </Text>
    </Box>
  );
};
