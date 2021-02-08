import React from 'react';
import SearchMovieResult from '../components/SearchMovieResult';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { useSelector } from 'react-redux';

function SearchMovieResultContainer({ location }) {
  const { data, loading, error } = useSelector(state => state.movies.movies);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  if (loading && data) return (
    <div className="Loading">
      <span className="l1"></span>
      <span className="l2"></span>
      <span className="l3"></span>
    </div>
  );
  if (error) return <div className="Error"><span></span>에..에러!!</div>;
  if (!data) return null;
  
  return (
    <>
      {query.q && <SearchMovieResult movies={data} />}
    </>
  );
}

export default withRouter(SearchMovieResultContainer);