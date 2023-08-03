const mysql= require("mysql")
const cors=require("cors")
const bodyparser=require("body-parser")
const nodemailer=require("nodemailer")

const chat=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Sjsql@1234',
    database:'sj'
    
})
app.use(cors())
