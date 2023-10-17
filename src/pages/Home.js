import "./Home.scoped.css";
import React from "react";
import Navbar from "../component/Nav";
import { Container } from "reactstrap";
import ContentSlide from "../component/ContentSlide";
import { Link } from "react-router-dom";
import SlidePost from "../component/SlidePost";
import {BsArrowRight} from "react-icons/bs";

const Home = () => {
  
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="title">Let's know how to be a professional DekHor.</h1>
        <Link to={"/signup"}>
          <button className="start-btn">Get Started</button>
        </Link>
      </main>
      <body>
        <div className="Container">
          <div className="titleblog">
            <h1 className="title__blogger">Our Blogger</h1>
            <Link to={'/blogger'} className="linkBlogger">
              <button className="btn-blogger">See All<BsArrowRight size={25}/></button>
            </Link>
          </div>
        <SlidePost></SlidePost>
        <div className="rec">
          <div className="rec__title">
            <h2 className="title_sub">DekHor Recommended</h2>
          </div>
          <ContentSlide></ContentSlide>
        </div>
        <div className="category">
          <div className="category__title">
            <h2 className="category_sub">Categories</h2>
          </div>
          <div className="category_wrapper">
            <div className="Decoration_wrapper">
                <div className="box">
                    <h3 className="title_category">Decoration</h3>
                    <p className="details" >How to decorate a room to make it livable</p>
                    <div className="seeall">
                      <Link to={"/Decoration"}>
                        <button className="seeall_btn" >See All<BsArrowRight size={25}/></button>
                      </Link>
                        
                    </div>
                </div>
            </div>
            <div className="Cleaning_wrapper">
                <div className="box">
                    <h3 className="title_category">Cleaning</h3>
                    <p className="details" >Simple cleaning</p>
                    <div className="seeall">
                      <Link to={"/Cleaning"}>
                        <button className="seeall_btn" >See All<BsArrowRight size={25}/></button>
                      </Link>
                    </div>
                </div>
            </div>
          </div>
          <div className="category_wrapper">
            <div className="Cooking_wrapper">
                <div className="box">
                    <h3 className="title_category">Cooking</h3>
                    <p className="details">Let's cook together</p>
                    <div className="seeall">
                      <Link to={'/Cooking'}>
                        <button className="seeall_btn" >See All<BsArrowRight size={25}/></button>
                      </Link>
                    </div>
                </div>
            </div>
            <div className="story_wrapper">
                <div className="box">
                    <h3 className="title_category">Story'DekHor</h3>
                    <p className="details">Share fun stories</p>
                    <div className="seeall">
                      <Link to={"/Story"}>
                        <button className="seeall_btn" >See All<BsArrowRight size={25}/></button>
                      </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
};

export default Home;
