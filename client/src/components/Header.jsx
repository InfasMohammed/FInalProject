import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="/">Smart Invest</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/services">
                Services
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <Link to="/login" className="getstarted scrollto">
                Log in
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
