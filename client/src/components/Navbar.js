import React from 'react';

// importing Link
import { Link } from "react-router-dom";

// importing alex_logo
// import alex_logo from "../images/alex_logo.png";

// importing scss
import "../styles/Navbar.scss";

export default function NavBar() {

    return (
        <React.Fragment>
            <nav>
                <div className="menu_container">
                    <div className="menu_wrap">
                        <input type="checkbox" className="menu_toggler" />
                        <div className="menu_hamburger">
                            <div className="menu_line"></div>
                        </div>
                        <div className="menu_overlay_container">
                            <div className="menu_overlay_subcontainer">
                                <div className="menu_overlay_links">
                                    <Link to="/">Home</Link>
                                    <a href="#about">About</a>
                                    <a href="#skills">Skills</a>
                                    <a href="#qualifications">Qualifications</a>
                                    <a href="#projects">Projects</a>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="nav_container">
                    <div className="menu_container">
                        <div className="menu_subcontainer">
                            <div className="menu_lines"></div>
                        </div>
                    </div>
                    <div className="logo_container">
                        <Link to="/">
                            <img src={alex_logo} alt="alex_logo" />
                        </Link>
                    </div>
                </div> */}
            </nav>
        </React.Fragment>
    )
}
