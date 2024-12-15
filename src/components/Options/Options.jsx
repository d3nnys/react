import css from './Options.module.css';

export default function Options({ clicks, total, onClick }) {
  return (
    <ul className={css.wrapper}>
      <li>
        <button className={css.btn} onClick={() => clicks('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => clicks('neutral')}>
          Neutral
        </button>
      </li>
      <button className={css.btn} onClick={() => clicks('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={onClick}>
          Reset
        </button>
      )}
    </ul>
  );
}
