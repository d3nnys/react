import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkByClsx = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.list}>
      <NavLink className={linkByClsx} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={linkByClsx} to="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
