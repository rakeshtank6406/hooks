import React from "react";
import "../styles/RestaurantCard.scss";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import Image from "../Images/banner.jpeg";
import { useState } from "react";

const RestaurantCard = () => {
  const [time, SetTime] = useState({});
  setInterval(() => {
    let time = new Date();
    SetTime({
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    });
  }, 1000);
  return (
    <div className="container">
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="star-heart">
            <span className="star">
              4.2&nbsp;
              <BsFillStarFill />
            </span>
            <span
              className="heart"
              onClick={() => alert("You Clicked On Heart!")}
            >
              <BsFillHeartFill />
            </span>
          </div>
          <div className="img-bottom">
            <div className="stock-time">
              <span className="stock">5 left</span>
              <span className="time">
                {time.hour}h:{time.minute}m:{time.second}:sec
              </span>
            </div>
            <span className="text">Text</span>
          </div>
        </div>
        <div className="text">
          <div className="name-price">
            <div>
              <p className="name">
                LMD Test Merchant <span>Mixed</span>
              </p>
              <span className="checked-price">Rs.500</span>
            </div>
            <div>
              <p>Rs.350</p>
              <span>Price</span>
            </div>
          </div>
          <div className="address-Bar">
            <div>
              229, unknown place, unknown nagar, unknown, unknown-658410
            </div>
            <button
              className="submit-btn"
              onClick={() => alert("You Clicked On Button!")}
            >
              General
            </button>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="star-heart">
            <span className="star">
              4.2&nbsp;
              <BsFillStarFill />
            </span>
            <span
              className="heart"
              onClick={() => alert("You Clicked On Heart!")}
            >
              <BsFillHeartFill />
            </span>
          </div>
          <div className="img-bottom">
            <div className="stock-time">
              <span className="stock">5 left</span>
              <span className="time">
                {time.hour}h:{time.minute}m:{time.second}:sec
              </span>
            </div>
            <span className="text">Text</span>
          </div>
        </div>
        <div className="text">
          <div className="name-price">
            <div>
              <p className="name">
                LMD Test Merchant <span>Mixed</span>
              </p>
              <span className="checked-price">Rs.500</span>
            </div>
            <div>
              <p>Rs.350</p>
              <span>Price</span>
            </div>
          </div>
          <div className="address-Bar">
            <div>
              229, unknown place, unknown nagar, unknown, unknown-658410
            </div>
            <button
              className="submit-btn"
              onClick={() => alert("You Clicked On Button!")}
            >
              General
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="star-heart">
            <span className="star">
              4.2&nbsp;
              <BsFillStarFill />
            </span>
            <span
              className="heart"
              onClick={() => alert("You Clicked On Heart!")}
            >
              <BsFillHeartFill />
            </span>
          </div>
          <div className="img-bottom">
            <div className="stock-time">
              <span className="stock">5 left</span>
              <span className="time">
                {time.hour}h:{time.minute}m:{time.second}:sec
              </span>
            </div>
            <span className="text">Text</span>
          </div>
        </div>
        <div className="text">
          <div className="name-price">
            <div>
              <p className="name">
                LMD Test Merchant <span>Mixed</span>
              </p>
              <span className="checked-price">Rs.500</span>
            </div>
            <div>
              <p>Rs.350</p>
              <span>Price</span>
            </div>
          </div>
          <div className="address-Bar">
            <div>
              229, unknown place, unknown nagar, unknown, unknown-658410
            </div>
            <button
              className="submit-btn"
              onClick={() => alert("You Clicked On Button!")}
            >
              General
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="star-heart">
            <span className="star">
              4.2&nbsp;
              <BsFillStarFill />
            </span>
            <span
              className="heart"
              onClick={() => alert("You Clicked On Heart!")}
            >
              <BsFillHeartFill />
            </span>
          </div>
          <div className="img-bottom">
            <div className="stock-time">
              <span className="stock">5 left</span>
              <span className="time">
                {time.hour}h:{time.minute}m:{time.second}:sec
              </span>
            </div>
            <span className="text">Text</span>
          </div>
        </div>
        <div className="text">
          <div className="name-price">
            <div>
              <p className="name">
                LMD Test Merchant <span>Mixed</span>
              </p>
              <span className="checked-price">Rs.500</span>
            </div>
            <div>
              <p>Rs.350</p>
              <span>Price</span>
            </div>
          </div>
          <div className="address-Bar">
            <div>
              229, unknown place, unknown nagar, unknown, unknown-658410
            </div>
            <button
              className="submit-btn"
              onClick={() => alert("You Clicked On Button!")}
            >
              General
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${Image})` }}>
          <div className="star-heart">
            <span className="star">
              4.2&nbsp;
              <BsFillStarFill />
            </span>
            <span
              className="heart"
              onClick={() => alert("You Clicked On Heart!")}
            >
              <BsFillHeartFill />
            </span>
          </div>
          <div className="img-bottom">
            <div className="stock-time">
              <span className="stock">5 left</span>
              <span className="time">
                {time.hour}h:{time.minute}m:{time.second}:sec
              </span>
            </div>
            <span className="text">Text</span>
          </div>
        </div>
        <div className="text">
          <div className="name-price">
            <div>
              <p className="name">
                LMD Test Merchant <span>Mixed</span>
              </p>
              <span className="checked-price">Rs.500</span>
            </div>
            <div>
              <p>Rs.350</p>
              <span>Price</span>
            </div>
          </div>
          <div className="address-Bar">
            <div>
              229, unknown place, unknown nagar, unknown, unknown-658410
            </div>
            <button
              className="submit-btn"
              onClick={() => alert("You Clicked On Button!")}
            >
              General
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
