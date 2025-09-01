import { motion } from 'framer-motion';

const StaggerContainer = ({ children, staggerChildren = 0.1, delayChildren = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;