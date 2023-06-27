const cleanDataById = async (object) => {
    const dataClean = {
        id: object.id,
        name: object.name.toLowerCase(),
        Temperaments: object.temperament,
        min_height: parseInt(object.height.metric.split("-")[0]),
        max_height: parseInt(object.height.metric.split("-")[1]),
        min_weight: parseInt(object.weight.imperial.split("-")[0]),
        max_weight: parseInt(object.weight.imperial.split("-")[1]),
        lifeYears: object.life_span,
        image: `https://cdn2.thedogapi.com/images/${object.reference_image_id}.jpg`,
        created: false,
    };
  
    return dataClean;
  };

  module.exports = cleanDataById