import { combineReducers } from "redux";
import AddCartReducer from "./AddCartReducer";

const reducer = combineReducers({ cart: AddCartReducer });
export default reducer;
