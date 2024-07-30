import React, { createContext, useState, useEffect } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [userSocket, setUserSocket] = useState(null);
    const [adminSocket, setAdminSocket] = useState(null);

    useEffect(() => {
        const connectUserSocket = () => {
            const ws = new WebSocket('ws://localhost:8080/user');
            setUserSocket(ws);

            ws.onopen = () => console.log('User WebSocket 연결 성공');
            ws.onmessage = (event) => console.log('User WebSocket 메시지:', event.data);
            ws.onerror = (error) => console.error('User WebSocket 에러:', error);
            ws.onclose = () => console.log('User WebSocket 연결 종료');

            return ws;
        };

        const connectAdminSocket = () => {
            const ws = new WebSocket('ws://localhost:8080/admin');
            setAdminSocket(ws);

            ws.onopen = () => console.log('Admin WebSocket 연결 성공');
            ws.onmessage = (event) => console.log('Admin WebSocket 메시지:', event.data);
            ws.onerror = (error) => console.error('Admin WebSocket 에러:', error);
            ws.onclose = () => console.log('Admin WebSocket 연결 종료');

            return ws;
        };

        const userWs = connectUserSocket();
        const adminWs = connectAdminSocket();

        return () => {
            userWs.close();
            adminWs.close();
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ userSocket, adminSocket }}>
            {children}
        </WebSocketContext.Provider>
    );
};
