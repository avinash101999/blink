import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    'Fruits & Vegetables',
    'Dairy & Eggs',
    'Snacks',
    'Beverages',
    'Household',
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
