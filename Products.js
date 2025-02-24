import React from 'react';
import './Products.css';

const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Fresh Apples', price: 50, image: 'https://via.placeholder.com/200?text=Apple' },
    { id: 2, name: 'Full Cream Milk', price: 30, image: 'https://via.placeholder.com/200?text=Milk' },
    { id: 3, name: 'Potato Chips', price: 20, image: 'https://via.placeholder.com/200?text=Chips' },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
