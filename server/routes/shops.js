import express from "express";
import { getShops, createShop, getShop } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShops);
router.get("/:id", getShop);

router.post("/", createShop);

export default router;
