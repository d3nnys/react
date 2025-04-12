import css from './App.module.css';
import { useSelector } from 'react-redux';
import { lazy } from 'react';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import Loader from '../Loader/Loader.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage.jsx')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage.jsx')
);

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}
