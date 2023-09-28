import React, { useState } from "react";
import "./Profile.scoped.css";
import PostSlide from "../component/PostSlide";
import LikeSlide from "../component/LikedSlide";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NavLogin from "../component/Nav_login";

const Profile = (props) => {
    const [activeTab,setactiveTab] = useState('1')
    
    function toggle(tab) {
        if(activeTab !== tab){
            setactiveTab(tab);
            // alert(activeTab);
        };
    };
    
    return(
        <div className="profile">
            <header>
                <NavLogin></NavLogin>
            </header>
            <div className="wrapper">
                <div className="profile__head">
                    <div className="profile__img">
                        <img src="/person-circle-outline.svg" className="person" alt="" />
                    </div>
                </div>
                <div className="profile_title">
                    <div className="User_name">
                        <h2>Username</h2>
                        <p>describe about yourself...</p>
                    </div>
                    <div className="edit">
                        <button className="edit__profile">Edit Profile</button>
                    </div>
                </div>
                <div className="content">
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={activeTab === '1' ? "show" : "noshow"} onClick={() => { toggle('1'); }}>
                                <p className="post_id">Post</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className={activeTab === '2' ? "show" : "noshow"} onClick={() => { toggle('2'); }}>
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
    );
};

export default Profile;