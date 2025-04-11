import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation.jsx';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
