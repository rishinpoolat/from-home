import axios from "axios";

const API = axios.create({ baseURL: "https://fromhome-test.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// AUTHENTICATION
export const signIn = (userData) => API.post("/user/signin", userData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const updateUser = (formData, id) => API.put(`/user/${id}`, formData);

// SHOPS
export const fetchShops = () => API.get("/shops");
export const fetchShop = (id) => API.get(`/shops/${id}`);
export const createShop = (shop) => API.post(`/shops`, shop);
export const getUserShops = (id) => API.get(`/shops/user/${id}`);

// CAKES
export const fetchCakes = () => API.get("/cakes");
export const fetchCake = (id) => API.get(`/cakes/${id}`);
export const createCake = (cake) => API.post(`/cakes`, cake);
export const getCakesOfShop = (id) => API.get(`/cakes/shop/${id}`);
export const deleteCake = (id) => API.delete(`/cakes/${id}`);
export const updateCake = (id, cakeData) => API.put(`/cakes/${id}`, cakeData);

// RECIPES
export const fetchRecipes = () => API.get("/recipe");
export const fetchRecipe = (id) => API.get(`/recipe/${id}`);
export const createRecipe = (recipe) => API.post(`/recipe`, recipe);

// CART
export const addToCart = ({ userId, productId, quantity }) =>
  API.post(`/cart/${userId}`, { productId, quantity });
export const getCart = (id) => API.get(`/cart/${id}`);
export const deleteFromCart = (userId, itemId) =>
  API.delete(`/cart/${userId}/${itemId}`);

// ORDER
export const checkout = (id, address) => API.post(`/order/${id}`, address);
export const getOrders = (id) => API.post(`/order/${id}`);
