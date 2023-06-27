import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import style from './CardsContainer.module.css';

const CardsContainer = (props) => {
	
    const {currentDogs, allDogs} = props;
    
    return (
        <div className={style.containerCards}>
            { currentDogs ?
                currentDogs?.map((dog) =>{
                    return(
                        <Link to={`/detail/${dog.id}`}>< Card
                            key={dog.id}
                            image={dog.image}
                            name={dog.name}
                            Temperaments={dog.created === true ?
                                `Temperaments: ${dog.Temperaments.map((element) => element.name)}`
                                :`Temperaments: ${dog.Temperaments}`
                             }
                            max_weight={`Peso max: ${dog.max_weight}`}
                            min_weight={`Peso min: ${dog.min_weight}`}
                            />
                            </Link>
                    )
                }) : allDogs?.map((dog) =>{
                    return(
                        <Link to={`/detail/${dog.id}`}>< Card
                            key={dog.id}
                            image={dog.image}
                            name={dog.name}
                            Temperaments={dog.created === true ?
                                `Temperaments: ${dog.Temperaments.map((element) => element.name)}`
                                :`Temperaments: ${dog.Temperaments}`
                             }
                            max_weight={`Peso max: ${dog.max_weight}`}
                            min_weight={`Peso min: ${dog.min_weight}`}
                            />
                            </Link>
                    )
                }) 
            }
        </div>
    )
}

/*  `Temperament: ${dog.Temperaments}` */
export default CardsContainer;