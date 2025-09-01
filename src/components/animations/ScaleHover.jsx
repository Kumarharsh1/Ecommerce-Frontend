import { motion } from 'framer-motion';

const ScaleHover = ({ children, scale = 1.05 }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleHover;