const {
  getDogById,
  getDogs,
  createDog,
  getDogByName,
  updatedDog,
  deleteDog,
} = require("../controllers/dogController");
const errorUser = require('../helpers/errorsUsers')

const getDogHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const dogs = name ? await getDogByName(name) : await getDogs();
    if (dogs.length === 0) throw Error("This name don't exist");
    res.status(200).json(dogs);
  } catch (error) {
    errorUser(error, res);
  }
};

const getBreedDogHandler = async (req, res) => {
  let { idRaza } = req.params;
  const source = isNaN(idRaza) ? "bdd" : "api";
  try {
    const breedDog = await getDogById(idRaza, source);
    res.status(200).json(breedDog);
  } catch (error) {
    errorUser(error, res);
  }
};

const createDogHandler = async (req, res) => {
  const {
    name,
    max_height,
    min_height,
    max_weight,
    min_weight,
    lifeYears,
    image,
    temperament,
  } = req.body;

  try {
    const newDog = await createDog({
      name,
      max_height,
      min_height,
      max_weight,
      min_weight,
      lifeYears,
      image,
      temperament,
    });
    res.status(200).json(newDog);
  } catch (error) {
    errorUser(error, res);
  }
};

const updateDogHandler = async (req, res) => {
  const { idRaza } = req.params;
  const { name, max_height, min_height, max_weight, min_weight, lifeYears, image } = req.body;
  try {
    const response = await updatedDog({ idRaza, name, max_height, min_height, max_weight, min_weight, lifeYears, image});
    res.status(200).json(response);
  } catch (error) {
    errorUser(error, res);
  }
};

const deleteDogHandler = async (req, res) => {
  const { idRaza } = req.params;
  try {
    const response = await deleteDog(idRaza);
    res.status(200).json(response);
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  getDogHandler,
  getBreedDogHandler,
  createDogHandler,
  updateDogHandler,
  deleteDogHandler,
};
