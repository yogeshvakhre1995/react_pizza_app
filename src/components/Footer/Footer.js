import React from "react";
import { Link } from "react-router-dom";
import "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
    
      <footer className="footer text-center mt-5 p-4 bg-dark text-white">
        <div className="container-xxl  py-5">
          <div className="row">
            <div className="col-3">
              <h2 className="text-uppercase">Company</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link className="nav-link text-white p-0" to="/about">
                    About Us
                  </Link>
                </li>
               
                <li className="nav-item mb-2">
                  <Link to="/#" className="nav-link text-white p-0">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <a
                    className="nav-link text-white p-0"
                    href="mailto:no-mail@email.com"
                   target="_blank"
                   rel="noreferrer" 
                  >
                    Contact Us
                  </a>
                </li>
                
              </ul>
            </div>

            <div className="col-3">
              <h2 className="text-uppercase">Legal</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    className="nav-link  text-white p-0"
                    to="/terms-and-conditions"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    className="nav-link text-white  p-0"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link className="nav-link text-white  p-0" to="/disclaimer">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-5 offset-1">
              <form method="post" action="/#">
                <h2 className="text-uppercase">Subscribe to our newsletter</h2>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary"  type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Tap FoodWorks Ltd. | All Rights Reserved</p>

            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-dark" to="/#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="/#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="/#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="/#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
