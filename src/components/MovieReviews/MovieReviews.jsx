import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewByMovieId } from '../../movies-api.js';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        setError(false);
        setLoading(true);
        const data = await getReviewByMovieId({ movieId });
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && <b>Please wait...</b>}
      {error && <b>Oops.. sorry..</b>}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map(review => (
            <li key={review.id}>
              <div className={css.userWrapper}>
                <b>Author: {review.author_details.username}</b>
                <p>Rating: {review.author_details.rating}</p>
              </div>
              <p className={css.createdDate}>{review.created_at}</p>
              {/* <p>{review.updated_at}</p> */}

              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
