import React, { useRef, useState } from 'react'
import { Card, CardBody, Form, Input, Label, Button, Container, FormGroup } from 'reactstrap'
import "./AddPost.scoped.css"
import JoditEditor from 'jodit-react';

function AddPost() {

    const editor = useRef(null);
    // const [content, setContent] = useState('')

    const[post,setPost] = useState({
            title:'',
            content:'',
            category:''
        })

    // fieldChanged function
    const fieldChanged = (event) =>{

        // console.log(event)
        setPost({...post,[event.target.name]: event.target.value})

    }

    const contentFieldChanged = (data) =>{

        setPost({...post,'content':data})

    }

    // create post function
    const createPost = (event) =>{

        event.preventDefault();
    
        console.log(post)
        if(post.title.trim()==''){
           alert('post is required!!')
           return; 
        }
        if(post.content.trim()==''){
            alert('post content is required !!')
            return;
        }
        if(post.category == ''){
            alert('select some category !!')
            return;
        }

        // submit the form 
        createPost(post).then(data =>{
            alert("post created")
            console.log(post)
        }).catch((error)=>{
            alert('error')
            console.log(error)
        })
    }

    return (
        <div className="wrapper">
            <Card>
                <CardBody>
                    {/* check */}
                    {JSON.stringify(post)}
                    {/* <p>Let's make your blog</p> */}
                    <Form onSubmit={createPost}>
                        <div className='title__head'>
                            <Label for='title'>Title</Label>
                            <Input
                                type="text"
                                id='title'
                                placeholder='Type your title blog...'
                                className='rounded-2'
                                name = "title"
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
                                    Decoration
                                </option>
                                <option>
                                    Cooking
                                </option>
                                <option>
                                    Cleaning
                                </option>
                                <option>
                                    Story's DekHor
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
    )
}

export default AddPost;