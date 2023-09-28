import React from 'react'
import "./Reportfinish.scoped.css"
import { Link } from "react-router-dom";
import Navbar from '../component/Nav';

function Reportfinish() {
  return (
    <div className="report">
        <Navbar></Navbar>
        <div className="noti-box">
            <h2>Report </h2>
            <button><a href="home">Back Home</a></button>
        </div>
    </div>
  )
}

export default Reportfinish