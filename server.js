const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

// const getSongsHtml = document.querySelector("#songs");

// getSongsHtml.addEventListener("click", function () {

//   });
// });

app.get("/songs", function (req, res) {
  res.sendFile(__dirname + "/songs.html");
});
// app.use(bodyParser.urlencoded({ extended: true }));
// const bodyParser = require("body-parser");

// req.body;
// this is the parsed version of the HTTP request
// , by using Body Parser, we're able to parse the HTTP request that we get,

app.get("/", function (req, res) {
  res.send("hellio");
});

app.get("/about", function (req, res) {
  res.send("this is about lol");
});
