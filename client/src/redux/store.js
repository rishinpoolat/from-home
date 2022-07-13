import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import shopReducer from "./features/shopSlice";
import recipeReducer from "./features/recipeSlice";
import cakeReducer from "./features/cakeSlice";
import cartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    shops: shopReducer,
    cakes: cakeReducer,
    cart: cartReducer,
    recipes: recipeReducer,
  },
});
