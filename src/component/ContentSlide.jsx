import React from "react";
import "./ContentSlide.scoped.css";
import { TiArrowRight } from "react-icons/ti";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import {BsHeartFill} from "react-icons/bs";

// import the images
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import img3 from '../../src/Assets/slide3.png'
import img4 from '../../src/Assets/slide4.png'

const Data =[
    {
        id:24,
        imgSrc: img1,
        destTitle: 'ห้องน่ารักๆ สำหรับเด็กหอ',
        writer: 'Pikachu',
    },

    {
        id:36,
        imgSrc: img2,
        destTitle: 'How to study by DekHor',
        writer: 'PumZaZa',
    },

    {
        id:123,
        imgSrc: img3,
        destTitle: '10 Awesome Books',
        writer: 'Narak',
    },

    {
        id:334,
        imgSrc: img4,
        destTitle: 'How to make Pasta',
        writer: 'sleepmore',
    },
]

function ContentSlide(){
    return(
        <div className="contentslide">
            <div className="arrow">
              <BsFillArrowLeftCircleFill size={25} className="icon"/>
                <BsFillArrowRightCircleFill size={25} className="icon"/>  
            </div>
           <div className="main_content">
                {
                    Data.map(({id,imgSrc,destTitle,writer})=>{
                        return(
                            <div className="singleDest">
                                <div className="dastImage">
                                    <img src= {imgSrc} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart">
                                        <BsHeartFill size={25}/><p>{id}</p>
                                    </div>
               -                    <div className="destText">
                                        <h4>
                                            {destTitle}
                                        </h4>
                                        <span className="flex">
                                            <span className="name">
                                                {writer}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ContentSlide;

// <div className="singleDest">
//     <div className="dastImage">
//         <img src= {img1} alt="" />
//     </div>
//     <div className="destFooter">
//         <div className="heart">
//             heart
//         </div>
//         <div className="destText">
//             <h4>
//                 title
//             </h4>
//             <span className="flex">
//                 <span className="name">
//                     Username
//                 </span>
//             </span>
//         </div>
//     </div>
// </div>