import { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export const useSearchPlaces = (keyword: string) => {
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (keyword === '') return;
    const { kakao } = window;

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    const placesSearchCB = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 검색 결과를 업데이트 합니다
        setSearchResult(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    };

    const fetchData = async () => {
      // 장소 검색 객체를 생성합니다
      const ps = new kakao.maps.services.Places();
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      await ps.keywordSearch(keyword, placesSearchCB);
    };

    fetchData();
  }, [keyword]);

  return searchResult;
};
