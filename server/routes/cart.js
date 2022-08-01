import express from "express";
import {
  addCartItems,
  getCartItems,
} from "../controllers/cart.js";

const router = express.Router();

router.post('/:userId', addCartItems)
router.get('/:id', getCartItems)

export default router;
