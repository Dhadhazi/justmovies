import React from "react";
import styled from "styled-components";

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
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const Header = () => {
  return (
    <MainContainer>
      <Title>Find Movies</Title>
      <SearchBar type="text" placeholder="E.g. Harry Potter" />
    </MainContainer>
  );
};
