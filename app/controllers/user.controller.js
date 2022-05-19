const User = require("../models/user.model.js");
// Create and Save a new Tutorial
exports.findAll = (req, res) => {
    User.getUsers((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else {
        res.send(data);
      }
    });
};