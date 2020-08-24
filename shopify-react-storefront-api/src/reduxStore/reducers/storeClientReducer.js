import {
  // CLIENT_CREATED,
  PRODUCTS_FOUND,
  SHOP_FOUND,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  shop: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case CLIENT_CREATED:
    //   return { ...state, client: action.payload };
    case SHOP_FOUND:
      return { ...state, shop: action.payload };
    case PRODUCTS_FOUND:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
