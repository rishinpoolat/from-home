import express from "express";
import { getCart, createCart, getCarts, updateCart, deleteCart } from "../controllers/cart";

const router = express.Router();

router.get('/:id', getCart);
router.post('/', createCart);
router.put('/', updateCart);
router.delete('/:id', deleteCart);