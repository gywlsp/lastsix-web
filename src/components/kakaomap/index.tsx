import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import LoadingOverlay from './loading/overlay';

import { useMapContext, withMapContext } from 'src/contexts/Map';

function KakaoMap() {
  const {
    state: { latitude, longitude },
  } = useMapContext();

  return (
    <GlobalLayout>
      {!(latitude && longitude) && <LoadingOverlay />}
      <Map id="kakaomap" />
    </GlobalLayout>
  );
}

export default withMapContext(KakaoMap);

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;
