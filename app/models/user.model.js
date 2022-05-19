const sql = require("./db.js");
// constructor
const Users = function(user) {
    this.login = user.login;
    this.password = user.password;
  };

Users.getUsers = result => {
    sql.query("SELECT * FROM USER", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("User", res);
      result(null, res);
    });
  };

module.exports = Users;