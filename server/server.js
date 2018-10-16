const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(parser.text());

app.get('/movie-list', (req, res, next) => {
  console.log('Received the Request!');
  res.end();
})



app.listen(port, () => console.log(`Listening at ${port}...`));
