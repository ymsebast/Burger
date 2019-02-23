// methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(name,devoured, cb) {
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
    // console.log(queryString);
    connection.query(queryString, [name,devoured], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(colval,idval, cb) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    console.log(queryString);

    connection.query(queryString, [colval,idval], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(colval, cb) {
    var queryString = "DELETE FROM burgers WHERE id = ?";

    connection.query(queryString, colval, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js)
module.exports = orm;
