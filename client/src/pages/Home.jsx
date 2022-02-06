import React from 'react';

// importing page sections
import About from "./About";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Projects from "./Projects";

function Home() {
  return <div>
      <h1>Hello from home</h1>
      <About />
      <Skills />
      <Qualifications />
      <Projects />
  </div>;
}

export default Home;