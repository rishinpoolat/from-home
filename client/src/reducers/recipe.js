import { CREATE_RECIPE, FETCH_RECIPES } from '../constants/actionTypes';

const recipes =  (recipes = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    case CREATE_RECIPE:
      return [...recipes, action.payload];
    default:
      return recipes;
  }
}

export default recipes;
