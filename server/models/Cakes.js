import mongoose from "mongoose";

const cakesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cakes = mongoose.model("Cakes", cakesSchema);

export default Cakes;
