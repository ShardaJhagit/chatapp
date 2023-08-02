import images from "./images.png";
import "./Chat.css";
import socketIO from "socket.io-client";
import Msg from "./Msg.js";
import { user } from "./Login.js";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

let socket;
const ENDPOINT = "http://localhost:8070/";

function Chat() {
  let [msgs, setmsg] = useState([]);
  // const [id,setid]=useState()
  let userid = [];
  const id = localStorage.getItem("id");
  

  function send(event) {
    event.preventDefault();
    var message = document.getElementById("msg").value;
    var id = localStorage.getItem("id");
    socket.emit("userchat", { user, message, id });
    document.getElementById("msg").value = "";
  }
  const navigate=useNavigate()
  function leave(){
    localStorage.removeItem("userName")
    navigate("/", {replace: true})
    window.location.reload();
  }
  useEffect(
    () => {
      socket = socketIO(ENDPOINT, { transports: ["websocket"] });
      socket.on("connect", () => {
        alert("connected  ");
        userid = socket.id;
        localStorage.setItem("id", userid);
        //socket.io.reconnection(false);
        //setid(socket.id)
      });

      //new user joined
      socket.emit("joined", user);
    },
    user,
    [msgs]
  );
  useEffect(()=>{
    socket.on("no.",function(data){
        document.getElementById("number").innerText=data
    })
  })
  useEffect(() => {
    //msg for new user
    socket.on("welcome", function (data) {
      console.log(data.user + "  " + data.message);
      setmsg([...msgs, data]);
    });

    //again new user join between the chat
    socket.on("newuser", function (data) {
      console.log(data.user + "  " + data.message);
      //socket.io.reconnection(false);
      setmsg([...msgs, data]);
    });

    //msg when any user left the chat
    socket.on("left", function (data) {
      console.log(data.user + "  " + data.message);
      setmsg([...msgs, data]);
      
    });
  }, [msgs]);

  useEffect(() => {
    socket.on("message", function (data) {
      console.log(data.user + ":  " + data.message);
      setmsg([...msgs, data]);
    });
  }, [msgs]);

  return (
    <div id="body">
      <div id="change">
        <div>
        <img src={images} id="logo"></img></div>
        <div>
        <button id="leave" onClick={leave}>Leave Chat</button></div>
      </div>
      <div id="number">
           
        </div>
      <div id="box">
        
        {msgs.map((item, i) => (
          <Msg
            user={localStorage.getItem("id") === item.id ? "" : item.user}
            message={item.message}
            classs={localStorage.getItem("id") === item.id ? "right" : "left"}
          />
        ))}
      </div>
      <div>
        <form>
          <input type="text" id="msg" placeholder="Enter Text"></input>
          <button id="send" onClick={send}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
