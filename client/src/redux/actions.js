import {
  GET_TEMPERAMENTS,
  POST_DOG,
  GET_DOGS,
  GET_DETAIL_DOG,
  FILTER_TEMPERAMENTS,
  FILTER_CREATED,
  ORDER_NAME,
  CLEAN_CARD_DETAIL,
  DELETE_DOG,
  CLEAN_DOG,
  GET_NAME_DOG,
  PUT_DOG,
  ORDER_WEIGHT,
} from "./actions-types";
import axios from "axios";

export const getTemperaments = () => {
  return async function (dispatch) {
    const response = (await axios.get("/temperaments"))
      .data;
    dispatch({ type: GET_TEMPERAMENTS, payload: response });
  };
};

export const postDog = ({
  name,
  max_height,
  min_height,
  max_weight,
  min_weight,
  lifeYears,
  temperament,
  image,
}) => {
  return async function (dispatch) {
    try {
    const response = await axios.post("/dogs", {
      name,
      max_height,
      min_height,
      max_weight,
      min_weight,
      lifeYears,
      temperament,
      image,
    });
    dispatch({ type: POST_DOG ,payload: response.data});
    return response;
  } catch (error) {
    alert(error.response.data.error);
  }
  };
};

  


export const getDogs = () => {
  return async function (dispatch) {
    const response = (await axios.get("/dogs")).data;
    return dispatch({ type: GET_DOGS, payload: response });
  };
};

export const getDetailDog = (idRaza) => {
  return async function (dispatch) {
    const response = (await axios.get(`/dogs/${idRaza}`))
      .data;
    return dispatch({ type: GET_DETAIL_DOG, payload: response });
  };
};

export const getNameDog = (name) => {
  return async function (dispatch) {
    const response = (
      await axios.get(`/dogs?name=${name}`)
    ).data;
    return dispatch({ type: GET_NAME_DOG, payload: response });
  };
};

export const putDog = (idRaza, payload) => {
  return async function (dispatch) {
    try {
      const response = (await axios.put(`/dogs/${idRaza}`, payload))
      .data;
      console.log(response);
    dispatch({ type: PUT_DOG });
    return response;
    } catch (error) {
      alert(error.response.data.error)
    }
    
  };
};

export const deleteDog = (idRaza) => {
  return async function (dispatch) {
    const response = (
      await axios.delete(`/dogs/${idRaza}`)
    ).data;
    return  dispatch({ type: DELETE_DOG, payload: response });
  };
};

export const cleanDog = () => {
  return { type: CLEAN_DOG };
};

export const cleanCardDetail = () => {
  return { type: CLEAN_CARD_DETAIL };
};

export const filterDogByTemperaments = (value) => {
  return { type: FILTER_TEMPERAMENTS, payload: value };
};

export const filterCreated = (value) => {
  return { type: FILTER_CREATED, payload: value };
};

export const orderByName = (value) => {
  return { type: ORDER_NAME, payload: value };
};

export const orderByWeight = (value) => {
  return { type: ORDER_WEIGHT, payload: value };
};
