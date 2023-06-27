import style from '../Filters.module.css'
import { filterCreated } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const FilterCreated = ({ setCurrentPage }) => {

    const dispatch = useDispatch();

  const handleFilterCreated = (event) => {
    const value= event.target.value;
    dispatch(filterCreated(value));
    return setCurrentPage(1);
  }

    return (
        <div className={style.cointainerSelects}>
            <select onChange={(event)=> handleFilterCreated(event)} className={style.selects} >
            <option disabled selected>Creation</option>
            <option value="All">All</option>
            <option value="created">Created</option>
            <option value="api">Api</option>
          </select>
        </div>
    )
}

export default FilterCreated;