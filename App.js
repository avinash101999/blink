import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id === productId);
    if (item.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  return (
    <div className="app">
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Hero />
      <Categories />
      <Products addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
