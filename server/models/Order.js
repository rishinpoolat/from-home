import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [{
        productId: {
          type: String,
        },
        name: {
          type: String
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number
        }
    }],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;