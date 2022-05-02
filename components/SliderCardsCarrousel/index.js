import React, { useState } from 'react';
/* eslint-disable */
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 2,
};

export default function SliderCardsCarrousel({ lines }) {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });

  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box
      height={'400px'}
      position={'relative'}
      width={'full'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {lines.map((items, index) => (
          <Flex alignItems="center" justifyContent="center" key={index}>
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Image
                src={items.products.map((item, index) => item.photo[index].url)}
                w="200px"
                h="200px"
                alignItems="center"
                justifyContent="center"
              />
            </Flex>
            <Flex p="30" alignItems="center" justifyContent="center">
              <Heading textTransform="capitalize">{items.name}</Heading>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text>
                {items.products.map((item) =>
                  JSON.stringify(item.description?.text),
                )}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
}
