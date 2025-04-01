import MovieCard from '../MovieCard/MovieCard.jsx';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <>
      <ul className={css.list}>
        {movies.map((movie, id) => (
          <li key={id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
