const sql = require("./app/models/db.js");
const express = require("express");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path))

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*app.post('/api/user', function(req,res){ //**** http request receiver ****
  res.json(req.body.login);
});*/


//synchronisation database
const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

//add routes
require("./app/routes/table.routes.js")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
