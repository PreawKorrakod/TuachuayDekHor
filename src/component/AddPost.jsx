import React from 'react'
import { Card,CardBody,Form,Input,Label,Button,Container,FormGroup } from 'reactstrap'
import User from '../Assets/User.png'
import "./AddPost.scoped.css"

function AddPost() {
  return (
    <div className="wrapper">
        <Card>
            <CardBody>
                {/* <p>Let's make your blog</p> */}
                <Form>
                    <div className='title__head'>
                        <Label for='title'>Title</Label>
                        <Input 
                        type="text" 
                        id='title'
                        placeholder='Type your title blog...'
                        className='rounded-2'
                        />
                    </div>

                    <div className='Catagory'>
                        <Label for='category'>Select Category</Label>
                        <Input 
                            type="select" 
                            id='Category'
                            placeholder='Enter here'
                            className='rounded-2'

                            >
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
                    <div className="choose">
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
                    </div>
                    
                    <div className='content__head'>
                        <Label for='content'>Content</Label>
                        <Input 
                        type="textarea" 
                        id='content'
                        placeholder='Type your content...'
                        className='rounded-2'
                        style={{height:'500px', marginLeft: '1rem', fontSize: '1rem', padding:'1rem'}}
                        />
                    </div>

                    <Container className='button__Blog'>
                        <Button className='Post-btn'>Post</Button>
                        <Button className='Cancel'>Cancel</Button>
                    </Container>

                </Form>

            </CardBody>

        </Card>

    </div>
  )
}

export default AddPost