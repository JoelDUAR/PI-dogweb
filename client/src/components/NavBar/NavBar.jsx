import style from "./NavBar.module.css";
import Home from "../../assets/icon/Home.png";
import Exit from "../../assets/icon/Exit.png";
import Form from "../../assets/icon/Form.png";
import load from "../../assets/icon/load.png";
import { getDogs } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleGetDogs = () => {
    return dispatch(getDogs());
  };

  return (
    <div className={style.container}>
      <input type="checkbox" className={style.btnCheckbox} id="btnMas" />
      <div className={style.btnMas}>
        <label htmlFor="btnMas" className={style.btnMas2}>
          <Link to="/">
            <button className={style.iconAdd}>
              <img src={Exit} alt="Icon Exit" className={style.imgIconExit} />
            </button>
          </Link>
        </label>
      </div>
      <div className={style.ContainerIconsviews}>
        <Link to="/home">
          <button className={style.icon}>
            <img src={Home} alt="Icon Home" className={style.imgIcon} />
          </button>
        </Link>
        <Link to="/form">
          <button className={style.icon}>
            <img src={Form} alt="Icon Form" className={style.imgIcon} />
          </button>
        </Link>
      </div>
      <div className={style.container2}>
        <input type="checkbox" className={style.btnCheckbox} />
        <div className={style.btnMas2}>
          <button
            className={style.iconReload}
            onClick={handleGetDogs}
          >
            <img src={load} alt="Icon reload" className={style.imgIconExit} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
