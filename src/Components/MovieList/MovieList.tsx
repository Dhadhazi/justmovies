import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieBox } from "./Components/MovieBox";
import axios from "axios";
import { Loading } from "../../Utils/Loading";
import { createImportSpecifier } from "typescript";

interface Props {
  search?: string;
}

interface Movies {
  image: string;
  title?: string;
  date?: string;
  imdbID?: string;
}

interface OMDBSearchResultData {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vh 5vw;
  @media screen and (max-width: 600px) {
    padding: 2vh 5vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

const Title = styled.p`
  text-transform: uppercase;
`;

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MovieList = ({ search }: Props) => {
  const [movies, setMovies] = useState<Movies[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (search) search = search.trim();
    const url = search
      ? `http://www.omdbapi.com/?s=${search}&apikey=3b66bce`
      : "http://www.omdbapi.com/?s=%22star%20wars%22&apikey=3b66bce";

    fetch(url)
      .then(function (response) {
        setLoading(true);
        setError(false);
        setNotFound(false);
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          setError(true);
          return;
        }

        response.json().then(function (data) {
          if (data.Response === "False") {
            setNotFound(true);
          } else {
            data = data.Search;
            const cleaned = data.map((movie: OMDBSearchResultData) => {
              return {
                title: movie.Title,
                date: movie.Year,
                image: movie.Poster,
                imdbId: movie.imdbID,
              };
            });
            setMovies(cleaned);
            setLoading(false);
          }
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, [search]);

  if (error) {
    return <div>Error screen</div>;
  }

  if (notFound) {
    return <div>Movie not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <ContentContainer>
        <Title>{search ? "Search Results" : "You might like"}</Title>
        <MovieListContainer>
          {movies &&
            movies.map(({ title, image, date, imdbID }: Movies) => (
              <MovieBox title={title} date={date} image={image} key={imdbID} />
            ))}
        </MovieListContainer>
      </ContentContainer>
    </MainContainer>
  );
};
