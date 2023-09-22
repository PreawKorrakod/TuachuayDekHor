import "./Home.scoped.css";
import React from 'react';
import NavHead from "../component/Nav";
import ImageSlider from "../component/ImageSlider";

const Home = () =>{
    return (
        <div className="home">
            <header>
                <NavHead></NavHead>
            </header>
            <body>
                <ImageSlider></ImageSlider>
                <main>
                    <h1>TuaChuayDekHor</h1>
                    <div className="search"></div>
                    <div className="content">
                        <div className="cleaning">
                            <div className="clean-title">Cleaning</div>
                            <div className="img-clean"></div>
                        </div>
                        <div className="Decoration">
                            <div className="Dec-title">Decoration</div>
                            <div className="img-Dec"></div>
                        </div>
                        <div className="cooking">
                            <div className="cook-title">cooking</div>
                            <div className="img-cook"></div>
                        </div>
                        <div className="story">
                            <div className="story-title">DekHor's story</div>
                            <div className="img-story"></div>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    );
};

export default Home;