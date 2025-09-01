import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Product from '../components/Product';
import { categories } from '../data/categories';
import { products } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        [cite_start]<h1>Premium Products for Your Lifestyle [cite: 17, 18]</h1>
        [cite_start]<p>Discover the latest trends and exclusive items at amazing prices [cite: 19]</p>
        [cite_start]<button className="shop-now-btn">Shop Now → [cite: 20]</button>
      </section>

      <section className="category-section">
        [cite_start]<h2>Shop by Category [cite: 21, 44]</h2>
        <div className="category-list">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="featured-products-section">
        [cite_start]<h2>Featured Products [cite: 76, 149]</h2>
        <div className="product-list">
          {products.slice(0, 3).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <section className="special-offers-section">
        [cite_start]<h2>Special Offers [cite: 192, 219]</h2>
        <div className="offer-card">
          [cite_start]<h3>Summer Sale [cite: 220]</h3>
          [cite_start]<p>Up to 50% off on selected items [cite: 221]</p>
          [cite_start]<button>Shop Now [cite: 223]</button>
        </div>
      </section>

      <section className="customer-reviews-section">
        [cite_start]<h2>What Our Customers Say [cite: 226, 250]</h2>
        {/* Customer review components go here */}
      </section>
    </div>
  );
};

export default HomePage;