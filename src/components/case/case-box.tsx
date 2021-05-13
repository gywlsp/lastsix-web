import React from 'react';
import styled, { css } from 'styled-components';

import { CaseProps } from './case-info';

export default function CaseBox({ url, text }: CaseProps) {
  return (
    <BoxWrapper>
      <Image src={url} />
      <TextWrapper>
        <StyledText>{text}</StyledText>
      </TextWrapper>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const Image = styled.img`
  width: 85%;
  height: 100%;
  left: 0%;
`;

const TextWrapper = styled.div`
  margin: 0;
  display: table;
  text-align: right;
  position: absolute;
  height: 100%;
  width: 60%;
  top: 0%;
  right: 0%;
  background: linear-gradient(to right, #ffffff00, #ffffff89, #fffffffe, white);
`;

const StyledText = styled.p`
  display: table-cell;
  vertical-align: middle;
`;
