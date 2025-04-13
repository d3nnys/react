import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import css from './SearchBox.module.css';
import { TextField } from '@mui/material';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      {/* <input /> */}
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        InputProps={{
          sx: {
            borderRadius: '12px',
          },
        }}
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
