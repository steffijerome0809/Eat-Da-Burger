var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (val, cb) {
    orm.insertOne("burgers", "burgers_name", val, function (res) {
      cb(res);
    });
  },
  update: function (colVal, condition, cb) {
    orm.updateOne("burgers", colVal, condition, function (res) {
      cb(res);
    });
  },
};
// export the database functions

module.exports = burger;
