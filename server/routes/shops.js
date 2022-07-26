import express from "express";
import { getShops, createShop, getShop, getShopsOfUser, deleteShop, updateShop } from "../controllers/shops.js";

const router = express.Router();

router.get("/", getShops);
router.get("/:id", getShop);
router.get("/user/:id", getShopsOfUser);
router.delete("/:id", deleteShop);

router.put("/:id", updateShop);
router.post("/", createShop);

export default router;
