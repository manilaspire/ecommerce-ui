import React, {useState} from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [registerError, setregisterError] = useState()
    const navigate = useNavigate();

    const userRegister = async (event) => {
        //Prevent page reload
        event.preventDefault();
        setregisterError("");
        var response = await fetch('http://localhost:3001/user/createUser',{
            method: "post",
            headers: {
              'Content-type': 'application/json'
            },
          body:JSON.stringify({
            Title: event.target.title.value,
            FirstName: event.target.firstName.value,
            LastName: event.target.lastName.value,
            Role: event.target.role.value,
            Email: event.target.email.value,
            Password: event.target.password.value,
            ConfirmPassword: event.target.confirmPassword.value,
          })
        });   
        if(!response.ok){
          if(response.status === 404 || response.status === 401){
            var responseInvalid = await response.clone().json();
            setregisterError(responseInvalid.message);
          }
          else{
            setregisterError("*something went wrong*");
          }
        }
        else {
            var responseMessage = await response.clone().json();
            alert(responseMessage.message)
            navigate('/login');
        }
      }
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={userRegister}>
                        <div className="form my-3">
                                <label htmlFor="Title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Title"
                                    placeholder="Enter Your Title"
                                    name="title"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FirstName"
                                    placeholder="Enter Your First Name"
                                    name="firstName"
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="LastName"
                                    placeholder="Enter Your Last Name"
                                    name="lastName"
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="RoleName">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="RoleName"
                                    placeholder="Enter Your Role"
                                    name="role"
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="ConfirmPassword"
                                    placeholder="Password"
                                    name="confirmPassword"
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            { registerError !== "" && 
                <div style={{textAlign:"center", fontSize: "17px", color: "red"}}>{registerError}</div>
              }
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register