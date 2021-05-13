import { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export const useLocation = () => {
  const [latitude, setLatitude] = useState<number>(undefined);
  const [longitude, setLongitude] = useState<number>(undefined);

  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById('kakaomap');
    const options = {
      center: new kakao.maps.LatLng(37.564214, 127.001699),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    if (!navigator.geolocation) {
      alert('GPS를 지원하지 않습니다');
      return;
    }

    const successCallback = ({ coords: { latitude, longitude } }) => {
      setLatitude(latitude);
      setLongitude(longitude);
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({ position: markerPosition });
      marker.setMap(map);
      map.setCenter(markerPosition);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      POSITION_OPTIONS
    );
  }, []);

  return { latitude, longitude };
};

const POSITION_OPTIONS = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Infinity,
};
