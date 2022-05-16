/* eslint-disable */

//Componentes
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';

//Chakra UI
import {
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CheckIcon } from '@chakra-ui/icons';

export default function PoliticaVendas() {
  const [isLargeThan600] = useMediaQuery('(max-width:600px)');

  const garantiaNaoCobre = [
    'Danos causados por transporte, ou montagem/instalação incorretos.',
    'Mau uso, esforços indevidos, ou qualquer utilização o que não aquele do proposto para o produto.',
    'Problemas causados por montagem em desacordo, ou relacionados a adaptações e/ou alterações realizadas no produto.',
    'Problemas relacionados a condições inadequadas do local onde o produto foi instalado/colocado, tais como: umidade excessiva, maresia e problemas elétricos do local.',
    'Maus tratos, descuido, limpeza e/ou manutenção em desacordo com as instruções.',
    'Danos causados por serviços de limpeza ou conserto contratados.',
    'Danos causados por acidentes, quedas, sinistros, ataques de pragas ou agentes da natureza.',
    'Desgaste excessivo no acabamento por uso intenso ou exposição a condições adversas e não previstas (intempérie, umidade, maresia, frio e calor intensos).',
    'Oxidação ou corrosão devido à falta de limpeza, manutenção com produtos inadequados ou exposição à intempérie, umidade ou maresia.',
  ];

  const condicoes = [
    'A descrição do pedido e especificações dos produtos são entendidas como aceites desde o momento do pagamento do sinal.',
    'O valor pago pelo pedido não contempla qualquer serviço/produto que não esteja explicitamente discriminado, por exemplo, instalação e manutenção da peça.',
    'Os produtos por regra são entregues sem lâmpadas, a não ser quando discriminado no pedido.',
    'As lâmpadas são vendidas em separado e não damos garantia sobre elas.',
    'Salvo condições excepcionais negociadas entre Bertolucci e cliente, nosso prazo estimado de fabricação é de 45 a 60 dias corridos a contar da comprovação do pagamento do sinal, conforme condições de pagamento indicadas no pedido.',
    'Por se tratar de um produto artesanal e personalizados, atrasos e imprevistos na produção podem ocorrer sem aviso prévio. Pequenas variações de medidas e acabamentos podem ocorrer.',
    'As condições de pagamento descritas no pedido não podem ser alteradas em caso de atraso na entrega dos produtos.',
    'Pedidos em fabricação com débitos em atraso terão, sem aviso prévio, sua produção e/ou entrega suspensas até regularização de qualquer pendência.',
    'Produtos enviados via transportadora serão feitos com frete e responsabilidade do comprador (FOB).',
    'A Bertolucci assegura que todos os seus produtos são testados e embalados em perfeitas condições e que qualquer avaria, vício ou defeito do produto deverá ser denunciada no ato de recebimento.',
    'Após o pagamento do sinal, os pedidos não poderão ser cancelados parcial ou totalmente.',
    'Nossos produtos são fabricados manualmente e por isso algum grau de variação pode ocorrer.',
    'Trabalhamos com os materiais e acabamentos da mais alta qualidade, os quais podem estar sujeitos à variabilidade de seus aspectos, especialmente se oferecidos enquanto “naturais”. Mesmo alguns materiais tratados podem sofrer alguma variação, pois a composição física e química de metais, as misturas para a produção de vidros e cristais e os processos químicos de envelhecimento e oxidação, dentre outros fatores, inclusive a ação do tempo e do clima, podem ocasionar alterações que podem trazer algum nível de diferença entre a amostra e o produto entregue ao cliente.',
    'Nossa garantia é de 1 (um) ano a contar da data de entrega do pedido contra defeitos de fabricação. Qualquer vício de instalação, uso ou depreciação pelo tempo, clima ou qualquer outro vício não será coberto pela nossa garantia e valores adicionais poderão ser cobrados para reparos e manutenção.',
    'A Bertolucci não aceita cancelamentos ou devoluções.',
  ];

  return (
    <Layout>
      <Flex flexDirection="column" p="40">
        <Heading mb="10" fontSize="3xl" textAlign="center">
          Termo de Garantia
        </Heading>

        <Text mb="10" fontSize="medium">
          A BERTOLUCCI assegura garantia contra defeitos de material e de
          manufatura nos seus produtos pelo período de 01 ano, incluído o prazo
          legal de garantia de 90 dias. A garantia de acabamentos, partes e
          peças sujeitas a desgaste natural segue estritamente o prazo legal de
          90 dias. A BERTOLUCCI limita-se à realização de serviços de reposição
          de partes e componentes nos termos discriminados a seguir e mediante
          análise efetuada pela própria BERTOLUCCI.
        </Text>

        <Heading mb="10" fontSize="3xl" textAlign="center">
          SITUAÇÕES NÃO COBERTAS POR GARANTIA
        </Heading>

        {garantiaNaoCobre.map((item, index) => (
          <Flex key={index}>
            <CheckIcon />
            <Text mb="5" px="5" fontWeight="bold">
              {item}
            </Text>
          </Flex>
        ))}

        <Heading mb="10" fontSize="3xl" textAlign="center">
          TERMOS E CONDIÇÕES DE VENDA
        </Heading>

        <OrderedList fontWeight="bold">
          {condicoes.map((item, index) => (
            <ListItem key={index} fontWeight="normal">
              {item}
            </ListItem>
          ))}
        </OrderedList>
      </Flex>
      <Footer />
    </Layout>
  );
}
