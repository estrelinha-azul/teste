const mysql = require ("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"orfanato"
});

module.exports = connection;