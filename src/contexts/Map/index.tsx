import React, { useState, useContext, createContext, useEffect } from 'react';

import { starPin, userPin } from 'src/assets/images/pins';

import DisposalLocationService from 'src/services/api/disposal-location';
import { IMapContext } from './IMapContext';
import { DisposalLocationListResponse } from 'src/types/disposal-location';

declare global {
  interface Window {
    kakao: any;
  }
}

const POSITION_OPTIONS = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Infinity,
};

const MapContext = createContext<IMapContext>(undefined);

export const useMapContext = () => useContext(MapContext);

export const withMapContext =
  (WrappedComponent: React.FunctionComponent) => () => {
    const [kakaomap, setKakaomap] = useState<any>();
    const [latitude, setLatitude] = useState<number>(undefined);
    const [longitude, setLongitude] = useState<number>(undefined);
    const [disposalLocations, setDisposalLocations] =
      useState<DisposalLocationListResponse>();
    const [selectedHpid, setSelectedHpid] = useState<string>(undefined);

    useEffect(() => {
      const { kakao } = window;
      const container = document.getElementById('kakaomap');
      const options = {
        center: new kakao.maps.LatLng(37.564214, 127.001699),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);
      setKakaomap(map);
    }, []);

    useEffect(() => {
      if (!window.kakao) {
        return;
      }
      if (!navigator.geolocation) {
        alert('GPS를 지원하지 않습니다');
        return;
      }

      const successCallback = async ({ coords: { latitude, longitude } }) => {
        updateMap(latitude, longitude);
      };

      const errorCallback = async (error) => {
        await updateMap(37.564214, 127.001699);
        alert(
          '현위치 정보를 받아올 수 없어 위치가 서울 중심으로 설정되었습니다.\n검색으로 위치를 설정해보세요.'
        );
      };

      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        POSITION_OPTIONS
      );
    }, [kakaomap]);

    const updateMap = async (lat: number, lng: number) => {
      setLatitude(lat);
      setLongitude(lng);
      const { result } = await DisposalLocationService.list({
        lat,
        lng,
        limit: 10,
      });
      setDisposalLocations(result);
      if (!kakaomap) {
        return;
      }
      setMarkers({ latitude: lat, longitude: lng }, result);
    };

    const setMarkers = (userLocation, disposalLocations) => {
      const { kakao } = window;
      const { latitude, longitude } = userLocation;
      const disposalPositions = disposalLocations.reduce(
        (acc, { name, lat, lng, isOfficial, hpid }) => {
          return [
            ...acc,
            {
              id: hpid,
              title: name,
              latlng: new kakao.maps.LatLng(lat, lng),
              isOfficial,
            },
          ];
        },
        []
      );

      disposalPositions.forEach(({ id, title, latlng, isOfficial }) => {
        const markerImage = new kakao.maps.MarkerImage(
          starPin,
          new kakao.maps.Size(28, 40)
        );
        const marker = new kakao.maps.Marker({
          map: kakaomap,
          position: latlng,
          ...(isOfficial ? { image: markerImage } : {}),
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedHpid(id);
        });
      });

      const userPosition = new kakao.maps.LatLng(latitude, longitude);
      const userMarkerImage = new kakao.maps.MarkerImage(
        userPin,
        new kakao.maps.Size(40, 40)
      );
      const marker = new kakao.maps.Marker({
        map: kakaomap,
        position: userPosition,
        image: userMarkerImage,
      });

      marker.setMap(kakaomap);
      kakaomap.setCenter(userPosition);
    };

    const MapStore = {
      state: {
        kakaomap,
        latitude,
        longitude,
        disposalLocations,
        selectedHpid,
      },
      action: { setSelectedHpid, updateMap },
    };

    return (
      <MapContext.Provider value={MapStore}>
        <WrappedComponent />
      </MapContext.Provider>
    );
  };
