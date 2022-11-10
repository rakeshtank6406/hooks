import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Orders from "./pages/Orders";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import RestaurantCard from "./Components/RestaurantCard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deals" element={<Deals/>}>
        <Route path="/deals/all" element={<RestaurantCard/>}/>
        <Route path="/deals/breakfast" element={<h1> breakfast</h1>}/>
        <Route path="/deals/lunch" element={<h1> lunch</h1>}/>
        <Route path="/deals/dinner" element={<h1> dinner</h1>}/>
        <Route path="/deals/dessert" element={<h1> dessert</h1>}/>
        <Route path="/deals/fastfood" element={<h1> fastfood</h1>}/>
      </Route>
      <Route path="/orders" element={<Orders />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
