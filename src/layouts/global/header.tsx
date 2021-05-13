import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { IVORY, NAVY } from 'src/constants/colors';
import MenuIcon from 'src/assets/icons/menu';
import ChevronLeftIcon from 'src/assets/icons/chevron-left';

export type GlobalHeaderProps = {
  isHome: boolean;
  onLeftButtonClick: () => void;
};

export default function GlobalHeader({
  isHome,
  onLeftButtonClick,
}: GlobalHeaderProps) {
  const Icon = isHome ? MenuIcon : ChevronLeftIcon;

  return (
    <Wrapper>
      <Button onClick={onLeftButtonClick}>
        <Icon />
      </Button>
      <Link href="/">
        <Title>💊 약 그냥 버리게?</Title>
      </Link>
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
  padding: 0 4.4rem 0 1.6rem;
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
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
