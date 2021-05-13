import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'src/hooks/location';

import GlobalLayout from 'src/layouts/global';
import LoadingOverlay from './loading/overlay';

function KakaoMap() {
  const { latitude, longitude } = useLocation();

  return (
    <GlobalLayout>
      {!(latitude && longitude) && <LoadingOverlay />}
      <Map id="kakaomap" />
    </GlobalLayout>
  );
}

export default KakaoMap;

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;
