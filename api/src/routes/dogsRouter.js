const { Router } = require('express');
const { getDogHandler, getBreedDogHandler, createDogHandler, deleteDogHandler, updateDogHandler} = require('../handlers/dogHandler');
const validateDogUpdated = require('../middlewares/validateDogUpdated');
const validateDog = require('../middlewares/validateDog')

const dogRouter = Router();

dogRouter.get('/', getDogHandler);

dogRouter.get('/:idRaza', getBreedDogHandler);

dogRouter.post('/', validateDog, createDogHandler);

dogRouter.put('/:idRaza', validateDogUpdated, updateDogHandler);

dogRouter.delete('/:idRaza', deleteDogHandler);

module.exports = dogRouter;