import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd500b86f34dc7270e191688956d94f6d',
};

export const fetchMostPopularMovies = async () => {
  const { data } = await axios.get('/trending/movie/week');
  return data;
};

export const fetchMovieForId = async id => {
  const { data } = await axios.get(`/movie/${id}&language=en-US`);
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

export const fetchMoviesForQuery = async (name, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: name,
      page: page,
    },
  });
  return data;
};