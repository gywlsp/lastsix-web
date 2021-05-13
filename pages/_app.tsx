import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import GlobalStyle from '../styles/global';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>약 그냥 버리게?</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;
