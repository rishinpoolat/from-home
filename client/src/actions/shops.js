import * as api from '../api/index.js';

// Action creators
export const getShops =  () => async (dispatch) => {
  try {
    const { data } = await api.fetchShops();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getShop =  (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchShop(id);
    dispatch({ type: 'FETCH_SHOP', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewShop = (shop) => async (dispatch) => {
  try {
    const { data } = await api.createShop(shop);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};