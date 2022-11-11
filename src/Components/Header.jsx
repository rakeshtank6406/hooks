import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

const Header = () => {
  const isActive = window.location.href.split("/")[3];
  return (
    <div className="navbar">
      <div className="brand-logo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQHfvQ4cTzkLLQ/company-logo_200_200/0/1652893770629?e=2147483647&v=beta&t=67MrLaHsPrBIRTUYOx-a35fr-1Upz9BPN1bXj6d-VVU"
          alt="brand-logo"
        />
      </div>
      <div className="navbar-right-items">
        <Link to="/" className={isActive==="" ? "active" : ""}>Home</Link>
        <Link to="/deals" className={isActive==="deals" ? "active" : ""}>Deals</Link>
        <Link to="/orders" className={isActive==="orders" ? "active" : ""}>Orders</Link>
        <Link to="/login" className={isActive==="login" ? "active" : ""}>Log In</Link>
        <Link to="/signup" className={isActive==="signup" ? "active" : ""}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
