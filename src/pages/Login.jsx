import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [loginError, setloginError] = useState()
  const navigate = useNavigate();
  const userLogin = async (event) => {
    //Prevent page reload
    event.preventDefault();
    setloginError("");  
    var response = await fetch('http://localhost:3001/user/signIn',{
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: event.target.useremail.value,
        password: event.target.userpassword.value
      })
    });
    if(!response.ok){
      if(response.status === 404 || response.status === 401){
        var responseMessage = await response.clone().json();
        setloginError(responseMessage.message);
      }
      else{
        setloginError("*something went wrong*");
      }
    }
    else {
      var token = await response.clone().json();
      window.localStorage.setItem("token", token.accessToken);
      navigate('/home');
    }
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={userLogin}>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="useremail"
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="userpassword"
                  required
                />
              </div>
              {loginError !== "" && 
                <div style={{textAlign:"center", fontSize: "17px", color: "red"}}>{loginError}</div>
              }
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
