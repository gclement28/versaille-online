import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <p className="logo">Versaille Online</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/reservation">Reservation chateau</Link>
            </li>
            <li>
              <Link to="/prendrerdv">Rencontrer le roi</Link>
            </li>

            <li>
              <Link to="/contactus">Nous contacter</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
