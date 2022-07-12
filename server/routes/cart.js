import express from "express";
import {
  getCart,
  createCart,
  getCarts,
  updateCart,
  deleteCart,
} from "../controllers/cart.js";

const router = express.Router();

router.get("/:id", getCart);
router.get("/", getCarts);
router.post("/", createCart);
router.put("/", updateCart);
router.delete("/:id", deleteCart);

export default router;
