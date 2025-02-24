import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="logo">QuickMart</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for groceries..." />
      </div>
      <div className="user-options">
        <a href="#">Login</a>
        <a href="#">Cart ({cartCount})</a>
      </div>
    </header>
  );
};

export default Header;
