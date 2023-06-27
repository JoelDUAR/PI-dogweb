import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getDetailDog, cleanCardDetail, deleteDog, getDogs } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './Detail.module.css';
import style2 from '../Form/Form.module.css';
import Loader from '../../components/Loader/Loader';

const Detail = () => {
  const dispatch = useDispatch();
  const dog = useSelector ((state) => state.detailDog);
  const {idRaza} = useParams();
  const history = useHistory();
  
  useEffect(()=>{
    dispatch(getDetailDog(idRaza));
    return ()=>{
      dispatch(cleanCardDetail())
    }
  }, [idRaza, dispatch]);

 const handleDelete = () => {
  dispatch(deleteDog(idRaza));
  alert(`Breed dog: ${dog.name} has been successfully eliminated`);
  dispatch(getDogs());
  return history.push("/home");
 }
    return(
    
        <div className={style.divContenedor}>
            { dog.name
             ? <div className={style.box}>
              <div className={style.containerCardDetail}>
             <div className={style.divContenedorImg}>
               <img
                 className={style.imageCard}
                 src={dog.image}
                 alt={dog.name}
               />
             </div>
             <div className={style.divContenedorInfo}>
              
               <h2 className={style.nameCard}>Name: {dog.name}</h2>
               <p className={style.infoCard}>Id: {dog.id}</p>
               <p className={style.infoCard}>Max-height: {dog.max_height}</p>
               <p className={style.infoCard}>Min-height: {dog.min_height}</p>
               <p className={style.infoCard}>Max-weight: {dog.max_weight}</p>
               <p className={style.infoCard}>Min-weight: {dog.min_weight}</p>
               <p className={style.infoCard}>Temperaments:  
                {dog.created === true ?
                  dog.Temperaments.map((element) => ` ${element.name}, `)
                  :dog.Temperaments
               }</p>
               <p className={style.infoCard}>Life years: {dog.created === true ?  ` ${dog.lifeYears} years` : dog.lifeYears}</p>
             </div>
             
              {dog.created === true 
              ? 
              <div className={style.containerButtos}>
                <Link to={`/formUpdate/${idRaza}`}><button className={style2.button}>Update</button></Link>
           
                <button className={style2.button} onClick={handleDelete}>Delete</button>
              </div>
              : <div></div>
            }
             
             </div>
           </div>
           : <div>
            < Loader/>
           </div>
           }
        </div>
    
    )
    
    }
    
    export default Detail; 