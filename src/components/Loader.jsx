import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.div
        className="flex space-x-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-500 rounded-full"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.5
                }
              }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;