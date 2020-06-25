// requiring dependencies
var express = require("express");
var bodyParser = require("body-parser");

//port config
var PORT = process.env.PORT || 8080;
var app = express();

// static folder
app.use(express.static("public"));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
const routes = require("./controllers/burger_controller.js");
app.use(routes);

//start the server
app.listen(PORT, function () {
  console.log("server listening on http://localhost:" + PORT);
});
