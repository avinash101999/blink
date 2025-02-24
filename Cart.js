import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <p className="total">
        Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
    </section>
  );
};

export default Cart;
