const cleanData = async (array) => {
    const dataClean = array.map((dog) => {
      return {
        id: dog.id,
        name: dog.name.toLowerCase(),
        Temperaments: dog.temperament,
        min_height: parseInt(dog.height.metric.split("-")[0]),
        max_height: parseInt(dog.height.metric.split("-")[1]),
        min_weight: parseInt(dog.weight.imperial.split("-")[0]),
        max_weight: parseInt(dog.weight.imperial.split("-")[1]),
        lifeYears: dog.life_span,
        image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
        created: false,
      };
    });
  
    return dataClean;
  };

  module.exports = cleanData