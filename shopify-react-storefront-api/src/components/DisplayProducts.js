import React from 'react';
import Products from './Products';
import { connect } from 'react-redux';
import store from '../reduxStore/store';

function DisplayProducts() {
  const state = store.getState();

  const addVariantToCart = (variantId, quantity) => {
    console.log('state products', state.products);
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;

    state.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        store.dispatch({
          type: 'ADD_VARIANT_TO_CART',
          payload: { isCartOpen: true, checkout: res },
        });
      });
  };
  return (
    <div>
      <h1>Available Products</h1>
      <Products
        products={state.products}
        client={state.client}
        addVariantToCart={addVariantToCart}
      />
    </div>
  );
}

export default connect((state) => state)(DisplayProducts);
