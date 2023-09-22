import "./WriteBlog.scoped.css";
import React from 'react';
import NavHead from "../component/Nav";

const WriteBlog = () =>{
    return (
        <div className="writting">
            <header>
                <NavHead></NavHead>
            </header>
            <h1>Writing</h1>
            <main>
                <div className="contentwrite">
                    <div className="writehead">
                        <div className="fronthead">
                            <img id="user-img" src="/person-circle-outline.svg" alt="" />
                            <input id="titleinput" type="text" placeholder="title" />
                        </div>
                        <div className="backhead">
                            <img id="img-icon" src="/images-outline.svg" alt="" />
                            <img id="loca-img" src="/location-outline.svg" alt="" />
                            <button className="btn-draft" >draft</button>
                        </div>
                    </div>
                    <textarea id="write-blog" cols=" " rows="20" placeholder="Write something..."></textarea>
                    <div className="writefooter">
                        <button className="btn-draft">Post</button>
                        <button id="btn-cancel" className="btn-draft">cancel</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WriteBlog;