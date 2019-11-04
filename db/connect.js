const mysql = require('mysql');
require('dotenv/config')

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'sql_store'
});

db.connect((err) => {
  if (err) throw err;
  console.log('connected to db..');
  
});

module.exports = db;
