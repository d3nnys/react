import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import css from './App.module.css';
import Layout from '../Layout/Layout.jsx';
const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage.jsx')
);
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../Pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../../Pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.jsx'));

export default function App() {
  return (
    <Layout className={css.page}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
