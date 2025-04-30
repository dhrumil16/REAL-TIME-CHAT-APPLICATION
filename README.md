# 💬 Real-Time Chat App

The **Chat App** is a fully functional, real-time communication platform built using **React.js** for the frontend and **Socket.io** for the backend. Designed to deliver seamless user experiences, the application enables users to join chat rooms, send and receive messages in real time, and track active participants in each room. With its modern interface, responsive layout, and real-time interactivity, the app is ideal for team collaborations, topic-based discussions, and social chat environments.

Every element of the application is styled using **custom CSS**, ensuring a polished UI with no reliance on external UI frameworks. The vibrant gradients, glowing buttons, and dynamic shadows contribute to a visually engaging interface that adapts smoothly to all screen sizes.

Built with scalability in mind, this chat application showcases efficient use of **React Hooks** (`useState`, `useEffect`) for state management and **React Router** for client-side navigation. Whether it’s one-on-one conversations or group chats, the app handles multiple rooms with isolated communication channels powered by **Socket.io** and a Node.js backend.

---

## ✨ Key Features

### 👤 Set Usernames  
Users can personalize their experience by setting a unique username before entering a chat room. This helps ensure identity clarity and improves interaction.

### 🏠 Join Chat Rooms  
Create or join chat rooms to participate in focused discussions. Each room is isolated, meaning messages are visible only to participants within that specific room.

### 💬 Real-Time Messaging  
Leverage the power of **Socket.io** for instant message delivery. The app provides fast, bidirectional communication across all users in a room.

### 👥 Active User Counter  
See how many users are present in a room in real time. This adds interactivity and gives insight into room engagement.

### 📢 System Notifications  
Get notified when users join or leave a room via system-generated messages that automatically appear in the chat window.

### 🎨 Clean UI with Custom CSS  
Every part of the UI—from the login screen to the chat interface—is styled using pure CSS. Features include gradients, glowing buttons, and modern card-based design.

### 📱 Fully Responsive  
The UI adapts gracefully across devices including desktops, tablets, and smartphones for an optimal chatting experience everywhere.

### 🚀 Scalable and Modular  
Built with clean separation of frontend and backend, and a modular component structure, the app is easy to maintain and expand with features like private messaging, media sharing, or notifications.

---

## ⚙️ How It Works

The Chat App begins by asking the user for a **username** and a **room name**. Users can join existing rooms or create new ones dynamically. Once inside, the app establishes a WebSocket connection via **Socket.io**, and all messages are sent and received in real time within that specific room.

The backend is built on **Node.js** and **Express.js**, which handles socket connections, broadcasts messages, and tracks room participants. Room-based isolation ensures that communication stays private and relevant.

The frontend, built in **React.js**, manages the dynamic layout and interactivity. Components are modular, allowing for clean and efficient development practices. Styling is done using a custom CSS layout optimized for both visual appeal and performance.

The **active user counter** updates as people join or leave the room, and system messages help keep everyone informed without needing user interaction. Whether it’s one person or many in the room, the app ensures real-time updates are delivered smoothly and accurately.

This chat system also lays a strong foundation for future enhancements, such as file sharing, private rooms, or media attachments. Its scalable structure and component-driven architecture allow for seamless additions without major refactoring. This makes it not only a practical communication tool but also a solid project to showcase frontend and backend integration skills.

---

## 🛠️ Tech Stack

- **React.js** – Frontend UI framework  
- **Socket.io** – Real-time communication (WebSockets)  
- **Node.js & Express.js** – Backend server  
- **Custom CSS** – For UI styling  
- **JavaScript (ES6+)** – Application logic

---

## 📸 Screenshots

### 🔐 Login & Room Selection  
![Image](https://github.com/user-attachments/assets/a759a59d-80da-4c7d-aed4-415b32ee8762)

### 💬 Chat Room Interface  
![Image](https://github.com/user-attachments/assets/2b330631-ef13-456d-91c1-841eb3756d74)

### 👥 User Count and System Messages  
![Image](https://github.com/user-attachments/assets/e988b660-5b6e-4c90-9278-fed54155364a)


