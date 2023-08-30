import db from '../db.js';

export const createCartItem = (req, res) => {
  const q = "INSERT INTO cart_item(id_cartItem, product_id, quantity, cartList_id) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.idOrderItem,
    req.body.productId,
    req.body.quantity,
    req.body.orderListId,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
