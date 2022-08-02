// import Stripe from "stripe";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import User from "../models/User.js";

export const getOrder = async (req, res) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const checkOut = async (req, res) => {
  try {
    const userId = req.params.id;
    const address = req.body;
    console.log(address);
    const cart = await Cart.find({ userId });
    // const user = await User.findOne({ _id: userId });
    // const email = user.email;
    // const stripe = new Stripe(
    //   "sk_test_51LRbP3SGb8D8pxDxm8RFd2qXwNYB6CKmW20zReo4417InWnUnUDuzVium6Mjxrjw8mr5UpNUpgJBNDUx54cLK7NC00unTUjs99"
    // );

    if (cart) {
      // const charge = await stripe.charges.create({
      //   amount: cart.bill,
      //   currency: "inr",
      //   source: source,
      //   reciept_email: email,
      // });
      // if (!charge) throw Error("payment failed");
      // if (charge) {
      const order = await Order.create({
        userId,
        products: cart.products,
        amount: cart.bill,
        address,
      });
      const data = await Cart.findByIdAndDelete({ _id: cart.id });
      return req.status(201).send(order);
      //   }
    } else {
      res.status(500).send("you donot have any items");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
