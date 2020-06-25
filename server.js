// requiring dependencies
var express = require("express");

//port config
var PORT = process.env.PORT || 8080;
var app = express();

// static folder
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

//https://whispering-beyond-68285.herokuapp.com/

//https://git.heroku.com/whispering-beyond-68285.git
