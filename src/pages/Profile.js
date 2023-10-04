import React, { useState,useContext } from "react";
import "./Profile.scoped.css";
import PostSlide from "../component/PostSlide";
import LikeSlide from "../component/LikedSlide";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Navbar from "../component/Nav";
import Avatar from "../component/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import Editprofile from "../component/EditProfile";
import ContactModal from "../component/ContactModel";
import { General } from '../App';
import axios from 'axios';

const Profile = () => {
  const {supabase_for_use : supabase,session,user} = useContext(General);
  // supabase.auth.refreshSession()
  // console.log(user?.user_metadata.username)

  const [activeTab, setactiveTab] = useState("1");

  const [name, setName] = useState(user?.user_metadata.username);
  // const [describe, setDescribe] = useState("Describe");

  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
      // alert(activeTab);
    }
  }

  return (
    <div className="profile">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="wrapper">
        <div className="profile__head"></div>
        <div className="head__box">
          <div className="profile__img">
            <Avatar />
          </div>
          <div className="profile_title">
            <div className="User_name">
              <h2>{name}</h2>
              {/* <h2>Username</h2> */}
              {/* <p>{describe}</p> */}
              {/* <p>describe..</p> */}
            </div>
          </div>
          <div className="edit">
            {/* ---Button triger modal--- */}
            {session? <button className="edit__profile">
              <Editprofile
                name={name}
                setName={setName}
                // describe={describe}
                // setDescribe={setDescribe}
              />
            </button> : <ContactModal/>}
          </div>
        </div>
        <div className="contents__box">
          <div className="content">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "show" : "noshow"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <p className="post_id">Post</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "show" : "noshow"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <p className="post_id">Like</p>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="post__zone">
                  <PostSlide></PostSlide>
                </div>
              </TabPane>

              <TabPane tabId="2">
                <div className="liked__zone">
                  <LikeSlide></LikeSlide>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
