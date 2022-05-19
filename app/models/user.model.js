const sql = require("./db.js");
// constructor
const Users = function(user) {
    this.login = user.login;
    this.password = user.password;
  };

//Méthode pour get la liste des utilisateurs
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


//Méthode pour vérifier si un utilisateur peut se connecter ou non
Users.postUsers =  (req ,result) => {
    /*request = "SELECT * FROM UTILISATEUR WHERE LOGIN_USR = '" + req.body.login + "';";*/
    
    console.log(result.body.login)
    //console.log(request);
    sql.query(request, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("User", res);
      //res.send(true);
      result(null, res); 
    });
};



module.exports = Users;