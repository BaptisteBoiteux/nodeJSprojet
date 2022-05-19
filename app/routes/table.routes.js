module.exports = app => {
  const tables = require("../controllers/table.controller.js");
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  
  // Retrieve all informations with the rondes
  router.get("/api/rondes", tables.findAll);
  router.get("/api/users", users.findAll);
  

  app.use('/', router);
};