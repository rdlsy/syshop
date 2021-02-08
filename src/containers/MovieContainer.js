import React from 'react';
import { useDispatch } from 'react-redux';
import SearchMovie from '../components/SearchMovie';
import SearchMovieResult from '../components/SearchMovieResult';
import styled from 'styled-components';
import { getMovies } from '../modules/movies';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const MovieTemplate = styled.div`
  max-width: 800px;
  padding: 4rem 1.2rem 7rem;
  margin: 0 auto;
  @media ${props => props.theme.tablet} {
    padding: 2rem 1rem 4rem;
  }
`;

function MovieContainer({ location }) {
  const dispatch = useDispatch();
  const onInsert = name => dispatch(getMovies(name));
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  
  return (
    <MovieTemplate>
      <SearchMovie onInsert={onInsert} />
      {query.q && <SearchMovieResult movieNm={query.q} />}
    </MovieTemplate>
  );
}

export default withRouter(MovieContainer);