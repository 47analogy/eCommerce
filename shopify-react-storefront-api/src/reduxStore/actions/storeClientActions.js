import {
  // CLIENT_CREATED,
  PRODUCTS_FOUND,
  SHOP_FOUND,
  CHECKOUT_FOUND,
} from './actionTypes';

import Client from 'shopify-buy';

const STORE_FRONT_ACCESS_TOKEN = process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN;
const DOMAIN = process.env.REACT_APP_DOMAIN;

// Initializing a client to return content
const client = Client.buildClient({
  storefrontAccessToken: STORE_FRONT_ACCESS_TOKEN,
  domain: DOMAIN,
});

// export const createClient = () => {
//   return (dispatch) => {
//     dispatch({ type: CLIENT_CREATED, payload: client });
//   };
// };

export const fetchAllProducts = () => {
  return (dispatch) => {
    return client.product
      .fetchAll()
      .then((res) => {
        console.log('product', res);
        dispatch({ type: PRODUCTS_FOUND, payload: res });
      })
      .catch((err) => console.log(err));
  };
};

export const createCheckout = () => {
  return (dispatch) => {
    return client.checkout
      .create()
      .then((res) => {
        console.log('checkout', res);
        dispatch({ type: CHECKOUT_FOUND, payload: res });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchShopInfo = () => {
  return (dispatch) => {
    return client.shop
      .fetchInfo()
      .then((res) => {
        console.log('shop', res);
        dispatch({ type: SHOP_FOUND, payload: res });
      })
      .catch((err) => console.log(err));
  };
};
