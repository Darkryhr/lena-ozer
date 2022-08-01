import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
