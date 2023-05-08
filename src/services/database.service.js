// import dotenv from "dotenv";
// dotenv.config();
// import mysql from "mysql";
// // import mysql from "promise-mysql";
// import { logger } from "../utils/helper.js";

// const mysqlHost = process.env.MYSQL_HOST || "";
// const mysqlUser = process.env.MYSQL_USERNAME || "";
// const mysqlPassword = process.env.MYSQL_PASSWORD || "";
// const mysqlDatabase = process.env.MYSQL_DBNAME || "";

// const database = mysql.createPool({
// 	connectionLimit: 5,
// 	host: mysqlHost,
// 	user: mysqlUser,
// 	password: mysqlPassword,
// 	database: mysqlDatabase,
// 	socketPath: process.env.INSTANCE_UNIX_SOCKET,
// });

// console.log("mysqlHost: ", mysqlHost)

// database.getConnection((err , connection) => {
// 	if (err) {
// 		if (err.code === "PROTOCOL_CONNECTION_LOST") {
// 			logger("error", "Database connection was closed.");
// 		}
// 		if (err.code === "ER_CON_COUNT_ERROR") {
// 			logger("error", "Database has too many connections.");
// 		}
// 		if (err.code === "ECONNREFUSED") {
// 			logger("error", "Database connection was refused.");
// 		}
// 		logger("error", err.message);
// 	} else {
// 		logger("info", "Database connection!");
// 	}

// 	if (connection) { connection.release(); }

// 	return;
// });

// export default database;

import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

const mysqlHost = process.env.MYSQL_HOST || "";
const mysqlUser = process.env.MYSQL_USERNAME || "";
const mysqlPassword = process.env.MYSQL_PASSWORD || "";
const mysqlDatabase = process.env.MYSQL_DBNAME || "";

var config = {
    user: mysqlUser,
    database: mysqlDatabase,
    password: mysqlPassword,
	socketPath: process.env.INSTANCE_UNIX_SOCKET,
};

let connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
});

if (connection) { connection.release(); }

export default connection;