import React, { useState } from 'react';
import styled from 'styled-components';

import BlockHeader from './block-header';
import BlockContent from './block-content';
import { IVORY, NAVY } from '../../constants/colors';

type BlockProps = {
  title: string;
  image: string;
  content: string;
};

export default function InfoBlock({ title, image, content }: BlockProps) {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const toggleOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Wrapper>
      <BlockHeader
        title={title}
        isOpened={isOpened}
        toggleOpened={toggleOpened}
      />
      {isOpened && (
        <BlockContent image={image} altText={title} content={content} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 30rem;
  min-height: 4rem;
  border-radius: 1rem;
  border: 0.2rem solid ${NAVY};
  background-color: ${IVORY};
  position: relative;
  overflow: hidden;
  margin: 1rem;
`;

const Text = styled.p``;
