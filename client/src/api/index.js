import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });


export const fetchShops = () => API.get(`/shops`);
export const createShop = (newShop) => API.post(`/shops/shopregister`, newShop);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);