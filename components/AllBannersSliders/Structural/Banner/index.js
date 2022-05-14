/* eslint-disable */
import React, { useState } from 'react';

import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';

export default function Banner({
  children,
  isSlider,
  dots,
  arrows,
  fade,
  height,
}) {
  // Settings for the slider
  const settings = {
    dots: dots ? true : false,
    arrows: arrows ? true : false,
    fade: fade ? true : true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '30%', md: '60%' });
  const side = useBreakpointValue({ base: '1%', md: '40px' });

  return (
    <Box
      position="relative"
      height={height ? height : '700px'}
      width="full"
      overflow="hidden"
    >
      {isSlider && (
        <>
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
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt color="gray" size="40px" />
          </IconButton>
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
            <BiRightArrowAlt color="gray" size="40px" />
          </IconButton>
        </>
      )}

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {children}
      </Slider>
    </Box>
  );
}
