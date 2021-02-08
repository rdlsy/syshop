import React from 'react';
import { useDispatch } from 'react-redux';
import SearchMovie from '../components/SearchMovie';
import { getMovies } from '../modules/movies';

function SearchMovieContainer() {
  const dispatch = useDispatch();
  const onInsert = name => dispatch(getMovies(name));
  
  return <SearchMovie onInsert={onInsert} />
}

export default SearchMovieContainer;