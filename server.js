// requiring dependencies
var express = require("express");

//port config
var PORT = process.env.PORT || 3000;
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
var routes = require("./controllers/burger_controller");
app.use(routes);

//start the server
app.listen(PORT, function () {
  console.log("server listening on http://localhost:" + PORT);
});
