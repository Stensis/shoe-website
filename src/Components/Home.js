import React from "react";
import "../Styling/Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Online Store</h1>
        <p className="hero-description">
          Shop the latest collection of fashion products at great prices
        </p>
        <a href="/products" className="hero-cta">
          Shop Now
        </a>
        <Products/>
      </div>
    </div>
  );
};

export default Home;
