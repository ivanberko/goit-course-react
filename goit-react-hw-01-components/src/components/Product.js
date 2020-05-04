import React from "react";
import PropTypes from "prop-types";

const Product = ({ alt, imageUrl, price, name }) => (
  <div>
    <img src={imageUrl} alt={alt} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: "Product img",
};

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
