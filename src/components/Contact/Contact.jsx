import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps.js';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
