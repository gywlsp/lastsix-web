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
