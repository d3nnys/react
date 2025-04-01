import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  const getNavigationClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.list}>
      <NavLink to="/" className={getNavigationClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavigationClass}>
        Movies
      </NavLink>
    </nav>
  );
}
