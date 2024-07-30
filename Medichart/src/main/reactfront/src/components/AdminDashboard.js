import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080/admin');

        ws.onopen = () => {
            console.log('Admin WebSocket connected');
        };

        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, message]);
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        ws.onclose = () => {
            console.log('Admin WebSocket closed');
        };

        ws.onerror = (error) => {
            console.error('Admin WebSocket error:', error);
        };

        setSocket(ws);

        return () => {
            if (socket) socket.close();
        };
    }, [socket]);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <p key={index}>{msg.message}</p>
                    ))
                ) : (
                    <p>No messages.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
