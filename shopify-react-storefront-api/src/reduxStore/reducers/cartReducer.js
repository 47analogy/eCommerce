import {
  CHECKOUT_FOUND,
  ADD_VARIANT_TO_CART,
  UPDATE_QUANTITY_IN_CART,
  REMOVE_LINE_ITEM_IN_CART,
  OPEN_CART,
  CLOSE_CART,
} from '../actions/actionTypes';

const initialState = {
  isCartOpen: false,
  checkout: { lineItems: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_FOUND:
      return { ...state, checkout: action.payload };
    case ADD_VARIANT_TO_CART:
      return {
        ...state,
        isCartOpen: action.payload.isCartOpen,
        checkout: action.payload.checkout,
      };
    case UPDATE_QUANTITY_IN_CART:
      return { ...state, checkout: action.payload.checkout };
    case REMOVE_LINE_ITEM_IN_CART:
      return { ...state, checkout: action.payload.checkout };
    case OPEN_CART:
      return { ...state, isCartOpen: true };
    case CLOSE_CART:
      return { ...state, isCartOpen: false };
    default:
      return state;
  }
};
