import { Suspense } from 'react';
import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({ children }) {
  return (
    <div className={css.page}>
      <div>
        <AppBar />
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </div>
  );
}
