import { useDispatch } from 'react-redux';
import { switchFilterState } from '../redux/home/home';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = () => {
    const inputValue = document.getElementById('filterDisplay').value;
    dispatch(switchFilterState(inputValue));
  };
  return (
    <select id="filterDisplay" className="filter" onChange={() => { handleChange(); }}>
      <option value="0">All</option>
      <option value="50">50+</option>
      <option value="100">100+</option>
      <option value="150">150+</option>
      <option value="200">200+</option>
      <option value="250">250+</option>
    </select>
  );
};
export default Filter;
