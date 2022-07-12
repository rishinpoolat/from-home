import express from "express";
import { createCake, getCake, getCakes } from "../controllers/cakes.js";

const router = express.Router();

router.post("/", createCake);
router.get("/:id", getCake);
router.get("/", getCakes);

export default router;
