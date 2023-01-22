import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="headerContent">
          <a id="home" href="/">
            <h1>CryptoCharts</h1>
          </a>
          <a id="return" href="http://www.mikey.ie">
            Back to Mikey.ie
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
