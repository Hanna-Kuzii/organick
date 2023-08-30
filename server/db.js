import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2012",
  database: "testdb",
});

export default db;
