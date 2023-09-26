const express = require('express')
const cors = require('cors');
const mysql = require('mysql');
const { log } = require('console');
const { URLSearchParams, urlToHttpOptions, URL } = require('url');
const { ListGroupItemHeading } = require('reactstrap');
const axios = require('axios').default;

const app = express();

app.use(cors())
app.use(express.json());

//MySQL Connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mydb'
})

connection.connect((err) => {
    if (err){
        console.log('Error connecting to MySQL database = ',err)
        return;
    }
    console.log('MySQL succesfully connected!');
})

////////////////////////////////////Register/////////////////////////////////////////////////

//signup
app.post("/signup", async (req,res) => {
    const sql1 = "SELECT * FROM users WHERE username = ? or email = ?"
    const sql2 = "INSERT INTO users(username,email,password) VALUES (?, ?, ?)";
    const {username,email, password,confirmpassword} = req.body;
    connection.query(sql1,[username,email],(err,data) => {
        if (err){
            return res.status(400).json(err.sqlMessage);
        }
        if (password == confirmpassword){
            if (data.map(item => item.username).toString() == username && data.map(item => item.email).toString() == email) {
                return res.status(200).json({status: "account" ,msg:"You already have an account"});
            }
            if (data.map(item => item.username).toString().includes(req.body.username,0)){
                return res.status(200).json({status: "fail_username" ,msg:"This username has already use!"});
            }
            if (data.map(item => item.email).toString().includes(req.body.email,0)){
                return res.status(200).json({status: "fail_email" ,msg:"This email has already use!"});
            }
            connection.query(sql2,[username, email, password],(err,data) => {
                if(err) {
                    return res.status(400).json(err.sqlMessage);
                }
                return res.status(200).json("This data is complete in table");
            })
        }
        else {
            return res.status(400).json("password must be the same");
        }    
    })     
})

//login
app.get("/login",async (req,res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    connection.query(sql,[req.body.email,req.body.password],(err,data) =>{
        // console.log(data);
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data.length > 0){
            return res.status(200).json({status:'complete_login',msg: "Success to login"});
        } else{
            return res.status(400).json({status: 'not login',msg:"Faile to login"});
        }
    })
})

//forgot_password
app.get("/forgot_password",async (req,res) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    const email = req.body.email
    connection.query(sql,[email],(err,data) =>{
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data.length > 0){
            return res.status(200).json("There is an email ");
        }
        return res.status(400).json("This email doesn't exist!");
    })
})

//reset_password
app.patch("/reset_password",async (req,res) =>{
    const sql = "UPDATE users SET password = ? WHERE email = ?"
    const {email,newpassword,confirmpassword} = req.body;
    connection.query(sql,[newpassword,email,confirmpassword],(err,data) =>{
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (newpassword == confirmpassword){
            return res.status(200).json("Succes to update your new password!");
        }
        return res.status(400).json("password must be the same");
    })

})
//profile
app.get("/profile", async (req,res) => {
    const sql = "SELECT username, avatar FROM users";
    connection.query(sql,(err,data) =>{
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        return res.status(200).json({status: "myprofile",data})
    })
})


////////////////////////////////////////////writeblog/////////////////////////////////////////////////////////

//cleaning
app.post("/writeblog/cleaning",async (req,res) => {
    const sql1 = "SELECT * FROM users WHERE id = ? ";
    const sql2 = "INSERT INTO cleaning(id,title_name,image_title,content) VALUES (?, ?, ?, ?)";
    const {id,title_name,image_title,content} = req.body;
    connection.query(sql1,[id],(err,data) => {
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data[0].id == id){
            connection.query(sql2,[id,title_name,image_title,content],(err,data) => {
                if(err) {
                    return res.status(400).json(err.sqlMessage);
                }
                return res.status(200).json("Your blog will be posted");
            })
        }
        else{
            return res.status(400).json({status: "fail" ,msg:"You should login before write the blog!"});
        }
    })
})

//decoration
app.post("/writeblog/decoration",async (req,res) => {
    const sql1 = "SELECT * FROM users WHERE id = ? ";
    const sql2 = "INSERT INTO decoration(id,title_name,image_title,content) VALUES (?, ?, ?, ?)";
    const {id,title_name,image_title,content} = req.body;
    connection.query(sql1,[id],(err,data) => {
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data[0].id == id){
            connection.query(sql2,[id,title_name,image_title,content],(err,data) => {
                if(err) {
                    return res.status(400).json(err.sqlMessage);
                }
                return res.status(200).json("Your blog will be posted");
            })
        }
        else{
            return res.status(400).json({status: "fail" ,msg:"You should login before write the blog!"});
        }
    })
})

//food
app.post("/writeblog/food",async (req,res) => {
    const sql1 = "SELECT * FROM users WHERE id = ? ";
    const sql2 = "INSERT INTO food(id,title_name,image_title,content) VALUES (?, ?, ?, ?)";
    const {id,title_name,image_title,content} = req.body;
    connection.query(sql1,[id],(err,data) => {
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data[0].id == id){
            connection.query(sql2,[id,title_name,image_title,content],(err,data) => {
                if(err) {
                    return res.status(400).json(err.sqlMessage);
                }
                return res.status(200).json("Your blog will be posted");
            })
        }
        else{
            return res.status(400).json({status: "fail" ,msg:"You should login before write the blog!"});
        }
    })
})

//dekhor_story
app.post("/writeblog/dekhor_story",async (req,res) => {
    const sql1 = "SELECT * FROM users WHERE id = ? ";
    const sql2 = "INSERT INTO dekhor_story(id,title_name,image_title,content) VALUES (?, ?, ?, ?)";
    const {id,title_name,image_title,content} = req.body;
    connection.query(sql1,[id],(err,data) => {
        if (err) {
            return res.status(400).json(err.sqlMessage);
        }
        if (data[0].id == id){
            connection.query(sql2,[id,title_name,image_title,content],(err,data) => {
                if(err) {
                    return res.status(400).json(err.sqlMessage);
                }
                return res.status(200).json("Your blog will be posted");
            })
        }
        else{
            return res.status(400).json({status: "fail" ,msg:"You should login before write the blog!"});
        }
    })
})



//yourblog
app.get("/")



app.listen(3300, () => console.log('Server is running on port 3300'))