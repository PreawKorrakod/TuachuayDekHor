import React, { useState, useContext, useEffect } from "react";
import "./ContentSlide.scoped.css";
import { TiArrowRight } from "react-icons/ti";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { Col } from 'reactstrap'
import { Link, useParams } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";
// import image
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import img3 from '../../src/Assets/slide3.png'
import img4 from '../../src/Assets/slide4.png'
import { General } from '../App';
import axios from 'axios';






// const Data =[
//         {
//             id:1,
//             imgSrc: img1,
//             destTitle: 'ห้องน่ารักๆ สำหรับเด็กหอ',
//             writer: 'Pikachu',
//             heart : 123,
//             category:'decoration',
//         },

//         {
//             id:2,
//             imgSrc: img2,
//             destTitle: 'How to study by DekHor',
//             writer: 'PumZaZa',
//             heart : 143,
//             category:'story',
//         },

//         {
//             id:3,
//             imgSrc: img3,
//             destTitle: '10 Awesome Books',
//             writer: 'Narak',
//             heart : 423,
//             category:'story',
//         },

//         {
//             id:4,
//             imgSrc: img3,
//             destTitle: '10 Awesome Books',
//             writer: 'Narak',
//             heart : 423,
//             category:'cleaning',
//         },

//         {
//             id:5,
//             imgSrc: img4,
//             destTitle: '10 Awesome Books',
//             writer: 'Narak',
//             heart : 423,
//             category:'cooking',
//         },

//         {
//             id:6,
//             imgSrc: img1,
//             destTitle: 'ห้องน่ารักๆ สำหรับเด็กหอ',
//             writer: 'Pikachu',
//             heart : 123,
//             category:'cooking',
//         },

//     ]


function ContentSlide(props) {
    const [data, setData] = useState([]);
    console.log(props.name);

    // const { name } = useParams();
    //   const { supabase_for_use: supabase, session, user } = useContext(General);
    // const [title, setTitle] = useState("")
    useEffect(() => {
        if (props.name){
            axios.get("http://localhost:3300/posttocategory?category=" + props.name)
            .then(res => {
                console.log(props.name);
                console.log(res.data)
                setData(res.data);
            })
            .catch((err) => {
                alert(err)
            })
        } else {
            // ในกรณีที่ props.id เป็นค่าว่างหรือไม่ถูกต้อง
            console.log("props.id is empty or invalid");
            // สามารถดำเนินการอื่น ๆ ที่ต้องการในกรณีนี้
        }
    },[])



    return (
        <div className="content">
            <div className="main_content">
                {
                    data.map(({ id_post:id, title, category, like, user: { username } }, index) => {
                        return (
                            <div className="singleDest" key={index}>
                                <div className="dastImage">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart">
                                        <BsHeartFill size={25} /><p>{like}</p>
                                    </div>
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/${category}/${id}`}>{title}</Link>
                                        </h4>
                                    </div>
                                </div>
                                <div className="userwrite">
                                    <div className="name"><BiSolidPencil size={20} className="icon_pencil" />
                                        {username}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};
export default ContentSlide;

{/* <div className="singleDest">
                        <div className="dastImage">
                            <img src= {imgSrc} alt="" />
                        </div>
                        <div className="destFooter">
                            <div className="heart">
                                <BsHeartFill size={25}/><p>{heart}</p>
                            </div>
                            <div className="destText">
                                <h4>
                                    <Link to={`/cleaning/${id}`}>{destTitle}</Link>
                                </h4>
                                <span className="flex">
                                    <span className="name">
                                        {writer}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div> */}