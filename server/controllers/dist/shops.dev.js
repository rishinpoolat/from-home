// import shopDetails from "../models/shopDetails.js";
// export const getShops = async (req, res) => {
//   try {
//     const shops = await shopDetails.find();
//     res.status(200).json(shopDetailses);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }
// export const createShop = async (req, res) => {
//   const shop = req.body;
//   const newShop = new shopDetails(shop);
//   try {
//     await newShop.save();
//     res.status(201).json(newShop);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// }
"use strict";