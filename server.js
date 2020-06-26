// requiring dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burger_controller");
//port config
var PORT = process.env.PORT || 3000;
var app = express();

// static folder
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes

app.use(routes);

//start the server
app.listen(PORT, function () {
  console.log("server listening on http://localhost:" + PORT);
});

//https://whispering-beyond-68285.herokuapp.com/

//https://git.heroku.com/whispering-beyond-68285.git
