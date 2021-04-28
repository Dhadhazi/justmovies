import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  setSearch: Function;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 5vw;
  background-color: #242424;
  @media screen and (max-width: 600px) {
    padding: 2vh 5vw;
  }
`;

const Title = styled.h1`
  color: white;
  width: 100%;
  max-width: 1440px;
  text-align: left;
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 300;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const SearchBar = styled.input`
  width: 90vw;
  max-width: 1440px;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const Header = ({ setSearch }: Props) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const t = setTimeout(() => {
      if (input) setSearch(input);
    }, 400);

    return () => {
      clearTimeout(t);
    };
  }, [input]);

  return (
    <MainContainer>
      <Title>Find Movies</Title>
      <SearchBar
        type="text"
        placeholder="E.g. Harry Potter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </MainContainer>
  );
};
