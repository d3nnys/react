import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
import { getMovieBySearch } from '../../movies-api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getMovieSearch() {
  //     try {
  //       setError(false);
  //       setLoading(true);
  //       const data = await getMovieBySearch();
  //       setMovies(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getMovieSearch();
  // }, []);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const querySearch = form.elements.query.value.trim();
    form.reset();
    if (!querySearch) return;

    try {
      setError(false);
      setLoading(true);
      const data = getMovieBySearch(querySearch);
      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <p>Oops.. Error..</p>}
    </div>
  );
}
