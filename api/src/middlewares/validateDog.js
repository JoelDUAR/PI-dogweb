const validateDog = async (req, res, next) => {
    try {
      const { name, max_height, min_height, max_weight, min_weight, lifeYears, image, temperament} = req.body;
      if (!name) 
        throw new Error('Name does not exist');
      if (!max_height) 
        throw new Error('max_height does not exist');
      if (!min_height) 
        throw new Error('max_height does not exist');
      if (!max_weight) 
        throw new Error('max_weight does not exist');
      if (!min_weight) 
        throw new Error('min_weight does not exist');
      if (!lifeYears) 
        throw new Error('lifeYears does not exist');
      if (Object.keys(temperament).length === 0)
        throw new Error('It must have at least one temperament');
      next();
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  module.exports = validateDog;