import React,{ useState,useEffect,useContext } from 'react'
import Navbar from '../component/Nav'
import {Container,Input,Card} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeart,BsFillTrashFill,BsHeartFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import { Link,useParams } from 'react-router-dom';
import Avatar from '../component/Avatar';
import Comments from '../component/Comments';
import "./Details.scoped.css"
import axios from 'axios';
import { General } from '../App';
import CheckDelete from '../component/CheckDelete';
// title,username,content,like,comments

const Details = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3300/detailpost?id_post=" + id)
    .then(res =>{
      // console.log(res.data)
      setData(res.data[0]);
    })   
    .catch((err) => {
      alert(err)
    })
  },[id])
  

  // const [like, setLike] = useState(0);
  // console.log(like)
  const { user } = useContext(General);
  
  const [like, setLike] = useState(0);
  const handleLikeClick = async () => {
      await axios.post("http://localhost:3300/likepost", {
        id_post: id,
        id: user?.id,
      }); 
      // setLike(like + 1); // เพิ่มจำนวนไลค์ขึ้น 1 ทุกครั้งที่คลิก
      await axios.post("http://localhost:3300/countlike?id_post=" + id,{
        like: data[0].id_post?.count ,
      })
      .then(res=>{
        console.log(res.data)
        if (res.data && res.data[0] && res.data[0].like) {
          setLike(res.data[0].like); 
        }
      })
      .catch((err) => {
        alert(err)
      })
  };

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
                <Avatar></Avatar>
              </div>
              <div className="name">
                <h6>{data.name?.username}</h6>
              </div>
            </div> 
            <div className="menu__icon">
              <div className="first">
                <div className="like__box">
                  <div className="heart">
                    <BsHeart size={25} 
                    className={like === 0 ? "nolike" : "like"}
                    onClick={handleLikeClick}
                    />
                    <p>{data.id_post?.like}</p>
                  </div>
                </div>
                <div className="comment__icon">
                  <Comments/>
                </div>
              </div>
              <div className="last">
                {!user ? <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link> :
                <div className="icon_edit">
                  <AiFillEdit size={25} className='icon-Edit'/>
                  {/* <button >
                    <BsFillTrashFill size={25} className='icon-delete'/>
                  </button> */}
                  <CheckDelete></CheckDelete>
                </div>}
              </div>
            </div>
          </div>
          <div className="img__box">
            <img src="/pxfuel.jpg" alt="" />
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} />
        </Card>
      </div>
    </div>
  )
}

export default Details




