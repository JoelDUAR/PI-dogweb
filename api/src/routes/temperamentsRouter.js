const { Router } = require('express');
const getTemperamentHandler = require('../handlers/temperamentsHandler');

const temperamentRouter = Router();

temperamentRouter.get('/', getTemperamentHandler);


module.exports = temperamentRouter;