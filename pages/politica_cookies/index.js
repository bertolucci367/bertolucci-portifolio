/* eslint-disable */

//Componentes
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';

//Chakra UI
import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';

export default function PoliticaCookies() {
  const [isLargeThan600] = useMediaQuery('(max-width:600px)');

  const content = [
    {
      title: 'O que são cookies?',
      text:
        "Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.",
    },
    {
      title: 'Como usamos os cookies?',
      text:
        'Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza seprecisa ou não deles, caso sejam usados para fornecer um serviço quevocê usa.',
    },
    {
      title: 'Desativar cookies',
      text:
        'Você pode impedir a configuração de cookies ajustando as configuraçõesdo seu navegador (consulte a Ajuda do navegador para saber como fazerisso). Esteja ciente de que a desativação de cookies afetará afuncionalidade deste e de muitos outros sites que você visita. Adesativação de cookies geralmente resultará na desativação dedeterminadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies. Cookies que definimos.',
    },
    {
      title: 'Desativar cookies',
      text:
        'Você pode impedir a configuração de cookies ajustando as configuraçõesdo seu navegador (consulte a Ajuda do navegador para saber como fazerisso). Esteja ciente de que a desativação de cookies afetará afuncionalidade deste e de muitos outros sites que você visita. Adesativação de cookies geralmente resultará na desativação dedeterminadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies. Cookies que definimos.',
    },
    {
      title: 'Cookies relacionados à conta',
      text:
        'Se você criar uma conta conosco, usaremos cookies para o gerenciamentodo processo de inscrição e administração geral. Esses cookiesgeralmente serão excluídos quando você sair do sistema, porém, emalguns casos, eles poderão permanecer posteriormente para lembrar aspreferências do seu site ao sair.',
    },
    {
      title: 'Cookies relacionados ao login',
      text:
        'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitaruma nova página. Esses cookies são normalmente removidos ou limposquando você efetua logout para garantir que você possa acessar apenasa recursos e áreas restritas ao efetuar login.',
    },

    {
      title: 'Cookies relacionados a boletins por e-mail',
      text:
        'Este site oferece serviços de assinatura de boletim informativo oue-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenaspara usuários inscritos / não inscritos.',
    },

    {
      title: 'Cookies relacionados a pesquisas',
      text:
        'Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.',
    },
    {
      title: 'Cookies relacionados a formulários',
      text:
        'Quando você envia dados por meio de um formulário como os encontradosnas páginas de contacto ou nos formulários de comentários, os cookiespodem ser configurados para lembrar os detalhes do usuário paracorrespondência futura.',
    },
    {
      title: 'Cookies de preferências do site',
      text:
        'Para proporcionar uma ótima experiência neste site, fornecemos afuncionalidade para definir suas preferências de como esse site éexecutado quando você o usa. Para lembrar suas preferências,precisamos definir cookies para que essas informações possam serchamadas sempre que você interagir com uma página for afetada por suaspreferências.',
    },
    {
      title: 'Cookies de Terceiros',
      text:
        'Em alguns casos especiais, também usamos cookies fornecidos porterceiros confiáveis. A seção a seguir detalha quais cookies deterceiros você pode encontrar através deste site.',
    },
    {
      title: 'Google Analytics',
      text:
        'Este site usa o Google Analytics, que é uma das soluções de análisemais difundidas e confiáveis da Web, para nos ajudar a entender comovocê usa o site e como podemos melhorar sua experiência. Esses cookiespodem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.  Para mais informações sobre cookies do Google Analytics, consulte apágina oficial do Google Analytics.',
    },
    {
      text:
        'As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou aspáginas visitadas, o que nos ajuda a entender como podemos melhorar osite para você.',
    },
    {
      text:
        'Periodicamente, testamos novos recursos e fazemos alterações sutis namaneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você recebauma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.',
    },
    {
      text:
        'À medida que vendemos produtos, é importante entendermos asestatísticas sobre quantos visitantes de nosso site realmente comprame, portanto, esse é o tipo de dados que esses cookies rastrearão. Issoé importante para você, pois significa que podemos fazer previsões denegócios com precisão que nos permitem analisar nossos custos depublicidade e produtos para garantir o melhor preço possível.',
    },
  ];

  return (
    <Layout>
      <Flex flexDirection="column" p="40">
        {content.map((item, index) => (
          <>
            {item.title && (
              <Heading mb="10" fontSize="3xl" textAlign="center">
                {item.title}
              </Heading>
            )}

            <Text mb="10" fontSize="medium">
              {item.text}
            </Text>
          </>
        ))}
      </Flex>
      <Footer />
    </Layout>
  );
}
