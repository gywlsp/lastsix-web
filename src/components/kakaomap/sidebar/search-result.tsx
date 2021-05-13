import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

import { useMapContext } from 'src/contexts/map';

type ItemProps = {
  placeName: string;
  address: string;
  latitude: number;
  longitude: number;
  toggleSidebar: () => void;
};

function ResultItem({
  placeName,
  address,
  latitude,
  longitude,
  toggleSidebar,
}: ItemProps) {
  const {
    action: { updateMap },
  } = useMapContext();

  const handleClick = () => {
    updateMap(latitude, longitude);
    toggleSidebar();
  };

  return (
    <Wrapper onClick={handleClick}>
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
  pointer: cursor;
`;

const PlaceName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Address = styled.p`
  font-size: 1rem;
`;
