const mysql = require("mysql");
import config from "./config";
type ErrorHandle = Error | null;

class MySqlDB {
  connection: any;

  constructor(config: any) {
    this.connection = mysql.createConnection(config);
    this.connection.connect((err: ErrorHandle) => {
      if (err) {
        console.log("ERROR: unable to connect to db");
      } else {
        console.log("Connected to SuperMarket db");
      }
    });
  }

  query(queryString: string) {
    return new Promise((resolve, reject) => {
      this.connection.query(queryString, (err: ErrorHandle, data: any) => {
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
export default connection;
