import React, { useEffect, useState, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartContext = createContext([]);

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const cart = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (response.status !== 200) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) {
      return <div>Product not found</div>;
    } else {
      return (
        <>
          <div className="col-md-6">
            {product.image && (
              <img src={product.image} alt={product.title} height="400px" width="400px" />
            )}
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.title}</h4>
            <p>{product.description}</p>
            <h3 className="display-6 fw-bold my-4"> Ksh: {product.price}</h3>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => cart.dispatch({ type: "ADD_TO_CART", payload: product })}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </>
      );
    }
  };

  return (
    <CartContext.Provider value={cart}>
      <div>
        <div className="container py-5">
          <div className="row py-3">{loading ? <Loading /> : <ShowProduct />}</div>
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default Product;
