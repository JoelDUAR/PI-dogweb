import style from './Card.module.css';

const Card = (props) =>{
    return(
        <div className={style.containerCard}>
            <img src={props.image} alt="avatar" className={style.imageCard}/>
            <p className={style.pCard}>{props.id}</p>
            <h3 className={style.name}>{props.name}</h3>
            <p className={style.pCard}>{props.max_height}</p>
            <p className={style.pCard}>{props.min_height}</p>
            <p className={style.pCard}>{props.max_weight}</p>
            <p className={style.pCard}>{props.min_weight}</p>
            <p className={style.pCard}>{props.created === true ?
                  props.Temperaments.map((element) => element.name)
                  :props.Temperaments
               }</p>
            <p className={style.pCard}>{props.lifeYears}</p>
            {props.created===true ? <div>
                <button>Update</button>
                <button>Delete</button>
            </div>
            : <div></div>
            }
        </div>
    )
}

export default Card;