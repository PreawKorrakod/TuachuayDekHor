import React,{ useState } from 'react'
import Navbar from '../component/Nav'
import './StoryDetails.scoped.css'
import {Container,Input,Card} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeart,BsFillTrashFill,BsHeartFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Avatar from '../component/Avatar';
import Comments from '../component/Comments';


function StoryDetails() {

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

export default StoryDetails


      // <Container>
      //   <div className="story">
      //       <div className="story__head">
      //       <div className="user">
      //         <img src="/person-circle-outline.svg" alt="" className='User__img' />
      //         <div className="name"><p className='username'>Username</p></div>
      //       </div>
      //       <div className="report">
      //         <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link>
      //       </div>
      //     </div>
      //     <div className="img__content">
      //       <img src={Img} alt="" className='img__ja'/>
      //     </div>
      //     <div className="story__title">
      //       <div className="title">
      //         <h2>How to study by DekHor </h2>
      //       </div>
      //       <div className="icon__story">
      //         <BsHeartFill size={25} className='icon-heart'/><p>143</p>
      //         {/* <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link> */}
      //       </div>
      //     </div>
      //     <div className="story__content__2">
      //       <p>"Study With Me" videos are more than just a trend; 
      //         they're a valuable resource for anyone looking to 
      //         boost productivity and make the most of their study sessions. 
      //         Give them a try and see how they can transform 
      //         your study habits and help you achieve your academic goals.</p>
      //     </div>
      //   </div>
        
        // <div className="comment__Zone">
        //   <h3>Comments<RiMessage2Line size={25} /></h3>
        //   <div className="commentblog">
        //     <div className="user_comment">
        //       <img src="/person-circle-outline.svg" className='User-icon'alt="" />
        //       <Input type='text' placeholder='your comment...'></Input>
        //       <RiSendPlaneFill size={25} className='send__icon'/>
        //     </div>
        //     <div className="displaycomment">
        //       <div className="comment_other">
        //           <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
        //             <p>good job!</p>
        //       </div>
        //       <div className="comment_other">
        //           <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
        //             <p>Well</p>
        //       </div>
        //       <div className="comment_other">
        //           <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
        //             <p>Wow It's so fun!</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>