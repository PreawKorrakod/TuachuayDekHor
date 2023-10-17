import React, { Component,useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsHeartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiSolidPencil} from "react-icons/bi";
// import image
import img1 from '../../src/Assets/person-circle-outline.svg'
import "./SlidePost.scoped.css"
import axios from "axios";

// const Data = [
//   {
//     imgSrc: img1,
//     writer: 'Pikachu',
//   },

//   {
//     imgSrc: img1,
//     writer: 'PumZaZa',
//   },

//   {
//     imgSrc: img1,
//     writer: 'Narak',
//   },

//   {
//     imgSrc: img1,
//     writer: 'WinterThePooh',
//   },

//   {
//     imgSrc: img1,
//     writer: 'AllinOne',
//   },

//   {
//     imgSrc: img1,
//     writer: 'Nov20',
//   },

// ]


function SlidePost() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3300/blogger",{
       
    })
    .then(res => {
      console.log(res.data)
      setData(res.data);
    })
    .catch((err) => {
        alert(err)
    })
}, [])

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 600
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data.map(({ user: { username } },index) => {
            return (
              <Link to={"/profile"} >
                <div className="box" >
                  <div className="singleDest" key = {index}>
                    <img src={img1} alt=""/>
                  </div>
                  <div className="userwrite">
                      {username}
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