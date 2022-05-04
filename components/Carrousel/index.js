/* eslint-disable */

import React, { useState } from 'react';

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

export default function Carrousel({ fade, slidesToShow, children }) {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });

  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const settings = {
    dots: false,
    arrows: true,
    fade: fade,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
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

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {children}
      </Slider>
    </Box>
  );
}
