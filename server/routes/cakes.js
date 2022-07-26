import express from "express";
import { createCake, deleteCake, getCake, getCakes, getCakesOfShop, updateCake } from "../controllers/cakes.js";

const router = express.Router();

router.post("/", createCake);
router.get("/:id", getCake);
router.get("/", getCakes);
router.get("/shop/:id", getCakesOfShop);
router.put("/:id", updateCake);
router.delete("/:id", deleteCake);

export default router;
