import pagenotfound from '../../assets/image/pagenotfound.png'
import style from './Error.module.css'

const Error = () => {
    return (
        <div>
        <div className={style.containerPage}>
            <img src={pagenotfound} alt="Error 404" className={style.imagenError}/>
        </div>
        </div>
    )
}

export default Error;