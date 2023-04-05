import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [collection, setCollection] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=730d0afac1800da4f45c404259e14f12`
    )
      .then(res => res.json())
      .then(data => setCollection(data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {collection.map(item => {
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
    </>
  );
};

export default Home;
