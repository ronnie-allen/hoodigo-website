import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavbarProps, ROUTES } from '../../types';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const cartItems = getTotalItems();

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark border-bottom border-body" data-bs-theme="dark" id="main-navbar">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fs-3 fw-bold fst-italic" to={ROUTES.HOME} onClick={closeMenu}>
          Hoodigo
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            {/* Home Link */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive(ROUTES.HOME) ? 'active' : ''}`}
                to={ROUTES.HOME}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* Shop Link */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive(ROUTES.SHOP) ? 'active' : ''}`}
                to={ROUTES.SHOP}
                onClick={closeMenu}
              >
                Shop
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={ROUTES.BLOG} onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#footer" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </li>

            {/* Cart Link */}
            <li className="nav-item">
              <Link className="nav-link position-relative" to={ROUTES.CART} onClick={closeMenu}>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>
                )}
              </Link>
            </li>

            {/* Authentication Links */}
            {!isAuthenticated ? (
              <li className="nav-item">
                <Link
                  className="btn btn-success btn-sm mx-3"
                  to={ROUTES.LOGIN}
                  onClick={closeMenu}
                >
                  Log In
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-light btn-sm mx-3 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user me-2"></i>
                  Account
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile" onClick={closeMenu}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/orders" onClick={closeMenu}>
                      Orders
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item" onClick={closeMenu}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
