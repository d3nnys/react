import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieId } from '../../movies-api.js';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const baseURL = 'https://image.tmdb.org/t/p';
  const fileSize = '/w500';

  useEffect(() => {
    async function getMovieById() {
      setError(false);
      setLoading(true);
      try {
        const data = await getMovieId({ movieId });
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovieById();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Oops.. Sorry..</p>}
      <div className={css.linkWrapper}>
        <Link to="/" className={css.linkBack}>
          Go Back
        </Link>
      </div>

      {movie && (
        <div>
          <div className={css.infoWrapper}>
            <div>
              <img src={`${baseURL}${fileSize}${movie.poster_path}`} />
            </div>
            <div className={css.rightSideInfo}>
              <p>
                <b>Name:</b> {movie.original_title}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
              <p className={css.overview}>
                <b>Overview:</b> {movie.overview}
              </p>
              <p>
                <b>Rating:</b> {movie.popularity}
              </p>
            </div>
          </div>
        </div>
      )}

      <ul>
        <li>
          <Link to="cast">
            <b>Cast</b>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <b>Reviews</b>
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
