const express = require('express');
const path = require('path');
const dbTest = require('../controllers/loadDatabase.js');
// const connectDB = require('../database/mongo.js');

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => console.log(`Listening at ${port}...`));

// connectDB((db) => {
//   dbTest(db);
// });
dbTest();


