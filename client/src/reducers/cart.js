import { CREATE_CART, FETCH_CART_ITEMS } from "../constants/actionTypes";

const cart = (cart = [], action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return action.payload;
    case CREATE_CART:
      return [...cart, action.payload];
    default:
      return cart;
  }
};

export default cart;
