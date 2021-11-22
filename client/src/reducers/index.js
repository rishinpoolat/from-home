import { combineReducers } from "redux";
import shops from './shops';
import auth from './auth';

export const reducers =  combineReducers({ shops, auth });