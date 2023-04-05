import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

 const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=730d0afac1800da4f45c404259e14f12&language=en-US`
    ).then(res =>
      res.json().then(data => {
        setCastInfo(data.cast);
      })
    );
  }, [movieId]);
  return (
    <>
      {' '}
      {castInfo.length === 0 && <p>There is nothing to view</p>}
      {castInfo && (
        <ul>
          {castInfo.map(item => {
            const { character, name, profile_path, id } = item;
            return (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    width="200px"
                  />
                ) : (
                  <img
                    src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
                    alt="404"
                    width="200px"
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
}

export default Cast;
