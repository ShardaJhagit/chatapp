import React from 'react'
import './About.css'
import homeimage from './home.png'

function Home(){
    var name= localStorage.getItem("user")
    
    return(
       <section id='header'>
        
        <div id='stud' >
            <div id='homepage'>
            <p>WELCOME,{name} </p>
            <img src={homeimage} id='homeimg'></img>
            
            </div>
            <div className='bg-black text-white text-center mt-20 p-6'>
                <p>Contact no:- +91 9473264648 </p>
                <a href="mailto:sj@gmail.com">E-mail:- sj@gmail.com</a>
            </div>
            
            
            
        </div>
       </section>
    )
}
export default Home