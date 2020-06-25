const connection = require("../config/connection");

//start of the orm function

var orm = {
  // orm method that select all from the table, cb(callback function)

  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    });
  },

  // ORM method inserts a new row into that table

  insertOne: function (table, col, val, cb) {
    var queryString =
      "INSERT INTO" + table + "(" + col + ") values (" + val + '");';
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    });
  },

  //orm method that updates the boolean devoured in the table

  updateOne: function (table, colVal, condition, cb) {
    var queryString =
      "UPDATE" + table + "SET" + objToSql(colVal) + "WHERE" + condition + ";";

    connection.query(queryString, function (err, response) {
      if (err) throw err;
      cb(response);
    });
  },
};

//export the orm

module.exporrts = orm;
