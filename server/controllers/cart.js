import Cart from '../models/Cart.js';
import Cakes from '../models/Cakes.js';
import mongoose from 'mongoose';

// create
export const addCartItems = async (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  try{
    let cart = await Cart.findOne({userId: userId});
    let cake = await Cakes.findOne({ _id: mongoose.Types.ObjectId(productId) });
    if(!cake){
      res.status(404).send("cake not found");
    }

    const price = cake.price;
    const name = cake.name;
    const image = cake.image;

    if(cart){
      const cakeIndex = cart.products.findIndex(p => p.productId == productId);

      if(cakeIndex > -1){
        const productCake = cart.products[cakeIndex];
        productCake.quantity += quantity;
        cart.products[cakeIndex] = productCake;
      }
      else{
        cart.products.push({productId, name, image, quantity, price});
      }
      cart.bill += quantity*price;
      cart = await cart.save();
      return res.status(201).json(cart);
    }
    else {
      const newCart = await Cart.create({
        userId: userId,
        products: [{productId, name, image, quantity, price}],
        bill: quantity*price 
      });
      return res.status(201).json(newCart);
    }
  }
  catch (err){
    console.log(err);
    res.status(500).send(err);
  }
}

// read
export const getCartItems = async (req, res) => {
  const userId = req.params.id;
  try {
      const cart = await Cart.findOne({ userId });
      res.status(200).json(cart);
  } catch (error) {
      res.status(500).json(error);
  }
} 

export const deleteCartItems = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try{
    const cart = await Cart.findOne({userId});
    const cakeIndex = cart.cakes.findIndex(p => p.productId == productId);
    if(cakeIndex > -1)
    {
      const productCake = cart.cakes[cakeIndex];
      cart.bill -= productCake.quantity*productCake.price;
      cart.cakes.splice(cakeIndex,1);
    }
    cart = await cart.save();
    return res.status(201).send(cart);
  }
  catch (err) {
    console.log(err);
    res.status(200).send("something went wrong");
  }
}

// get all cart
// export const getCarts = async (req, res) => {
//     try {
//         const carts = await Cart.find();
//         res.status(200).json(carts);
//       } catch (err) {
//         res.status(500).json(err);
//       }
// }

// update
// export const updateCart = async (req, res) => {
//     try {
//         const updatedCart = await Cart.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedCart);
//       } catch (error) {
//         res.status(500).json(error);
//       }
// }

// delete
// export const deleteCart = async (req, res) => {
//     try {
//         await Cart.findByIdAndDelete(req.params.id);
//         res.status(200).json("Cart has been deleted...");
//       } catch (error) {
//         res.status(500).json(error);
//       }
// }