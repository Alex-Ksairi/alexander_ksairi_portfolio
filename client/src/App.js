import React from "react";

// importing route
import { Switch, Route } from "react-router-dom";

// // importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Qualifications from "./pages/Qualifications";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

// importing the components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Cookies from "./components/cookies/Cookies";

// styled components 
import styled from 'styled-components';

// styled components 
import {AnimatePresence} from 'framer-motion';

import './styles/App.scss';

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #A37D52 30%, #EFF1F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/qualifications" component={Qualifications}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route component={Error}></Route>
          </Switch>
        </AnimatePresence>
      <Footer />
        {/* <Cookies /> */}
      </Pages>
    </div>
  );
}

export default App;
