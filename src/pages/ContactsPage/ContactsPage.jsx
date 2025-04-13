import css from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../../components/Loader/Loader.jsx';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className={css.wrapper}>
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Loading...</p>}
        <ContactList />
        {isError && <p>Error..</p>}
      </div>
    </div>
  );
}
