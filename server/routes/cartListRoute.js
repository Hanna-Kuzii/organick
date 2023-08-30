import express from "express";
import { createCartList } from "../controllers/cartListController.js";

const router = express.Router();

router.post("/cart_list", createCartList);

export default router;
