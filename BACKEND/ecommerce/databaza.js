const mysql = require('mysql');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ecommerce'
});

database.connect((err) => {
  if (err) {
    console.error('Error në konektimin e databazës :', err);
    return;
  }
  console.log('Lidhja u bë me sukses.Databaza u lidh.');
});

module.exports = database;
