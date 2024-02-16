import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.trendingList}>
      {movies.map(item => (
        <li key={item.id}>
          <Link
            to={`/goit-react-hw-05-movies/movies/${item.id}`}
            state={{ from: location }}
          >
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
