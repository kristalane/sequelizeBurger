var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  addOne: function(vals, condition, cb) {
    var queryString = "INSERT INTO `burgers` (`burger_name`, `devoured`) VALUES (?, ?);";
    console.log(queryString);
    connection.query(queryString, [vals, condition], function(err, result) {
      if (err) {
        console.log("here's what I think I'm sending:" + vals + condition);
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(val, bID, cb) {
    var queryString = "UPDATE `burgers` SET `devoured` = ? WHERE id = ?;";
    connection.query(queryString, [val ? 1 : 0, bID], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
