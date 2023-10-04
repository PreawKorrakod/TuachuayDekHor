import "./WriteBlog.scoped.css";
import React from 'react';
import NavHead from "../component/Nav";
import AddPost from "../component/AddPost";
import {Container} from 'reactstrap';
import Navbar from "../component/Nav";

const WriteBlog = () =>{
    return (
        <div className="writting">
            <Navbar/>
            <Container>
                <h1>Blog</h1>
                <AddPost></AddPost>
            </Container>
        </div>
    );
};

export default WriteBlog;