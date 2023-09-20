import "./Home.css";
import React from 'react';
import Poplogin from "../component/loginPop";
import Popsignup from "../component/signupPop";
import Slidebar from "../component/menu";
import NavHead from "../component/Nav";

const Home = () =>{
    return (
        <div className="home">
            {/* <Slidebar></Slidebar> */}
            {/* <Poplogin></Poplogin>
            <Popsignup></Popsignup> */}
            <NavHead></NavHead>
        </div>
    );
};

export default Home;