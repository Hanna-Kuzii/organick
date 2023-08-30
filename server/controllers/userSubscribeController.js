import db from '../db.js';

export const createUserSubscribe = (req, res) => {
  const q = "INSERT INTO user_subscribe(id_userSubscribe, email, created) VALUES (?, ?, ?)";
  const values = [
    req.body.id_userSubscribe,
    req.body.email,
    req.body.created,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
