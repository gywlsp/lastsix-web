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
  width: 80%;
  height: 100%;
  margin: 1rem auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  left: 0%;
  border-radius: 1rem;
`;

const TextWrapper = styled.div`
  margin: 0;
  display: table;
  padding-right: 1rem;
  text-align: right;
  position: absolute;
  height: 100%;
  width: 70%;
  top: 0%;
  right: 0%;
  background: linear-gradient(
    to right,
    #ffffff00,
    #ffffff80,
    #ffffffaa,
    #ffffffdf,
    white
  );
`;

const StyledText = styled.p`
  display: table-cell;
  vertical-align: middle;
  font-size: 1.4rem;
  font-weight: bold;
`;
