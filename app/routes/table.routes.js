module.exports = app => {
  const tables = require("../controllers/table.controller.js");
  var router = require("express").Router();
  
  // Retrieve all informations with the rondes
  router.get("/", tables.findAll);

  app.use('/api/rondes', router);
};