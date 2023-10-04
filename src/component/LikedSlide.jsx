import React,{useState, useEffect, useContext} from 'react'
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import img3 from '../../src/Assets/slide3.png'
import img4 from '../../src/Assets/slide4.png'
import {BsHeartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiSolidPencil} from "react-icons/bi";
import './LikeSlide.scoped.css'
// import "./ContentSlide.scoped.css"

const Data =[
        {
            id:1,
            imgSrc: img3,
            destTitle: '10 Awesome Books',
            writer: 'Narak',
            category:'story',
        },
    
        {
            id:2,
            imgSrc: img4,
            destTitle: 'Pasta by DekHor',
            writer: 'Sleep_more',
            category:'cooking',
        },
    ]

const LikeSlide = () => {

    const [like,setLike] = useState(0);

    console.log(like)

    const addlike = () =>{
        
    }

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
                                        <BsHeartFill size={25} className='like-icon' onClick={()=>setLike(like+1) ? "like":"nolike"} onSubmit={addlike}/>
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

export default LikeSlide;