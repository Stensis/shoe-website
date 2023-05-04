import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/Products");
        const data = await response.json();
        setData(data);
        setFilter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={300}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={300}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={300}></Skeleton>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((Product, index) => (
          <>
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 text-center p-4">
                <img
                  className="card-img-top"
                  src={Product.image}
                  alt={Product.title}
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {Product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">{Product.price}</p>
                  <NavLink
                    to={`/Products/${Product.asin}`}
                    className="btn btn-primary-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-container-center">
          {loading ? <Loading /> : ShowProducts()}
        </div>
      </div>
    </div>
  );
};

export default Products;
