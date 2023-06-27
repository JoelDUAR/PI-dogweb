import loader from '../../assets/image/loader.gif';
import style from './Loader.module.css';

const Loader = () => {
    return (
        <div className={style.containerLoader}>
            <img src={loader} alt="Loader" />
        </div>
    )
}


export default Loader;