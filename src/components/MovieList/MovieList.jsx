import MovieCard from '../MovieCard/MovieCard.jsx';

export default function MovieList({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie, id) => (
          <li key={id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
