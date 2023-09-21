const express = require('express')
const cors = require('cors');
const mysql = require('mysql');
const { log } = require('console');

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

//CREATE Routes
app.post("/create",async(req,res) => {
    const {name,email,password,photo} = req.body;
    
    try{
        connection.query(
            "INSERT INTO users(username,avatar,email,password) VALUES(?,?,?,?)",
            [name,photo,email,password],
            (err,results,fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database",err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "New user successfully created!"})
            }
        )
    }catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

//READ
app.get("/read",async(req,res) => {
    try{
        connection.query("SELECT * FROM users",(err,results,fields) =>{
            if (err){
                console.log(err);
                return res.status(400).send();  
            }
            res.status(200).json(results)
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

//READ single users from db
app.get("/read/single/:email",async(req,res) => {
    const email = req.params.email;
    try{
        connection.query("SELECT * FROM users WHERE email = ?",[email],(err,results,fields) =>{
            if (err){
                console.log(err);
                return res.status(400).send();  
            }
            res.status(200).json(results)
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

//UPDATE data
app.patch("/update/:email", async (req,res) => {
    const email = req.params.email;
    const newPassword = req.body.newPassword;
    try{
        connection.query("UPDATE users SET password = ? WHERE email = ?",[newPassword,email],(err,results,fields) =>{
            if (err){
                console.log(err);
                return res.status(400).send();  
            }
            res.status(200).json({message: "User password updated successfully!"})
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

//DELETE
app.delete("/delete/:email",async (req,res) => {
    const email = req.params.email;
    try{
        connection.query("DELETE FROM users WHERE email = ?",[email],(err,results,fields) =>{
            if (err){
                console.log(err);
                return res.status(400).send();  
            }
            if (results.affectedRows == 0) {
                return res.status(404).json({message: "No user witn that email!"}); 
            }
            return res.status(200).json({message: "User deleted successfully!"})
        })
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

//signup
app.post("/signup",async (req,res) => {
    const sql = "INSERT INTO users(username,email,password) VALUES (?, ?, ?)";
    const {username, email, password, confirmpassword} = req.body;
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
})

//login
app.get("/login",async (req,res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    connection.query(sql,[req.body.email,req.body.password],(err,data) =>{
        console.log(data);
        if (err) {
            return res.json(err.sqlMessage);
        }
        if (data.length > 0){
            return res.json("Success");
        } else{
            return res.json("Faile");
        }
    })
})

app.listen(3300, () => console.log('Server is running on port 3300'))

