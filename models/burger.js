// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(name, devoured, cb) {
    orm.insertOne(name,devoured, function(res) {
      cb(res);
    });
  },
  updateOne: function(colval, idval, cb) {
    orm.updateOne(colval, idval, function(res) {
      cb(res);
    });
  },
  delete: function(colval, cb) {
    orm.delete(colval, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
