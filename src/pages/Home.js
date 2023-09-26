import "./Home.scoped.css";
import React from 'react';
import Navbar from "../component/Nav";
import ContentSlide from "../component/ContentSlide";
import Catagory from "../component/Catagory";

const Home = () =>{
    return (
        <div className="home">
            <header>
                <Navbar/>
            </header>
            <main>
                <h1 className="title">
                    Let's know how to be a professional DekHor.
                </h1>
                <p className="subTitle">
                    มาเรียนรู้การใช้ชีวิตแบบเด็กหอกันเถอะ
                </p>
                <button className="start-btn">Get Started</button>
            </main>
            {/* <div className="content">
                <h1>Recommend</h1>
                <div className="reccomend">
                    <ContentSlide></ContentSlide>
                </div> 
            </div> */}
        </div>
    );
};

export default Home;