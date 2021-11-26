import { FETCH_ALL, CREATE, FETCH_SHOP } from '../constants/actionTypes';

const shops =  (shops = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_SHOP: 
      return action.payload;
    case CREATE:
      return [...shops, action.payload];
    default:
      return shops;
  }
}

export default shops;
