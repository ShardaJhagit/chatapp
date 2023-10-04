import React from 'react'
import './About.css'
import chatimage from './Screenshot (327).png'
function About(){
    return(
        <>
        <h1>Welcome to Chat application</h1>
        <div id='aboutbox'>
        <h3>It is a chat application created by using modern technologies.
        In this project, I have used ReactJs which is JavaScript framework as a frontend to design a application 
        and for backend use Nodejs whisch is also JavaScript Backend framework and used MySQl a database.
        <br></br>
        Real -time live chat application connect users by using websocket which is used for both side conversation.</h3>

        
        </div>
        <img src={chatimage} id='ss'></img>
        <h4>
            To try this application start chat by click on the chat in the navigation menu. you will be redired to the chat page. with your user name.
        </h4>
        <div className='bg-black text-white text-center mt-20 p-6'>
                <p>Contact no:- +91 9473264648 </p>
                <a href="mailto:sj@gmail.com">E-mail:- sj@gmail.com</a>
            </div>

        
        </>
    )
}
export default About