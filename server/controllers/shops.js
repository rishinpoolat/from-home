import Shops from "../models/Shops.js";

// get all shops
export const getShops = async (req, res) => {
  try {
    const shops = await Shops.find();
    res.status(200).json(shops);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create a new shop
export const createShop = async (req, res) => {
  const newShop = new Shops(req.body);
  try {
    await newShop.save();
    res.status(200).json(newShop);
  } catch (error) {
    res.status(409).json(error);
  }
};

// get a single shop
export const getShop = async (req, res) => {
  try {
    const shop = await Shops.findById(req.params.id);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json(error);
  }
};

// TODO
// update shop
// delete shop
// shop review option
