var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (response) {
      cb(response);
    });
  },
  create: function (val, cb) {
    orm.insertOne("burgers", "burgers_name", val, function (response) {
      cb(response);
    });
  },
  update: function (colVal, condition, cb) {
    orm.updateOne("burgers", colVal, condition, function (response) {
      cb(response);
    });
  },
};
// export the database functions

module.exports = burger;
