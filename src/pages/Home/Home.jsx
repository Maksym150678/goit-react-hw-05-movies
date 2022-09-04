import { fetchMostPopularMovies } from 'cervices/api';
import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
// styles
import { Title } from 'pages/Home/home.styled.js';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchMostPopularMovies()
      .then(({ results }) => setPopularMovies(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {popularMovies && <MoviesList popularMovies={popularMovies} />}
    </main>
  );
};

export default Home;