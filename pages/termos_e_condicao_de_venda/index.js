/* eslint-disable */

//Componentes
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';

//Chakra UI
import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';

export default function PoliticaVendas() {
  const [isLargeThan600] = useMediaQuery('(max-width:600px)');

  return (
    <Layout>
      <Flex flexDirection="column" p="40">
        <Heading mb="10" fontSize="3xl" textAlign="center">
          Política de privacidade
        </Heading>
        <Heading mb="10" fontSize="xl" textAlign="center">
          A sua privacidade é importante para nós.
        </Heading>
        <Text mb="10" fontSize="medium">
          É política do Bertolucci respeitar a sua privacidade em relação a
          qualquer informação sua que possamos coletar no site da Bertolucci e
          outras mídias que possuímos e operamos.
        </Text>
        <Text mb="10" fontSize="medium">
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado. Apenas retemos as informações
          coletadas pelo tempo necessário para fornecer o serviço solicitado.
          Quando armazenamos dados, protegemos dentro de meios comercialmente
          aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação,
          cópia, uso ou modificação não autorizados.
        </Text>
        <Text mb="10" fontSize="medium">
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei. O nosso site pode ter
          links para sites externos que não são operados por nós. Esteja ciente
          de que não temos controle sobre o conteúdo e práticas desses sites e
          não podemos aceitar responsabilidade por suas respectivas políticas de
          privacidade.
        </Text>

        <Text mb="10" fontSize="medium">
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </Text>
        <Text mb="10" fontSize="medium">
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto conosco.
        </Text>
        <Link
          as="a"
          href="/politica_cookies"
          target="_blank"
          referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
        >
          <Heading mb="10" fontSize="xl" textAlign="center">
            Cookies
          </Heading>
        </Link>
        <Text mb="10" fontSize="medium">
          <Link
            as="a"
            href="/politica_cookies"
            target="_blank"
            referrerPolicy="no-referrer no-referrer-when-downgrade strict-origin strict-origin-when-cross-origin"
          >
            Veja mais na seção de política de cookies.
          </Link>
        </Text>
        <Heading mb="10" fontSize="xl" textAlign="center">
          Mais informações{' '}
        </Heading>
        <text mb="10" fontSize="medium">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </text>
        <Text mb="10" fontSize="medium">
          Esta política é efetiva a partir de Outubro/2020.
        </Text>
      </Flex>
      <Footer />
    </Layout>
  );
}
