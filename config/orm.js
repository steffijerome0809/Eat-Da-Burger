const connection = require("./connection");

// function to convert object key/value pairs to sql syntax

function objToSql(ob) {
  var arr = [];
  //loop through keys and push key/value as a string int arr

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces add quotation
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      //ex {devoured:true}=>["devoured=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}
//start of the orm function

var orm = {
  // orm method that select all from the table, cb(callback function)

  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
      // console.log(response);
    });
  },

  // ORM method inserts a new row into that table

  insertOne: function (table, col, val, cb) {
    var queryString =
      "INSERT INTO " + table + "(" + col + ") values ('" + val + "');";
    console.log(queryString);
    connection.query(queryString, function (err, response) {
      if (err) throw err;
      cb(response);
      console.log(response);
    });
  },

  //orm method that updates the boolean devoured in the table

  updateOne: function (table, colVal, condition, cb) {
    var queryString =
      "UPDATE " +
      table +
      " SET " +
      objToSql(colVal) +
      " WHERE " +
      condition +
      ";";
    console.log(queryString);
    connection.query(queryString, function (err, response) {
      if (err) throw err;
      cb(response);
      console.log(response);
    });
  },
};

//export the orm

module.exports = orm;
