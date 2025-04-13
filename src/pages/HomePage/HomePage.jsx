import css from './HomePage.module.css';
import Loader from '../../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

export default function HomePage() {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <h1 className={css.title}>Welcome to the club, buddy!</h1>
    </div>
  );
}
