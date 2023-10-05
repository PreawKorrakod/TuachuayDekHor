import React,{useState} from 'react'
import './ContentSlide.scoped.css'
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import {BsFillTrashFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiSolidPencil} from "react-icons/bi";
import CheckDelete from './CheckDelete'

const Data =[
        {
            id:1,
            imgSrc: img1,
            destTitle: 'ห้องน่ารักๆ สำหรับเด็กหอ',
            writer: 'Username',
            category:'story',
        },
    
        {
            id:2,
            imgSrc: img2,
            destTitle: 'How to study by DekHor',
            writer: 'Username',
            category:'cooking',
        },
    ]

const PostSlide = () => {

  return (
    <div className="content">
            <div className="main_content">
                {
                    Data.map(({id,imgSrc,destTitle,writer,category})=>{
                        return(
                            <div className="singleDest">
                                <div className="dastImage">
                                    <img src= {imgSrc} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart">
                                        {/* {CheckDelete && <BsFillTrashFill size={25} className='icon-delete' onClick={handledelete}/>} */}
                                        <CheckDelete/>
                                    </div>
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/${category}/${id}`}>{destTitle}</Link>
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
}

export default PostSlide;