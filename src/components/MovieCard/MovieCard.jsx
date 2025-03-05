import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

export default function MovieCard({
  movie: { title, id, backdrop_path, release_date },
}) {
  const baseURL = 'https://image.tmdb.org/t/p';
  const fileSize = '/w500';
  const location = useLocation();

  return (
    <>
      <Link className={css.link} to={`/movies/${id}`} state={location}>
        <img src={`${baseURL}${fileSize}${backdrop_path}`} />
        <b>
          {title} ({release_date})
        </b>
      </Link>
    </>
  );
}
