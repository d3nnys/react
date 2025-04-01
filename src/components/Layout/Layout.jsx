import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import css from './Layout.module.css';
import Loader from '../Loader/Loader.jsx';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
    </div>
  );
}
