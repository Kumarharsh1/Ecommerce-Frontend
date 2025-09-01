import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="big-product-card group cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 text-4xl">
          {category.icon}
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        
        <p className="text-xl text-gray-600 mb-6">
          {category.description}
        </p>
        
        <Link 
          to={`/products?category=${category.slug}`}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;