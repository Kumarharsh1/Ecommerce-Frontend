import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import Product from '../components/Product';
import ProductFilter from '../components/ProductFilter';

const ProductPage = ({ user, cart, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = products.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    
    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <div className="centered-page bg-products">
      <div className="centered-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-2xl text-gray-600">
            Discover our amazing collection of premium products
          </p>
        </motion.div>

        {/* Filter Component */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
        />

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Product product={product} addToCart={addToCart} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">😢</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              No products found
            </h3>
            <p className="text-xl text-gray-600">
              Try selecting a different category or check back later for new arrivals.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;