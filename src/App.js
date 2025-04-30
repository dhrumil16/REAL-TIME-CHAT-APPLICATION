import React from 'react';
import Chat from './components/Chat';

function App() {
    return (
        <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}> Welcome to Chat App</h1>

            <Chat />
        </div>
    );
}

export default App;