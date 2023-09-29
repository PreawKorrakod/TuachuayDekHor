import React from "react";
import "./ContentSlide.scoped.css";
import { TiArrowRight } from "react-icons/ti";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import {BsHeartFill} from "react-icons/bs";
import {Col} from 'reactstrap'
import { Link } from "react-router-dom";
// import image
import img1 from '../../src/Assets/img_Clean/33.jpg'
import img2 from '../../src/Assets/img_Clean/44.jpg'
import img3 from '../../src/Assets/img_Clean/55.jpg'
import {BiSolidPencil} from "react-icons/bi";




const Data =[
        {
            id:1,
            imgSrc: img1,
            destTitle: 'ทำความสะอาดซิงค์ด้วยผลไม้',
            writer: 'Pikachu',
            heart : 123,
        },
    
        {
            id:2,
            imgSrc: img2,
            destTitle: 'ทำความสะอาดห้องแล้วห้องน่าอยู่ขึ้น3000%',
            writer: 'PumZaZa',
            heart : 124,
        },
    
        {
            id:3,
            imgSrc: img3,
            destTitle: 'รีวิวอุปกรณ์ทำความสะอาด',
            writer: 'Narak',
            heart : 423,
        },
    
    ]


const CleanSlide =() => {

    return (
        <div className="content">
            <div className="main_content">
                {
                    Data.map(({id,imgSrc,destTitle,writer,heart})=>{
                        return(
                            <div className="singleDest">
                                <div className="dastImage">
                                    <img src= {imgSrc} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart">
                                        <BsHeartFill size={25}/><p>{heart}</p>
                                    </div>
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/story/${id}`}>{destTitle}</Link>
                                        </h4>
                                        <span className="userwrite">
                                            <span className="name"><BiSolidPencil size={20} className="icon_pencil"/>
                                                {writer}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
                
            </div>
        </div>
    )
};
export default CleanSlide;