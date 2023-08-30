import express from "express";
import { createUserSubscribe } from "../controllers/userSubscribeController.js";

const router = express.Router();

router.post("/user_subscribe", createUserSubscribe);

export default router;
