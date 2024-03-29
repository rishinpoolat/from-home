import Cakes from "../models/Cakes.js";

// create new cake object on db
export const createCake = async (req, res) => {
  const newCake = new Cakes(req.body);
  try {
    await newCake.save();
    res.status(200).json(newCake);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// get all cakes from db
export const getCakes = async (req, res) => {
  try {
    const cakes = await Cakes.find();
    res.status(200).json(cakes);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get single cake from db
export const getCake = async (req, res) => {
  try {
    const cake = await Cakes.findById(req.params.id);
    res.status(200).json(cake);
  } catch (error) {
    console.log(error);
  }
};

// get cakes of a single shop
export const getCakesOfShop = async (req, res) => {
  const id = req.params.id;
  try {
    const cakes = await Cakes.find({shopId: id})
    res.status(200).json(cakes);
  } catch (error) {
    res.status(500).json(error);
  }
}

// update/edit cake
export const updateCake = async (req, res) => {
  try {
    const updatedCake = await Cakes.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    },
    {new: true});
    res.status(200).json(updatedCake)
  } catch (error) {
    res.status(500).json(error);
  }
}

// delete cake
export const deleteCake = async (req, res) => {
  try {
    await Cakes.findByIdAndDelete(req.params.id);
    res.status(200).json("Cake has been deleted!!!")
  } catch (error) {
    res.status(500).json(error);
  }
}

// TODO
// update a cake object
// delete cake object
// get all cakes from a shop
// get top rated/liked cakes
