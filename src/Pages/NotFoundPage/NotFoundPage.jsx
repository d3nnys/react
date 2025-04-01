import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <>
      <b className={css.strongText}>Sorry.. Not found page..</b>
      <p>
        Please visit out{' '}
        <Link to="/">
          <b className={css.link}>home page</b>
        </Link>
      </p>
    </>
  );
}
