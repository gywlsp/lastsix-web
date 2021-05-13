import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export default function PinInfo() {
  const renderInfo = () =>
    information.map((item) => (
      <InfoWrapper>
        <ImgWrapper>
          <Img src={item.pin} />
        </ImgWrapper>
        <Text>{item.text}</Text>
      </InfoWrapper>
    ));

  return <Wrapper>{renderInfo()}</Wrapper>;
}

const information = [
  {
    pin: 'https://user-images.githubusercontent.com/47051596/118152074-43edb500-b44f-11eb-8eb9-5843b4179f60.png',
    text: '현재 위치입니다.',
  },
  {
    pin: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
    text: '폐의약품 수거 지정 장소입니다.',
  },
  {
    pin: 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png',
    text: '일반 약국입니다.',
  },
];

const Wrapper = styled.div`
  padding: 0.4rem 0 0.6rem;
  margin-top: 1rem;
  border: 0.2rem solid ${GREY[200]};
  border-radius: 0.2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 0.2rem;
  align-items: center;
  padding: 0.1rem 1rem;
`;

const ImgWrapper = styled.div`
  width: 2rem;
  display: flex;
  justify-content: center;
  margin-right: 0.4rem;
`;

const Img = styled.img`
  height: 2rem;
  margin: 0 auto;
`;

const Text = styled.p``;
