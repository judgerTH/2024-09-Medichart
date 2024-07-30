import React, { createContext, useState, useEffect } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [userSocket, setUserSocket] = useState(null);
    const [adminSocket, setAdminSocket] = useState(null);

    useEffect(() => {
        const connectUserSocket = () => {
            const ws = new WebSocket('ws://localhost:8080/user');
            ws.onopen = () => console.log('User WebSocket connected');
            ws.onmessage = (event) => console.log('User WebSocket message:', event.data);
            ws.onerror = (error) => console.error('User WebSocket error:', error);
            ws.onclose = (event) => console.log('User WebSocket closed', event);
            setUserSocket(ws);
        };

        const connectAdminSocket = () => {
            const ws = new WebSocket('ws://localhost:8080/admin');
            ws.onopen = () => console.log('Admin WebSocket connected');
            ws.onmessage = (event) => console.log('Admin WebSocket message:', event.data);
            ws.onerror = (error) => console.error('Admin WebSocket error:', error);
            ws.onclose = (event) => console.log('Admin WebSocket closed', event);
            setAdminSocket(ws);
        };

        connectUserSocket();
        connectAdminSocket();

        return () => {
            if (userSocket) userSocket.close();
            if (adminSocket) adminSocket.close();
        };
    }, [userSocket, adminSocket]);

    return (
        <WebSocketContext.Provider value={{ userSocket, adminSocket }}>
            {children}
        </WebSocketContext.Provider>
    );
};
