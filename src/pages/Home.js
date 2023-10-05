import "./Home.scoped.css";
import React from 'react';
import Navbar from "../component/Nav";
import { Container } from "reactstrap";
import ContentSlide from "../component/ContentSlide";
import { Link } from "react-router-dom";
import SlidePost from "../component/SlidePost";

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
                <Link to={'/signup'}><button className="start-btn">Get Started</button></Link>
            </main>
            <div className="Container">
                <h1>Our Blogger</h1>
                <SlidePost></SlidePost>
                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">DekHor Recommended</h2>
                    </div>
                    <ContentSlide></ContentSlide>
                </div>
            </div>
        </div>
    );
};

export default Home;