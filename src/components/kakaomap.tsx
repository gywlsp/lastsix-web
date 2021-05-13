import React, { useEffect } from 'react';

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
    <div
      id="kakaomap"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}

export default KakaoMap;
