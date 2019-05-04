import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-red">
     <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/questionaire"
              className={window.location.pathname === "/questionaire" ? "nav-link active" : "nav-link"}
            >
              Questionaire
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className={window.location.pathname === "/resources" ? "nav-link active" : "nav-link"}
            >
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;