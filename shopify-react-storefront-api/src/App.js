import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Cart from './components/Cart';
import DisplayProducts from './components/DisplayProducts';

function App(props) {
  const updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = props.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    props.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        props.dispatch({
          type: 'UPDATE_QUANTITY_IN_CART',
          payload: { checkout: res },
        });
      });
  };

  const removeLineItemInCart = (lineItemId) => {
    const checkoutId = props.checkout.id;
    props.checkout.removeLineItems(checkoutId, [lineItemId]).then((res) => {
      props.dispatch({
        type: 'REMOVE_LINE_ITEM_IN_CART',
        payload: { checkout: res },
      });
    });
  };

  const handleCartClose = () => {
    props.dispatch({ type: 'CLOSE_CART' });
  };

  const handleCartOpen = () => {
    props.dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className="App">
      <DisplayProducts />
      <Cart
        checkout={props.checkout}
        isCartOpen={props.isCartOpen}
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    checkout: state.cart.checkout,
    isCartOpen: state.cart.isCartOpen,
  };
};

export default connect((state) => state)(App);
