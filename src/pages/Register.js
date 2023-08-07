import {  useState } from "react"
//import { json } from "react-router-dom"
//import axios from "axios"
//import { useNavigate } from "react-router-dom"
import './Login.css'


function Register(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpwd]=useState("")

    const create= async ()=>{
        
        if(password.length<10 || name===null || email===null){
            alert("enter valid data");

        }
        else{
            alert("created account successfully")
            let data =await fetch("http://65.2.129.131:8080/login",{method:"post",body:JSON.stringify({name,email,password}),headers:{
            "Content-Type":"application/json"
          }})   
    
        }
    }
   

    return(
        <div className=" h-auto w-1/3 p-5  shadow-2xl shadow-slate-600 hover:border-zinc-950 hover: border-solid hover:border-2 rounded-xl m-24 mx-auto" id="loginbox">
         <h3 className="text-xl bg-slate-400 rounded p-1 text-center"><b> Create Your Account</b></h3>
          <form className="mt-5" autoComplete="on">
            <label >Enter Name:</label><br></br>
            <input type="text" placeholder="Enter Name here" className="border-zinc-950 border-2 rounded-xl w-80 mb-4 p-1" id="name"  onChange={(e)=>setName(e.target.value)}></input><br></br>
            <label>Enter Email:</label><br></br>
            <input type="text" placeholder="Enter Email here" className="border-zinc-950 border-2 rounded-xl mb-4 w-80 p-1" id="email"  onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            <label>Password:</label><br></br>
            <input type="password" autoComplete="on" placeholder="Enter password" className="border-zinc-950 border-2 rounded-xl w-80 p-1" id="pwd"  onChange={(e)=>setpwd(e.target.value)}></input><br></br>
            
            <button type="submit" className="mt-2 border-zinc-350 border-2 rounded-xl w-40 p-1 bg-black text-slate-300 hover:bg-transparent text-center ml-28" onClick={create} id="btn">Create Account</button><br></br>
            
        
            </form>
        </div>
    )
}
export default Register