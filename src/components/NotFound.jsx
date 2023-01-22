import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Oops! This page doesn't exist</h1>
      <Link to="/">
        <a href="#">Click me to return home </a>
      </Link>
    </div>
  );
};
