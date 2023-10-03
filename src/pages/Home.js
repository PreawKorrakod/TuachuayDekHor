import "./Home.scoped.css";
import React from 'react';
import Navbar from "../component/Nav";
import { Container } from "reactstrap";
import ContentSlide from "../component/ContentSlide";
import SlideCooking from "../component/SlideCooking";
import DecSlide from "../component/DecSlide";
import CleanSlide from "../component/CleanSlide";
import StorySlide from "../component/StorySlide";
import { Link } from "react-router-dom";
import CategorySlide from "../component/CategorySlide";
import ContactModal from "../component/ContactModel";



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
                {/* <CategorySlide/> */}
                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">DekHor Recommended</h2>
                    </div>
                    <ContentSlide></ContentSlide>
                </div>
                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Cooking</h2>
                        <Link to={'/cooking'}><button className="btn__See">See All</button></Link>
                    </div>
                    {/* <SlideCooking></SlideCooking> */}
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Decoration</h2>
                        <Link to={'/decoration'}><button className="btn__See">See All</button></Link>
                    </div>
                    {/* <DecSlide></DecSlide> */}
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Cleaning</h2>
                        <Link to={'cleaning'}><button className="btn__See">See All</button></Link>
                    </div>
                    {/* <CleanSlide></CleanSlide> */}
                </div>

                <div className="rec">
                    <div className="rec__title">
                        <h2 className="title_sub">Story's DekHor</h2>
                        <Link to={'/story'}><button className="btn__See">See All</button></Link>
                    </div>
                    {/* <StorySlide></StorySlide> */}
                </div>
            </div>
        </div>
    );
};

export default Home;