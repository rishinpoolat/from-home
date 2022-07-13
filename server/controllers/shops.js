import express from "express";
import Shops from "../models/Shops.js";

const router = express.Router();

export const getShops = async (req, res) => {
  try {
    const shops = await Shops.find();
    res.status(200).json(shops);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createShop = async (req, res) => {
  const newShop = new Shops(req.body);
  try {
    await newShop.save();
    res.status(200).json(newShop);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const getShop = async (req, res) => {
  try {
    const shop = await Shops.findById(req.params.id);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default router;
