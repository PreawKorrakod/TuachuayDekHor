import "./ImageSlider.scoped.css";
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from "react-slideshow-image";

const SlideImages =[
  {URL:'1.png'},{URL:'2.png'},{URL:'3.png'},{URL:'4.png'},
];

const divStyle = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  innerWidth:"50%",
  outerWidth:"50%",
  height: "500px",
  backgroundSize: "cover"
}

function ImageSlider() {
  return (
    <div className="slide-container">
      <Slide>
        {SlideImages.map((image,index)=>(
          <div key={index}>
            <div style={{...divStyle, backgroundImage :`url(${image.URL})`}}>
              <span style={{}}>{image.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;