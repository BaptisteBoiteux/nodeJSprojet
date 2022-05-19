const User = require("../models/user.model.js");
const sql = require("../models/db.js");

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

exports.findUser= (req, result) => {
    let login = req.body.login;
    let password = req.body.password;
    console.log(login, password)
    
    request = "SELECT * FROM UTILISATEUR WHERE LOGIN_USR = '" + login + "' AND PASSWD_USR = '" + password + "';";
    
    console.log(request);
    sql.query(request, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result.send(err, null);
        return;
      }
      if (res.length == 0) { result.send(false)}
      else { result.send(true)}
    });
};