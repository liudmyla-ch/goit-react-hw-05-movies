import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieSection, Img, AdditionalSection } from './MovieDetails.styled';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const {
    title,
    name,
    release_date,
    vote_average,
    overview,
    poster_path,
    genres,
  } = movie || [];

  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=730d0afac1800da4f45c404259e14f12&language=en-US`
    )
      .then(res => {
        if (!res.ok) {
          setMovie('badRequest');
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => {
        setMovie(data);
      });
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button>Go back</button>
      </Link>
      {movie === 'badRequest' && (
        <Img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt="404"
          width="300px"
        />
      )}
      {movie && movie !== 'badRequest' && (
        <>
          <MovieSection>
            {poster_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={name || title}
                width="300px"
              />
            ) : (
              <Img
                src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
                alt="404"
                width="300px"
              />
            )}

            <div>
              <h1>
                {title || name} &#40;{new Date(release_date).getFullYear()}&#41;
              </h1>

              <p>Rating: {vote_average}</p>
              <h2>Overview </h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </MovieSection>
          <AdditionalSection>
            <p>Additional Information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </AdditionalSection>

          <Outlet />
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }),
};

export default MovieDetails;
