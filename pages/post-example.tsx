import React from 'react';
import styled from 'styled-components';

import PostLayout from 'src/layouts/post';
import { WHITE } from 'src/constants/colors';

export default function PostExamplePage() {
  return (
    <PostLayout>
      <Wrapper>dd</Wrapper>
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
