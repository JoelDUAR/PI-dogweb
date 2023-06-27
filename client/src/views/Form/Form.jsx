import Style from "./Form.module.css";
import ok from "../../assets/icon/ok.png";
import validate from "./validate";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments, postDog, getDogs } from "../../redux/actions.js";
import { useHistory } from "react-router-dom";

const Form = () => {
  const allTemperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    lifeYears: "",
    temperament: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    lifeYears: "",
    temperament: [],
    image: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const changeSelectHandler = (event) => {
    const value = event.target.value;
    if (!form.temperament.includes(value)) {
      setForm({ ...form, temperament: [...form.temperament, value] });
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if(!errors.name){
      dispatch(postDog(form));
      alert('the dog breed was created successfully');
      dispatch(getDogs());
      setForm({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        lifeYears: "",
        temperament: [],
        image: "",
      });
      history.push("/home");
    } else {
      alert('Errors exist');
    }
  };

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={SubmitHandler}>
        <h1 className={Style.title}>Create your breed dog</h1>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className={Style.input}
              value={form.name}
              onChange={changeHandler}
            />
            {!errors.name && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.name && (
            <span className={Style.spanError}>{errors.name}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_height">Max-height: </label>
            <input
              type="text"
              name="max_height"
              className={Style.input}
              value={form.max_height}
              onChange={changeHandler}
            />
            {!errors.max_height && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.max_height && (
            <span className={Style.spanError}>{errors.max_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_height">Min-height: </label>
            <input
              type="text"
              name="min_height"
              className={Style.input}
              value={form.min_height}
              onChange={changeHandler}
            />
            {!errors.min_height && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.min_height && (
            <span className={Style.spanError}>{errors.min_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_weight">Max-weight: </label>
            <input
              type="text"
              name="max_weight"
              className={Style.input}
              value={form.max_weight}
              onChange={changeHandler}
            />
            {!errors.max_weight && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.max_weight && (
            <span className={Style.spanError}>{errors.max_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_weight">Min-weight: </label>
            <input
              type="text"
              name="min_weight"
              className={Style.input}
              value={form.min_weight}
              onChange={changeHandler}
            />
            {!errors.min_weight && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.min_weight && (
            <span className={Style.spanError}>{errors.min_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="lifeYears">Life years: </label>
            <input
              type="text"
              name="lifeYears"
              className={Style.input}
              value={form.lifeYears}
              onChange={changeHandler}
            />
            {!errors.lifeYears && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.lifeYears && (
            <span className={Style.spanError}>{errors.lifeYears}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="temperaments">Temperaments: </label>
            <select name="temperaments" onChange={changeSelectHandler} className={Style.temperamentSalected}>
             
              {allTemperaments ? (
                allTemperaments.map((element) => {
                  return (
                    <option value={element.name} key={element.id}>
                      {element.name}
                    </option>
                    
                  );
                })
              ) 
              
              : (
                <h1>...Loading</h1>
              )}
            </select>
          
          </div>
          <span className={Style.spanError}>{errors.temperament}</span>
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              name="image"
              className={Style.input}
              value={form.image}
              onChange={changeHandler}
              placeholder="Ingresar URL"
            />
            {!errors.image && (
              <img src={ok} alt="ok" className={Style.imageInput} />
            )}
          </div>
          {errors.image && (
            <span className={Style.spanError}>{errors.image}</span>
          )}
        </div>
        <div></div>
        {JSON.stringify(form.temperament) === JSON.stringify([]) &&
        !form.image ? (
          <div className={Style.containerTemperamentsNone}></div>
        ) : (
          <div className={Style.containerTemperaments}>
            <img src={form.image} alt={form.name} className={Style.imgRender} />
            <h2 className={Style.titleTemperament}>Temperaments</h2>
            {form.temperament.map((element) => {
              return <p className={Style.temperaments}>{element}</p>;
            })}
          </div>
        )}

        {errors.name ||
        errors.max_height ||
        errors.min_height ||
        errors.max_weight ||
        errors.min_weight ||
        errors.lifeYears ? (
          <h1 className={Style.errorMessage}>Please correct any errors</h1>
        ) : (
          <div className={Style.containerButtons}>
            <button className={Style.button}>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
