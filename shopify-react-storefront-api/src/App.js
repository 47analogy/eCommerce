import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import store from './reduxStore/store';
import Cart from './components/Cart';
import DisplayProducts from './components/DisplayProducts';

function App() {
  const state = store.getState();
  console.log('redux store', state);

  const updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    state.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        store.dispatch({
          type: 'UPDATE_QUANTITY_IN_CART',
          payload: { checkout: res },
        });
      });
  };

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = state.checkout.id;
    state.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        store.dispatch({
          type: 'REMOVE_LINE_ITEM_IN_CART',
          payload: { checkout: res },
        });
      });
  };

  const handleCartClose = () => {
    store.dispatch({ type: 'CLOSE_CART' });
  };

  const handleCartOpen = () => {
    store.dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className="App">
      <DisplayProducts />
      <Cart
        checkout={store.getState().checkout}
        isCartOpen={store.getState().isCartOpen}
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
      />
    </div>
  );
}

export default connect((state) => state)(App);
