import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsHeartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiSolidPencil} from "react-icons/bi";
// import image
import img1 from '../../src/Assets/person-circle-outline.svg'
import "./SlidePost.scoped.css"

const Data = [
  {
    imgSrc: img1,
    writer: 'Pikachu',
  },

  {
    imgSrc: img1,
    writer: 'PumZaZa',
  },

  {
    imgSrc: img1,
    writer: 'Narak',
  },

  {
    imgSrc: img1,
    writer: 'WinterThePooh',
  },

  {
    imgSrc: img1,
    writer: 'AllinOne',
  },

  {
    imgSrc: img1,
    writer: 'Nov20',
  },

]


function SlidePost() {

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600
  };

  return (
    <div>
      <Slider {...settings}>
        {
          Data.map(({ imgSrc, writer,}) => {
            return (
              <Link to={"/profile"}>
                <div className="box">
                  <div className="singleDest">
                    <img src={imgSrc} alt=""/>
                  </div>
                  <div className="userwrite">
                      {writer}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </Slider>
    </div>
  );
}



export default SlidePost;