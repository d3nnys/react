import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieId } from '../../movies-api.js';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? '/');

  const baseURL = 'https://image.tmdb.org/t/p';
  const fileSize = '/w500';

  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

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
    <>
      <div className={css.linkWrapper}>
        <Link to={backLinkURLRef.current} className={css.linkBack}>
          ← Go Back
        </Link>
      </div>
      {loading && <Loader />}
      {error && <p>Oops.. Sorry..</p>}

      {movie && (
        <div>
          <div className={css.infoWrapper}>
            <div>
              <img src={`${baseURL}${fileSize}${movie.poster_path}`} />
            </div>
            <div className={css.rightSideInfo}>
              <p>
                <b>Name:</b> {movie.original_title} ({movie.release_date})
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

      <ul className={css.list}>
        <li>
          <NavLink className={linkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback="WAIT!!">
        <Outlet />
      </Suspense>
    </>
  );
}
