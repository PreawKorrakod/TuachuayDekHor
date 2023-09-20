import "./loginPop.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';

function Poplogin(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn-Login" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <div className="wrapper">
            <img id="login-img" src="/login.png" alt="" />
            <img id="icon-close" src="close-outline.svg" alt="" onClick={toggle} />
            <div className="form-box-login">
                <h2>Login</h2>
                <div className="login-signup">
                    <p>Are you new DekHor?<a href="#" className="signup-link">Signup</a>
                    </p>
                </div>
                <form action="#">
                    <div className="input-box">
                        <input type="username" placeholder="Username" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="password" />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button type="submit" className="btn" onClick={toggle} >Login</button>
                </form>
            </div>
        </div>
        </Modal>
    </div>
  );
}

export default Poplogin;
