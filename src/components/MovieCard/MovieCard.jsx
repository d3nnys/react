import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';

export default function MovieCard({ movie: { title, id, backdrop_path } }) {
  const baseURL = 'https://image.tmdb.org/t/p';
  const fileSize = '/w500';

  return (
    <>
      <Link className={css.link} to={`/movies/${id}`}>
        <img src={`${baseURL}${fileSize}${backdrop_path}`} />
        <b>{title}</b>
      </Link>
    </>
  );
}
