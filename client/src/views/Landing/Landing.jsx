import dog from '../../assets/image/dog.png';
import style from './Landing.module.css';
import { Link } from 'react-router-dom'


const Landing = () => {

   

return(

    <div className={style.container}>
        <div className={style.containerButton}>
            <img src={dog} alt="Dog" className={style.dogLanding}/>
            <h1 className={style.text}>Welcome to dog web</h1>
            <Link to="/home"><button className={style.buttonLanding} >Log in</button></Link>
        </div>
    </div>

)

}

export default Landing; 