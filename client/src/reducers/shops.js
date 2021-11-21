import { FETCH_ALL, CREATE } from '../constants/actionTypes';

const shops =  (shops = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...shops, action.payload];
    default:
      return shops;
  }
}

export default shops;
