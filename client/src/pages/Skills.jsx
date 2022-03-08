import { motion } from 'framer-motion';
import React from 'react';

function Skills() {
  return <div id="skills">
      <motion.h1 
      initial={{ y: 500 }} 
      animate={{
        y: 0,
        transition: { duration: 0.5, type:"spring" },
      }}
      exit={{
        y: 500,
        transition: { duration: 0.5, type:"spring", ease:"easeInOut" },
      }}
      >
      Skills
      </motion.h1>
  </div>;
}

export default Skills;