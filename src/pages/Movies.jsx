import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

 const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  

  useEffect(() => {
    if (searchParams.has('query')) {
      const query = searchParams.get('query');
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=730d0afac1800da4f45c404259e14f12&language=en-US&query=${query}&page=1&include_adult=false`
      ).then(res =>
        res.json().then(data => {
          setSearchResult(data.results);
        })
      );
    }
  }, [searchParams]);

  const onSubmitSearch = evt => {
    evt.preventDefault();
    setSearchParams({ query: inputValue });
  };

  const location = useLocation();

  return (
    <>
      <form onSubmit={onSubmitSearch}>
        <input
          type="search"
          onChange={evt => setInputValue(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResult.length > 0 && (
        <ul>
          {searchResult.map(item => {
            const { id, title, name } = item;
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title || name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet/>
    </>
  );
};

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }),
};

export default Movies;
