import * as api from "../api/index.js";

// Action creators
// get all cakes
export const getCakes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCakes();
    dispatch({ type: "FETCH_CAKES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// get a specific cake
export const getCake = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCake(id);
    dispatch({ type: "FETCH_CAKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// create a new cake
export const createNewCake = (cake) => async (dispatch) => {
  try {
    const { data } = await api.createCake(cake);
    dispatch({ type: "CREATE_CAKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
