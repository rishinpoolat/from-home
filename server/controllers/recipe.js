import Recipe from "../models/Recipe.js";

// create
export const createRecipe = async (req, res) => {
    const newRecipe = new Recipe(req.body);
    try {
        await newRecipe.save();
        res.status(200).json(newRecipe);
    } catch (error) {
        res.status(409).json(error);
    }
}

// read
export const getRecipes = async (req, res) => {
    try {
        const recipe = await Recipe.find();
    } catch (error) {
        res.status(500).json(error);
    }
}