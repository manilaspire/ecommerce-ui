import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Products} from "../components";

const Saleproduct = () => {
  const [categories, setCategories] = useState([]);
  const [salesData, setsalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCategory = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/category/getAll");
        setCategories(await response.clone().json());
    };
    const getSalesItems = async () => {
      const response = await fetch("http://localhost:3001/product/getAll");
        setsalesData(await response.clone().json());
        setLoading(false);
    };
    getAllCategory();
    getSalesItems();
  }, []);
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

  const filterProduct = (categoryName) => {
    navigate('/category/'+ categoryName);
  }
  const ShowSalesProducts = () => {
    return (
      <>     
      <div className="row">
          <div className="col-12">
            <h2 className="Productsdisplay-5 text-center">SHOP BY CATEGORY</h2>
          </div>
        </div>
        <div className="buttons text-center py-5">
        {/* add id also for categories bind here */}
        {/* {categories.map((category) => {
          return(
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(category)}>{category}</button>
          )  
        })} */}
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("mensclothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("womensclothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>  
        <div className="row">
          <div className="col-12">
            <h2 className="Productsdisplay-5 text-center">BIGGEST OFFERS OF THE SEASON</h2>
            <hr />
          </div>
        </div>
        {loading ? <Loading /> : <Products data={salesData}/>}
      </>
    );
  }; 
  return (
    <>
      <div className="Products-container my-3 py-3">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowSalesProducts />}
        </div>
      </div>
    </>
  );
};

export default Saleproduct;
