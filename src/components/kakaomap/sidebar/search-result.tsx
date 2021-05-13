import React from 'react';
import { GREY } from 'src/constants/colors';
import styled from 'styled-components';

type ItemProps = {
  placeName: string;
  address: string;
  latitude: number;
  longtitude: number;
};

function ResultItem({ placeName, address, latitude, longtitude }: ItemProps) {
  return (
    <Wrapper
      onClick={() => {
        console.log(latitude, longtitude);
      }}
    >
      <PlaceName>{placeName}</PlaceName>
      <Address>{address}</Address>
    </Wrapper>
  );
}

export default ResultItem;

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 0.1rem solid ${GREY[300]};
`;

const PlaceName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Address = styled.p`
  font-size: 1rem;
`;
