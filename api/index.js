require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { temperamentInBd } = require('./src/controllers/temperamentsController.js');
const { PORT } = process.env || 3001;


// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${PORT}`);
    temperamentInBd(); // eslint-disable-line no-console
  });
});



