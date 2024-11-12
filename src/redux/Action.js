import { ADD_CART, GET_API_DATA } from "./Constants";

export function AddCart(data) {
  return { type: ADD_CART, payload: data };
}

export function ApiData(data) {
  return { type: GET_API_DATA, payload: data };
}
