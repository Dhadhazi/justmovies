import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  padding: 5vh 10vw;
  background-color: #242424;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

const SearchBar = styled.input`
  width: 80%;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const Header = () => {
  return (
    <Container>
      <Title>Find Movies</Title>
      <SearchBar type="text" placeholder="E.g. Harry Potter" />
    </Container>
  );
};
