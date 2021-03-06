import React, { useState } from 'react';
import styled from 'styled-components';

import { useSearchPlaces } from 'src/hooks/api/search-place';
import NavButton from './navigation-button';
import PinInfo from './pin-info';
import Form from './search-form';
import ResultItem from './search-result';
import { GREY, NAVY } from 'src/constants/colors';

export type SidebarContentProps = {
  toggleSidebar: () => void;
};

export default function SidebarContent({ toggleSidebar }: SidebarContentProps) {
  const [query, setQuery] = useState<string>('');

  const searchResult = useSearchPlaces(query);

  const renderResults = () =>
    searchResult.map((result) => (
      <ResultItem
        key={result.id}
        placeName={result.place_name}
        address={
          result.road_address_name
            ? result.road_address_name
            : result.address_name
        }
        latitude={result.y}
        longitude={result.x}
        toggleSidebar={toggleSidebar}
      />
    ));

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoCircle>π</LogoCircle>
        <LogoText>μ½ κ·Έλ₯ λ²λ¦¬κ²?</LogoText>
      </LogoWrapper>
      <ButtonWrapper>
        <NavButton link="/pollution-case" text="π νκ²½μ€μΌ μ¬λ‘" />
        <NavButton link="/how-to-dispose" text="π± μ’λ₯λ³ νκΈ°λ²" />
      </ButtonWrapper>
      <PinInfo />
      <GuideText>* μμΈ λ΄ νκΈ° μ₯μ κ²μ κ°λ₯ </GuideText>
      <Form setQuery={setQuery} />
      <ResultsWrapper>
        {searchResult && <Ul>{renderResults()}</Ul>}
      </ResultsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
`;

const LogoCircle = styled.span`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 2rem;
  background-color: ${NAVY};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const LogoText = styled.p`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

const ResultsWrapper = styled.div`
  height: 40rem;
  padding-bottom: 4rem;
  overflow-y: auto;
`;

const Ul = styled.ul``;

const GuideText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: ${GREY[500]};
`;
