import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewByMovieId } from '../../movies-api.js';
import css from './MovieReviews.module.css';
import Loader from '../Loader/Loader.jsx';

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
      {loading && <Loader />}
      {error && <b>Oops.. sorry..</b>}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(review => (
            <li key={review.id}>
              <div className={css.userWrapper}>
                <b>Author: {review.author_details.username}</b>
                <p>Rating: {review.author_details.rating}</p>
              </div>
              <p className={css.createdDate}>{review.created_at}</p>
              <p className={css.content}>{review.content}</p>
              <hr className={css.hr} />
            </li>
          ))}
        </ul>
      ) : (
        <b>No reviews yet</b>
      )}
    </>
  );
}
