import express from "express";
import { getProductList } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProductList);

export default router;
