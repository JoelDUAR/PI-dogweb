const { Op } = require("sequelize");
const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const cleanData = require("../helpers/cleanData");
const cleanDataById = require("../helpers/cleanDataById"); 

const getDogById = async (idRaza, source) => {
  const dog =
    source === "api"
      ? await cleanDataById((await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${API_KEY}`)).data)
      : await Dog.findByPk(idRaza, {
          include: {
            model: Temperament,
            attribute: ["name"],
            through: {
              attributes: [],
            },
          },
        });

        if(JSON.stringify(dog) === JSON.stringify({})) throw Error("Id don't exist")
        
  return dog;
};

const getDogs = async () => {
  const databaseDogs = await Dog.findAll({
    include: {
      model: Temperament,
      attribute: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const apiDogsRaw = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;

  const apiDogs = await cleanData(apiDogsRaw);
  
  return [...databaseDogs, ...apiDogs];
};


const findApiDogs = async (name) => {
  const apiDogsRaw = (
    await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`
    )
  ).data;

  const apiDogs = cleanData(apiDogsRaw);

  return apiDogs;
};

const findDBDogs = async (name) => {
  const databaseDogs = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [
      {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return databaseDogs;
};

const getDogByName = async (name) => {
  const databaseDogs = await findDBDogs(name);
  const apiDogs = await findApiDogs(name);

  return [ ...databaseDogs , ...apiDogs];
};

const createDog = async ({
  name,
  max_height,
  min_height,
  max_weight,
  min_weight,
  lifeYears,
  image,
  temperament,
}) => {
  console.log(typeof temperament)
  const found = await Dog.findOne({ where: {name}})
  
  if(found) throw new Error('This breed already exists');


  const newDog = await Dog.create({ name, max_height, min_height, max_weight, min_weight, lifeYears, image});
  let temperamentBDD = await Temperament.findAll({
    where: {name: temperament}
  })
  await newDog.addTemperament(temperamentBDD)
  return newDog;
};

const updatedDog = async ({
  idRaza, name, max_height, min_height, max_weight, min_weight, lifeYears, image}) => {
  let dogUpdeted = await Dog.update({name, max_height, min_height, max_weight, min_weight, lifeYears, image}, { where: {id: idRaza}});
  console.log(dogUpdeted)
  return dogUpdeted;
}

const deleteDog = async (idRaza) =>  {
  const dog = await Dog.findByPk(idRaza);
  const dogAux = dog
  await dog.destroy();
  return dogAux;
}

module.exports = { getDogById, getDogs, createDog, getDogByName, deleteDog, updatedDog};
