import { useEffect, useState } from 'react';
import css from './MovieCast.module.css';
import { useParams } from 'react-router-dom';
import { getCastMovieById } from '../../movies-api.js';

export default function MovieCast() {
  const { movieId } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p';
  const fileSize = '/w200';

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCastById() {
      try {
        setError(false);
        setLoading(true);
        const data = await getCastMovieById(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getCastById();
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map(actor => (
            <li key={actor.id}>
              <img src={`${baseURL}${fileSize}${actor.profile_path}`} />
              <p>{actor.original_name}</p>
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Please wait..</p>}
      {error && <p>Oops.. Sorry..</p>}
    </div>
  );
}
