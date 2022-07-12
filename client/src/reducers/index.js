import { combineReducers } from "redux";
import shops from "./shops";
import auth from "./auth";
import recipe from "./recipe";
import cakes from "./cake";
import cart from "./cart";

export const reducers = combineReducers({ shops, auth, recipe, cakes, cart });
