import React from 'react';
import styled from 'styled-components';

import PostLayout from 'src/layouts/post';
import { WHITE } from 'src/constants/colors';

export default function HowToDisposePage() {
  return (
    <PostLayout>
      <Wrapper>
        <Img src="https://me.go.kr/upload/2/editor/201805/11/20180511140241.jpg" />
        <Img src="https://me.go.kr/upload/2/editor/201805/11/20180511140307.jpg" />
        <Img src="https://me.go.kr/upload/2/editor/201805/11/20180511140321.jpg" />
        <Img src="https://me.go.kr/upload/2/editor/201805/11/20180511140335.jpg" />
      </Wrapper>
    </PostLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  padding-top: 4.8rem;
  background-color: ${WHITE};
`;

const Img = styled.img`
  max-width: 720px;
  width: 100%;
`;
