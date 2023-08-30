import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import userSubscribeRoutes from "./routes/userSubscribeRoute.js";
import userRoutes from "./routes/userRoute.js";
import cartListRoutes from "./routes/cartListRoute.js";
import cartItemRoutes from "./routes/cartItemRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import db from "./db.js";
import { getOrders } from "./controllers/ordersGetCintroller.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(productRoutes);
app.use(userSubscribeRoutes);
app.use(userRoutes);
app.use(cartListRoutes);
app.use(cartItemRoutes);
app.use(orderRoutes);

app.use(getOrders);


db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.use((err, req, res, next) => {
  console.error("An error occurred:", err);
  res.status(500).json({ error: "An error occurred" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
