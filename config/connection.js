var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root"
    password: "dkamka13",
    database: "burger_db"
});
//===??//
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "dkamka13",
        database: "burgers_db"
    });
};
//===
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});
//==OBJECT-RELATIONAL MAP-- EXPORTS==
module.exports = connection;