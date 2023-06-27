import { useEffect } from "react";
import { getTemperaments, filterDogByTemperaments } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Filters.module.css';


const FilterByTemperament = ({ setCurrentPage }) => {
    const allTemperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    },[dispatch]);

    const handleFilterTemperament = (event) => {
        const value= event.target.value;
        dispatch(filterDogByTemperaments(value));
        return setCurrentPage(1);
      }

    return(
        <div className={style.cointainerSelects}>
            <select onChange={(event) => handleFilterTemperament(event)} className={style.selects}>
            <option disabled selected>Temperaments</option>
          <option value="All">All</option>
            {allTemperaments &&
              allTemperaments.map((element) => {
                return (
                  <option value={element.name} key={element.id}>
                    {element.name}
                  </option>
                );
              })}
          </select>
        </div>
    )
}

export default FilterByTemperament;