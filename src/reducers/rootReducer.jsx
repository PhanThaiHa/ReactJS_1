import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    cartReducer: cartReducer
});