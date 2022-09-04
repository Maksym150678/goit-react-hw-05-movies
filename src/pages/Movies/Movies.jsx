import { useState, useEffect } from 'react';
import { fetchMoviesForQuery } from 'cervices/api';
import { useSearchParams } from 'react-router-dom';
import { InputQuery } from 'components/InputQuery/InputQuery';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState(null);
  const [page] = useState(1);
  // const [query, setQuery] = useState(null);
  const [queryParams, setQueryParams] = useSearchParams();
  const serchQueryParam = queryParams.get('query') ?? null;

  useEffect(() => {
    if (!serchQueryParam) {
      return;
    }

    fetchMoviesForQuery(serchQueryParam, page)
      .then(({ results }) => setMoviesArr(results))
      .catch(err => console.log(err));
  }, [serchQueryParam, page]);

  const setNewQuery = e => {
    // setQuery(e);
    setQueryParams({ query: e });
  };

  return (
    <main>
      <InputQuery onSubmitFunc={setNewQuery} valueQ={serchQueryParam} />
      {moviesArr && <MoviesList popularMovies={moviesArr} />}
    </main>
  );
};

export default Movies;