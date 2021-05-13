import React, { useState } from 'react';
import styled from 'styled-components';

import { useSearchPlaces } from 'src/hooks/api/search-place';
import NavButton from './navigation-button';
import Form from './search-form';
import ResultItem from './search-result';

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
      <ButtonWrapper>
        <NavButton link="/case" text="🍂 환경오염 사례" />
        <NavButton link="/disposal" text="🌱 종류별 폐기법" />
      </ButtonWrapper>
      <Form setQuery={setQuery} />
      <ResultsWrapper>
        {searchResult && <Ul>{renderResults()}</Ul>}
      </ResultsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 4.8rem;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const ResultsWrapper = styled.div`
  height: 40rem;
  padding-bottom: 4rem;
  overflow-y: auto;
`;

const Ul = styled.ul``;
