import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Navbar, Footer, Products } from "../components";
import { useNavigate, useLocation } from 'react-router-dom';

const Categoryproducts = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const getCategoryProducts = async () => {
      setLoading(true);  
    const response = await fetch(`http://localhost:3001/product/getProductByCategory/${state.categoryId}`,{
        method:'GET',
        headers: {
          "x-access-token": token
      }
    });
    if(!response.ok){
      if(response.status === 401){
        localStorage.removeItem("token");
        navigate('/login');
      }
    }
    else {
      setData(await response.clone().json());
    }
    setLoading(false);
    };
    getCategoryProducts();
  }, [navigate, state.categoryId]);

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

  return (
    <>
    <Navbar />
      <div className="Products-container my-3 py-3">
        <div className="row justify-content-center">
        {loading ? <Loading /> : <Products data={data}/>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categoryproducts;
