const express = require('express')
const cors = require('cors');
const mysql = require('mysql');
const { log } = require('console');
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


// Check 
app.get("/check/:username&/check/:email",async (req,res) => {
    const {username, email,password,confirmpassword} = req.body;
    const sql = "SELECT * FROM users WHERE username = ? or email = ?"
    connection.query(sql,[username,email],(err,data) => {
        // console.log(data.map(item => item.email).toString().includes(req.body.email,0));
        if (err){
            return res.status(400).json(err.sqlMessage);
        }
        if (data.map(item => item.username).toString() == username && data.map(item => item.email).toString() == email) {
            return res.status(200).json({status: "account" ,msg:"You already have an account"});
        }
        if (data.map(item => item.username).toString().includes(req.body.username,0)){
            return res.status(200).json({status: "fail_username" ,msg:"This username has already use!"});
        }
        if (data.map(item => item.email).toString().includes(req.body.email,0)){
            return res.status(200).json({status: "fail_email" ,msg:"This email has already use!"});
        }
        else{
            return res.status(200).json({status: "create" ,msg:"You can create an account"});
        }
    })        
})


//signup
app.post("/signup",async (req,res) => {
    const sql = "INSERT INTO users(username,email,password) VALUES (?, ?, ?)";
    const {username, email, password, confirmpassword} = req.body;
    // if (password == confirmpassword){
    //     connection.query(sql,[username, email, password],(err,data) => {
    //         if(err) {
    //             return res.status(400).json(err.sqlMessage);
    //         }
    //         return res.status(200).json("This data is complete in table");
    //     })
    // }
    // else {
    //     return res.status(400).json("password must be the same");
    // }
    axios.get('https://localhost:3300/check/')
    .then(status =>{
        if (status.status == create){
            if (password == confirmpassword){
                connection.query(sql,[username, email, password],(err,data) => {
                    if(err) {
                        return res.status(400).json(err.sqlMessage);
                    }
                    return res.status(200).json("This data is complete in table");
                })
            }
            else {
                return res.status(400).json("password must be the same");
            }
        }
        if (status.status == account){
            return res.status(200).json({status: "account" ,msg:"You already have an account"});
        }
        if (status.status = fail_username){
            return res.status(200).json({status: "fail_username" ,msg:"This username has already use!"});
        }
        if (status.status == fail_email){
            return res.status(200).json({status: "fail_email" ,msg:"This email has already use!"});
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
            return res.json("Success");
        } else{
            return res.json("Faile");
        }
    })
})

app.listen(3300, () => console.log('Server is running on port 3300'))

