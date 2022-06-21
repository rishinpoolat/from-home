import * as api from '../api/index.js';

export const getRecipes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRecipes();
        dispatch({ type: 'FETCH_RECIPES', payload: data });
    } catch (error) {
        console.log(error);
    }
} 

export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe);
        dispatch({ type: 'CREATE_RECIPE', payload: data});
    } catch (error) {
        console.log(error);
    }
}