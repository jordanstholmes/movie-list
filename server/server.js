const express = require('express');
const path = require('path');

var http = require('http');
var url = require('url');
var fs = require('fs');
var Promise = require('bluebird');
var readFilePromise = Promise.promisify(fs.readFile);

const app = express();
const port = 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));




// http.createServer(function(request, response) {
//   var path = url.parse(request.url, true).pathname;
//   console.log('REQUEST:', request.method, path);

//   if (request.method === 'GET') {
//     if (path === '/') {
//       response.writeHead(200, {'Content-Type': 'text/html'});
//       readFilePromise(__dirname + '/index.html')
//         .then(response.end.bind(response))
//         .catch((err) => console.log('basic GET error:', err));
//     } else if (path === '/main.js') {
//       response.writeHead(200, {'Content-Type': 'text/javascript'});
//       readFilePromise(__dirname + '/main.js')
//         .then(response.end.bind(response))
//         .catch((err) => console.log('basic GET error:', err));
//     }
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }

// }).listen(8080, '127.0.0.1');

// console.log('Listening at 8080...');

app.listen(port, () => console.log(`Listening at ${port}...`));



  // else if (path === '/main.js') {
  //   console.log('Received request:', request);
    // response.writeHead(200, {'Content-Type': 'text/javascript'});
    //   readFilePromise(__dirname + '/main.js')
    //     .then(response.end.bind(response))
    //     .catch((err) => console.log('basic GET error:', err));
  // } 