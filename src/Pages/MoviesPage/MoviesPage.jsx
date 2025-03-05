import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
import { getMovieBySearch } from '../../movies-api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const isNewQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!isNewQuery) return;

    async function getMovieSearch() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieBySearch(isNewQuery, page);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieSearch();
  }, [isNewQuery, page]);

  const handleSubmit = event => {
    event.preventDefault();
    const inputQuery = event.target.elements.query.value.trim();
    if (!inputQuery) return;
    searchParams.set('query', inputQuery);
    setSearchParams(searchParams);

    setMovies([]);
    setPage(1);
    event.target.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query" autoFocus />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <p>Oops.. Error..</p>}
    </div>
  );
}
