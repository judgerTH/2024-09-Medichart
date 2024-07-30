import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080/admin');

        ws.onopen = () => {
            console.log('웹소켓 연결 성공');
        };

        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, message]);
            } catch (error) {
                console.error('메시지 파싱 에러:', error);
            }
        };

        ws.onclose = () => {
            console.log('웹소켓 연결 종료');
        };

        ws.onerror = (error) => {
            console.error('웹소켓 에러:', error);
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h2>관리자 대시보드</h2>
            <div>
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <p key={index}>{msg.message}</p>
                    ))
                ) : (
                    <p>메시지가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
