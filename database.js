// C:\Users\Your Name>npm install mysql


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "persondb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO person (name, age,mobile) VALUES ('Vynkatesh',25 ,'987654123')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "persondb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM person", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});