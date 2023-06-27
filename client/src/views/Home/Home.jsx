import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getDogs } from "../../redux/actions";
import style from "./Home.module.css";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";
import { OrderByName, OrderByWeight } from "../../components/Orders/index";
import { FilterByTemperament, FilterCreated} from "../../components/Filters/index";
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    if (allDogs.length === 0) {
      return dispatch(getDogs());
    }
  }, [allDogs.length, dispatch]);

  // eslint-disable-next-line
  const [order, setOrder] = useState("");

  // eslint-disable-next-line
  const [saveState, setSaveState] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
  
  return (
    <div className={style.cointainerHome}>
      <div className={style.cointainerinfo}>
        <h2 className={style.infoPage}>{`Page: ${currentPage}`}</h2>
        <div>
          <FilterCreated setCurrentPage={setCurrentPage} />
          <FilterByTemperament setCurrentPage={setCurrentPage} />
          <OrderByName
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}
            setSaveState={setSaveState}
          />
          <OrderByWeight
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}
            setSaveState={setSaveState}
          />
        </div>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.cointainerViews}>
        <div className={style.containerPaginado}>
          <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </div>
      
        {
          JSON.stringify(currentDogs) === JSON.stringify([])
          ? <div className={style.containerLoader}>
           <Loader />
        </div>
        : <div className={style.cointainerCards}>
        <CardsContainer currentDogs={currentDogs} allDogs={allDogs} />
      </div> 
        }
        
      </div>
    </div>
  );
};

export default Home;
