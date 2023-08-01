import React from 'react'

function Contact(){
    function onclick(){
        
        var Name= document.getElementById("Name").value
        var Num= document.getElementById("Num").value
        var Email= document.getElementById("Email").value
        var question= document.getElementById("Ques").value
       return(
        
        alert("your data will be send to your email"+Name+"  "+Num+"  "+Email+"  "+question)
     
           

        )
    }
    

    return(
        
        <div className="bg-slate-400 w-screen h-screen">
            
            <h2 className="p-2 text-center text-2xl"><b>CONTACT US</b></h2>
            <form className="p-2 text-center" >
                <input type='text' placeholder='Enter Your Name' id='Name' className="focus:border-black rounded full p-1 w-96"></input><br></br><br></br><span id='err'></span>
                <input type='number' placeholder='Enter Your Number' id='Num' className="focus:border-black rounded full p-1 w-96"></input><br></br><br></br><span id='nerr'></span>
                <input type='text' placeholder='Enter Your E-mail' id='Email' className="focus:border-black rounded full p-1 w-96"></input><br></br><br></br><span id='Eerr'></span>
                <textarea rows="5" cols="25" type='text' placeholder='Enlaborate your question' id='Ques' className="focus:border-black rounded full p-1 w-96"></textarea><br></br><br></br>
                <button  type='submit' onClick={onclick} className='bg-white rounded full p-1 hover:bg-inherit '>Submit</button>

            </form>

            <div className='bg-black text-white text-center mt-60 p-6'>
                <p>Contact no:- +91 9473264648 </p>
                <a href="mailto:sj@gmail.com">E-mail:- sj@gmail.com</a>
            </div>
        
        </div>
       
        
    )
}
export default Contact