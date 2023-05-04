import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
// import Products from "./Products";
import { useDispatch } from "react-redux";
import { addCart } from "../redux";

const Product = () => {
  const { asin } = useParams();
  console.log(asin);
  const [Product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (Product) =>{
    dispatch(addCart(Product));
  }

  useEffect(() => {
    const getProduct = async () =>{
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/Products?asin=${asin}`);
        const res = await response.json();
        setProduct(res[0]);
        setLoading(false);
    }
    getProduct();
  }, []);
 
  const Loading = () =>{
    return(
        <>
        <div className="col-md-6">
            <Skeleton height={400}/>
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50} width={300}/>
            <Skeleton height={75} />
            <Skeleton height={25} width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div>
        </>
    )
  }
  const ShowProduct = ()=>{
    return (
        <>
        <div className="col-md-6">
            <img src={Product.images} alt={Product.title} 
            height="400px"
            width= "400px"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
                {Product.title}
            </h4>
            <p className="lead fw-bolder">
                Rating{Product.rating}
                <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                $ {Product.price}
            </h3>
            <p className="load">{Product.url}</p>
            <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(Product)}>
                Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                Go to Cart
            </NavLink>
        </div>
        </>
    )
  }
  return (
  <div>
    <div className="container py-5">
        <div className="row py-3">
           {loading ? <Loading/> : <ShowProduct/>} 
        </div>
    </div>
  </div>
  );
};

export default Product;
