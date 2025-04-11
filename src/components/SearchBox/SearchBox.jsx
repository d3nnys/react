import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
