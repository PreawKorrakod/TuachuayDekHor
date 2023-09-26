import React, { Component } from "react";
import Slider from "react-slick";
import "./Catagory.scoped.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ ...style, display: "block", background: "#3D39BD"}}
        onClick={onClick}
    />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ ...style, display: "block", background: "#3D39BD" }}
        onClick={onClick}
    />
    );
}

export default class Catagory extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <img src="slide1.png" alt="" />
            </div>
            <div>
                <img src="slide2.png" alt="" />
            </div>
            <div>
                <img src="slide3.png" alt="" />
            </div>
            <div>
                <img src="slide4.png" alt="" />
            </div>
          </Slider>
        </div>
      );
    }
  }