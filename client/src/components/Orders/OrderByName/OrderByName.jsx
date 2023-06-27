import style from '../../Filters/Filters.module.css';
import { orderByName } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const OrderByName = ({ setCurrentPage, setOrder, setSaveState }) => {

    const dispatch = useDispatch();

    const handleOrderByName = (event) => {
        const value = event.target.value;
        dispatch(orderByName(value));
        setCurrentPage(1);
        setSaveState(value)
        return setOrder(`Ordenado ${value}`)
      }

    return (
        <div className={style.cointainerSelects}>
            <select onChange={(event)=> handleOrderByName(event)} className={style.selects}>
          <option disabled selected>Name</option>
            <option value="Ascendent">Ascendent</option>
            <option value="Descendent">Descendent</option>
          </select>
        </div>
    )
}

export default OrderByName;