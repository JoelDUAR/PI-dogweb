const validateDogUpdated = async (req, res, next) => {
    try {
      const { name, max_height, min_height, max_weight, min_weight, lifeYears, image} = req.body;
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
      next();
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  module.exports = validateDogUpdated;