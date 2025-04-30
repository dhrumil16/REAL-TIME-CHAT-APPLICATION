const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000", // React app's address
        methods: ["GET", "POST"],
    },
});

app.use(cors());

// Track users in rooms
const usersInRooms = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join_room', ({ name, room }) => {
        socket.join(room);

        // Add user to the room list
        if (!usersInRooms[room]) {
            usersInRooms[room] = [];
        }
        usersInRooms[room].push({ id: socket.id, name });

        console.log(`${name} joined room: ${room}`);
        
        // Broadcast updated user count to the room
        io.to(room).emit('room_data', {
            users: usersInRooms[room],
            count: usersInRooms[room].length,
        });
    });

    socket.on('send_message', (data) => {
        io.to(data.room).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        // Remove the user from their room
        for (const room in usersInRooms) {
            usersInRooms[room] = usersInRooms[room].filter((user) => user.id !== socket.id);
            
            // Broadcast updated user count if the room still exists
            if (usersInRooms[room].length > 0) {
                io.to(room).emit('room_data', {
                    users: usersInRooms[room],
                    count: usersInRooms[room].length,
                });
            } else {
                delete usersInRooms[room]; // Clean up empty rooms
            }
        }

        console.log('User disconnected:', socket.id);
    });
});

server.listen(4000, () => {
    console.log('Server running on port 4000');
});