import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      {isLoggedIn && <p>Welcome, {user.name}</p>}
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
