import React from 'react';
import styled from 'styled-components';

import PostLayout from 'src/layouts/post';
import CaseBox from 'src/components/case/case-box';
import caseInfo from 'src/components/case/case-info';
import { WHITE } from 'src/constants/colors';

export default function Case() {
  return (
    <PostLayout>
      <Wrapper>
        {caseInfo.map((item) => (
          <CaseBox key={item.text} url={item.url} text={item.text} />
        ))}
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
`;
