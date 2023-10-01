import React from 'react'
import "./Login.scoped.css"
import { Link } from 'react-router-dom';

function Login() {
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
                <form action="#">
                    <div className="input-box">
                        <input type="username" placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="remember-forget">
                        <a href="#">Forget Password?</a>
                    </div>
                    <Link to={'/profile'}><button type="submit" className="login-submit">Login</button></Link>
                </form>
            </div>
        </div>
    </div>
  )
    
}

export default Login;