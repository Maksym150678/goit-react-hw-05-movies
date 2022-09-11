import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieForId } from 'cervices/api/api';

import { StyledDiv } from './movieDetails.styled.js';


export default function MovieDetails() {
  const[movie, setMovie] = useState(null);
  
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieForId(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {movie && (
        <main>
        <button
        type="button"
        style={{ padding: '5px' }}
        onClick={() => navigate(-1)} 
      >       	
🠔 go Back 
      </button>
          <div style={{ display: 'flex', gap: '30px', margin: '30px 0' }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
              }
              alt=""
              width="350"
            />
            <StyledDiv>
              <h2>{movie.original_title}</h2>
              <p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png"
                  alt="star"
                  width="20px"
                  style={{ display: 'inline-block' }}
                />{' '}
                {movie.vote_average}/10
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(({ name }, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
              <div>
                <h2>aditional information</h2>
                <Link to={`cast`}>Cast</Link>
                <Link to={`reviews`}>Reviews</Link>
              </div>
            </StyledDiv>
          </div>
          <Outlet />
        </main>
      )}
    </>
  );
}