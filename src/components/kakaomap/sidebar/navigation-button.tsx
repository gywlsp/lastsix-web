import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WHITE, MINT } from 'src/constants/colors';

type NavigationButtonProps = {
  text: string;
  link: string;
};

export default function NavigationButton({
  text,
  link,
}: NavigationButtonProps) {
  return (
    <Link href={link} passHref>
      <A>
        <Button>{text}</Button>
      </A>
    </Link>
  );
}

const A = styled.a`
  width: 49%;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: ${MINT};
  color: ${WHITE};
  border: none;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
  font-size: 1rem;
  flex-grow: 1;
`;
