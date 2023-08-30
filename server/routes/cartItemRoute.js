import express from "express";
import { createCartItem } from "../controllers/cartItemController.js";

const router = express.Router();

router.post("/cart_item", createCartItem);

export default router;
