import React from "react";
import {Link } from "react-router-dom";
import OIP from './OIP.jpg'
import { useNavigate } from "react-router-dom"

function Navi(){
  const auth=localStorage.getItem("user");
  const navigate = useNavigate();
  const logout=()=>{
    navigate("/login", {replace: true})
    localStorage.clear()
    
  }
  
    return(
        <nav className="bg-slate-900 text-white text-xl text-right "> 
        <ul className=" flex flex-wrap items-center justify-between mx-auto">
          <Link><img src={OIP} alt="Logo" className="w-12 m-3 rounded full"/></Link>
          <Link to="/" className="list m-5 hover:bg-slate-700 hover:rounded full ">
            Home
          </Link>
          <Link to="/about" className="list m-5 hover:bg-slate-700 hover:rounded full">
            About
          </Link>
          <Link to="/username" className="list m-5 hover:bg-slate-700 hover:rounded full " >
            Chat
          </Link>
          
          
          <Link to="/contact" className="list m-5 hover:bg-slate-700 hover:rounded full ">
            Contact
          </Link>
          
          {auth?<>
            
          
          <Link to="/login" className="list m-5 hover:bg-slate-700 hover:rounded full " onClick={logout}>
            Logout
          </Link></>
          :<><Link to="/register" className="list m-5 hover:bg-slate-700 hover:rounded full">Register</Link>
          <Link to="/login" className="list m-5 hover:bg-slate-700 hover:rounded full ">
          Login
        </Link></>}
          
          
        </ul>
      </nav>
    )
}
export default Navi