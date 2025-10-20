import React from 'react';
import { Link } from 'react-router-dom';
import { FooterProps, ROUTES } from '../../types';

const Footer: React.FC<FooterProps> = ({ showNewsletter = true }) => {
  return (
    <>
      {/* Newsletter Section */}
      {showNewsletter && (
        <section className="newsletter">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4>Signup for Newsletters</h4>
                <p>Get E-mail notifications about our <span>latest Offers</span> & Shops</p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <input
                    type="email"
                    placeholder="Enter your E-mail"
                    id="mail-box"
                    className="form-control me-3"
                    style={{ maxWidth: '250px' }}
                  />
                  <button className="btn btn-light">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            {/* Company Info Section */}
            <div className="col col-md-6 col-sm-12" id="section1">
              <h1 className="navbar-brand fs-3 fw-bold fst-italic mb-3">Hoodigo</h1>
              <h4 className="mb-3">Contact</h4>
              <p className="mb-2"><strong>Address:</strong> 562 Wellington Road, Street 32, India</p>
              <p className="mb-2"><strong>Phone:</strong> +01 2222 365/(+91) 01 2345 6789</p>
              <p className="mb-3"><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

              {/* Social Media Links */}
              <div className="follow">
                <h4 className="mb-3">Follow us</h4>
                <div className="icon d-flex gap-3">
                  <a href="https://facebook.com/hoodigo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/hoodigo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/hoodigo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://pinterest.com/hoodigo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="https://youtube.com/hoodigo" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div className="col col-md-2 col-sm-6">
              <h4 className="mb-3">About</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to={ROUTES.BLOG}>About us</Link>
                </li>
                <li className="mb-2">
                  <a href="#">Delivery Information</a>
                </li>
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#footer">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Account Links */}
            <div className="col col-md-2 col-sm-6">
              <h4 className="mb-3">My Account</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to={ROUTES.LOGIN}>Sign in</Link>
                </li>
                <li className="mb-2">
                  <Link to={ROUTES.CART}>View Cart</Link>
                </li>
                <li className="mb-2">
                  <a href="#">My Wishlist</a>
                </li>
                <li className="mb-2">
                  <a href="#">Track My Order</a>
                </li>
                <li className="mb-2">
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col col-md-2 col-sm-6">
              <h4 className="mb-3">Customer Service</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Shipping Info</a>
                </li>
                <li className="mb-2">
                  <a href="#">Returns & Exchanges</a>
                </li>
                <li className="mb-2">
                  <a href="#">Size Guide</a>
                </li>
                <li className="mb-2">
                  <a href="#">FAQ</a>
                </li>
                <li className="mb-2">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="row mt-4 pt-4 border-top">
            <div className="col-12 text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Hoodigo. All rights reserved. |
                <Link to={ROUTES.BLOG} className="ms-2">About Us</Link> |
                <a href="#" className="ms-2">Privacy Policy</a> |
                <a href="#" className="ms-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
