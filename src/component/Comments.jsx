import React, { useState,useContext } from 'react'
import { Input } from 'reactstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegComment } from "react-icons/fa";
import './Comments.scoped.css'
import { RiFlag2Line, RiMessage2Line, RiSendPlaneFill } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { General } from '../App';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {session} = useContext(General);
  
  const Chackcomment=()=>{
    if (session){
      alert('Comment Success!')
    }else{
      alert('Please Login')
    }
  }
  
  return (
    <>
      <div className="btn" onClick={handleShow} >
        <CiChat1 size={28} className='comment-icon' /><p>25</p>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="title">
              <h4>Comments</h4><p>(3)</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <textarea
            name="comments" id="comments"
            rows="5" className='comments__input'
            placeholder= 'Write a comment...'
          >
          </textarea>
          <div className="send_btn">
            <button type='submit' className='send__btn' onClick={Chackcomment}>
              Submit
            </button>
          </div>

          <div className="comment_blog">

          <div className="comments_wrap">
            <div className="comment">
              <div className="username">
                <img src="/person-circle-outline.svg" alt="" className='imgUser'/>
                <h5>Username</h5>
              </div>
              <p className='comment-text'>this is helpful.</p>
            </div>
          </div>
          
          <div className="comments_wrap">
            <div className="comment">
              <div className="username">
                <img src="/person-circle-outline.svg" alt="" className='imgUser'/>
                <h5>Username</h5>
              </div>
              <p className='comment-text'>this is helpful very much.</p>
            </div>
          </div>

          <div className="comments_wrap">
            <div className="comment">
              <div className="username">
                <img src="/person-circle-outline.svg" alt="" className='imgUser'/>
                <h5>Username</h5>
              </div>
              <p className='comment-text'>wow this is helpful.</p>
            </div>
          </div>



            
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Comments() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Comments