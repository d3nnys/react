import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { selectError, selectLoading } from '../../redux/contacts/selectors.js';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import ContactsPage from '../../pages/ContactsPage/ContactsPage.jsx';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.page}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </section>
  );
}

{
  /* <div className={css.wrapper}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  {isLoading && <p>Loading...</p>}
  <ContactList />
  {isError && <p>Error..</p>}
</div>; */
}
