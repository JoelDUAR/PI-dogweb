const { Temperament } = require('../db');
const axios = require('axios');
const {API_KEY} = process.env;

const temperamentInBd = async() => {
    const dogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
 const dogsTemperaments = dogs.map(temp => { return temp.temperament})
const temperament =  dogsTemperaments.join().split(',');
const temperamentTrim =  temperament.map(element => element.trim());
const orderedTemperaments = new Set(temperamentTrim);

orderedTemperaments.forEach (async (element) => {
    await Temperament.findOrCreate ({
        where: {name: element}
    })
})
return;
}

const getTemperament = async () => {
    
    return await Temperament.findAll();
} 


module.exports = {getTemperament, temperamentInBd};
