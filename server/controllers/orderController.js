import db from '../db.js';

export const createOrder = (req, res) => {
  const q = "INSERT INTO `order` (id_order, user_id, cartList_id, created) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.idOrder,
    req.body.userId,
    req.body.orderListId,
    req.body.created,
  ];
  
  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "An error occurred while inserting data." });
    }
    
    const insertedOrderId = result.insertId; 
    return res.status(201).json({ orderId: insertedOrderId, message: "Order inserted successfully." });
  });
};
