import db from '../db.js';

export const createUser = (req, res) => {
  const q = "INSERT INTO user(id_user, name, email, phone, address, message, created) VALUES(?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.idCustomer,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.message,
    req.body.created,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

