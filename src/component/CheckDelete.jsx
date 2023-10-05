import React,{useState} from 'react'
import './CheckDelete.scoped.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillTrashFill} from "react-icons/bs";

const CheckDelete = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handledelete = () => {
    // ปุ๋มมาทำตรงนี้
  }

  return (
    <>
      <BsFillTrashFill size={25} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button className='Close_btn' onClick={handleClose}>
            Close
          </button>
          <button className='Delete_btn'onClick={handledelete}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckDelete;