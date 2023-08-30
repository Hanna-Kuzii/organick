import db from "../db.js";

export const getOrders = (req, res) => {
  const query = `SELECT testdb.order.id_order AS orderId, testdb.user.id_user AS userId, testdb.user.name AS customer, testdb.user.email, testdb.user.phone, testdb.user.address, testdb.order.cartList_id AS cartId, testdb.cart_list.total_amount AS totalAmount, testdb.cart_list.discount, testdb.user.message, testdb.order.created, testdb.product.id_product AS productID, testdb.product.name AS productName, testdb.cart_item.quantity FROM testdb.order
  INNER JOIN testdb.cart_list
  ON testdb.order.cartList_id = testdb.cart_list.id_cartList
  INNER JOIN testdb.cart_item
  ON testdb.cart_list.id_cartList = testdb.cart_item.cartList_id
  INNER JOIN testdb.product
  ON testdb.product.id_product = testdb.cart_item.product_id
  INNER JOIN testdb.user
  ON testdb.user.id_user = testdb.order.user_id
  ORDER BY testdb.order.created DESC`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      res.status(500).json({ error: "Error fetching orders" });
      return;
    }
    res.json(results);
  });
};
