const { config } = require('dotenv');
const mysql = require('mysql2');
require('dotenv').config();

// create connection to database
const db = mysql.createConnection( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Base de datos conectada');
});

module.exports = db;