import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';

export default function MovieCard({ movie: { title, id } }) {
  return (
    <>
      <Link className={css.link} to={`/movies/${id}`}>
        {title}
      </Link>
    </>
  );
}
