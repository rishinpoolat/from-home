import express from 'express';

import Cakes from '../models/Cakes.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const newCake = new Cakes(req.body);
  try {
    const savedCakes = await newCake.save();
    res.status(200).json(savedCakes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const cakes = await Cakes.find();
    res.status(200).json(cakes);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;