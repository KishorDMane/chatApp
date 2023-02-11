const express = require("express")
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const cors = require('cors')

const { connection } = require("./config/db")
const { GroupRouter } = require("./router/user.routs")

const { GroupModel } = require("./model/user.model")

const app = express() 

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

app.use(cors())

app.use("/group", GroupRouter)

app.get("/", (req, res) => {
    res.send({ "msg": "serveris working" })
})




let rooms;
let room=async()=>{
  rooms =await GroupModel.find({})
}
room();

io.on('connection', socket => {
    console.log('user connected');
  
    // join a room
    socket.on('join room', roomName => {
      if (!rooms[roomName]) {
        socket.emit('invalid', 'room not exist');
      }else{

        socket.join(roomName.roomid);
      }
      
      io.to(roomName).emit('new message', `User ${socket.id} joined the room`);
    });
  
    // handle chat message
    socket.on('chat message', message => {
    
      const name=message.name
      const msg=message.msg
      const roomName=message.room
  
      // send the message to the room
      io.to(roomName).emit('new message', `User ${name}: ${msg}`);
    });
  
    // handle disconnect
    socket.on('disconnect', (roomName) => {
      
  
      // send a message to the room
      io.to(roomName).emit('new message', `User ${socket.id} left the room`);
    });
  });



app.listen(8080, async () => {
    await connection;
    console.log("8080 is started");
});





