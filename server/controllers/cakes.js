import Cakes from "../models/Cakes.js";

// create
export const createCake = async (req, res) => {
  const newCake = new Cakes(req.body);
  try {
    await newCake.save();
    res.status(200).json(newCake);
  } catch (error) {
    res.status(409).json(error);
  }
};

// read
export const getCakes = async (req, res) => {
  try {
    const cakes = await Cakes.find();
    res.status(200).json(cakes);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get single cake
export const getCake = async (req, res) => {
  try {
    const cake = await Cakes.findById(req.params.id);
    res.status(200).json(cake);
  } catch (error) {
    console.log(error);
  }
};
