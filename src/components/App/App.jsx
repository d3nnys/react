import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage.jsx';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../Pages/HomePage/HomePage.jsx';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../../Pages/MovieDetailsPage/MovieDetailsPage.jsx';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';

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
