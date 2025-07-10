import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, isInStock }) => {
  return (
    <div className="product-card">
      <div className="product-image">📦</div>
      <h4>{name}</h4>
      <p className="product-price">${price.toFixed(2)}</p>
      <span className={`stock-tag ${isInStock ? 'in-stock' : 'out-of-stock'}`}>
        {isInStock ? 'In stock' : 'Out of stock'}
      </span>
    </div>
  );
};

export default ProductCard;
