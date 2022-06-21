import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
  {
    // userId: { type: String, required: true },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true,
    }

  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;