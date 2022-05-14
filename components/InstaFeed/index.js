/* eslint-disable */
import { Flex, SimpleGrid, Box, Heading } from '@chakra-ui/react';

export default function InstagramFeed({ instagramPosts }) {
  console.log(instagramPosts);
  return (
    <>
      <h2>
        <a href="https://www.instagram.com/bertolucci.iluminacao/">
          <Heading pt="10" textAlign="center">
            Follow Us on Instagram
          </Heading>
        </a>
        .
      </h2>

      <ul>
        {/* let's iterate through each of the
         instagram posts that were returned
         from the Instagram API*/}
        <Box mx={'auto'} py="20" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 6, lg: 10 }}
            px="50"
          >
            {instagramPosts
              .filter((item) => item.media_type === 'CAROUSEL_ALBUM')
              .map((item, i) => {
                return (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    w="full"
                    key={i}
                  >
                    <a
                      href={`${item.media_url}`}
                      aria-label="view image on Instagram"
                    >
                      <Box
                        flex
                        flexDirection="row-reverse"
                        bgImage={`url(${item.media_url})`}
                        bgSize="contain"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        h="300px"
                        w="300px"
                      ></Box>
                    </a>
                  </Flex>
                );
              })}
          </SimpleGrid>
        </Box>
      </ul>
    </>
  );
}
