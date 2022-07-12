import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// CART
export const fetchCartItems = () => API.get(`/cart`);
export const createCart = (cart) => API.post(`/cart`, cart);

// SHOPS
export const fetchShops = () => API.get(`/shops`);
export const fetchShop = (id) => API.get(`/shops/${id}`);
export const createShop = (newShop) => API.post(`/shops/shopregister`, newShop);

// RECIPES
export const fetchRecipes = () => API.get(`/recipe`);
export const createRecipe = (newRecipe) => API.post(`/recipe`, newRecipe);

// CAKES
export const fetchCakes = () => API.get("/cakes");
export const fetchCake = (id) => API.get(`/cakes/${id}`);
export const createCake = (newCake) => API.post("/cakes", newCake);

// AUTH
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
export const updateUser = (formData, id) => API.post(`/user/${id}`, formData);
