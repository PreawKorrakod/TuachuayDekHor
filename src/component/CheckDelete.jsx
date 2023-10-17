import React,{useState,useContext} from 'react'
import './CheckDelete.scoped.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillTrashFill} from "react-icons/bs";
import axios from 'axios';
import { General } from '../App';

function CheckDelete(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const del_id = props.del

  const handledelete = () => {
        // event.preventDefault();
        const { supabase_for_use: supabase, session, user } = useContext(General);
        const [data,setData] = useState([]);
        useEffect(() => {
          axios.delete("http://localhost:3300/deletepost?id=" + del_id )
          .then(res => {
            setData(res.data);
          })
          .catch((err) => {
              alert(err)
          })
        }, [])
  }

  return (
    <>
      <BsFillTrashFill size={25} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header className='modal-header'closeButton> */}
        <Modal.Header className='modal-header'>
            <h1 className='text-wraning'>Warning!</h1>
            <img id="icon-close" src="close-outline.svg" alt="" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <p className='text-delete'>Confirm Delete?</p>
          </Modal.Body>
        <div className='btn_blog'>
          <button className='Close_btn' onClick={handleClose}>
            Close
          </button>
          <button className='Delete_btn'onClick={handledelete}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CheckDelete;