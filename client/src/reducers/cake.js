import { CREATE_CAKE, FETCH_CAKES, FETCH_CAKE } from "../constants/actionTypes";

const cakes = (cakes = [], action) => {
  switch (action.type) {
    case FETCH_CAKES:
      return action.payload;
    case FETCH_CAKE:
      return action.payload;
    case CREATE_CAKE:
      return [...cakes, action.payload];
    default:
      return cakes;
  }
};

export default cakes;
