const Table = require("../models/table.model.js");
// Create and Save a new Tutorial
exports.findAll = (req, res) => {
    Table.getRondes((err, data) => {
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
