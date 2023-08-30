import express from "express";
import { getOrders } from "../controllers/ordersGetCintroller";
const router = express.Router();

router.get('/order', getOrders);

export default router;