import mongoose from 'mongoose';

const cakesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

  },
  { timestamps: true }
);

const Cakes = mongoose.model('cakes', cakesSchema);

export default Cakes;