import React,{useState} from 'react';
import "./StoryDetails.scoped.css"
import Navbar from '../component/Nav';
import { Card } from 'reactstrap';
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeart,BsFillTrashFill,BsHeartFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import Comments from '../component/Comments';
import Avatar from '../component/Avatar';

function DecorationDetails() {
  const [like,setLike] = useState(0);

  console.log(like)

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
              <h2>This is Title</h2>
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
                    <BsHeart size={25} className={like === 0 ? "nolike" : "like"} onClick={()=> setLike(like+1)}/>
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
            <p>"Study With Me" videos are more than just a trend; 
              they're a valuable resource for anyone looking to 
              boost productivity and make the most of their study sessions. 
              Give them a try and see how they can transform 
              your study habits and help you achieve your academic goals.
              You can fill in this document at the frequency you want. 
              I would advise doing that on a weekly basis. Tasks done during the week are still fresh on Friday, so you won’t struggle writing them down.</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DecorationDetails;