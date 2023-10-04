import React,{ useState } from 'react'
import {Input} from 'reactstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaRegComment} from "react-icons/fa";
import './Comments.scoped.css'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {CiChat1} from "react-icons/ci";


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="btn" onClick={handleShow} >
          <CiChat1 size={28} className='comment-icon'/><p>25</p>
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="title">
                <h4>Comments</h4><p>(20)</p>
              </div>
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Input type='text' placeholder='your comments...'>
              <RiMessage2Line/>
            </Input>
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