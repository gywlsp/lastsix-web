import React, { useState } from 'react';
import styled from 'styled-components';

import SearchIcon from 'src/assets/icons/search';
import { WHITE, NAVY } from 'src/constants/colors';

type FormProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm(props: FormProps) {
  const [keyword, setKeyword] = useState<string>('');
  const { setQuery } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const doSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return;
    }
    setQuery(keyword);
  };

  return (
    <Form onSubmit={doSearch}>
      <Input
        type="text"
        id="keyword"
        value={keyword}
        onChange={handleInputChange}
      />
      <SearchButton type="submit">
        <SearchIcon style={{ width: '1.6rem', height: '2rem' }} fill={WHITE} />
      </SearchButton>
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
  display: flex;
  margin: 0.4rem 0 1rem;
`;

const Input = styled.input`
  width: 18rem;
  height: 2.6rem;
  border-radius: 0.4rem;
  border: 0.2rem solid ${NAVY};
`;

const SearchButton = styled.button`
  background-color: ${NAVY};
  border: none;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
`;
