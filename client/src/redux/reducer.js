import {
  GET_TEMPERAMENTS,
  POST_DOG,
  GET_DOGS,
  GET_DETAIL_DOG,
  CLEAN_CARD_DETAIL,
  FILTER_TEMPERAMENTS,
  FILTER_CREATED,
  ORDER_NAME,
  DELETE_DOG,
  GET_NAME_DOG,
  PUT_DOG,
  ORDER_WEIGHT,
} from "./actions-types";

const initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  detailDog: {},
  detailDogAuxiliar: {},
  dog: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case POST_DOG:
      return { ...state, deailDog: action.payload, allDogs: action.payload };
    case GET_DOGS:
      return { ...state, dogs: action.payload, allDogs: action.payload };
    case GET_DETAIL_DOG:
      return { ...state, detailDog: action.payload };
    case GET_NAME_DOG:
      return { ...state, dogs: action.payload };
    case CLEAN_CARD_DETAIL:
      return { ...state, detailDog: {} };
    case DELETE_DOG:
      return { ...state, dog: action.payload};
/*     case CLEAN_DOG:
      return { ...state, dog: {} }; */
    case PUT_DOG:
      return { ...state };
    case FILTER_TEMPERAMENTS:
      const allDogs = state.allDogs;
      const temperamentsFiltered =
        action.payload === " "
          ? allDogs
          : allDogs.filter((element) => {
              return element.Temperaments?.includes(action.payload);
            });
      return {
        ...state,
        dogs: temperamentsFiltered,
      };
    case FILTER_CREATED:
      const allDogs2 = state.allDogs;
      const createdFilter =
        action.payload === "created"
          ? allDogs2.filter((dog) => dog.created)
          : allDogs2.filter((dog) => !dog.created);
      return {
        ...state,
        dogs: action.payload === "All" ? state.allDogs : createdFilter,
      };
    case ORDER_NAME:
      let sortedName =
        action.payload === "Ascendent"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: sortedName,
      };
    case ORDER_WEIGHT:
      let sortedWeight =
      action.payload === "min_weight"
        ? state.allDogs.sort((a, b) => {
            if (parseInt(a.max_weight) > parseInt(b.max_weight)) return -1;
            if (parseInt(a.max_weight) < parseInt(b.max_weight)) return 1;
            return 0;
          })
        : state.allDogs.sort((a, b) => {
            if (parseInt(a.max_weight) > parseInt(b.max_weight)) return 1;
            if (parseInt(a.max_weight) < parseInt(b.max_weight)) return -1;
            return 0;
          });
    return {
      ...state,
      dogs: sortedWeight,
    };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
