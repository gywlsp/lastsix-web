import React from 'react';
import styled from 'styled-components';

import { WHITE } from 'src/constants/colors';
import LoadingSpinner from './spinner';

export default function LoadingOverlay() {
  return (
    <Overlay>
      <P>위치 파악 중...</P>
      <LoadingSpinner />
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const P = styled.p`
  font-size: 1.4rem;
  color: ${WHITE};
  margin-bottom: 1.2rem;
`;
