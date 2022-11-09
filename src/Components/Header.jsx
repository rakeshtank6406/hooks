import React from "react";
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="navbar">
      <div className="brand-logo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQHfvQ4cTzkLLQ/company-logo_200_200/0/1652893770629?e=2147483647&v=beta&t=67MrLaHsPrBIRTUYOx-a35fr-1Upz9BPN1bXj6d-VVU"
          alt="brand-logo"
        />
      </div>
      <div className="navbar-right-items">
        <a href="/">Home</a>
        <a href="/">Deals</a>
        <a href="/">Orders</a>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
