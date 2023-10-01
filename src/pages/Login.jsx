import React from 'react'
import "./Login.scoped.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login= () => {
    const navigate = useNavigate();
    const get_data = (event) =>{
        console.log(event);
        event.preventDefault();
        axios.post("http://localhost:3300/login",{
            email : event.target[0].value,
            password : event.target[1].value
        })
        .then(res => {
            navigate("/home");
        })
        .catch((err) => {
            alert(err);
        })
    }
   
  return (
    <div className="login">
       <div className="wrapper">
        <img id="login-img" src="/login.png" alt="" />
        <Link to={"/home"}><img id="icon-close" src="close-outline.svg" alt=""/></Link>
            <div className="form-box-login">
                <h2>Login</h2>
                <div className="login-signup">
                    <p>Are you new DekHor?</p>
                    <a href="signup">Sign up</a>
                </div>
                <form action="#" onSubmit={get_data}>
                    <div className="input-box">
                        <input type="username" placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button type="submit" className="login-submit">Login</button>
                </form>
            </div>
        </div>
    </div>
  )
    
}

export default Login;