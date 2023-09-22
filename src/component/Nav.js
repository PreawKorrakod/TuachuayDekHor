import React from 'react';
import "./Nav.scoped.css"
import Poplogin from "../component/loginPop";
import { Link } from "react-router-dom";

function NavHead() {
    return(
        <header>
            <h1 className='logo'>DekHor</h1>
            <div className="nagetion">
                <Link to={"/home"} className="back-Home">Home</Link>
                <Link to={"/writeblog"} className="Write">Writing</Link>
                <Link to={"/contact"} className="Contact">Contact</Link>
                {/* <Poplogin id="loginnav"></Poplogin> */}
            </div>
            <Poplogin></Poplogin>
        </header>
    );
};

export default NavHead;