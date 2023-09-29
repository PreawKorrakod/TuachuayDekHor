import "./WriteBlog.scoped.css";
import React from 'react';
import NavHead from "../component/Nav";
import AddPost from "../component/AddPost";
import {Container} from 'reactstrap';

const WriteBlog = () =>{
    return (
        <div className="writting">
            <header>
                <NavHead></NavHead>
            </header>
            <Container>
                <h1>Blog</h1>
                <AddPost></AddPost>
            </Container>
        </div>
    );
};

export default WriteBlog;