import React from 'react'
import Navbar from '../component/Nav'
import './StoryDetails.scoped.css'
import {Container,Input} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import User from '../../src/Assets/User.png'
import Img from '../../src/Assets/slide2.png'


function StoryDetails() {
  return (
    <div className="story__content">
      <Navbar></Navbar>
      <Container>
        <div className="story__head">
          <div className="user">
            <img src={User} alt="" className='User__img' />
            <p>Username</p>
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
            <BsHeartFill size={25}/>
            <Link to={'/report'}><RiFlag2Line size={25}/></Link>
          </div>
        </div>
        <div className="story__content">
          <p>"Study With Me" videos are more than just a trend; 
            they're a valuable resource for anyone looking to 
            boost productivity and make the most of their study sessions. 
            Give them a try and see how they can transform 
            your study habits and help you achieve your academic goals.</p>
        </div>
        <div className="comment__Zone">
          <h3>Comments<RiMessage2Line size={25} /></h3>
          <div className="commentblog">
            <Input type='text' placeholder='your comment...'></Input>
            <RiSendPlaneFill size={25}/>
            <div className="displaycomment">
              <img src="/person-circle-outline.svg" alt="" />
              <p>good job!</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default StoryDetails