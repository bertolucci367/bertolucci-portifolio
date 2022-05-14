/* eslint-disable */

//Componentes
import Layout from 'src/components/Templates/Layout';
import Footer from 'src/components/Templates/Footer';
import Banner from 'src/components/AllBannersSliders/Structural/Banner';
import StatCard from 'src/components/StatCards';
//Chakra UI
import { Box, Flex, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';

import { getSliderFabric } from 'src/lib/graphcms';

export default function Fabrica({ sliderFabrica }) {
  return (
    <Layout>
      <Banner height="800px" isSlider dots arrows>
        {sliderFabrica.map((items, index) => {
          console.log(items);

          return (
            <Box
              key={index}
              h="800px"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              bgImage={`url(${items.photoFabrica?.map((item) => item.url)})`}
              w="full"
            ></Box>
          );
        })}
      </Banner>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading textAlign="center" px="60" py="5">
          Paulistana na origem mas brasileira de alma, uma empresa em movimento.
        </Heading>
        <Text fontSize="18" px="60" py="5">
          Início de 1956. Nossa pequena metalúrgica, com poucos funcionários,
          abre suas portas no bairro da Lapa, zona oeste de São Paulo. O nome,
          sugestão da matriarca Dona Odette, é adotado em homenagem à família de
          seu marido e fundador, Walter Bertolucci.
        </Text>
        <Text fontSize="18" px="60" py="5">
          Atualmente na segunda geração com Eneida Bertolucci no comando e
          revigorados, estamos ainda hoje instalados no local de nossa fundação.
          Investimos no design brasileiro e somos avessos ao discurso das
          tendências fatores que, creditamos continuarmos à frente e sendo uma
          das empresas de iluminação mais respeitadas do Brasil.Acreditamos nas
          pessoas, no preparo e na permanente atualização de nossos
          profissionais.
        </Text>
      </Flex>

      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 6, lg: 10 }}>
          <StatCard isClient={false} title={'Anos de mercado'} stat={'66'} />
          <StatCard
            isClient={false}
            title={'Luminarias produzidas'}
            stat={'+500k'}
          />
          <StatCard isClient={false} title={'produtos'} stat={'200'} />
          <StatCard isClient={false} title={'acabamentos'} stat={'+240'} />
        </SimpleGrid>
      </Box>
      <Box p="10" />
      <Banner height="800px" isSlider dots arrows>
        {sliderFabrica.map((items, index) => {
          console.log(items);

          return (
            <Box
              key={index}
              h="800px"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              bgImage={`url(${items.photoFabrica?.map((item) => item.url)})`}
              w="full"
            ></Box>
          );
        })}
      </Banner>

      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading textAlign="center" px="60" py="5">
          Com o requinte da produção artesanal.
        </Heading>
        <Text fontSize="18" px="60" py="5">
          A Bertolucci possui mais de 65 anos de tradição fabril, dominando todo
          o processo produtivo de suas luminárias: do conceito inicial ao
          projeto. Da montagem do protótipo à sua fabricação. Sem esquecer,
          claro, de sua comercialização.
        </Text>
        <Text fontSize="18" px="60" py="5">
          Além disso, entre as empresas do segmento, é a única a contar com
          design 100% nacional, produzido “in situ”. “Produzir em casa amplia
          nossas possibilidades. Se estamos com dificuldades em visualizar uma
          ideia, tudo o que temos de fazer é desenvolver o ferramental para
          materializá-la.”, declara Eneida Bertolucci, que na melhor tradição
          italiana, aponta a atenção aos detalhes como outro dos pontos fortes
          da empresa. “Um requinte de acabamento que só a produção artesanal
          permite.”, pontua.
        </Text>
      </Flex>

      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading textAlign="center" px="60" py="5">
          Alguns de nossos clientes
        </Heading>

        <Box
          maxW="7xl"
          mx={'auto'}
          py="20"
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 6 }}
            spacing={{ base: 6, lg: 10 }}
          >
            <StatCard isClient>
              <Box w="full" p="30">
                <Image src="/images/clientes/disneyLogo.png" />
              </Box>
            </StatCard>
            <StatCard isClient>
              <Box w="full" p="30">
                <Image src="/images/clientes/netflixLogo.png" />
              </Box>
            </StatCard>
            <StatCard isClient>
              <Box w="full" p="30">
                <Image src="/images/clientes/niveaLogo.png" />
              </Box>
            </StatCard>
            <StatCard isClient>
              <Box w="full" p="30">
                <Image src="/images/clientes/gntLogo.png" pt="5" />
              </Box>
            </StatCard>
            <StatCard isClient>
              <Box w="full" p="30">
                <Image
                  src="/images/clientes/masterChefeLogo.png"
                  maxW="1291px"
                  w="8vw"
                  ml="-5"
                />
              </Box>
            </StatCard>
            <StatCard isClient>
              <Box w="full" p="30">
                <Image src="/images/clientes/suvinilLogo.png" />
              </Box>
            </StatCard>
          </SimpleGrid>
        </Box>
      </Flex>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const sliderFabrica = await getSliderFabric();

  return {
    props: {
      sliderFabrica,
    },
    revalidate: 10,
  };
};
