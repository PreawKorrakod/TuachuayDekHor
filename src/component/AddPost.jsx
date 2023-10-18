import React, { useRef, useState, useContext } from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container, FormGroup } from 'reactstrap'
import "./AddPost.scoped.css"
import JoditEditor from 'jodit-react';
import { General } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPost() {
    const { supabase_for_use: supabase, session, user } = useContext(General);
    const navigate = useNavigate()

    const editor = useRef(null);
    // const [content, setContent] = useState('')

    const [post, setPost] = useState({
        title: '',
        content: '',
        category: '',
    })


    // fieldChanged function
    const fieldChanged = (event) => {

        // console.log(event)
        setPost({ ...post, [event.target.name]: event.target.value })

    }

    const contentFieldChanged = (data) => {

        setPost({ ...post, 'content': data })

    }

    // create post function
    const createPost = (event) => {
        // console.log(user?.email)
        // console.log(post)
        event.preventDefault();

        axios.post("http://localhost:3300/creatpost", {
            title: post.title,
            content: post.content,
            category: post.category,
            id: user?.id,
        })
        .then(data => {
            if(session){
                if (post.title.trim() != ''){
                    if (post.content.trim() != ''){
                        if (post.category != ''){
                            alert("post created")
                        }
                    }
                }
            navigate(`/profile/${user?.user_metadata.username}`);
            // `/profile/${username}`
            // user?.user_metadata_username
            }else{
                alert("Please Login")
            }
        })
        .catch((err) => {
            alert(err)
        })

        // console.log(post)
        if (post.title.trim() == '') {
            alert('post is required!!')
            return;
        }
        if (post.content.trim() == '') {
            alert('post content is required !!')
            return;
        }
        if (post.category == '') {
            alert('select some category !!')
            return;
        }

        // submit the form 
        // createPost(post).then(data =>{
        //     alert("post created")
        // console.log(post)
        // }).catch((error)=>{
        //     alert('error')
        //     console.log(error)
        // })
    }

    return (
        <div className="wrapper">
            <Card>
                <CardBody>
                    {/* check */}
                    {/* {JSON.stringify(post)} */}
                    {/* <p>Let's make your blog</p> */}
                    <h1>Blogging</h1>
                        <Form onSubmit={createPost}>
                            
                            <div className="img_cover">
                                <Label for='imgCover'>Cover Photo</Label>
                                <Input
                                    type="file"
                                    id='Photo'
                                    className='rounded-2'
                                >
                                </Input>
                            </div>
                            <div className='title__head'>
                                <Label for='title'>Title</Label>
                                <Input
                                    type="text"
                                    id='title'
                                    placeholder='Type your title blog...'
                                    className='rounded-2'
                                    name="title"
                                    onChange={fieldChanged}
                                />
                            </div>

                            <div className='Catagory'>
                                <Label for='category'>Select Category</Label>
                                <Input
                                    type="select"
                                    id='Category'
                                    placeholder='Enter here'
                                    className='rounded-2'
                                    name='category'
                                    onChange={fieldChanged}
                                    defaultValue={0}
                                >
                                    <option disabled value={0}>--Select category--</option>
                                    <option>
                                        decoration
                                    </option>
                                    <option>
                                        cooking
                                    </option>
                                    <option>
                                        cleaning
                                    </option>
                                    <option>
                                        story
                                    </option>
                                </Input>
                            </div>
                            {/* <div className="choose">
                        <FormGroup>
                            <Label for="exampleFile">
                            Images
                            </Label>
                            <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            multiple
                            />
                        </FormGroup>
                    </div> */}

                            <div className='content__head'>
                                <Label for='content'>Content</Label>
                                <JoditEditor
                                    ref={editor}
                                    value={post.content}
                                    // config={config}
                                    // tabIndex={1} // tabIndex of textarea
                                    onChange={contentFieldChanged}
                                />
                                {/* <Input 
                        type="textarea" 
                        id='content'
                        placeholder='Type your content...'
                        className='rounded-2'
                        style={{height:'500px', marginLeft: '1rem', fontSize: '1rem', padding:'1rem'}}
                        /> */}
                            </div>

                            <Container className='button__Blog'>
                                <Button type='submit' className='Post-btn'>Post</Button>
                                <Button className='Cancel'>Cancel</Button>
                            </Container>

                        </Form>

                </CardBody>

            </Card>

        </div>
    
    );
};

export default AddPost;