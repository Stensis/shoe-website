import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // {/* fetching data */}
      const response = await fetch("https://karrey-json.herokuapp.com/Products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
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

  const filterProduct = (cat) =>{
   const updatedList = data.filter((x)=>x.category === cat);
   setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filter("Shoes/Women's")}>Shoes/Women's</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filter("Shoes/Fashion")}>Shoes/Fashion</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filter("Athletic/trainer")}>Athletic/trainer</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>filter("Fashion/trainer")} >Fashion/trainer</button>

        </div>

        {filter.map((Product,index) => (
        
            <>
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 text-center p-4">
                <img
                  className="card-img-top"
                  src={Product.images_list}
                  alt={Product.title}
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {Product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">{Product.price}</p>
                  <NavLink to={`/Products/${Product.asin}`} className="btn btn-primary-outline-dark">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </>
          )
        )}
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


  // const product = data.map((products) => (
  //   <>
  //     <div className="col-md-3 mb-4" key={products.asin}>
  //       <div class="card h-100 text-center p-4">
  //         <img
  //           class="card-img-top"
  //           src={products.images_list}
  //           alt={products.title}
  //           height="200px"
  //         />
  //         <div class="card-body">
  //           <h5 class="card-title mb-0">
  //             {products.title.substring(0, 12)}...
  //           </h5>
  //           <p class="card-text lead fw-bold">{products.price}</p>
  //           <a href="/home" class="btn btn-primary-outline-dark">
  //             Buy Now
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // ));

  // return (
  //   <div>
  //     {product}
  //     <div className="container my-5 py-5">
  //       <div className="row">
  //         <div className="col-12 mb-5">
  //           <h1 className="display-7 fw-bolder text-center">Products</h1>
  //           <hr />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Products;
