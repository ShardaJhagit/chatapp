import React from "react";
import {Link } from "react-router-dom";
import OIP from './OIP.jpg'
import { useNavigate } from "react-router-dom"
import {useState} from "react"

function Navi(){
  const auth=localStorage.getItem("user");
  const navigate = useNavigate();
  const logout=()=>{
    navigate("/login", {replace: true})
    localStorage.clear()
  
  }
   const [navbar,setnavbar]=useState(true)
  
    return(
      navbar?
        <nav className="bg-slate-900 text-white text-xl text-right " id="navbar"> 
        <ul className=" flex flex-wrap items-center justify-between mx-auto">
          <Link><img src={OIP} alt="Logo" className="w-12 m-3 rounded full"/></Link>
          <Link to="/" className="list m-5 hover:bg-slate-700 hover:rounded full " id="home" class="hide">
            Home
          </Link>
          <Link to="/about" className="list m-5 hover:bg-slate-700 hover:rounded full" id="about" class="hide">
            About
          </Link>
          
          
          
          <Link to="/contact" className="list m-5 hover:bg-slate-700 hover:rounded full "  class="hide">
            Contact
          </Link>
          
          {auth?<>
            <Link to="/chat" className="list m-5 hover:bg-slate-700 hover:rounded full " onClick={()=>setnavbar(false)}  id="chat" class="hide">
            Chat
          </Link>
          
          <Link to="/login" className="list m-5 hover:bg-slate-700 hover:rounded full " onClick={logout}  id="chat" >
            Logout
          </Link></>
          :<><Link to="/register" className="list m-5 hover:bg-slate-700 hover:rounded full" >Register</Link>
          <Link to="/login" className="list m-5 hover:bg-slate-700 hover:rounded full "  id="chat">
          Login
        </Link></>}
          
          
        </ul>
       </nav>
      :null
      
    )
}
export default Navi