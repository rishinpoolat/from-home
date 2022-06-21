import { combineReducers } from "redux";
import shops from './shops';
import auth from './auth';
import recipe from './recipe';

export const reducers =  combineReducers({ shops, auth, recipe });