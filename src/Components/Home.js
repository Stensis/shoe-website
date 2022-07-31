import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://media.istockphoto.com/photos/pair-of-stylish-canvas-shoes-and-box-on-pink-background-space-for-picture-id1391810468?k=20&m=1391810468&s=612x612&w=0&h=Upp_EJoHJ4FImdhPOd2gx-HpxtUDlUvVyOTMMOpTjuU="
          className="card-img"
          alt="Background"
          height="800px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title  display-3 fw-bolder mb-0">NEW ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT THE TRENDING OUTFITS!!!!
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
export default Home;
