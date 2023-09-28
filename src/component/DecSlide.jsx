import React from "react";
import "./ContentSlide.scoped.css";
import { TiArrowRight } from "react-icons/ti";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import {BsHeartFill} from "react-icons/bs";
import {Col} from 'reactstrap'
import { Link } from "react-router-dom";
// import image
import img1 from '../../src/Assets/img_Dec/Dec1.png'
import img2 from '../../src/Assets/img_Dec/Dec2.png'
import img3 from '../../src/Assets/img_Dec/Dec3.png'
import img4 from '../../src/Assets/img_Dec/Dec4.png'
import {BiSolidPencil} from "react-icons/bi";


const Data =[
        {
            id:1,
            imgSrc: img1,
            destTitle: 'Roomtour มีคลิปในยูทูปด้วยน้า',
            writer: 'Pikachu',
            heart : 241,
        },
    
        {
            id:2,
            imgSrc: img2,
            destTitle: 'เก้าอี้เด็กหอนุ่มนิ่มที่ควรมีไว้ติดห้อง',
            writer: 'PumZaZa',
            heart : 169,
        },
    
        {
            id:3,
            imgSrc: img3,
            destTitle: 'ตกแต่งห้องด้วยต้นไม้ปลอม',
            writer: 'Narak',
            heart : 423,
        },
    
    ]


const DecSlide =() => {

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
                                            <Link to={`/decoration/${id}`}>{destTitle}</Link>
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
export default DecSlide;