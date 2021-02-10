const mysql = require("mysql");
const config = require("./config.js");

class MySqlDB {
  constructor(config) {
    this.connection = mysql.createConnection(config);
    this.connection.connect((err) => {
      if (err) {
        console.log("ERROR: unable to connect to db");
      } else {
        console.log("Connected to SuperMarket db");
      }
    });
  }

  query(queryString) {
    return new Promise((resolve, reject) => {
      this.connection.query(queryString, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

const connection = new MySqlDB(config);
module.exports = connection;
