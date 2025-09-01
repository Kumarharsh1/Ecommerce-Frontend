import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="header">
      <nav className="navbar">
        [cite_start]<Link to="/" className="logo">My Store [cite: 9, 37, 62, 103, 142, 180, 208, 243, 273, 292, 326, 339]</Link>
        <ul className="nav-links">
          [cite_start]<li><Link to="/">Home [cite: 10, 39, 69, 111, 143, 186, 209, 244, 282, 327]</Link></li>
          [cite_start]<li><Link to="/products">Products [cite: 11, 39, 70, 112, 144, 187, 210, 245, 283, 328]</Link></li>
          [cite_start]<li><Link to="/categories">Categories [cite: 13, 40, 72, 115, 145, 188, 215, 246, 284, 329]</Link></li>
          [cite_start]<li><Link to="/deals">Deals [cite: 14, 41, 73, 116, 146, 189, 216, 247, 285, 331]</Link></li>
          [cite_start]<li><Link to="/about">About [cite: 15, 42, 74, 117, 147, 190, 217, 248, 286, 332]</Link></li>
          [cite_start]<li><Link to="/contact">Contact [cite: 16, 43, 75, 118, 148, 191, 218, 249, 287, 333]</Link></li>
        </ul>
        <div className="cart-icon">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            [cite_start]{totalItems > 0 && <span className="cart-badge">{totalItems} [cite: 24, 90, 165, 313]</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;