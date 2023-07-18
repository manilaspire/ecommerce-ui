import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import{ removeToken } from "../redux/action"
import { useDispatch } from "react-redux";

const Navbar = () => {
    const cartItem = useSelector(state => state.handleCart)
    const token = useSelector(state => state.handleToken)
    const dispatch = useDispatch();
    const removeAccessToken = (token) => {
        dispatch(removeToken(token));
      };
    const userLogout = () => {
        localStorage.removeItem("token");
        removeAccessToken(window.localStorage.getItem("token"))
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-6 sticky-top">
            <div className="Navbar-container" style={{display:"flex", width:"100%"}}>
                <div className="Navbar-name-container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">Amazon</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                        {(token.accessToken !== undefined && token.accessToken !== null)&& 
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        }
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {(token.accessToken !== undefined && token.accessToken !== null)&& <>
                        <NavLink to="/login" className="btn btn-outline-dark m-2" onClick={userLogout}><i className="fa fa-sign-in-alt mr-1"></i> Logout</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({cartItem.length}) </NavLink>
                        </>                       
                        }                      
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar