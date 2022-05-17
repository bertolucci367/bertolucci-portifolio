/* eslint-disable */
import Head from 'next/head';
import { AuthProvider } from 'src/contexts/AuthContext';
import { Global, css } from '@emotion/react';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import theme from 'src/styles/theme';

const myTheme = extendTheme(theme);
const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

       
      `}
    />
    {children}
  </>
);
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={myTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
