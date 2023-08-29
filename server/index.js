import express from "express";
import mysql from "mysql";
import cors from "cors"; 

const app = express();
app.use(express.json());
app.use(cors()); 

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2012",
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/products", (req, res) => {
  const q =
    "SELECT p.id_product AS id, c.name AS category, p.name, p.image, p.price_new AS priceNew, p.price_old AS priceOld, p.rating, p.information, p.description, p.additional_info FROM product AS p INNER JOIN category AS c ON p.category_id = c.id_category;";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "An error occurred" });
    }
    return res.json(data);
  });
});

app.post("/user_subscribe", (req, res) => {
  const q = "Insert into user_subscribe(id_userSubscribe, email, created) values(?)";
  const values = [
    req.body.id_userSubscribe,
    req.body.email,
    req.body.created
  ]
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);

  })
})


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const API_URL = "http://localhost:3000";

// const fetchSomeData = async () => {
//   try {
//     const response = await fetch(`${API_URL}/some-data`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const fs = require("fs");

// fs.open("1.txt", "r", function (err, file) {
//   console.log("IO");
// });

// setImmediate(function () {
//   console.log("setImmediate");
// });

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// process.nextTick(function () {
//   console.log("nextTick");
// });

// module.exports = { fetchSomeData };
