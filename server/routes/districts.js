import express from 'express';

import Districts from '../models/Districts.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const newDistrict = new Districts(req.body);
  try {
    const savedDistricts = await newDistrict.save();
    res.status(200).json(savedDistricts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const districts = await Districts.find();
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;