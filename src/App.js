import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import { Routes, Route,} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Product from "./Components/Product";

function App() {
  return (
    <>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />

        {/* <Route  exact path ="/Navbar" element={<Navbar />}/> */}

        <Route  path ="/Products" element={<Products />}/>

        <Route  path ="/About" element={<About />}/>

        <Route  path ="/Contact" element={<Contact />}/>

        <Route  path ="/Products/:asin" element={<Product/>}/>

        <Route path="/Cart" element={<Cart/>}/>


      </Routes>
      

    
    </>
  );
}

export default App;
