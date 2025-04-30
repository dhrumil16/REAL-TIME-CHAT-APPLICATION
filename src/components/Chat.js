import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css'; // Import the CSS file

const socket = io('http://localhost:4000');

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [isRoomJoined, setIsRoomJoined] = useState(false);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [activeUsers, setActiveUsers] = useState([]);
    const [userCount, setUserCount] = useState(0); // Track user count

    const joinRoom = () => {
        if (name.trim() !== '' && room.trim() !== '') {
            socket.emit('join_room', { name, room }); // Send name and room to the backend
            setIsRoomJoined(true);
        }
    };

    const sendMessage = () => {
        if (message.trim() !== '') {
            const messageData = {
                room,
                author: name,
                message: message.trim(),
                time: new Date().toLocaleTimeString(),
            };
            socket.emit('send_message', messageData);
            setMessage('');
        }
    };

    useEffect(() => {
        const handleMessage = (data) => {
            setMessageList((list) => [...list, data]);
        };

        const handleRoomData = (data) => {
            setActiveUsers(data.users); // Update active users
            setUserCount(data.count); // Update user count
        };

        socket.on('receive_message', handleMessage);
        socket.on('room_data', handleRoomData);

        return () => {
            socket.off('receive_message', handleMessage);
            socket.off('room_data', handleRoomData);
        };
    }, []);

    return (
        <div className="chat-container">
            {!isRoomJoined ? (
                <div>
                    <h2 className="header">Join a Room</h2>
                    <div className="input-container">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            style={{ marginRight: '10px' }}
                        />
                        <input
                            type="text"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            placeholder="Room Name"
                            style={{ marginRight: '10px' }}
                        />
                        <button onClick={joinRoom} disabled={!name.trim() || !room.trim()}>
                            Join Chat
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="header">Welcome, {name}! (Room: {room})</h1>
                    <h3 className="header">Active Users: {userCount}</h3>
                    <div className="active-users">
                        <ul>
                            {activeUsers.map((user, index) => (
                                <li key={index}>{user.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="messages">
                        {messageList.map((msg, index) => (
                            <p key={index}>
                                <strong>{msg.author}</strong>: {msg.message} at {msg.time}
                            </p>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message"
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;