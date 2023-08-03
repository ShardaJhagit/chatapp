import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpwd]=useState("")
    
     

     function Log(){
       
        axios.post("http://localhost:8080/logged",{email,password})
        .then((res)=>{
            if(res.data=="user dont exist"){
                alert("create your account")
                
            }
            else{
                alert("you logged in successfully, "+res.data)
                localStorage.setItem("user",res.data)
                
            }
        })
        .catch((err)=>alert("err") )

        
    }
    const navigate = useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate("/", {replace: true})
        }
    })
    function Reg(){
        navigate("/Register",{replace:true})
    }
    
    return(
        <div className="">
            <div className=" h-96 w-1/4 p-5  shadow-2xl shadow-slate-600 hover:border-zinc-950 hover: border-solid hover:border-2 rounded-xl m-24 mx-auto">
            <h3 className="text-xl bg-slate-400 rounded p-1 text-center"><b>Log Into Your Account</b></h3>
                <form className="mt-5" autoComplete="on">
                <label >Enter E-mail:
                <br></br>
                <input type="text" placeholder="Enter E-mail here" className="border-zinc-950 border-2 rounded-xl w-80 mb-4 p-1" id="logemail" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                </label>
                <label>Password:</label><br></br>
                <input type="password" autoComplete="on" placeholder="Enter password" className="border-zinc-950 border-2 rounded-xl w-80 p-1" id="logpwd" onChange={(e)=>setpwd(e.target.value)}></input><br></br>
                <button type="submit" className="mt-2 border-zinc-350 border-2 rounded-xl w-24 p-1 bg-black text-slate-300 hover:bg-transparent ml-28" onClick={Log}>Login</button><br></br>
                
                <p className="text-center text-sky-500">Forget Password?</p>
                <button type="submit" className="mt-2 border-zinc-350 border-2 rounded-xl w-40 p-1 bg-black text-slate-300 hover:bg-transparent ml-20" onClick={Reg}>Register Yourself</button><br></br>
                
            
                </form>
            </div>
            
        </div>
        
    )
}
export default Login
