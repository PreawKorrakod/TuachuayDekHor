import "./Home.scoped.css";
import React from 'react';
import Navbar from "../component/Nav";
import { Container } from "reactstrap";
import ContentSlide from "../component/ContentSlide";
import SlideCooking from "../component/SlideCooking";
import DecSlide from "../component/DecSlide";
import CleanSlide from "../component/CleanSlide";
import StorySlide from "../component/StorySlide";



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
                <button className="start-btn">Get Started</button>
            </main>
            <div className="Container">
                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">DekHor Recommended</h2>
                        <button className="btn__See">See All</button>
                    </div>
                    <ContentSlide></ContentSlide>
                </div>
                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Cooking</h2>
                        <button className="btn__See">See All</button>
                    </div>
                    <SlideCooking></SlideCooking>
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Decoration</h2>
                        <button className="btn__See">See All</button>
                    </div>
                    <DecSlide></DecSlide>
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Cleaning</h2>
                        <button className="btn__See">See All</button>
                    </div>
                    <CleanSlide></CleanSlide>
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Story's DekHor</h2>
                        <button className="btn__See">See All</button>
                    </div>
                    <StorySlide></StorySlide>
                </div>
            </div>
        </div>
    );
};

export default Home;