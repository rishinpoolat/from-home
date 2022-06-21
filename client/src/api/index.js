import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });


export const fetchShops = () => API.get(`/shops`);
export const fetchShop = (id) => API.get(`/shops/${id}`);
export const createShop = (newShop) => API.post(`/shops/shopregister`, newShop);

export const fetchRecipes = () => API.get(`/recipe`);
export const createRecipe = (newRecipe) => API.post(`/recipe`, newRecipe);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);