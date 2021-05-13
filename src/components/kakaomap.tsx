import React, { useEffect } from 'react';

import GlobalLayout from 'src/layouts/global';

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap() {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('kakaomap');
    const options = {
      center: new kakao.maps.LatLng(37.506502, 127.053617),
      level: 7,
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <GlobalLayout>
      <div
        id="kakaomap"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    </GlobalLayout>
  );
}

export default KakaoMap;
