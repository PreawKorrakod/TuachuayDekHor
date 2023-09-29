import React from 'react'
import Navbar from '../component/Nav'
import './StoryDetails.scoped.css'
import {Container,Input} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import Img from '../../src/Assets/slide2.png'


function StoryDetails() {
  return (
    <div className="story__content">
      <Navbar></Navbar>
      <Container>
        <div className="story">
            <div className="story__head">
            <div className="user">
              <img src="/person-circle-outline.svg" alt="" className='User__img' />
              <div className="name"><p className='username'>Username</p></div>
            </div>
            <div className="report">
              <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link>
            </div>
          </div>
          <div className="img__content">
            <img src={Img} alt="" className='img__ja'/>
          </div>
          <div className="story__title">
            <div className="title">
              <h2>How to study by DekHor </h2>
            </div>
            <div className="icon__story">
              <BsHeartFill size={25} className='icon-heart'/><p>143</p>
              {/* <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link> */}
            </div>
          </div>
          <div className="story__content__2">
            <p>"Study With Me" videos are more than just a trend; 
              they're a valuable resource for anyone looking to 
              boost productivity and make the most of their study sessions. 
              Give them a try and see how they can transform 
              your study habits and help you achieve your academic goals.</p>
          </div>
        </div>
        
        <div className="comment__Zone">
          <h3>Comments<RiMessage2Line size={25} /></h3>
          <div className="commentblog">
            <div className="user_comment">
              <img src="/person-circle-outline.svg" className='User-icon'alt="" />
              <Input type='text' placeholder='your comment...'></Input>
              <RiSendPlaneFill size={25} className='send__icon'/>
            </div>
            <div className="displaycomment">
              <div className="comment_other">
                  <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
                    <p>good job!</p>
              </div>
              <div className="comment_other">
                  <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
                    <p>Well</p>
              </div>
              <div className="comment_other">
                  <img src="/person-circle-outline.svg" alt="" className='User-icon1' />
                    <p>Wow It's so fun!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default StoryDetails