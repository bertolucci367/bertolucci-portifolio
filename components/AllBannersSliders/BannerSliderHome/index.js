/* eslint-disable */

import { Box } from '@chakra-ui/react';

import { useMediaQuery } from 'src/components/useMediaQuery';

import Banner from 'src/components/AllBannersSliders/Structural/Banner';

const BannerSliderHome = ({ sliders, isSlider, dots, arrows }) => {
  const isLargeThan700 = useMediaQuery('(max-width:767px)');

  return (
    <Box w="full" maxH={isLargeThan700 ? '421px' : '700px'}>
      <Banner isSlider={isSlider} dots={dots} arrows={arrows}>
        {sliders.map((card, index) => {
          return (
            <Box
              maxH={isLargeThan700 ? '421px' : '700px'}
              key={index}
              height={isLargeThan700 ? '421px' : '700px'}
              w="full"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundImage={`url(${card.photoBannerSlider?.map(
                (item) => item.url,
              )})`}
            >
              {/*  <Container
                size="container.lg"
                height="100vh"
                position="relative"
                w="full"
              >
                
              </Container> */}
            </Box>
          );
        })}
      </Banner>
    </Box>
  );
};

export default BannerSliderHome;
