import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList({ Contacts, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {Contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
