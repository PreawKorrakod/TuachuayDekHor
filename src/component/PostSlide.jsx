import React, { useState } from 'react'
import './ContentSlide.scoped.css'
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import { BsHeartFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";
import axios from 'axios';

const Data = [
    {
        id_post: 1,
        imgSrc: img1,
        destTitle: 'ห้องน่ารักๆ สำหรับเด็กหอ',
        writer: 'Username',
        category: 'story',
    },

    {
        id_post: 2,
        imgSrc: img2,
        destTitle: 'How to study by DekHor',
        writer: 'Username',
        category: 'cooking',
    },
]
////////////แก้///////////////////////////////////////////
const PostSlide = () => {

    // const [click,setClick] = useState(0)

    // console.log(click)
    return (
        <div className="content">
            <div className="main_content">
                {
                    Data.map(({ id_post, imgSrc, destTitle, writer, category }) => {
                        return (
                            <div className="singleDest">
                                <div className="dastImage">
                                    <img src={imgSrc} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart"  >
                                        <BsFillTrashFill size={25} type='submit' className='icon-delete'onSubmit={data} />
                                    </div>
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/${category}/${id_post}`}>{destTitle}</Link>
                                        </h4>
                                        <span className="userwrite">
                                            <span className="name"><BiSolidPencil size={20} className="icon_pencil" />
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
}

export default PostSlide;