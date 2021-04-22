import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  padding: 2vh 5vw;
  @media screen and (max-width: 600px) {
    padding: 2vh 5vw;
  }
`;

const Title = styled.p`
  text-transform: uppercase;
`;

const MovieBox = styled.div`
  width: 20vw;
  overflow: hidden;
`;

const MoviePoster = styled.img`
  width: 100%;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const MovieList = () => {
  return (
    <MainContainer>
      <Title>You might like</Title>
      <MovieBox>
        <MoviePoster src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"></MoviePoster>
      </MovieBox>
    </MainContainer>
  );
};
