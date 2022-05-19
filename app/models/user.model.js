const sql = require("./db.js");
// constructor
const Users = function(user) {
    this.login = user.login;
    this.password = user.password;
  };

Users.getUsers = result => {
    sql.query("SELECT * FROM UTILISATEUR", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("User", res);
      result(null, res);
    });
  };
Users.postUsers =  (req ,result) => {
    sql.query("SELECT * FROM UTILISATEUR WHERE LOGIN_USR = 'baptiste';"/*+req.body.login*/, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("User", res);
      //res.send(true);
      result.json(res); 
    });
};

module.exports = Users;