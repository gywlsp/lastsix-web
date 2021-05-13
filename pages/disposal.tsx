import React from 'react';
import styled from 'styled-components';

import PostLayout from 'src/layouts/post';
import disposalInfo from 'src/components/disposal/disposal-info';
import InfoBlock from 'src/components/disposal/info-block';
import { WHITE } from 'src/constants/colors';

export default function Disposal() {
  return (
    <PostLayout>
      <Wrapper>
        <ContentWrapper>
          {disposalInfo.map((item) => (
            <InfoBlock
              key={item.title}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          ))}
        </ContentWrapper>
      </Wrapper>
    </PostLayout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  padding-top: 4.8rem;
  background-color: ${WHITE};
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
