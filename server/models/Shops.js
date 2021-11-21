import mongoose from 'mongoose';

const shopSchema = mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true
    },
    district: {
      type: Array,
      required: true
    },
    ownerName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    shopPhone: {
      type: String,
      required: false 
    },
    address: {
      type: String,
      required: false
    },
    logo: {
      type: String,
      default: ""
    },
    banner: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    cakes: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
);

var Shops = mongoose.model('Shops', shopSchema);

export default Shops;