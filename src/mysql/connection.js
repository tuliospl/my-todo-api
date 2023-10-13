const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.CONNECTION_HOST,
  user: process.env.CONNECTION_USER,
  password: process.env.CONNECTION_PASSWORD,
  database: process.env.CONNECTION_DATABASE,
});

module.exports = connection;