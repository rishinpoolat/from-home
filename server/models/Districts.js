import mongoose from 'mongoose';

const  districtsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

  },
  { timestamps: true }
);

const districts = mongoose.model('districts', districtsSchema);

export default districts;