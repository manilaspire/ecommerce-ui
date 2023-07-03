import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useNavigate } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = (props) => {
  const [loading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (product) => {
    dispatch(addCart(product))
  }
  
  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const viewProduct = (productId) => {
    navigate('/product/'+ productId, { state: { productId }});
  };
  
  return (
    <>
      <div className="products-container my-3 py-3">
        <div className="row justify-content-center" style={{margin: "10px"}}>
          {loading ? <Loading /> : (
            <>   
            { props.data.length === 0 ? 
            <div style={{fontSize:'30px', textAlign: 'center', height: '400px'}}>
              <p>no data to display</p>
              </div> : 
            <>
            {props.data && props.data.map((product) => {
                return (
                  <div id={product.id} key={product.id} className="col-md-2 col-sm-6 col-xs-8 col-12 mb-4">
                    <div className="card text-center h-100" key={product.id}>
                      <div onClick={() => viewProduct(product.id)}>
                      <img
                        className="card-img-top p-3"
                        src={product.imageurl}
                        alt="Card"
                        height={90}
                      />
                      <div className="card-body">
                        <h6 className="card-title">
                          {product.title.substring(0, 12)}...
                        </h6>
                        <p className="card-text" style={{fontSize:'9px'}}>
                          {product.description.substring(0, 90)}...
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item lead">$ {product.price}</li>
                      </ul>
                      </div>
                      <div className="card-body">
                      <button className="btn btn-dark m-1" onClick={() => viewProduct(product.id)}>
                          Buy Now
                        </button>
                        <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
            }  
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
