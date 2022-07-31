import React from "react";
import  {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-3
      shadow-sm"
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            KARREY COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-NavLink active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/Login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>

              <NavLink to="/Register" className="btn btn-outline-dark ms-2">
                <i className=" fa fa-user-plus me-1"></i>Register
              </NavLink>

              <NavLink to="/Cart" className="btn btn-outline-dark ms-2">
                <i className=" fa fa-shopping-cart me-1"></i>cart(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;