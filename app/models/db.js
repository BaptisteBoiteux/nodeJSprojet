if (process.env.NODE_ENV !== 'production'){
  require('longjohn').async_trace_limit = 5;
}

const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const pool = mysql.createPool({
  connectionLimit : 10,
  acquireTimeout  : 10000,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
/*
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
*/
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports = pool;
