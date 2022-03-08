import { motion } from 'framer-motion';
import React from 'react';

// importing page sections
// import About from "./About";
// import Skills from "./Skills";
// import Qualifications from "./Qualifications";
// import Projects from "./Projects";

function Home() {
  return <div>
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
      Home
      </motion.h1>
  </div>;
}

export default Home;