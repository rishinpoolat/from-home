import Shops from "../models/Shops.js";

export const getShops = async (req, res) => {
    try {
      const Shop = await Shops.find();
      // console.log(Shop);
      res.status(200).json(Shop);
    } catch (error) {
      res.status(404).json(error)
    }
}

export const createShop = async (req, res) => {
  const shop = req.body;
  const newShop = new Shops(shop);
  try {
    await newShop.save();
    res.status(200).json(newShop);
  } catch (error) {
    res.status(409).json(error);
  }
}