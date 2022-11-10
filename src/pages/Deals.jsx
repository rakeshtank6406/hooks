import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Deals = () => {
  return (
    <div>
      <Header />
      <div className="deal-part">
        <h2>Our Deals</h2>
        <div className="right-side">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search by name"
          />
          <span>
            <img src="\filterIcon.png" alt="" />
          </span>
        </div>
      </div>
      <div className="category-name">
        <Link to="all"><span>All</span></Link>
        <Link to="breakfast"><span>Break Fast</span></Link>
        <Link to="lunch"><span>Lunch</span></Link>
        <Link to="dinner"><span>Dinner</span></Link>
        <Link to="dessert"><span>Dessert</span></Link>
        <Link to="fastfood"><span>Fastfood</span></Link>
      </div>
      <div>
        <Outlet/>
      </div>
      <div className="image-container">
        <h2>Discover the best food and Drink in</h2>
        <img src="\banner.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Deals;
