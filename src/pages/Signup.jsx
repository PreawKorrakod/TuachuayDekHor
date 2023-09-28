import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.scoped.css"

function Signup() {
  return (
    <div className="signup">
      <div className="wrapper">
              <img id="login-img" src="/login.png" alt="" />
              <Link to={"/home"}><img id="icon-close" src="close-outline.svg" alt=""/></Link>
              <div className="form-box-signup">
                  <h2 id="Welcome">Welcome to DekHor</h2>
                  <form action="#">
                      <div className="input-box">
                          <input type="text" placeholder="email" />
                      </div>
                      <div className="input-box">
                          <input type="username" placeholder="username" />
                      </div>
                      <div className="input-box">
                          <input type="password" placeholder="password" />
                      </div>
                      <div className="input-box">
                          <input type="password" placeholder="confirm password" />
                      </div>
                      <Link to={"/login"}><button type="submit" className="btn">Sign Up</button></Link>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Signup