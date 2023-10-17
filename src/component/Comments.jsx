import React, { useState,useContext } from 'react'
import { Input } from 'reactstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegComment } from "react-icons/fa";
import './Comments.scoped.css'
import { RiFlag2Line, RiMessage2Line, RiSendPlaneFill } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { General } from '../App';


const startComment = {
  content:'', Username: 'Username'
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {session} = useContext(General);
  
  // const Chackcomment=()=>{
  //   if (session){
  //     alert('Comment Success!')
  //   }else{
  //     alert('Please Login')
  //   }
  // }

  // โค้ดสำหรับเพิ่มคอมเมนต์อยู่ตรงนี้
  // แก้ Username ตรงนี้คับ
  const [comment , setComment] = useState(startComment)

  const [allcomment, setAllComment] = useState([]);

  function onCommentValueChange(event){
    const {name,value} = event.target;
    setComment ((prevComment) =>{
      return {
        ...prevComment,
        [name] : value
      }
    })
  }

  function onCommentSubmit (event){
    event.preventDefault();

    setAllComment((prevAllComment)=>{
      const NewComment = { ...comment};
      NewComment.id = Date.now().toString();
      return [comment, ...prevAllComment];
    });

    setComment(startComment);

  }

  // Elements
  const commentElements = allcomment.map((theComment) =>{
    return (
      <div key={theComment.id} className="comment_app">
        <h5>{theComment.Username}</h5>
        <p>{theComment.content}</p>
      </div>
    )
  })
  
  return (
    <>
      <div className="btn" onClick={handleShow} >
        <CiChat1 size={28} className='comment-icon' /><p>{commentElements.length}</p>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="title">
              <h4>Comments</h4>
              <p>({commentElements.length})</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form action="#" onSubmit={onCommentSubmit}>
          <textarea
            name="content" id="comments"
            rows="5" className='comments__input'
            placeholder= 'Write a comment...'
            value={comment.content}
            onChange={onCommentValueChange}
          >
          </textarea>
          <div className="send_btn">
            <button type='submit' className='send__btn'>
              Submit
            </button>
          </div>
        </form>

          <div className="comment_blog">
            {commentElements}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// show frontend เฉยๆ 
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