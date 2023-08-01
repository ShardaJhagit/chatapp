const express=require("express")
app=express()
const server=require("http").createServer(app)
const io=require("socket.io")(server)
let users=[]
let count=0;
// user connect
io.on("connect",function(socket){
    console.log(socket)
    console.log("connected  ")
     count++
     
    // socket refer to every user 
    socket.on("joined",function(user){
        users[socket.id]=user 
        
        socket.emit('welcome',{user:"Admin: ",message:"  welcome to the chat  "+users[socket.id]})
        socket.broadcast.emit("newuser",{user:"Admin:  ",message:users[socket.id]+"  joined"})
        
    })
    socket.on("userchat",function(data){
        io.emit("message",data)
    })
    io.sockets.emit('no.',"No.of Users Connected:  "+count)

   
    
   
 //user diconnect   
socket.on("disconnect",function(){
    count--
    socket.broadcast.emit("left",{user:"Admin:  ",message:users[socket.id]+"  has left"})
    console.log("disconnected")
    io.sockets.emit('no.',"No.of Users Connected:  "+count)
    
})
    
})


server.listen(8070,()=>{
    console.log("server start")
})





