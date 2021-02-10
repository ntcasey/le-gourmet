"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const config_1 = __importDefault(require("./config"));
class MySqlDB {
    constructor(config) {
        this.connection = mysql.createConnection(config);
        this.connection.connect((err) => {
            if (err) {
                console.log("ERROR: unable to connect to db");
            }
            else {
                console.log("Connected to SuperMarket db");
            }
        });
    }
    query(queryString) {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
const connection = new MySqlDB(config_1.default);
exports.default = connection;
