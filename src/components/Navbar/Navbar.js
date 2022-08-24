import React from "react";
import "./Navbar.module.css";
//import Logo from "../../logo.jpg";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      {/* <header className="p-3 text-bg-dark navbar navbar-expand-md fixed-top  "> */}
      <header className="p-3 text-bg-dark fixed-top ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                src="https://pizza-man-61510.web.app/static/media/Logo.521f6efc.png"
                alt="Pizza Man"
                className="w-100"
                width="100"
                height="40"
              />
            </Link>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex  m-auto"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  m-auto float-start">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="nav-link px-2 text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link to="/signin" className="btn btn-outline-light me-2">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-warning me-2">
                Sign Up
              </Link>
              {/* <Link to="/signout" className="btn btn-primary me-2">
                Sign Out
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
