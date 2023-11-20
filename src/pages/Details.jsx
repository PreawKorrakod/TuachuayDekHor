import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../component/Nav'
import { Container, Input, Card } from 'reactstrap'
import { RiFlag2Line, RiMessage2Line, RiSendPlaneFill } from "react-icons/ri";
import { BsHeart, BsFillTrashFill, BsHeartFill, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import Avatar from '../component/Avatar';
import Comments from '../component/Comments';
import "./Details.scoped.css"
import axios from 'axios';
import { General } from '../App';
import CheckDelete from '../component/CheckDelete';
import img1 from '../../src/Assets/slide1.png'
// title,username,content,like,comments

const Details = () => {
  const { id } = useParams();
  // const {username} = useParams();
  const { user } = useContext(General);
  const [like, setLike] = useState([]);
  const [data, setData] = useState([]);
  const [wholike,setWholike] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3300/detailpost?id_post=" + id)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [id]);

  console.log(data.id)

  const id_user = data.id
  const [pic, setPic] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3300/idtopic?id=" + id_user)
      .then((res) => {
        setPic(res.data[0]);
        console.log(pic);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [id_user]);

  if (!data) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    axios.get("http://localhost:3300/countlike?id_post=" + id)
    .then((res) => {
      setLike(res.data);
    })
    .catch((error) => {
      console.error(error);
    })

  }, [id]);

  const handleLikeClick = async () => {
    try {
    // ทำการเพิ่มการ "ถูกใจ" ลงฐานข้อมูล
      await axios.post("http://localhost:3300/likepost", {
        id_post: id,
        id: user?.id,
      })
      .then(res => {
        setWholike(res.data);
        console.log(res.data); 
      })
    } catch (error) {
      alert("You have already saved this post");
    }
    axios.get("http://localhost:3300/countlike?id_post=" + id)
      .then((res) => {
        setLike(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }


  return (
    <div className="story">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="story__content">
        <Card>
          <div className="head">
            <div className="title">
              <h2>{data.title}</h2>
            </div>
            <div className="writer">
              <div className="user__photo">
                <Avatar src={pic.avatar_url} />
              </div>
              <div className="name">
                <h6>{data.name?.username}</h6>
              <div />

                {/* <div className="heart">
                    <BsBookmark size={25} 
                    className={like === 0 ? "nolike" : "like"}
                    onClick={handleLikeClick}
                    />
                  </div> */}
              
            </div>
          </div>
          <div className="menu__icon">
            <div className="first">
              <div className="like__box">
                {/* saved อยู่ตรงนี้คับ */}
                <div className="heart">
                  {/* เงื่อนไขการเปลี่ยน like อยู่ตรงนี้ */}
                { like === 0? 
                    <BsBookmark size={25} 
                    onClick={handleLikeClick}
                    className='noBookmark'
                    />:<BsBookmarkFill size={25} className='Bookmark' onClick={handleLikeClick}/>}
                    {/*จำนวน like  */}
                    <p>{like.length}</p>
                </div>
              </div>
              {/* comment อยู่ตรงนี้นะ */}
              <div className="comment__icon">
                <Comments />
              </div>
            </div>
            <div className="last">
              {(user?.user_metadata.username !== data.name?.username) ? '' :
                <div className="icon_edit">
                  {/* <button >
                    <BsFillTrashFill size={25} className='icon-delete' />
                  </button> */}
                  <button className='icon-delete'>
                    <CheckDelete></CheckDelete>
                  </button>
                </div>}
            </div>
          </div>
      </div>
      <div className="img__box">
        <img src={data.image_link ?? img1} alt="" />
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} />
    </Card>
      </div >
    </div>
  )
}

export default Details



// {/* <div className="box">
//                   <div className="last">
//                   {(user?.user_metadata.username !== data.name?.username)? <div className="heart">
//                   { like === 0? 
//                     <BsBookmark size={25} 
//                     onClick={handleLikeClick}
//                     className='noBookmark'
//                     />:<BsBookmarkFill size={25} className='Bookmark' onClick={handleLikeClick}/>}
//                   </div> :
//                   <div className="icon_edit">
//                     {/* <button >
//                       <BsFillTrashFill size={25} className='icon-delete'/>
//                     </button> */}
//     <button className='icon-delete'>
//       <CheckDelete></CheckDelete>
//     </button>
//   </div>}
// </div> */}
