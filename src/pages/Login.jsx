import React, { useContext, useEffect } from 'react'
import "./Login.scoped.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { General } from '../App';


const Login= () => {
    const navigate = useNavigate();
    const {supabase_for_use : supabase,session} = useContext(General);
    const check_login = (event) => {
        event.preventDefault()
        supabase.auth.signInWithPassword({
            email: event.target[0].value,
            password: event.target[1].value,
        })   
    }
    useEffect(()=>{
        if(session){
            navigate("/home");
        }
    }, [session])
    
   
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
                <form action="#" onSubmit={check_login}>
                    <div className="input-box">
                        <input type="username" placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="remember-forget">
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