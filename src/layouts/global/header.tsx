import React from 'react';
import styled from 'styled-components';

import { IVORY, NAVY } from 'src/constants/colors';
import MenuIcon from 'src/assets/icons/menu';

export type GlobalHeaderProps = { toggleSidebar: () => void };

export default function GlobalHeader({ toggleSidebar }: GlobalHeaderProps) {
  return (
    <Wrapper>
      <Title>💊 약 그냥 버리게?</Title>
      <Button onClick={toggleSidebar}>
        <MenuIcon style={{ width: '2.8rem', height: '2.8rem' }} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem 0 2rem;
  height: 4.8rem;
  width: 100%;
  z-index: 100;
  background-color: ${NAVY};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const Title = styled.p`
  color: ${IVORY};
  font-size: 1.4rem;
  margin-top: 0.4rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
