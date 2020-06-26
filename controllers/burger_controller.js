//Requiring express
const router = require("express").Router();

//importing the model
var burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
