import React from "react";

// importing route
import { Switch, Route } from "react-router-dom";

// // importing pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

// importing the components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Cookies from "./components/cookies/Cookies";

import './styles/App.scss';

function App() {

  return (
    <div className=''>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Footer />
      {/* <Cookies /> */}
    </div>
  );
}

export default App;
