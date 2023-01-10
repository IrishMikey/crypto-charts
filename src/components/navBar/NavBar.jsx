import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="header">
        <div className="container">
          <h1>CryptoCharts</h1>
        </div>
      </div>
    </Link>
  );
};

export default NavBar;
