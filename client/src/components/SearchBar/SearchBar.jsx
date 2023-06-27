import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getNameDog } from '../../redux/actions';
import loupe from '../../assets/icon/loupe.png';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        return setName(value);
    }

    const handleSubmit = () => {
         dispatch(getNameDog(name));
        return setName("")
    }

    return (
        <div className={style.containerSearchBar}>
            <input type="text" placeholder="Search..." onChange={(e) => handleInputChange(e)} value={name} className={style.inputSearchBar}/>
            <button onClick={() => handleSubmit()} className={style.buttonSearchBar}><img src={loupe} alt="Loupe" className={style.imageSearchBar}/></button>
        </div>
    )

}

export default SearchBar;