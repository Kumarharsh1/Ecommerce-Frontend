import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-details">
        [cite_start]<span className="price">${product.price} [cite: 67, 84, 87, 106, 120, 127, 152, 156, 161, 183]</span>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          [cite_start]Add to Cart [cite: 68, 85, 88, 107, 121, 128, 153, 157, 162, 184]
        </button>
      </div>
    </div>
  );
};

export default Product;