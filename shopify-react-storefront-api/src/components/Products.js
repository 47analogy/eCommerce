import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return <div className="Product-wrapper">{products}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.storeClient.products,
  };
};

export default connect(mapStateToProps)(Products);
