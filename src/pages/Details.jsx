import React,{ useState,useEffect,useContext } from 'react'
import Navbar from '../component/Nav'
import {Container,Input,Card} from 'reactstrap'
import {RiFlag2Line,RiMessage2Line,RiSendPlaneFill} from "react-icons/ri";
import {BsHeart,BsFillTrashFill,BsHeartFill,BsBookmark} from "react-icons/bs";
import { Link,useParams } from 'react-router-dom';
import Avatar from '../component/Avatar';
import Comments from '../component/Comments';
import "./Details.scoped.css"
import axios from 'axios';
import { General } from '../App';
import CheckDelete from '../component/CheckDelete';
import img1 from '../../src/Assets/slide1.png'
// title,username,content,like,comments
// kkk
const Details = () => {
  const {id} = useParams();
  // const {username} = useParams();
  const { user } = useContext(General);
  const [like, setLike] = useState(0);
  const [data,setData] = useState([]);
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
  const [pic,setPic] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3300/idtopic?id=" + id_user)
    .then((res) => {
        setPic(res.data);
        console.log(pic);
    })
    .catch((error) => {
        console.error(error);
    })
  }, [id_user]);

  if (!data) {
    return <div>Loading...</div>;
  }  

  console.log(data)
  

  const handleLikeClick = async () => {
    try {
      // ทำการเพิ่มการ "ถูกใจ" ลงฐานข้อมูล
      await axios.post("http://localhost:3300/likepost", {
        id_post: id,
        id: user?.id,
      })
      .then(res =>{
        console.log(res.data)
      })
        // อัพเดตค่า like ในส่วนของสถานะ (state) ของ React
        // setLike(like + 1);
    } catch (error) {
      alert(error);
    }
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
                <Avatar src={pic[0].avatar_url}/>
              </div>
              <div className="name">
                <h6>{data.name?.username}</h6>
              </div>
            </div> 
            <div className="menu__icon">
              <div className="first">
                <div className="like__box">
                  <div className="heart">
                    <BsBookmark size={25} 
                    className={like === 0 ? "nolike" : "like"}
                    onClick={handleLikeClick}
                    />
                  </div>
                </div>
                <div className="comment__icon">
                  <Comments/>
                </div>
              </div>
              <div className="last">
                {(user?.user_metadata.username !== data.name?.username)? <Link to={'/report'}><RiFlag2Line size={25} className='icon-report'/></Link> :
                <div className="icon_edit">
                  {/* <button >
                    <BsFillTrashFill size={25} className='icon-delete'/>
                  </button> */}
                  <CheckDelete></CheckDelete>
                </div>}
              </div>
            </div>
          </div>
          <div className="img__box">
            <img src={data.image_link??img1} alt="" />
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} />
        </Card>
      </div>
    </div>
  )
}

export default Details




