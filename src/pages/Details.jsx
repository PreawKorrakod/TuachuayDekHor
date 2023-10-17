import React,{ useState } from 'react'
import Navbar from '../component/Nav'
import {Container,Input,Card} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeart,BsFillTrashFill,BsHeartFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Avatar from '../component/Avatar';
import Comments from '../component/Comments';
import "./Details.scoped.css"

// title,username,content,like,comments
const Details = () => {

  const [like, setLike] = useState(0);
  
  const handleLikeClick = () => {
    // เรียกเมื่อคลิกที่ไลค์
    setLike(like + 1); // เพิ่มจำนวนไลค์ขึ้น 1 ทุกครั้งที่คลิก
  };

  
  const user = false;

  return (
    <div className="story">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="story__content">
        <Card>
          <div className="head">
            <div className="title">
              <h2>Title</h2>
            </div>
            <div className="writer">
              <div className="user__photo">
                <Avatar></Avatar>
              </div>
              <div className="name">
                <h6>Username</h6>
              </div>
            </div> 
            <div className="menu__icon">
              <div className="first">
                <div className="like__box">
                  <div className="heart">
                    <BsHeart size={25} 
                    className={like === 0 ? "nolike" : "like"}
                    onClick={handleLikeClick}
                    />
                    <p>{like}</p>
                  </div>
                </div>
                <div className="comment__icon">
                  <Comments/>
                </div>
              </div>
              <div className="last">
                {user ? <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link> :
                <div className="icon_edit">
                  <AiFillEdit size={25} className='icon-Edit'/>
                  <BsFillTrashFill size={25} className='icon-delete'/>
                </div>}
              </div>
            </div>
          </div>
          <div className="img__box">
            <img src="/pxfuel.jpg" alt="" />
          </div>
          <div className="content">
            content
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Details