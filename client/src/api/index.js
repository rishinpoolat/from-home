import axios from 'axios';

const url = 'http://localhost:5000';
// const url = 'http://localhost:5000/shops'; confirm which url should use

export const fetchShops = () => axios.get(`${url}/shops`);
export const createShop = (newShop) => axios.post(`${url}/shops/shopregister`, newShop);