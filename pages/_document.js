/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { css } from '@emotion/react';
import theme from 'src/styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i"
            rel="stylesheet"
          />
        
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Main />
          <NextScript />

          <a
            href="https://wa.me/5511945219938?text=Gostei%20dos%20produtos%2C%20podemos%20conversar%20%3F"
            style={{
              position: 'fixed',
              width: '60px',
              height: '60px',
              bottom: '40px',
              right: '40px',
              backgroundColor: '#25d366',
              color: '#FFF',
              borderRadius: '50px',
              textAlign: 'center',
              fontSize: '30px',
              boxShadow: '1px 1px 2px #888',
              zIndex: '1000',
            }}
            target="_blank"
            rel="noreferrer"
          >
            <i style={{ marginTop: '16px' }} className="fa fa-whatsapp" />
          </a>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
