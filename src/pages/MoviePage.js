import React from 'react';
import styled from 'styled-components';
import SearchMovieContainer from '../containers/SearchMovieContainer';
import SearchMovieResultContainer from '../containers/SearchMovieResultContainer';

const MovieTemplate = styled.div`
  max-width: 800px;
  padding: 4rem 1.2rem 7rem;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    padding: 2rem 1rem 4rem;
  }
`;

function MoviePage() {
  return (
    <MovieTemplate>
      <SearchMovieContainer />
      <SearchMovieResultContainer />
    </MovieTemplate>
  );
}

export default MoviePage;