import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import LoadingOverlay from 'src/components/kakaomap/loading/overlay';
import LocationDetailModal from 'src/components/kakaomap/location-modal';

import { useMapContext, withMapContext } from 'src/contexts/map';

function Home() {
  const {
    state: { latitude, longitude },
  } = useMapContext();

  return (
    <GlobalLayout>
      {!(latitude && longitude) && <LoadingOverlay />}
      <LocationDetailModal />
      <Map id="kakaomap" />
    </GlobalLayout>
  );
}

export default withMapContext(Home);

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;
