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

  // post route which will be used to create a new burger
  router.post("/api/burgers", function (req, res) {
    burger.create(req.body.name, function (data) {
      res.json({ id: data.insertId });
    });
  });

  //update req-put
  router.put("/api/burgers/:id", function (req, res) {
    var updateid = "id = " + req.params.id;
    burger.update(
      {
        devoured: req.body.devoured,
      },
      updateid,
      function (result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
});

module.exports = router;
