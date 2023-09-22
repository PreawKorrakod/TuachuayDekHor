import React, { useState } from 'react';
import "./signupPop.scoped.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'reactstrap';

function Popsignup(args) {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <p id="signup-click" onClick={toggle}>
          Sign Up
        </p>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <div className="wrapper">
              <img id="login-img" src="/login.png" alt="" />
              <img id="icon-close" src="close-outline.svg" alt="" onClick={toggle} />
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
                      <button type="submit" className="btn" onClick={toggle} >Sign Up</button>
                  </form>
              </div>
          </div>
          </Modal>
      </div>
    );
  }
  
  export default Popsignup;