import mongoose from 'mongoose';

const cartSchema = mongoose.Schema(
  {
    userId: { 
      type: String,
      required: true
    },
    products: [{
        productId: {
          type: String,
        },
        name: {
          type: String,
        },
        image: {
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
    bill: {
      type: Number
    }
  },
  { timestamps: true }
);

var Cart = mongoose.model('Cart', cartSchema);

export default Cart;
