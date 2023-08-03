import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios';


let user;
function Log(){

    
        
    
    
    function change(){
        axios.post("http://localhost:8080/chatlogin",{name})
        .then((res)=>{
            if(res.data=="user dont exist"){
                alert("Enter your name as you registerd")
                
            }
            else{
                //alert("you logged in successfully, "+res.data)
                localStorage.setItem("userName",res.data)
                
            }
        })
        .catch((err)=>alert("err") )
    }

    const navigate = useNavigate();
    useEffect(()=>{
         user=localStorage.getItem("userName");
        if(user){
            navigate("/chat", {replace: true})
        }
    })
        
    
const [name,setname]=useState("")

    return(
        <div>
            <div className="h-auto w-1/3 p-5  shadow-2xl shadow-slate-600 hover:border-zinc-950 hover: border-solid hover:border-2 rounded-xl mt-48 ml-96" >
            <h3 className="text-xl bg-slate-400 rounded p-1 text-center"><b> Enter your User Name</b></h3>
                <form className='mt-5'>
                    <input type="text" placeholder="username" id='username' onChange={(e)=>setname(e.target.value)} className='border-zinc-950 border-2 rounded-xl w-96 ml-5 mb-4 p-1'></input>
                    <button onClick={change} className='mt-2 border-zinc-350 border-2 rounded-xl w-40 p-1 bg-black text-slate-300 hover:bg-transparent text-center ml-28'>Enter</button>
                </form>
            </div>
        </div>


    )






}
export default Log
export {user}