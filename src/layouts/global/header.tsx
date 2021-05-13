import React from 'react';
import styled from 'styled-components';

import { IVORY, NAVY } from 'src/constants/colors';
import MenuIcon from 'src/assets/icons/menu';

export type GlobalHeaderProps = { toggleSidebar: () => void };

export default function GlobalHeader({ toggleSidebar }: GlobalHeaderProps) {
  return (
    <Wrapper>
      <Button onClick={toggleSidebar}>
        <MenuIcon style={{ width: '2.8rem', height: '2.8rem' }} />
      </Button>
      <Title>💊 약 그냥 버리게?</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.8rem 0 2rem;
  height: 4.8rem;
  width: 100%;
  background-color: ${NAVY};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const Title = styled.p`
  color: ${IVORY};
  font-size: 1.4rem;
  margin: 0 auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
