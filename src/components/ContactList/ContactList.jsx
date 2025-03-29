import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filters.name);

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <ul className={css.list}>
        {visibleContact.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
