var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb){
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  addOne: function(vals, condition, cb) {
    orm.addOne(vals, condition, function(res) {
      cb(res);
    });
  },

  updateOne: function(val, bID, cb) {
    orm.updateOne(val, bID, function(res) {
      cb(res);
    });
  },
};





module.exports = burger;
