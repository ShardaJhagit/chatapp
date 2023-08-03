import React, { useEffect } from "react"
import './Msg.css'

function Msg({user,message,classs}){
    
        
        

    
    function time(t){
        const hours=t.getHours()
        const min=t.getMinutes()
        if(hours<10){
            return(
                "0"+hours+":"+min
            )
        }
        else if(min<10){
            return(
                hours+":"+"0"+min
            )
        }
        else{
            return(
                hours+":"+min
            )
        }
        
    }

    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
                
            </div>
            
        )
    }
    else {

        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
                
            </div>
            
            
        )
    }
}
export default Msg