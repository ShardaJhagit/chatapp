import React, { useState } from 'react'
import py from './py.png'
import { useNavigate } from 'react-router-dom'

function Services(){

    let [status,setstatus]=useState(false)
    let [start1,setstart1]=useState(false)
    let [enroll1,seten1]=useState(true)
    let [start2,setstart2]=useState(false)
    let [enroll2,seten2]=useState(true)
    const navigate=useNavigate()
   
    
    
    return(
        <div className=' h-96 w-auto p-3 border-2 border-black m-2'>
            <h1 className='text-center text-3xl mt-2'>A Broad Selection of Courses</h1>
            <button className='mt-2 border-slate-500 border-2 rounded-xl w-40 p-1 bg-white text-slate-900 hover:bg-slate-300 ml-20' onClick={()=>setstatus(!status)}>Python </button><br></br>
            <button className='mt-2 border-slate-500 border-2 rounded-xl w-40 p-1 bg-white text-slate-900 hover:bg-slate-300 ml-20' >Frontend </button><br></br>
            <button className='mt-2 border-slate-500 border-2 rounded-xl w-40 p-1 bg-white text-slate-900 hover:bg-slate-300 ml-20' >Backend </button><br></br>
            <button className='mt-2 border-slate-500 border-2 rounded-xl w-40 p-1 bg-white text-slate-900 hover:bg-slate-300 ml-20' >Data Science</button><br></br>
            <button className='mt-2 border-slate-500 border-2 rounded-xl w-40 p-1 bg-white text-slate-900 hover:bg-slate-300 ml-20' >Cloud Computing</button><br></br>
            {status?
            <div className='h-96 w-auto p-3 border-2 border-black mt-32'>
                <h1 className='font-semibold'>Expand your career opportunities with Python</h1>
                <div className='flex flex-row'>
                  <div className='m-2 border-black border-2  w-2/4 h-80 p-1 bg-white text-slate-900 hover:bg-amber-100 mr-5'>
                  <img src={py} alt="pic" className="w-1/4 ml-20 rounded full"/>
                    <h1 className='text-center text-xl mt-2 font-semibold'>Python course for beginners</h1>
                    <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                    {enroll1?
                    <button className='mt-2 ml-20 border-2 border-black bg-orange-400 p-1 hover:bg-orange-200 w-96' onClick={()=>{setstart1(true); seten1(false)}}>Enroll Now</button>

                    :null}
                    
                    {start1?
                    
                      <button className='mt-2 ml-20 border-2 border-black bg-orange-400 p-1 hover:bg-orange-200 w-96' onClick={() => window.open( 'https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg')} >Start your course</button>
                    
                    

                    :null}
                    
                  
                  </div>
                  <div className='m-2 border-black border-2  w-2/4 h-80 p-1 bg-white text-slate-900 hover:bg-amber-100 mr-5'>
                  <img src={py} alt="pic" className="w-1/4 ml-20 rounded full"/>
                    <h1 className='text-center text-xl mt-2 font-semibold'>Advance python courses</h1>
                    <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                    {enroll2?
                    <button className='mt-2 ml-20 border-2 border-black bg-orange-400 p-1 hover:bg-orange-200 w-96' onClick={()=>{setstart2(true); seten2(false)}}>Enroll Now</button>

                    :null}
                    
                    {start2?
                    <button className='mt-2 ml-20 border-2 border-black bg-orange-400 p-1 hover:bg-orange-200 w-96' onClick={() => window.open('https://www.youtube.com/playlist?list=PLqnslRFeH2UqLwzS0AwKDKLrpYBKzLBy2')} >Start your course</button>
                    

                    :null}
                  </div>

                
                </div>

            </div>

            
            :null}



        </div>
        
    )
}
export default Services