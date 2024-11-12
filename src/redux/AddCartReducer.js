import { ADD_CART, GET_API_DATA } from "./Constants";

const initialState = { itemsList: [], cartItems: [], isLoading: false };

export default function AddCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      const selectedItem = state.itemsList.find(
        (item) => item.id === action.payload
      );

      return { ...state, cartItems: [...state.cartItems, selectedItem] };

    case GET_API_DATA:
      return { ...state, itemsList: action.payload };
    default:
      return state;
  }
}
