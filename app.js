const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/work', function (req, res) {
  res.sendFile(__dirname + '/views/work.html');
});


app.listen(3000, () => {
  console.log('at your service!');
})


// const express = require("express");
// const app = express();
// app.use(express.static("public"));
// app.get("/", (request, response) => {
//   response.sendFile(__dirname + "/public/views/index.html");
// });
// app.get("/home", (request, response) => {
//   response.sendFile(__dirname + "/public/views/home.html");
// });
// app.get("/about", (request, response) => {
//   response.sendFile(__dirname + "/public/views/about.html");
// });
// app.get("/photos", (request, response) => {
//   response.sendFile(__dirname + "/public/views/photos.html");
// });
// app.listen(3000);