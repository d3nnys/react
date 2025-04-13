import { ClockLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.overlay}>
      <div className={css.loader}>
        <ClockLoader loading size={100} color="white" />
      </div>
    </div>
  );
}
