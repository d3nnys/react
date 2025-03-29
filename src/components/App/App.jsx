import { useEffect, useState } from 'react';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  return (
    <section className={css.page}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList />
      </div>
    </section>
  );
}

// const addContact = newContact => {
//   setContacts(prevContacts => {
//     return [...prevContacts, newContact];
//   });
// };

// const deleteContact = contactId => {
//   setContacts(prevContacts => {
//     return prevContacts.filter(contact => contact.id !== contactId);
//   });
// };

// const visibleContact = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const Contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
