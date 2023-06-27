const {getTemperament} = require('../controllers/temperamentsController');

const getTemperamentHandler = async (req, res) => {
    try {
        const temperaments = await getTemperament();
        res.status(200).json(temperaments);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = getTemperamentHandler;