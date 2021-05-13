import React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../global';
import { LayoutProps } from '..';
import { GREY } from 'src/constants/colors';

export default function PostLayout({ children }: LayoutProps) {
  return (
    <GlobalLayout>
      <Wrapper>{children}</Wrapper>
    </GlobalLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${GREY[200]};
`;
