import style from '../../Filters/Filters.module.css';
import { orderByWeight }from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const OrderByWeight = ({ setCurrentPage, setOrder, setSaveState }) => {

    const dispatch = useDispatch();

    const handleOrderByWeight = (event) => {
        const value = event.target.value;
        dispatch(orderByWeight(value));
        setCurrentPage(1);
        setSaveState(value)
        return setOrder(`Ordenado ${value}`)
     }

    return (
        <div className={style.cointainerSelects}>
<select onChange={(event)=> handleOrderByWeight(event)} className={style.selects}>
          <option disabled selected>Weight</option>
            <option value="max-weight">Ascendent</option>
            <option value="min_weight">Descendent</option>
          </select>
        </div>
    )
}


export default OrderByWeight;