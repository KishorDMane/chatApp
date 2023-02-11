// Connect to the server
const socket = io('http://localhost:3000');

// Join a room
const joinRoom = roomName => {
  socket.emit('join room', roomName);
};

// Handle invalid room
socket.on('invalid', errorMessage => {
  console.error(errorMessage);
});

// Handle new message
socket.on('new message', message => {
  console.log(message);
});

// Send a chat message
const sendMessage = (name, msg, room) => {
  socket.emit('chat message', { name, msg, room });
};

// Disconnect from the room
const disconnect = roomName => {
  socket.emit('disconnect', roomName);
};