const express=require('express')
const app = express()
const mysql= require("mysql")
const cors=require("cors")
const bodyparser=require("body-parser")
const nodemailer=require("nodemailer")
const port = 8080;

const db=mysql.createPool({
    host:'',
    user:'root',
    password:'Sjsql@1234',
    database:'sj'
    
})
app.set("view engine","ejs");
app.use(express.json())
app.use(cors())
app.post("/login",(req,res)=>{
    
    const name= req.body.name;
    const email =req.body.email;
    const password = req.body.password;
    db.query("INSERT INTO created_account (name,email,password) VALUES (?,?,?)",[name,email,password],(err)=>{
        if(err){
            res.send(err)

        }
        else{
            res.send("inserted")
        }
    })

})
app.post("/logged",(req,res)=>{
    db.query("SELECT name FROM created_account WHERE (email=? AND password=?)",[req.body.email,req.body.password],(err,data)=>{
        if(err){
            res.send(err)

        }
        else if(data.length>0){
            res.send(data[0].name)
            
        }
        else{
            res.send("user dont exist")
        }
    })

})
app.get("/",(req,res)=>{
    db.getConnection((err) => {
        if (err) {
            res.send(err)
    
        }
        else {
    
            res.redirect("/user")
        }
    })
})
app.get("/user",(req,res)=>{
    db.query("SELECT * FROM created_account",(err,result)=>{
        if(err){
            console.log("error")
        }
        else{
            res.render(__dirname+"/user",{created_account:result})
        }
    })
})
app.get("/delete",(req,res)=>{
    db.query("DELETE FROM created_account WHERE email=?",[req.query.email],(err,result)=>{
        if(err){
            console.log("error")
        }
        else{
            res.redirect("/user")
        }
    })
})
app.get("/search-user",(req,res)=>{
    db.query("SELECT * FROM created_account ",(err,result)=>{
        if(err){
            console.log("error")
        }
        else{
            res.render(__dirname+"/search-user",{created_account:result})
        }
    })
})
app.get("/search",(req,res)=>{
    var name = req.query.name
    var email=req.query.email
    db.query("SELECT * FROM created_account WHERE name LIKE '%"+name+"%' OR email LIKE '%"+email+"%'" ,(err,result)=>{
        if(err){
            console.log("error")
        }
        else{
            res.render(__dirname+"/search-user",{created_account:result})

        }
    })
})
app.get("/mail", (req,res)=>{
    let testaccount =  nodemailer.createTestAccount()
    let transport=  nodemailer.createTransport({
        service:"gmail",
        port: 587,
        secure:false,
        requireTLS: true,
        auth: {
            user: 'jhas1203@gmail.com',
            pass: 'Sj@20021'
        }
    })
    var info={
        from:'jhas1203@gmail.com',
        to:"jhas1203@gmail.com",
        subject:"Hello",
        text:"Hello world",

    }
     transport.sendMail(info,function(err,msg){
        if(err){
            res.send(err)
        }
        else{
            res.send("email sent")
        }
     })
    
})

app.get("/course",(req,res)=>{
    db.query("Select * from courses",(err,result)=>{
        if(err){
            res.send ("err")
        }
        else{
            res.render("courselist",{courses:result})
        }
    })
})



app.listen(port)