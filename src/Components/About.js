import React from "react";
import "../Styling/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Welcome to our online store, where we offer a wide range of products to
        suit every need and budget. Our goal is to provide a seamless shopping
        experience for our customers, from browsing our selection to placing
        your order and receiving your items.
      </p>
      <p className="about-description">
        We pride ourselves on offering high-quality products at competitive
        prices, and we are constantly updating our inventory to reflect the
        latest trends and customer preferences. Whether you're looking for
        clothing, accessories, home goods, or electronics, we have something for
        everyone.
      </p>
      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-description">
        Our mission is to make online shopping easy, convenient, and enjoyable
        for our customers. We strive to offer a user-friendly website, fast and
        reliable shipping, and responsive customer service to ensure your
        satisfaction with every purchase.
      </p>
      <h2 className="about-subheading">Our History</h2>
      <p className="about-description">
        Our company was founded in [year] by [founder name], who saw a need for
        an e-commerce store that offered a wide selection of products at
        affordable prices. Over the years, we have grown into a trusted name in
        online retail, serving customers all over the world.
      </p>
      <p className="about-description">
        We are dedicated to providing the best possible shopping experience for
        our customers, and we look forward to serving you for many years to
        come.
      </p>
    </div>
  );
};

export default About;
