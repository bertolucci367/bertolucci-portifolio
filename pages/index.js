/* eslint-disable */

//External libs

//Chakra UI
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';

//Components
import Layout from 'src/components/Templates/Layout';

import Banner from 'src/components/AllBannersSliders/Structural/Banner';

import Footer from 'src/components/Templates/Footer';

import Panel from 'src/components/AllBannersSliders/Structural/Panel';

import { PanelNossaHistoriaHome } from 'src/components/PanelNossaHistoriaHome';

import PersonaSection from 'src/components/PersonaSection';

import { Cover } from 'src/components/TipologyPanel';

import BannerSliderHome from 'src/components/AllBannersSliders/BannerSliderHome';

//Libs
import {
  getAllDesigners,
  getAllLines,
  getSliderHome,
  getAllTypologies,
  getSliderOurHistory,
  instaFeed,
} from 'src/lib/graphcms';
import InstagramFeed from 'src/components/InstaFeed';

export default function Home({
  typologies,
  lines,
  designers,
  slidersHome,
  sliderNossaHistoria,
  instaFeed,
}) {
  const [isLargeThan700] = useMediaQuery('(max-width:700px)');
  console.log(instaFeed);
  return (
    <Layout>
      <BannerSliderHome sliders={slidersHome} dots isSlider arrows />
      <Cover typologies={typologies} />

      <Panel
        fade={false}
        slidesToShow={isLargeThan700 ? 1 : 2}
        slidesToScroll={isLargeThan700 ? 1 : 2}
        HeadingTitle="Coleções"
        description="Conheça cada detalhe de nossas linhas"
      >
        {lines.map((items, index) => (
          <Flex
            w="full"
            alignItems="center"
            justifyContent="center"
            key={index}
          >
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Image
                src={items.products.map((item, index) => item.photo[index].url)}
                w="100%"
                h="44vh"
                objectFit="contain"
              />
            </Flex>

            <Flex px="30" alignItems="center" justifyContent="center">
              <Heading textTransform="capitalize" fontSize="3xl">
                {items.name}
              </Heading>
            </Flex>

            <Flex alignItems="center" justifyContent="center">
              <Text
                fontSize="18px"
                px="20"
                w="900px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {items.products.map((item) =>
                  JSON.stringify(item.description?.text),
                )}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Panel>

      <PersonaSection />

      <Panel
        fade={false}
        slidesToShow={1}
        HeadingTitle="Designers"
        description="Designers renomados que fazem parte da nossa história"
      >
        {designers.map((items, index) => (
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            key={index}
          >
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={() => alert(true)}
            >
              <Image
                src={items.photo.map((item) => item.url)}
                w="100%"
                h="55vh"
                objectFit="contain"
              />
            </Flex>

            <Flex p="20px" alignItems="center" justifyContent="center">
              <Heading textTransform="capitalize" fontSize="3xl">{items.name}</Heading>
            </Flex>

            <Flex px="32px" alignItems="center" justifyContent="center">
              <Text
                textAlign="center"
                fontSize="18px"
                w="900px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {items.text}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Panel>

      <Box w="full">
        <Banner isSlider dots arrows>
          {sliderNossaHistoria.map((items, index) => {
            return (
              <Box
                key={index}
                h="700px"
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage={`url(${items.photoNossaHistoriaSlider.url})`}
                w="full"
              ></Box>
            );
          })}
        </Banner>
      </Box>

      <PanelNossaHistoriaHome />
      <InstagramFeed instagramPosts={instaFeed} />
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () => {
  //GraphCMS Queries
  const typologies = await getAllTypologies();
  const lines = await getAllLines();
  const designers = await getAllDesigners();
  const slidersHome = await getSliderHome();
  const sliderNossaHistoria = await getSliderOurHistory();

  const instaFeedx = await instaFeed();

  return {
    props: {
      typologies,
      lines,
      designers,
      slidersHome,
      sliderNossaHistoria,
      instaFeed: instaFeedx,
    },
    revalidate: 10,
  };
};
