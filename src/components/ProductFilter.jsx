import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';

const ProductFilter = ({ selectedCategory, onCategoryChange, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Category Filter */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.slug)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Filter */}
        <div className="relative">
          <h3 className="text-xl font-semibold mb-4">Sort by</h3>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-100 px-4 py-2 rounded-xl font-semibold text-gray-700 hover:bg-gray-200 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            Price: Low to High
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;