import React from "react";
import Header from "../Components/Header";
import StepCard from "../Components/StepCard";
import '../styles/stepCard.scss';

const Home = () => {
  const data = [
    {i: "./user.png",step: "STAP 1", para: "Create you account and get access to discounted deals " },
    {i: "./order.png",step: "STAP 2", para: "Select your deal and place your order to reserve your bag at the restaurant " },
    {i: "./orderplace.png",step: "STAP 3", para: "Collect the deal yourself or have any third party pick it for you by sharing your OTP with them. Just before handing the bag, the merchant will ask you to click a button to verify that you have collected the bag. " },
    {i: "./cart.png",step: "STAP 4", para: "Sit back and enjoy the delicious food that you have bought. Please make sure to rate the merchant and give feedback on the quality and taste of the food " },
  ];
  return (
    <div>
      <Header />
      <div className="step-card">

      {data.map((item)=><StepCard data={item}/>)}
      </div>
    </div>
  );
};

export default Home;
