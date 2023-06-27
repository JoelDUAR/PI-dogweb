import style from './Footer.module.css';
import dog from '../../assets/icon/dog.png'
import email from '../../assets/icon/email.png'
import linkedin from '../../assets/icon/linkedin.png'
import github from '../../assets/icon/github.png'

const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
            <a href="/" className={style.containerImgIcons}><img src={dog} alt="Dog icon"  className={style.Img}/></a>
                
                <p  className={style.info}>Designed and developed by Joel Dupraz</p>
            </div>
            <div className={style.containerIcons}>
                <a href="mailto:joel_dupraz@hotmail.com" className={style.containerImgIcons}  ><img src={email} alt="email"  className={style.Img} /></a>
                <a href="https://www.linkedin.com/in/joel-dupraz-ardiles/" className={style.containerImgIcons} target="_blank"><img src={linkedin} alt="Linkedin" className={style.Img}/></a>
                <a href="https://github.com/JoelDUAR" className={style.containerImgIcons} target="_blank"><img src={github} alt="Github" className={style.Img}/></a>
            </div>
        </div>
    )
}


export default Footer;