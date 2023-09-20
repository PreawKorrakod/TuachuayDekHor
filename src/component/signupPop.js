import "./signupPop.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

function Popsignup(args) {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
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
                      <div id="back-login" className="login-signup">
                        <p>Already have an account?<a href="#" className="signup-link">Login</a></p></div>
                  </form>
              </div>
          </div>
          </Modal>
      </div>
    );
  }
  
  export default Popsignup;