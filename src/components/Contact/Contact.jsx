import css from './Contact.module.css';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
