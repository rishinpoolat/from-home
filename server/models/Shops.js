import mongoose from "mongoose";

const shopSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    shopPhone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    banner: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

var Shops = mongoose.model("Shops", shopSchema);

export default Shops;
