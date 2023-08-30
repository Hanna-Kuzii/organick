import db from '../db.js';

const getProductList = (req, res) => {
  const query =
    "SELECT p.id_product AS id, p.category_id AS categoryId, c.name AS category, p.name, p.image, p.price_new AS priceNew, p.price_old AS priceOld, p.rating, p.information, p.description, p.additional_info FROM product AS p INNER JOIN category AS c ON p.category_id = c.id_category;";
  db.query(query, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "An error occurred" });
    }
    return res.json(data);
  });
};

export { getProductList };
