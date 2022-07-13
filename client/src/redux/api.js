import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// AUTHENTICATION
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const updateUser = (formData, id) => API.put(`/users/${id}`, formData);

// SHOPS
export const fetchShops = () => API.get("/shops");
export const fetchShop = (id) => API.get(`/shops/${id}`);
export const createShop = (shop) => API.post(`/shops`, shop);

// CAKES
export const fetchCakes = () => API.get("/cakes");
export const fetchCake = (id) => API.get(`/cakes/${id}`);
export const createCake = (cake) => API.post(`/cakes`, cake);

// RECIPES
export const fetchRecipes = () => API.get("/recipe");
export const fetchRecipe = (id) => API.get(`/recipe/${id}`);
export const createRecipe = (recipe) => API.post(`/recipe`, recipe);

// CART
export const addToCart = (item) => API.post("/cart", item);
export const fetchCart = () => API.get("/cart");
