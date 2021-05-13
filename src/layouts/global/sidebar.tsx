import React from 'react';
import styled from 'styled-components';

import { WHITE } from 'src/constants/colors';
import SideBarContent from 'src/components/kakaomap/sidebar';

export type GlobalSidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export default function GlobalSidebar({
  isOpen,
  toggleSidebar,
}: GlobalSidebarProps) {
  return (
    <Overlay isOpen={isOpen}>
      <Space onClick={toggleSidebar} />
      <Wrapper isOpen={isOpen}>
        <SideBarContent />
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div<{ isOpen: boolean }>`
  @media (max-width: 1024px) {
    position: fixed;
    z-index: 200;
    display: flex;
    flex: 1 0 auto;
    width: 100%;
    ${({ isOpen }) =>
      isOpen
        ? 'height: 100vh; background-color: rgba(0, 0, 0, 0.3)'
        : 'height: auto; background-color: rgba(0, 0, 0, 0)'};
    transition: background-color 0.3s;
    overflowx: auto;
    outline: 0;
  }
`;

const Space = styled.div`
  flex: 1;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: left;
  padding: 0 2rem;
  height: 100vh;
  width: 24rem;
  z-index: 50;
  background-color: ${WHITE};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
  left: ${({ isOpen }) => (isOpen ? 0 : '-24rem')};
  transition: left 0.3s ease-out;
`;
