import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Subtotal: ${(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;