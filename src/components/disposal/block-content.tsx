import React from 'react';
import styled from 'styled-components';

type ContentProps = {
  image: string;
  altText: string;
  content: string;
};

export default function BlockContent({
  image,
  altText,
  content,
}: ContentProps) {
  return (
    <ContentWrapper>
      <Image src={image} alt={altText} width={160} height={100} />
      <TextWrapper>
        <Text>{content}</Text>
      </TextWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  height: 16rem;
  padding: 5rem 1rem 1rem 1rem;
  display: flex;
`;

const Image = styled.img`
  width: 40%;
  height: 100%;
`;

const TextWrapper = styled.div`
  width: 60%;
  padding-left: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  word-break: keep-all;
`;
