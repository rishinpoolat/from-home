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

// get shops of a user 
export const getShopsOfUser = async (req, res) => {
  const id = req.params.id;
  try {
    const shops = await Shops.find({userId: id});
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// update/edit shop
export const updateShop = async (req, res) => {
  try {
    const updatedShop = await Shops.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    },
    {new: true});
    res.status(200).json(updatedShop)
  } catch (error) {
    res.status(500).json(error);
  }
}

// delete shop
export const deleteShop = async (req, res) => {
  try {
    await Shops.findByIdAndDelete(req.params.id);
    res.status(200).json("Shop has been deleted!!!")
  } catch (error) {
    res.status(500).json(error);
  }
}



// 62b1d0cc033abbad4efeea48

// TODO
// update shop
// delete shop
// shop review option
