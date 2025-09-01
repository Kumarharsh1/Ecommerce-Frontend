import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">My Store</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for premium products at amazing prices.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-white">
                {/* GitHub icon using text */}
                <span className="text-xl">🐱</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-blue-400">
                {/* LinkedIn icon using text */}
                <span className="text-xl">💼</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-pink-400">
                {/* Instagram icon using text */}
                <span className="text-xl">📸</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty'].map((category) => (
                <li key={category}>
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@MyStore.com</p>
              <p>📞 +91-9279157296</p>
              <p>📍 My store, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            © {currentYear} My Store. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with ❤️ using MERN Stack by Kumar Harsh
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;