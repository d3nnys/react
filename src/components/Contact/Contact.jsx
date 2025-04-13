import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact deleted`);
      })
      .catch(() => {
        toast.error('Something went wrong, please try again later');
      });

  return (
    <>
      <div>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
