import db from '../db.js';

export const createCartList = (req, res) => {
  const q = "INSERT INTO cart_list(id_cartList, total_amount, discount, created) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.idCartList,
    req.body.totalAmount,
    req.body.discount,
    req.body.created,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
