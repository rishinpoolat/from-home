import express from "express";
import Shops from "../models/Shops.js";

const router = express.Router();

export const getShops = async (req, res) => {
    try {
      const shops = await Shops.find();
      // console.log('helo');
      res.status(200).json(shops);
    } catch (error) {
      res.status(404).json(error)
    }
}

export const createShop = async (req, res) => {
  const { shopName, district, ownerName, email, shopPhone, address, logo, banner, description, cakes } = req.body;
  const newShop = new Shops({ shopName, district, ownerName, email, shopPhone, address, logo, banner, description, cakes });
  try {
    await newShop.save();
    res.status(200).json(newShop);
  } catch (error) {
    res.status(409).json(error);
  }
}

export default router;