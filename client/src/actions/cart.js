import * as api from "../api/index.js";

export const getCartItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCartItems();
    dispatch({ type: "FETCH_CART_ITEMS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createCart = (cart) => async (dispatch) => {
  try {
    const { data } = await api.createCart(cart);
    dispatch({ type: "CREATE_CART", payload: data });
  } catch (error) {
    console.log(error);
  }
};
