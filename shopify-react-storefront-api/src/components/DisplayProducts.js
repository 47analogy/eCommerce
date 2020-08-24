import React from 'react';
import Products from './Products';
import { connect } from 'react-redux';

function DisplayProducts(props) {
  const addVariantToCart = (variantId, quantity) => {
    console.log('display products', props.products);
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = props.checkout.id;

    props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        props.dispatch({
          type: 'ADD_VARIANT_TO_CART',
          payload: { isCartOpen: true, checkout: res },
        });
      });
  };
  return (
    <div>
      <h1>Available Products</h1>
      <Products
        products={props.products}
        client={props.client}
        addVariantToCart={addVariantToCart}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    client: state.client,
    products: state.storeClient.products,
  };
};

export default connect((state) => state)(DisplayProducts);
