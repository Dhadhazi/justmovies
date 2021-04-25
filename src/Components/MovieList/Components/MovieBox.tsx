import React from "react";
import styled from "styled-components";

interface MovieBox {
  image: string;
  title?: string;
  date?: string;
}

const Container = styled.div`
  overflow: hidden;
  text-align: center;
  font-weight: 100;
  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const MovieBox = ({ image, title, date }: MovieBox) => {
  return (
    <Container>
      <MoviePoster src={image}></MoviePoster>
      {title && <div>{title}</div>}
      {date && <div>({date})</div>}
    </Container>
  );
};
