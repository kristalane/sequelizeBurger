var db = require("../models");

// Routes =============================================================
module.exports = function(app) {
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/api/burger", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.delete("/api/burger/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burger", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id}
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
