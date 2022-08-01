import express from "express";
import { checkOut, getOrder } from "../controllers/order.js";


const router = express.Router();

router.get('/:id', getOrder)
router.post('/:id', checkOut)

export default router;
