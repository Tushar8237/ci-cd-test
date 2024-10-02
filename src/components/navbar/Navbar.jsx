import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/website-logo.png";

function Navbar() {
    return (
        <nav className="header-section">
            <ul className="header-container">
                <li className="header-wrapper">
                    <div className="header-wrapper-left">
                        <Link to="/">
                            <img src={logo} alt="website logo" />
                        </Link>
                    </div>
                    <div className="header-wrapper-right">
                        <Link to="/" className="nav-link">HOME</Link>
                        <Link to="/movies" className="nav-link">MOVIES</Link>
                        <Link to="/events" className="nav-link">EVENTS</Link>
                        <Link to="/sports" className="nav-link">SPORTS</Link>
                        <Link to="/pages" className="nav-link">PAGES</Link>
                        <Link to="/blog" className="nav-link">BLOGS</Link>
                        <Link to="/contact" className="nav-link">CONTACT</Link>
                        <button className="header-button">JOIN US</button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
