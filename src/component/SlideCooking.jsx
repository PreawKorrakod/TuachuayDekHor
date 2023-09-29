import React from "react";
import "./ContentSlide.scoped.css";
import { TiArrowRight } from "react-icons/ti";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import {BsHeartFill} from "react-icons/bs";
import {Col} from 'reactstrap'
import { Link } from "react-router-dom";
// import image
import img1 from '../../src/Assets/img_Cook/cook1.png'
import img2 from '../../src/Assets/img_Cook/cook2.png'
import img3 from '../../src/Assets/img_Cook/cook3.png'
import {BiSolidPencil} from "react-icons/bi";


const Data =[
        {
            id:1,
            imgSrc: img1,
            destTitle: 'เมนูสิ้นเดือนไม่สิ้นใจ',
            writer: 'Pikachu',
            heart : 425,
        },
    
        {
            id:2,
            imgSrc: img2,
            destTitle: 'เริ่มต้นมื้อเช้าง่ายๆ',
            writer: 'PumZaZa',
            heart : 216,
        },
    
        {
            id:3,
            imgSrc: img3,
            destTitle: 'ตามสั่งกินอะไรดีให้ไม่อ้วน',
            writer: 'Narak',
            heart : 321,
        },
    
    ]


const SlideCooking =() => {

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
export default SlideCooking;