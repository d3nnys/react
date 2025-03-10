import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { getMovies } from '../../movies-api.js';
import Loader from '../../components/Loader/Loader.jsx';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>Oops sorry</p>}
    </div>
  );
}
