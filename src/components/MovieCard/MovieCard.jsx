import { Link } from 'react-router-dom';

export default function MovieCard({ movie: { title, id } }) {
  return (
    <>
      <Link to={`/movies/${id}`}>{title}</Link>
    </>
  );
}
